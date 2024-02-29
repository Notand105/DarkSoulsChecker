<script>
    import { List } from "../stores/honor_store";
    import Card from "./Card.svelte";
    export let title;
    export let arr;
    export let tick;
    export let type;

    function check(type, name) {
        tick(type, name);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name == name) {
                arr[i].obtained = !arr[i].obtained;
            }
        }
        console.log(arr);
    }
</script>

<section class="my-8 ">
    <h2 class="text-center text-3xl font-bold mb-2">{title}</h2>
    <div class="flex flex-wrap justify-center gap-4 p-8">
        {#each arr as miracle}
            <div
                on:keypress={() => check(type, miracle.name)}
                tabindex="0"
                role="button"
                title="Click to check"
                on:click={() => check(type, miracle.name)}
                class:small={miracle.obtained}
                class:big={!miracle.obtained}
                class:gray={miracle.obtained}
                class="flex-col justify-center items-center md:w-2/5 w-full relative cursor-pointer yellow rounded"
            >
                <Card name={miracle.name} description={miracle.description} />
            </div>
        {/each}
    </div>
</section>

<style>
    .small {
        transform: scale(0.9);
        transition: 0.3s ease;
    }
    .big {
        transform: scale(1);
        transition: 0.3s ease;
    }
    .gray {
        -webkit-filter: grayscale(1);
        filter: grayscale(1);
        opacity: 0.8;
    }
    .yellow {
        background-image: linear-gradient(to right top, #2e1a27, #3e1b32, #4f1b3d, #611847, #731251);
    }
</style>
