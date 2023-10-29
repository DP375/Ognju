<script>
import { createEventDispatcher } from "svelte";
const dispatch= createEventDispatcher();
    const buttonClickHandler = () => {
       dispatch("clickUser");
    }
</script>


<button class="btn btn-primary" on:click={buttonClickHandler}>
  Show Users
</button>


<style>
    .btn {
        background-color: #007bff;
        border-color: #007bff;
        color: #fff;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: 0.25rem;
        cursor: pointer;
    }
</style>