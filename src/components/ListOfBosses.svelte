<script>
    import { List } from "../stores/bosses_store";
    let data = $List;

    function handleClick(id) {
        let negated = !data[id].defeated;
        data[id].defeated = negated;
        localStorage.setItem("listOfBosses", JSON.stringify(data));
    }

    function resetBosses() {
        localStorage.removeItem("listOfBosses");
        let newData = [];
        for (let i = 0; i < data.length; i++) {
            let aux = data[i];
            aux.defeated = false;
            newData.push(aux);
        }
        data = [...newData];
    }
</script>

<section class="w-5/6 m-auto container py-4 mt-10">
        <div
        class="flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 justify-center"
    >
        {#each data as boss}
            <div
                class="flex justify-between rounded-md shadow-md flex-col gap-4 lg:w-1/3 softDark"
                class:gray={boss.defeated}
                class:small={boss.defeated}
                class:big={!boss.defeated}
            >
                <img
                    class="aspect-auto rounded-t-md"
                    src={boss.image}
                    alt={boss.name}
                    loading="lazy"
                />

                <div class="flex flex-col items-center">
                    <h3 class="text-xl font-bold text-center">
                        <span class="text-sm secondary"
                            >#{boss.id + 1}
                        </span>{boss.name}
                    </h3>
                    <h4 class="text-lg primary italic">
                        Location: {boss.location}
                    </h4>
                    <h4>Health: {boss.health}</h4>
                    <h4>Souls: {boss.souls}</h4>
                </div>

                <div class="text-center p-4 pb-6">
                    <button
                        class="accent py-2 rounded-md w-full"
                        on:click={() => handleClick(boss.id)}
                    >
                        Defeated
                    </button>
                </div>
            </div>
        {/each}
    </div>
    <div class="flex justify-center my-4">
        <button on:click={resetBosses} class="secondaryBg p-4 rounded w-1/2"
            >Reset bosses</button
        >
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
    .softDark {
        background-color:#170E0F ;

    }
    .accent {
        background-color: #8a2730;
    }
    /* .accentText{
        color: #bd6946;
    } */
    .primary {
        /* background-color: #F4EFDE; */
        color: #9ec8dc;
    }
    /* .primaryBg {
        background-color: #9ec8dc;
    } */
    .secondary {
        color: #dd3a47;
    }
    .secondaryBg {
        background-color: #dd3a47;
    }

</style>
