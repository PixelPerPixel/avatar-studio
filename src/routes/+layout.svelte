<script lang="ts">
    import '$lib/styl/common.styl';
    import { screenId, modalId } from './store';
    
    import Nav from './components/Nav.svelte';
    import Undone from './components/modal/Undone.svelte';
    import Done from './components/modal/Done.svelte';
    import Quit from './components/modal/Quit.svelte';

    function beforeUnload(event: BeforeUnloadEvent) {
        if ($screenId === 0) return
        if (!confirm()) {
            event.preventDefault();
            event.returnValue = '';
            return '...'
        }
    }
</script>

<svelte:window on:beforeunload={beforeUnload}></svelte:window>

{#if $screenId !== 0}
    <Nav />
{/if}

<main>
    {#if $screenId === 0}
        <div class="container">
            <slot />
        </div>
    {:else}
        <div class="app-container">
            <slot />
        </div>
    {/if}
</main>

{#if $modalId === 1}
    <Undone />
{:else if $modalId === 2}
    <Done />
{:else if $modalId === 3}
    <Quit />
{/if}

<style lang="stylus">
    main {
        > .container {
            padding: 16px
        }
    }

    .app-container {
        height: calc(100vh - 80px)
        padding: 24px 16px
        overflow: hidden
    }
</style>
