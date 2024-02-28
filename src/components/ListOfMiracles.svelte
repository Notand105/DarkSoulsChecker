<script>
    import { List } from "../stores/miracles.store";
    import Section from "./SectionM.svelte";

    function obtain(op, name) {
        switch (op) {
            case "sold":
                for (let i = 0; i < $List.sold; i++) {
                    if ($List.sold[i].name == name) {
                        $List.sold[i].obtained = !$List.sold[i].obtained;
                    }
                }
                break;
            case "map":
                for (let i = 0; i < $List.sold; i++) {
                    if ($List.sold[i].name == name) {
                        $List.sold[i].obtained = !$List.sold[i].obtained;
                    }
                }
                break;
            case "covenant":
                for (let i = 0; i < $List.sold; i++) {
                    if ($List.sold[i].name == name) {
                        $List.sold[i].obtained = !$List.sold[i].obtained;
                    }
                }
                break;
            case "npc":
                for (let i = 0; i < $List.sold; i++) {
                    if ($List.sold[i].name == name) {
                        $List.sold[i].obtained = !$List.sold[i].obtained;
                    }
                }
                break;
            default:
                console.log("no");
        }
        localStorage.setItem('miracles', JSON.stringify($List))
    }
</script>

<section class="w-5/6 m-auto container py-4 mt-10 flex flex-col">
    <Section title={"Sold"} arr={$List.sold} tick={obtain} type="sold" />
    <Section title={"Map"} arr={$List.drop} tick={obtain} type="map" />
    <Section
        title={"Covenants"}
        arr={$List.covenant}
        tick={obtain}
        type="covenant"
    />
    <Section title={"Npc questline"} arr={$List.npc} tick={obtain} type="npc" />
</section>

<style>
</style>
