<script lang="ts">
	import { get, type Writable } from 'svelte/store';
    import { moleListId, moleId, mole1Flip, mole1PosX, mole1PosY, mole2Flip, mole2PosX, mole2PosY } from '../../store';
    
    import PosX from '../../components/range/PosX.svelte';
    import PosY from '../../components/range/PosY.svelte';

    function setPage(id: number) {
        if ($moleId !== 0) moleListId.set(id);
    }

    function setParts(id: number) {
        if (id === 0) moleId.set(0);
        else moleId.set($moleId ^ id);
    }

    function flip(val: Writable<boolean>) {
        if (get(val)) val.set(false)
        else val.set(true)
    }
</script>

<div class="inner">
    <div class="header">
        <h2>Beauty Mark</h2>
        <ul>
            <li aria-current={$moleListId === 0 ? "true" : "false"} on:click={() => {setPage(0)}}>Style</li>
            <li class:disable = {$moleId === 0} aria-current={$moleListId === 1 ? "true" : "false"} on:click={() => {setPage(1)}}>Position</li>
        </ul>
    </div>
    <div class="list-frm" class:pos = {$moleListId === 1}>
        <ul>
            {#if $moleListId === 0}
                <li aria-current={$moleId  === 0 ? "true" : "false"} on:click={() => {setParts(0)}}>None</li>
                <li class="pointer" aria-current={($moleId & 1) === 1 ? "true" : "false"} on:click={() => {setParts(0b01)}}>Eye</li>
                <li class="pointer" aria-current={($moleId & 2) === 2 ? "true" : "false"} on:click={() => {setParts(0b10)}}>Mouth</li>
            {:else if $moleListId === 1}
                {#if $moleId === 1 || $moleId === 3}
                    <li>
                        <h3>泣きぼくろ</h3>
                    </li>
                    <li>
                        <PosY max={5} bind:bindVal={$mole1PosY} />
                    </li>
                    <li>
                        <PosX max={5} bind:bindVal={$mole1PosX} flip={$mole1Flip} />
                    </li>
                    <li>
                        <button on:click={() => flip(mole1Flip)}>Flip</button>
                    </li>
                {/if}
                {#if $moleId === 2 || $moleId === 3}
                    <li>
                        <h3>艶ぼくろ</h3>
                    </li>
                    <li>
                        <PosY max={5} bind:bindVal={$mole2PosY} />
                    </li>
                    <li>
                        <PosX max={5} bind:bindVal={$mole2PosX} flip={$mole2Flip} />
                    </li>
                    <li>
                        <button on:click={() => flip(mole2Flip)}>Flip</button>
                    </li>
                {/if}
            {/if}
        </ul>
    </div>
</div>

<style lang="stylus">
    .disable {
        color: var(--sub-clr)
        cursor: default
    }

    .pointer {
        cursor: pointer !important
    }

    h3 {
        margin: 0
        font-size: 1rem
    }
    
    button {
        margin: 8px
        width: 128px
        height: 48px
        border-radius: 100vh
        transition: box-shadow .2s

        &:hover {
            box-shadow: 0 0 6px var(--sub-txt)
        }
    }
</style>
