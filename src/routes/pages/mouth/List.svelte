<script lang="ts">
    import { mouthListId, mouthId, mouthPosY } from '../../store';
    
    import PosY from '../../components/range/PosY.svelte';

    function setPage(id: number) {
        mouthListId.set(id);
    }

    function setParts(id: number) {
        mouthId.set(id);
    }
</script>

<div class="inner">
    <div class="header">
        <h2>Mouth</h2>
        <ul>
            <li aria-current={$mouthListId === 0 ? "true" : "false"} on:click={() => {setPage(0)}}>Shape</li>
            <li aria-current={$mouthListId === 1 ? "true" : "false"} on:click={() => {setPage(1)}}>Position</li>
        </ul>
    </div>
    <div class="list-frm" class:pos = {$mouthListId === 1}>
        <ul>
            {#if $mouthListId === 0}
                <li aria-current={$mouthId === 0 ? "true" : "false"} on:click={() => {setParts(0)}}>Smile-1</li>
                <li aria-current={$mouthId  === 1 ? "true" : "false"} on:click={() => {setParts(1)}}>Smile-2</li>
                <li aria-current={$mouthId  === 2 ? "true" : "false"} on:click={() => {setParts(2)}}>Laugh-1</li>
                <li aria-current={$mouthId  === 3 ? "true" : "false"} on:click={() => {setParts(3)}}>Laugh-2</li>
                <li aria-current={$mouthId  === 4 ? "true" : "false"} on:click={() => {setParts(4)}}>Nauhgty</li>
                <li aria-current={$mouthId  === 5 ? "true" : "false"} on:click={() => {setParts(5)}}>Shut up</li>
                <li aria-current={$mouthId  === 6 ? "true" : "false"} on:click={() => {setParts(6)}}>Angry</li>
                <li aria-current={$mouthId  === 7 ? "true" : "false"} on:click={() => {setParts(7)}}>Hushed</li>
                <li aria-current={$mouthId  === 8 ? "true" : "false"} on:click={() => {setParts(8)}}>Grin</li>
            {:else if $mouthListId === 1}
                <li>
                    <PosY max={8} bind:bindVal={$mouthPosY} />
                </li>
            {/if}
        </ul>
    </div>
</div>

<style lang="stylus">
    
</style>
