<script lang="ts">
	import type { Writable } from 'svelte/store';
    import { faceListId, faceId, blushId } from '../../store';
    
    function setPage(id: number) {
        faceListId.set(id);
    }

    function setParts(parts: Writable<number>, id: number) {
        parts.set(id);
    }
</script>

<div class="inner">
    <div class="header">
        <h2>Face</h2>
        <ul>
            <li aria-current={$faceListId === 0 ? "true" : "false"} on:click={() => {setPage(0)}}>Shape</li>
            <li aria-current={$faceListId === 1 ? "true" : "false"} on:click={() => {setPage(1)}}>Blush</li>
        </ul>
    </div>
    <div class="list-frm">
        <ul>
            {#if $faceListId === 0}
                <li aria-current={$faceId  === 0 ? "true" : "false"} on:click={() => setParts(faceId, 0)}>Sharp-L</li>
                <li aria-current={$faceId  === 1 ? "true" : "false"} on:click={() => setParts(faceId, 1)}>Round-L</li>
                <li aria-current={$faceId  === 2 ? "true" : "false"} on:click={() => setParts(faceId, 2)}>Sharp-S</li>
                <li aria-current={$faceId  === 3 ? "true" : "false"} on:click={() => setParts(faceId, 3)}>Round-S</li>
            {:else if $faceListId === 1}
                <li aria-current={$blushId  === 0 ? "true" : "false"} on:click={() => setParts(blushId, 0)}>None</li>
                <li aria-current={$blushId  === 1 ? "true" : "false"} on:click={() => setParts(blushId, 1)}>Simple</li>
                <li aria-current={$blushId  === 2 ? "true" : "false"} on:click={() => setParts(blushId, 2)}>+Line</li>
            {/if}
        </ul>
    </div>
</div>

<style lang="stylus">
    
</style>
