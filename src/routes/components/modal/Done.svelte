<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    import { modalId } from '../../store';

    const img = document.createElement('img');
    let blobUrl: string;

    function hideModal() {
        URL.revokeObjectURL(blobUrl);
        modalId.set(0);
    }

    function changeModal() {
        modalId.set(3);
    }

    function createImage() {
        document.querySelector('canvas')?.toBlob((blob) => {
            if (blob) {
                blobUrl = URL.createObjectURL(blob);
                img.src = blobUrl;
                //console.log(blobUrl);
            }
        });
        document.querySelector('.img-frm')?.insertAdjacentElement('afterbegin', img);
    }

    function openDialog() {
        const a = document.createElement('a');
        a.href = img.src;
        a.download = 'untitled.png';
        a.click();
        URL.revokeObjectURL(blobUrl);
    }

    function save() {
        openDialog();
        setTimeout(changeModal, 250);
    }

    onMount(async () => {
        createImage();
    });
</script>

<div class="overlay" transition:fade="{{duration: 100}}">
    <div class="modal">
        <div class="img-frm"></div>
        <div class="txt-frm">
            <p>このアバターを保存しますか？</p>
        </div>
        <div class="btn-frm">
            <button on:click={hideModal}>編集にもどる</button>
            <button class="accent" on:click={save} autofocus>保存する</button>
        </div>
    </div>
</div>

<style lang="stylus">
    .img-frm {
        display: flex
        justify-content: center
    }
</style>
