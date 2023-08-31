<script lang="ts">
    import { onMount } from 'svelte';

    import {
        faceId, blushId,
        hairBId, hairFId, hairColorId,
        eyebrowsId, eyebrowsPosY, eyebrowsDist, eyebrowsAngle,
        eyesId, eyesColorId, eyesPosY, eyesDist, eyesAngle,
        noseId, nosePosY,
        mouthId, mouthPosY,
        moleId, mole1Flip, mole1PosX, mole1PosY, mole2Flip, mole2PosX, mole2PosY
    } from '../store';
    
    import { srcs, canvas, ctx, img } from '$lib/ts/img';
    
    import { hairColorList, eyesColorList } from '$lib/ts/colors';

    let id = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let posX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let posY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let angle = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    function calcRadius(angle: number): number {
        return angle * Math.PI / 180
    }

    function rotate(angle: number) {
        ctx.translate(500/2, 500/2);
        ctx.rotate(calcRadius(angle));
        ctx.translate(-500/2, -500/2);
    }

    function getOPP(i: number): number {
        return Math.round(posY[i] * Math.tan(calcRadius(angle[i])))
    }

    function drawImg(i: number) {
        if (i === 6) ctx.drawImage(img[i][id[i]], -getOPP(i)-posX[i], -posY[i], 500, 500);
        else ctx.drawImage(img[i][id[i]], getOPP(i)+posX[i], -posY[i], 500, 500);
    }

    function flipDrawImg(i: number) {
        ctx.scale(-1, 1);
        ctx.drawImage(img[i][id[i]], getOPP(i)+posX[i], -posY[i], -500, 500);
        ctx.scale(-1, 1);
    }

    function draw(i: number) {
        if (i === 0 || i === 10) {
            const color = hairColorList[$hairColorId];
            ctx.filter = `brightness(${color.brightness}%) contrast(${color.contrast}%) grayscale(${color.grayscale}%) hue-rotate(${color.hue}deg) saturate(${color.saturate}%)`;
        } else if (i === 5 || i === 6) {
            const color = eyesColorList[$eyesColorId];
            ctx.filter = `brightness(${color.brightness}%) contrast(${color.contrast}%) grayscale(${color.grayscale}%) hue-rotate(${color.hue}deg) saturate(${color.saturate}%)`;
        }

        if ((i === 3 && $mole1Flip) || (i === 4 && $mole2Flip)) {
            flipDrawImg(i);
        } else if (i === 5) {
            const ang = angle[i];
            rotate(-ang);
            drawImg(i);
            rotate(ang);
        } else if (i === 6) {
            const ang = angle[i];
            rotate(ang);
            drawImg(i);
            rotate(-ang);
        } else if (i === 7) {
            const ang = angle[i];
            const calcAng = 360 - ang;
            rotate(calcAng);
            drawImg(i);
            rotate(ang*2);
            flipDrawImg(i);
            rotate(calcAng);
        } else {
            drawImg(i);
        }

        if (i === 0 || i === 5 || i === 6 || i === 10) {
            ctx.filter = 'brightness(100%) contrast(100%) grayscale(0%) hue-rotate(0deg) saturate(100%)';
        }
    }

    function render(i: number) {
        if (srcs[i].render !== false) {
            draw(i);
        }
    }

    function reRender() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i in img) {
            render(+i);
        }
    }

    function init() {
        let count = 0;
        for (let i in img) {
            img[i][0].addEventListener('load', () => {
                render(count);
            });
            count++
        }

        // Load the rest
        for (let i in srcs) {
            const src = srcs[i];
            const len = src.img.length;

            if (len > 1) {
                for (let n = 1; n < len; n++) {
                    const imgAry = img[i];
                    imgAry.push(new Image());
                
                    imgAry[n].src = src.img[n];
                }
            }
        }
        //console.log(img);

        document.querySelector('#canvas-frm')?.insertAdjacentElement('beforeend', canvas);
        //console.log('init');
    }

    // reRender
    $: {
        // Hair
        if ($hairBId === 0) {
            srcs[0].render = false;
        } else if ($hairBId !== 0) {
            srcs[0].render = true;
        }

        // Blush
        if ($blushId === 0) {
            srcs[2].render = false;
        } else if ($blushId !== 0) {
            srcs[2].render = true;
        }

        // Mole
        if ($moleId === 0) {
            srcs[3].render = false;
            srcs[4].render = false;
        } else if ($moleId === 1) {
            srcs[3].render = true;
            srcs[4].render = false;
        } else if ($moleId === 2) {
            srcs[3].render = false;
            srcs[4].render = true;
        } else if ($moleId === 3) {
            srcs[3].render = true;
            srcs[4].render = true;
        }

        id = [$hairBId-1, $faceId, $blushId-1, 0, 0, $eyesId, $eyesId, $eyebrowsId, $mouthId, $noseId, $hairFId];
        posX = [0, 0, 0, $mole1PosX*5-15, $mole2PosX*5-15, ($eyesDist*5-10)-($eyesAngle*5-10), ($eyesDist*5-10)-($eyesAngle*5-10), $eyebrowsDist*5-20, 0, 0, 0];
        posY = [0, 0, 0, $mole1PosY*5-10, $mole2PosY*5-10, ($eyesPosY*5-15)-($eyesAngle*5-10), ($eyesPosY*5-15)-($eyesAngle*5-10), $eyebrowsPosY*5-20, $mouthPosY-4, $nosePosY-4, 0];
        angle = [0, 0, 0, 0, 0, $eyesAngle*5-10, $eyesAngle*5-10, $eyebrowsAngle*5-15, 0, 0, 0];

        reRender();
        //console.log('reRender');
    }

    hairColorId.subscribe(() => reRender());
    eyesColorId.subscribe(() => reRender());

    mole1Flip.subscribe(() => reRender());
    mole2Flip.subscribe(() => reRender());

    onMount(async () => {
        init();
    });
</script>

<div id="canvas-frm">
    <!--<canvas width="500px" height="500px"></canvas>-->
</div>

<style lang="stylus">
    div {
        flex: 2
    }
</style>
