<script lang="ts">
    import { screenId } from '../store';

    function enterEditor() {
        screenId.set(1);
    }
</script>

<div class="inner">
    <div class="header">
        <h2>Avatar Studio</h2>
    </div>
    <div class="top">
        <div>
            <button on:click={enterEditor}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="72" height="72">
                    <path d="M433-433H222q-19.75 0-33.375-13.675Q175-460.351 175-480.175 175-500 188.625-513.5 202.25-527 222-527h211v-211q0-19.625 13.675-33.812Q460.351-786 480.175-786 500-786 513.5-771.812 527-757.625 527-738v211h211q19.625 0 33.812 13.675Q786-499.649 786-479.825 786-460 771.812-446.5 757.625-433 738-433H527v211q0 19.75-13.675 33.375Q499.649-175 479.825-175 460-175 446.5-188.625 433-202.25 433-222v-211Z"/>
                </svg>
            </button>
        </div>
    </div>
</div>

<style lang="stylus">
    sub-clr = #454748

    .inner {
        padding: 7vh 0
    }

    .top {
        padding: calc(64px + 7vh) 0
    }

    .top {
        display: flex
        justify-content: center
    }

    button {
        width: 174px
        height: 174px
        border: 6px solid transparent
        border-radius: 5%

        &:hover {
            border: 6px solid sub-clr
            box-shadow: none
        }

        &:active {
            opacity: .8
        }
    }
</style>
