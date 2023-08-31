<script lang="ts">
    import { noseListId, noseId, nosePosY } from '../../store';
    
    import PosY from '../../components/range/PosY.svelte';

    function setPage(id: number) {
        noseListId.set(id);
    }

    function setParts(id: number) {
        noseId.set(id);
    }
</script>

<div class="inner">
    <div class="header">
        <h2>Nose</h2>
        <ul>
            <li aria-current={$noseListId === 0 ? "true" : "false"} on:click={() => {setPage(0)}}>Shape</li>
            <li aria-current={$noseListId === 1 ? "true" : "false"} on:click={() => {setPage(1)}}>Position</li>
        </ul>
    </div>
    <div class="list-frm" class:pos = {$noseListId === 1}>
        <ul>
            {#if $noseListId === 0}
                <li aria-current={$noseId === 0 ? "true" : "false"} on:click={() => {setParts(0)}}>1</li>
            {:else if $noseListId === 1}
                <li>
                    <PosY max={8} bind:bindVal={$nosePosY} />
                </li>
            {/if}
        </ul>
    </div>
</div>

<style lang="stylus">
    
</style>
