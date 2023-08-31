<script lang="ts">
    import { eyebrowsListId, eyebrowsId, eyebrowsPosY, eyebrowsDist, eyebrowsAngle } from '../../store';
    
    import PosY from '../../components/range/PosY.svelte';
    import PosX from '../../components/range/PosX.svelte';
    import Angle from '../../components/range/Angle.svelte';

    function setPage(id: number) {
        eyebrowsListId.set(id);
    }

    function setParts(id: number) {
        eyebrowsId.set(id);
    }
</script>

<div class="inner">
    <div class="header">
        <h2>Eyebrows</h2>
        <ul>
            <li aria-current={$eyebrowsListId === 0 ? "true" : "false"} on:click={() => {setPage(0)}}>Shape</li>
            <li aria-current={$eyebrowsListId === 1 ? "true" : "false"} on:click={() => {setPage(1)}}>Position</li>
        </ul>
    </div>
    <div class="list-frm" class:pos = {$eyebrowsListId === 1}>
        <ul>
            {#if $eyebrowsListId === 0}
                <li aria-current={$eyebrowsId  === 0 ? "true" : "false"} on:click={() => {setParts(0)}}>1</li>
                <li aria-current={$eyebrowsId  === 1 ? "true" : "false"} on:click={() => {setParts(1)}}>2</li>
                <li aria-current={$eyebrowsId  === 2 ? "true" : "false"} on:click={() => {setParts(2)}}>3</li>
                <li aria-current={$eyebrowsId  === 3 ? "true" : "false"} on:click={() => {setParts(3)}}>4</li>
            {:else if $eyebrowsListId === 1}
                <li>
                    <PosY max={8} bind:bindVal={$eyebrowsPosY} />
                </li>
                <li>
                    <PosX max={7} bind:bindVal={$eyebrowsDist} />
                </li>
                <li>
                    <Angle max={7} bind:bindVal={$eyebrowsAngle} />
                </li>
            {/if}
        </ul>
    </div>
</div>

<style lang="stylus">
    
</style>
