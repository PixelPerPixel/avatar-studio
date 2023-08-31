<script lang="ts">
    import Range from './Range.svelte';
    
    let max = 100;
    let bindVal = 0;
    let flip = false;

    export { max, bindVal, flip }

    function movePos(increment: boolean) {
        if (bindVal < max && increment) bindVal++;
        else if (bindVal > 0 && !increment) bindVal--;
    }

    function leftPos() {
        movePos(flip);
    }

    function rightPos() {
        movePos(!flip);
    }
</script>

<div on:click={leftPos}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="rotateL" width="48" height="48">
        <path d="M479.882-48Q426.5-48 389.75-84.868 353-121.735 353-175.118q0-53.382 36.868-90.132Q426.735-302 480.118-302q53.382 0 90.132 36.868Q607-228.265 607-174.882q0 53.382-36.868 90.132Q533.265-48 479.882-48ZM433-723l-64 64q-14 13-33.1 13t-32.813-13.526Q288-674.175 288-693.088 288-712 303-727l143-143q14.364-14 34.182-14T514-870l143 143q14 14.364 13.5 34.182t-14.571 34.209q-14.072 13.776-33 13.192Q604-646 590-659l-63-63v262q0 20.75-13.675 34.375Q499.649-412 479.825-412 460-412 446.5-425.625 433-439.25 433-460v-263Z"/>
    </svg>
</div>
<Range max={max} bind:val={bindVal} flip={flip} />
<div on:click={rightPos}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="rotateR" width="48" height="48">
        <path d="M479.882-48Q426.5-48 389.75-84.868 353-121.735 353-175.118q0-53.382 36.868-90.132Q426.735-302 480.118-302q53.382 0 90.132 36.868Q607-228.265 607-174.882q0 53.382-36.868 90.132Q533.265-48 479.882-48ZM433-723l-64 64q-14 13-33.1 13t-32.813-13.526Q288-674.175 288-693.088 288-712 303-727l143-143q14.364-14 34.182-14T514-870l143 143q14 14.364 13.5 34.182t-14.571 34.209q-14.072 13.776-33 13.192Q604-646 590-659l-63-63v262q0 20.75-13.675 34.375Q499.649-412 479.825-412 460-412 446.5-425.625 433-439.25 433-460v-263Z"/>
    </svg>
</div>

<style lang="stylus">
    .rotateL {
        transform: rotate(-90deg)
    }
    
    .rotateR {
        transform: rotate(90deg)
    }
</style>
