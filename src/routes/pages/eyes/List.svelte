<script lang="ts">
    import { eyesListId, eyesId, eyesColorId, eyesPosY, eyesDist, eyesAngle } from '../../store';
    
    import PosY from '../../components/range/PosY.svelte';
    import PosX from '../../components/range/PosX.svelte';
    import Angle from '../../components/range/Angle.svelte';
    
    function setPage(id: number) {
        eyesListId.set(id);
    }

    function setParts(id: number) {
        eyesId.set(id);
    }
</script>

<div class="inner">
    <div class="header">
        <h2>Eyes</h2>
        <ul>
            <li aria-current={$eyesListId === 0 ? "true" : "false"} on:click={() => {setPage(0)}}>Shape</li>
            <li aria-current={$eyesListId === 1 ? "true" : "false"} on:click={() => {setPage(1)}}>Color</li>
            <li aria-current={$eyesListId === 2 ? "true" : "false"} on:click={() => {setPage(2)}}>Position</li>
        </ul>
    </div>
    <div class="list-frm" class:pos = {$eyesListId === 2}>
        <ul>
            {#if $eyesListId === 0}
                <li aria-current={$eyesId  === 0 ? "true" : "false"} on:click={() => {setParts(0)}}>1</li>
                <li aria-current={$eyesId  === 1 ? "true" : "false"} on:click={() => {setParts(1)}}>2</li>
                <li aria-current={$eyesId  === 2 ? "true" : "false"} on:click={() => {setParts(2)}}>3</li>
                <li aria-current={$eyesId  === 3 ? "true" : "false"} on:click={() => {setParts(3)}}>4</li>
                <li aria-current={$eyesId  === 4 ? "true" : "false"} on:click={() => {setParts(4)}}>5</li>
                <li aria-current={$eyesId  === 5 ? "true" : "false"} on:click={() => {setParts(5)}}>6</li>
            {:else if $eyesListId === 1}
                <li class="color-border" aria-current={$eyesColorId === 0 ? "true" : "false"} style="background-color: rgb(76, 80, 102);" on:click={() => {$eyesColorId = 0}}></li>
                <li class="color-border" aria-current={$eyesColorId === 1 ? "true" : "false"} style="background-color: rgb(166, 120, 140);" on:click={() => {$eyesColorId = 1}}></li>
                <li class="color-border" aria-current={$eyesColorId === 2 ? "true" : "false"} style="background-color: rgb(181, 181, 181);" on:click={() => {$eyesColorId = 2}}></li>
                <li class="color-border" aria-current={$eyesColorId === 3 ? "true" : "false"} style="background-color: rgb(128, 202, 172);" on:click={() => {$eyesColorId = 3}}></li>
                <li class="color-border" aria-current={$eyesColorId === 4 ? "true" : "false"} style="background-color: rgb(191, 200, 255);" on:click={() => {$eyesColorId = 4}}></li>
                <li class="color-border" aria-current={$eyesColorId === 5 ? "true" : "false"} style="background-color: rgb(218, 192, 255);" on:click={() => {$eyesColorId = 5}}></li>
            {:else if $eyesListId === 2}
                <li>
                    <PosY max={4} bind:bindVal={$eyesPosY} />
                </li>
                <li>
                    <PosX max={3} bind:bindVal={$eyesDist} />
                </li>
                <li>
                    <Angle max={4} bind:bindVal={$eyesAngle} />
                </li>
            {/if}
        </ul>
    </div>
</div>

<style lang="stylus">
    .header > ul {
        grid-template-columns: repeat(3, 1fr)
    }

    .color-border[aria-current="false"] {
        border: 3px solid #000
    }
</style>
