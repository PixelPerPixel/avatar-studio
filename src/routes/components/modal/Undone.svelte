<script lang="ts">
    import { fade } from 'svelte/transition';
    import { screenId, modalId } from '../../store';

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
            <p>保存せずに終了します。
                よろしいですか？</p>
        </div>
        <div class="btn-frm">
            <button on:click={hideModal} autofocus>編集をつづける</button>
            <button class="accent" on:click={quit}>やめる</button>
        </div>
    </div>
</div>

<style lang="stylus">
    .overlay {
        background-color: #0005
    }
</style>
