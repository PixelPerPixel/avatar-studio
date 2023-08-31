<script lang="ts">
    let max = 100;
    let val = 0;
    let curVal = val;
    let flip = false;

    export { max, val, flip }

    const minPct = 100 / max;

    let rangePct = [minPct];

    function init() {
        for (let i = 0; i < max;  i++) {
            rangePct.push(minPct);
        }
    }

    function onPartsClick(event: MouseEvent) {
        if(event.button !== 0) return

        const target = event.target as HTMLElement;
        const ary = Array.from(target.parentElement?.childNodes as NodeListOf<ChildNode>);
        const index = ary.indexOf(target)
        val = curVal = index;

        for (let i = 0; i < ary.length; i++) {
            const elm = (ary[i] as HTMLElement)
            elm.classList.add('range-parts');
            if (i > index) {
                elm.classList.remove('range-parts');
            }
        }
    }

    init();
    
    $: {
        if (!flip) curVal = val;
        else curVal = max - val;
    }
</script>

<div class="range">
    {#each rangePct as pct, i}
        <div class:range-parts={curVal >= i} style="width: {pct}%;" on:click={onPartsClick}></div>
    {/each}
</div>

<style lang="stylus">
    .range {
        position: relative
        display: flex
        margin: 8px
        height: 24px
        background-image: linear-gradient(to right, #666, #ddd)
        //border: 1px solid var(--bdr-clr)
        border-radius: 4px
        flex: 1

        > div {
            background-color: var(--sub-clr)
            border-right: 1px solid #000

            &:nth-last-of-type(1) {
                border: none
                border-radius: 0 4px 4px 0
            }
        }

        > .range-parts {
            background-color: transparent
        }
    }
</style>
