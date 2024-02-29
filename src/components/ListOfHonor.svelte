<script>
    import { List } from "../stores/honor_store";
    import Section from "./SectionH.svelte";

    function obtain(op, name) {
        switch (op) {
            case "boss":
                for (let i = 0; i < $List.boss; i++) {
                    if ($List.boss[i].name == name) {
                        $List.boss[i].obtained = !$List.boss[i].obtained;
                    }
                }
                break;
            case "drop":
                for (let i = 0; i < $List.drop; i++) {
                    if ($List.drop[i].name == name) {
                        $List.drop[i].obtained = !$List.drop[i].obtained;
                    }
                }
                break;
            case "covenant":
                for (let i = 0; i < $List.sold; i++) {
                    if ($List.covenants[i].name == name) {
                        $List.covenants[i].obtained = !$List.covenants[i].obtained;
                    }
                }
                break;
            case "tail":
                for (let i = 0; i < $List.sold; i++) {
                    if ($List.tails[i].name == name) {
                        $List.tails[i].obtained = !$List.tails[i].obtained;
                    }
                }
                break;
            default:
                console.log("no");
        }
        localStorage.setItem('honor', JSON.stringify($List))
    }
</script>

<section class="w-5/6 m-auto container py-4 mt-10 flex flex-col">
    <Section title={"Boss weapon"} arr={$List.boss} tick={obtain} type="boss" />
    <Section title={"Drop"} arr={$List.drop} tick={obtain} type="drop" />
    <Section title={"Covenants"} arr={$List.covenants} tick={obtain} type="covenant" />
    <Section title={"Tails"} arr={$List.tails} tick={obtain} type="tail" />
</section>

<style>
</style>
