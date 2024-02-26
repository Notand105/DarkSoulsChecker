<script>
    //import bosses from "../data/bosses.json";
    import {List} from '../stores/bosses_store'
    let data = $List;

    function handleClick(id) {
        console.log(data);
        let negated = !data[id].defeated;
        data[id].defeated = negated;
        localStorage.setItem('listOfBosses', JSON.stringify(data))
    }
</script>

<section class="w-5/6 m-auto container py-4">
    <div class="flex flex-col md:flex-row  flex-wrap gap-4 md:gap-8 justify-center">
        {#each data as boss}
            <div
                class="flex justify-between  rounded-md  shadow-md flex-col gap-4 lg:w-1/3 softDark"
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
                    <h3 class="text-xl font-bold text-center"><span class="text-sm secondary">#{boss.id + 1 } </span>{boss.name}</h3>
                    <h4 class="text-lg primary italic">Location: {boss.location}</h4>
                    <h4>Health: {boss.health}</h4>
                    <h4>Souls: {boss.souls}</h4>
                </div>

                <div class="text-center p-4 pb-6 ">
                    <button class="accent  py-2 rounded-md w-full" on:click={()=> handleClick(boss.id)}>
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
        opacity: .8;
    }
    .small {
        transform: scale(.9);
        transition: .3s ease;
    }
    .big{
        transform: scale(1);
        transition: .3s ease;
    }
    .softDark{
        background-color: #0F1920;
    }
    .accent{
        background-color: #bd6946;
    }
    .primary{
        /* background-color: #F4EFDE; */
        color: #9ec8dc;
    }
     .secondary{
        color: #7e2d4c;
    }
    
</style>
