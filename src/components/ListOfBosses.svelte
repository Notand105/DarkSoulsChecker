<script>
    import bosses from "../data/bosses.json";
    let data = bosses;

    function handleClick(id) {
        console.log(data);
        let negated = !data[id].defeated;
        data[id].defeated = negated;
    }
</script>

<section class="w-5/6 m-auto border container py-4">
    <div class="flex flex-col md:flex-row  flex-wrap gap-4 md:gap-8 justify-center">
        {#each data as boss}
            <div
                class="flex justify-between  rounded-md border-gray-500 shadow-xl border flex-col gap-4 lg:w-1/3 "
                class:gray={boss.defeated}
                class:small={boss.defeated}
                class:big={!boss.defeated}
            >
                <img
                    class="aspect-auto rounded-t-md "
                    src={boss.image}
                    alt={boss.name}
                />
                    
                <div class="flex flex-col items-center">
                    <h3>{boss.name}</h3>
                    <h4>Location: {boss.location}</h4>
                    <h4>Health: {boss.health}</h4>
                    <h4>Souls: {boss.souls}</h4>
                </div>

                <div class="text-center pr-2 pb-4 ">
                    <button class="bg-red-800 text-white py-2 px-4 rounded-md" on:click={()=> handleClick(boss.id)}>
                        Defeated
                    </button>
                    
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    .gray {
        -webkit-filter: grayscale(1);
        filter: grayscale(1);
    }
    .small {
        transform: scale(.9);
        transition: .3s ease;
    }
    .big{
        transform: scale(1);
        transition: .3s ease;
    }
</style>
