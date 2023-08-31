<script lang="ts">
    import { fade } from 'svelte/transition';

    import { screenId, modalId, } from '../../store';

    function hideModal() {
        modalId.set(0);
    }

    function quit() {
        hideModal();
        screenId.set(0);
    }
</script>

<div class="overlay" transition:fade="{{duration: 100}}">
    <div class="modal">
        <div class="txt-frm">
            <p>Avatar Studioを終了しますか？</p>
        </div>
        <div class="btn-frm">
            <button on:click={hideModal}>編集にもどる</button>
            <button class="accent" on:click={quit} autofocus>終了する</button>
        </div>
    </div>
</div>

<style lang="stylus">
    
</style>
