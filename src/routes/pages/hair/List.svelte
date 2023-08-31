<script lang="ts">
	import type { Writable } from 'svelte/store';
    import { hairListId, hairBId, hairFId, hairColorId } from '../../store';

    function setPage(id: number) {
        hairListId.set(id);
    }

    function setParts(parts: Writable<number>, id: number) {
        if ($hairBId === 0 && parts === hairFId && id > 1) return
        parts.set(id);
    }

    const presets = [
        [1, 0],
        [2, 1],
        [3, 2],
        [4, 3],
        [0, 0],
        [0, 1],
    ];

    function setPresets(id: number) {
        hairBId.set(presets[id][0]);
        hairFId.set(presets[id][1]);
    }
</script>

<div class="inner">
    <div class="header">
        <h2>Hair</h2>
        <ul>
            <li aria-current={$hairListId === 0 ? "true" : "false"} on:click={() => {setPage(0)}}>Preset</li>
            <li aria-current={$hairListId === 1 ? "true" : "false"} on:click={() => {setPage(1)}}>Fringe</li>
            <li aria-current={$hairListId === 2 ? "true" : "false"} on:click={() => {setPage(2)}}>Back</li>
            <li aria-current={$hairListId === 3 ? "true" : "false"} on:click={() => {setPage(3)}}>Color</li>
        </ul>
    </div>
    <div class="list-frm">
        <ul>
            {#if $hairListId === 0}
                <li aria-current={$hairBId === presets[0][0] && $hairFId === presets[0][1] ? "true" : "false"} on:click={() => {setPresets(0)}}>1</li>
                <li aria-current={$hairBId === presets[1][0] && $hairFId === presets[1][1] ? "true" : "false"} on:click={() => {setPresets(1)}}>2</li>
                <li aria-current={$hairBId === presets[2][0] && $hairFId === presets[2][1] ? "true" : "false"} on:click={() => {setPresets(2)}}>3</li>
                <li aria-current={$hairBId === presets[3][0] && $hairFId === presets[3][1] ? "true" : "false"} on:click={() => {setPresets(3)}}>4</li>
                <li aria-current={$hairBId === presets[4][0] && $hairFId === presets[4][1] ? "true" : "false"} on:click={() => {setPresets(4)}}>5</li>
                <li aria-current={$hairBId === presets[5][0] && $hairFId === presets[5][1] ? "true" : "false"} on:click={() => {setPresets(5)}}>6</li>
            {:else if $hairListId === 1}
                <li aria-current={$hairFId === 0 ? "true" : "false"} on:click={() => {setParts(hairFId, 0)}}>1</li>
                <li aria-current={$hairFId === 1 ? "true" : "false"} on:click={() => {setParts(hairFId, 1)}}>2</li>
                <li class:disable = {$hairBId === 0} aria-current={$hairFId === 2 ? "true" : "false"} on:click={() => {setParts(hairFId, 2)}}>3</li>
                <li class:disable = {$hairBId === 0} aria-current={$hairFId === 3 ? "true" : "false"} on:click={() => {setParts(hairFId, 3)}}>4</li>
            {:else if $hairListId === 2}
                <li class:disable = {$hairFId === 2 || $hairFId === 3} aria-current={$hairBId === 0 ? "true" : "false"} on:click={() => {setParts(hairBId, 0)}}>None</li>
                <li aria-current={$hairBId === 1 ? "true" : "false"} on:click={() => {setParts(hairBId, 1)}}>Long-W</li>
                <li aria-current={$hairBId === 2 ? "true" : "false"} on:click={() => {setParts(hairBId, 2)}}>Long-S</li>
                <li aria-current={$hairBId === 3 ? "true" : "false"} on:click={() => {setParts(hairBId, 3)}}>Bob-N</li>
                <li aria-current={$hairBId === 4 ? "true" : "false"} on:click={() => {setParts(hairBId, 4)}}>Bob-C</li>
            {:else if $hairListId === 3}
                <li class="color-border" aria-current={$hairColorId === 0 ? "true" : "false"} style="background-color: rgb(45, 47, 49);" on:click={() => {$hairColorId = 0}}></li>
                <li class="color-border" aria-current={$hairColorId === 1 ? "true" : "false"} style="background-color: rgb(124, 91, 79);" on:click={() => {$hairColorId = 1}}></li>
                <li class="color-border" aria-current={$hairColorId === 2 ? "true" : "false"} style="background-color: rgb(170, 148, 132);" on:click={() => {$hairColorId = 2}}></li>
                <li class="color-border" aria-current={$hairColorId === 3 ? "true" : "false"} style="background-color: rgb(243, 236, 223);" on:click={() => {$hairColorId = 3}}></li>
                <li class="color-border" aria-current={$hairColorId === 4 ? "true" : "false"} style="background-color: rgb(222, 222, 222);" on:click={() => {$hairColorId = 4}}></li>
                <li class="color-border" aria-current={$hairColorId === 5 ? "true" : "false"} style="background-color: rgb(165, 165, 165);" on:click={() => {$hairColorId = 5}}></li>
                <li class="color-border" aria-current={$hairColorId === 6 ? "true" : "false"} style="background-color: rgb(219, 49, 69);" on:click={() => {$hairColorId = 6}}></li>
                <li class="color-border" aria-current={$hairColorId === 7 ? "true" : "false"} style="background-color: rgb(246, 148, 162);" on:click={() => {$hairColorId = 7}}></li>
                <li class="color-border" aria-current={$hairColorId === 8 ? "true" : "false"} style="background-color: rgb(255, 173, 125);" on:click={() => {$hairColorId = 8}}></li>
                <li class="color-border" aria-current={$hairColorId === 9 ? "true" : "false"} style="background-color: rgb(255, 236, 184);" on:click={() => {$hairColorId = 9}}></li>
                <li class="color-border" aria-current={$hairColorId === 10 ? "true" : "false"} style="background-color: rgb(159, 239, 174);" on:click={() => {$hairColorId = 10}}></li>
                <li class="color-border" aria-current={$hairColorId === 11 ? "true" : "false"} style="background-color: rgb(75, 171, 99);" on:click={() => {$hairColorId = 11}}></li>
                <li class="color-border" aria-current={$hairColorId === 12 ? "true" : "false"} style="background-color: rgb(66, 196, 196);" on:click={() => {$hairColorId = 12}}></li>
                <li class="color-border" aria-current={$hairColorId === 13 ? "true" : "false"} style="background-color: rgb(186, 225, 240);" on:click={() => {$hairColorId = 13}}></li>
                <li class="color-border" aria-current={$hairColorId === 14 ? "true" : "false"} style="background-color: rgb(135, 167, 247);" on:click={() => {$hairColorId = 14}}></li>
                <li class="color-border" aria-current={$hairColorId === 15 ? "true" : "false"} style="background-color: rgb(176, 126, 236);" on:click={() => {$hairColorId = 15}}></li>
                <li class="color-border" aria-current={$hairColorId === 16 ? "true" : "false"} style="background-color: rgb(232, 204, 255);" on:click={() => {$hairColorId = 16}}></li>
                <li class="color-border" aria-current={$hairColorId === 17 ? "true" : "false"} style="background-color: rgb(255, 202, 255);" on:click={() => {$hairColorId = 17}}></li><!--
                <li class="color-border" aria-current={$hairColorId === 11 ? "true" : "false"} style="background-color: rgb(0, 0, 0);" on:click={() => {$hairColorId = 11}}></li>-->
            {/if}
        </ul>
    </div>
</div>

<style lang="stylus">
    .header > ul {
        grid-template-columns: repeat(4, 1fr)
    }

    .disable {
        color: var(--sub-clr)
        cursor: default
    }

    .color-border[aria-current="false"] {
        border: 3px solid #000
    }
</style>
