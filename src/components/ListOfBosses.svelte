<script>
    import bosses from "../data/bosses.json";
    let data = bosses;

    function handleClick(id) {
        console.log(data);
        let negated = !data[id].defeated;
        data[id].defeated = negated;
    }
</script>

<section class="w-5/6 m-auto">
    <div
        class="flex flex-col  gap-4 container "
    >
        {#each data as boss}
            <div
                class="flex justify-between sm:h-32 md:h-40 rounded-md border-red-200 border sm:flex-row flex-col  gap-4 "
                class:gray={boss.defeated}
            >
                <img
                    class="aspect-auto rounded-t-md sm:rounded-s-md"
                    src={boss.image}
                    alt={boss.name}
                />
                <h3>{boss.name}</h3>
                <div class="flex flex-col gap-2 p-2">
                    <span>
                        Defeated
                        <input
                            type="checkbox"
                            on:input={() => handleClick(boss.id)}
                        />
                    </span>
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
</style>
