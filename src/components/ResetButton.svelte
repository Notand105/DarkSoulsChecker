<script>
    function reset() {
        if (
            window.confirm("Are you sure that you want to reset your progress")
        ) {
            localStorage.clear();
            location.reload();
        }
    }
</script>

<button on:click={reset} class="text-center w-full">Reset</button>
