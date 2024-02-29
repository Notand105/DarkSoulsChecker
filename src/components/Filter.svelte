<script>
    import ListOfMiracles from "../components/ListOfMiracles.svelte";
    import ListOfSorceries from "../components/ListOfSorceries.svelte";
    import ListOfPiromancies from "../components/ListOfPiromancy.svelte";
    import ListOfBosses from "../components/ListOfBosses.svelte";
    import ListOfStory from "./ListOfStory.svelte";
    import ListOfHonor from './ListOfHonor.svelte'
    import { Mode } from "../stores/mode_store";
</script>

<div>
    {#if $Mode[0].selected}
        <ListOfBosses />
    {/if}
    {#if $Mode[1].selected}
        <ListOfMiracles />
    {/if}
    {#if $Mode[2].selected}
        <ListOfPiromancies />
    {/if}
    {#if $Mode[3].selected}
        <ListOfSorceries />
    {/if}
    {#if $Mode[4].selected}
        <ListOfStory />
    {/if}
    {#if $Mode[5].selected}
        <ListOfHonor />
    {/if}
</div>
