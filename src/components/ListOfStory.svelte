<script>
    import { List } from "../stores/story_store";
    import Card from "./Card.svelte";
    let data = $List;

    function handleClick(name) {
        for (let i = 0; i < $List.length; i++) {
            if ($List[i].name == name) {
                $List[i].obtained = !$List[i].obtained;
            }
        }
        localStorage.setItem("story", JSON.stringify(data));
        data = [...$List];
    }

</script>

<section class="w-5/6 m-auto container py-4 mt-10">
    <div
        class="flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 justify-center"
    >
        {#each data as item}
            <div
                tabindex="0"
                role="button"
                title="check as obtained"
                on:keypress={() => handleClick(item.name)}
                on:click={()=>handleClick(item.name)}
                class="flex-col justify-center items-center md:w-2/5 w-full relative cursor-pointer yellow rounded"
                class:gray={item.obtained}
                class:small={item.obtained}
                class:big={!item.obtained}
            >
               <Card name={item.name} description={item.description} /> 
            </div>
        {/each}
    </div>
</section>

<style>
    .gray {
        -webkit-filter: grayscale(1);
        filter: grayscale(1);
        opacity: 0.8;
    }
    .small {
        transform: scale(0.9);
        transition: 0.3s ease;
    }
    .big {
        transform: scale(1);
        transition: 0.3s ease;
    }
    .yellow{
        background-image: linear-gradient(to right top, #2e1a27, #3e1b32, #4f1b3d, #611847, #731251);
    }
    
</style>
