<script>
    import { Mode } from "../stores/mode_store";

    function handleClick(index) {
        for (let i = 0; i < $Mode.length; i++) {
            if (i == index) {
                $Mode[i].selected = true;
            }
            else{

                $Mode[i].selected = false;
            }
        }
    }
</script>

<nav
    class="rounded flex justify-center md:w-2/3 m-auto w-10/12 p-4 my-4 sticky top-2 z-10 bg-zinc-900 overflow-hidden"
>
    <ul class="flex gap-2 flex-wrap justify-center items-center w-full">
        <li
            class:b={$Mode[0].selected}
            class="rounded border border-transparent p-2 bg-zinc-700 hover:bg-zinc-800 hover:shadow-slate-100 hover:border-white trans"
        >
            <button on:click={() => handleClick(0)} class="text-center w-full"
                >Bosses</button
            >
        </li>
        <li
            class:b={$Mode[1].selected}
            class="rounded border border-transparent p-2 bg-amber-700 hover:bg-amber-800 hover:shadow-amber-500 hover:border-white trans"
        >
            <button on:click={() => handleClick(1)} class="text-center w-full"
                >Miracles</button
            >
        </li>
        <li
            class:b={$Mode[2].selected}
            class="rounded border border-transparent p-2 bg-red-800 hover:bg-red-900 hover:shadow-red-600 hover:border-white trans"
        >
            <button on:click={() => handleClick(2)} class="text-center w-full"
                >Piromancy</button
            >
        </li>
        <li
            class:b={$Mode[3].selected}
            class="rounded border border-transparent p-2 bg-cyan-600 hover:bg-cyan-700 hover:shadow-cyan-400 hover:border-white trans"
        >
            <button on:click={() => handleClick(3)} class="text-center w-full"
                >Magic</button
            >
        </li>
    </ul>
</nav>

<style>
    .trans {
        transition: 0.2s ease-in-out;
    }
    .b {
        border: 1px solid white;
    }
</style>
