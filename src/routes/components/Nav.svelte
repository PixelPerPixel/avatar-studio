<script lang="ts">
    import { screenId, modalId } from '../store';

    function setPage(id: number) {
        screenId.set(id);
    }

    function showModal(id: number) {
        modalId.set(id);
    }
</script>

<header>
    <div class="container">
        <ul>
            <li aria-current={$screenId === 1 ? "true" : "false"} on:click={() => {setPage(1)}}>
                Face
            </li>
            <li aria-current={$screenId === 2 ? "true" : "false"} on:click={()  => {setPage(2)}}>
                Hair
            </li>
            <li aria-current={$screenId === 3 ? "true" : "false"} on:click={()  => {setPage(3)}}>
                Brows
            </li>
            <li aria-current={$screenId === 4 ? "true" : "false"} on:click={()  => {setPage(4)}}>
                Eyes
            </li>
            <li aria-current={$screenId === 5 ? "true" : "false"} on:click={()  => {setPage(5)}}>
                Nose
            </li>
            <li aria-current={$screenId === 6 ? "true" : "false"} on:click={()  => {setPage(6)}}>
                Mouth
            </li>
            <li aria-current={$screenId === 7 ? "true" : "false"} on:click={()  => {setPage(7)}}>
                Mole
            </li>
        </ul>
        <div class="btn-frm">
            <button on:click={() => showModal(1)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24">
                    <path d="M480-414 282-216q-14 14-33 14t-33-14q-14-14-14-33t14-33l198-198-198-198q-14-14-14-33t14-33q14-14 33-14t33 14l198 198 198-198q14-14 33-14t33 14q14 14 14 33t-14 33L546-480l198 198q14 14 14 33t-14 33q-14 14-33 14t-33-14L480-414Z"/>
                </svg>
            </button>
            <button on:click={() => showModal(2)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24">
                    <path d="m378-358 350-349q14.2-14 33.6-14 19.4 0 33.4 14.053 14 14.052 14 33.8Q809-653.4 795-639L412-256q-14.364 14-34.182 14T344-256L164-436q-14-14.467-14-34.233Q150-490 164.053-504q14.052-14 33.8-14Q217.6-518 232-504l146 146Z"/>
                </svg>
            </button>
        </div>
    </div>
</header>

<style lang="stylus">
    header {
        display: flex
        height: 80px
        background-color: #202223
    }

    .container {
        display: flex
        margin-bottom: 0
        justify-content: space-between

        > * {
            display: flex
        }
    }

    ul {
        height: 72px
    }

    li, button {
        display: flex
        align-items: center
        justify-content: center
    }

    li {
        padding-bottom: 8px
        width: 50px
        color: var(--sub-txt)
        border-bottom: 8px solid transparent

        &[aria-current="true"]::after {
            left: 0
            bottom: -8px
            width: 100%
            border-bottom: 8px solid var(--sub-txt)
            animation: indicator-anim .3s
        }

        @keyframes indicator-anim {
            0% {
                width: 0%
            }
            100% {
                width: 100%
            }
        }
    }

    .btn-frm {
        margin-top: 8px
        //align-items: start
    }
    
    button {
        width: 48px
        height: 48px
        border-radius: 100vh
        transition: box-shadow .2s

        &:nth-child(2) {
            width: 128px
            margin-left: 24px
        }

        &:hover {
            box-shadow: 0 0 6px var(--sub-txt)
        }
    }

    svg {
        fill: var(--main-txt)
    }
</style>
