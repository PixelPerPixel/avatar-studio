<script lang="ts">
    import { onMount } from 'svelte';

    import {
        screenId,
        faceId, blushId,
        hairBId, hairFId, hairColorId,
        eyebrowsId, eyebrowsPosY, eyebrowsDist, eyebrowsAngle,
        eyesId, eyesColorId, eyesPosY, eyesDist, eyesAngle,
        noseId, nosePosY,
        mouthId, mouthPosY,
        moleId, mole1Flip, mole1PosX, mole1PosY, mole2Flip, mole2PosX, mole2PosY
    } from './store';

    import { srcs, img } from '$lib/ts/img';
    
    import Top from './pages/Top.svelte';
    import Editor from './pages/Editor.svelte';

    function setImage() {
        for (let i in srcs) {
            img[i] = [new Image()];
            img[i][0].src = srcs[i].img[0];
        }
        //console.log('set img')
    }

    function init() {
        if (img.length === 0) setImage();

        $faceId = $blushId = $hairFId = $eyebrowsId = $eyesId = $noseId = $mouthId = $moleId = 0;
        $hairBId = 1;
        $mole1PosY = $mole2PosY = $eyesDist = $eyesAngle = 2;
        $hairColorId = $eyesPosY = $mole1PosX = $mole2PosX = $eyebrowsAngle = 3;
        $eyebrowsPosY = $eyebrowsDist = $nosePosY = $mouthPosY = 4
        $eyesColorId = 5;
        $mole1Flip = $mole2Flip = false;
        
        //console.log('init')
    }

    onMount(async () => {
        if ($screenId === 0) init();
    });
</script>

<svelte:head>
    <title>Avatar Studio</title>
</svelte:head>

{#if $screenId === 0}
    <Top />
{:else}
    <Editor />
{/if}

<style lang="stylus">
    
</style>
