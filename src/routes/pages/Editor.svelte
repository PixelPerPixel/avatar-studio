<script lang="ts">
    import { screenId } from '../store';

    import Canvas from '../components/Canvas.svelte';
    import Face from './face/List.svelte';
    import Hair from './hair/List.svelte';
    import Eyebrows from './eyebrows/List.svelte';
    import Eyes from './eyes/List.svelte';
    import Nose from './nose/List.svelte';
    import Mouth from './mouth/List.svelte';
    import Mole from './mole/List.svelte';
</script>

<div>
    <Canvas />
    {#if $screenId === 1}
        <Face />
    {:else if $screenId === 2}
        <Hair />
    {:else if $screenId === 3}
        <Eyebrows />
    {:else if $screenId === 4}
        <Eyes />
    {:else if $screenId === 5}
        <Nose />
    {:else if $screenId === 6}
        <Mouth />
    {:else if $screenId === 7}
        <Mole />
    {/if}
</div>

<style lang="stylus">
    div {
        display: flex
        height: 100%
    }
</style>
