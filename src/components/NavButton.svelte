<script>
    export let text;
    export let target;
    export let style;
</script>

<button style={style} on:click={() => {window.location.href = '#'+target}}>{text}</button>

<style>
    button{
        color: white;
        background-color:var(--primary-color);
        border-radius: 10px;
        outline: none;
        -webkit-padding: 0.4em 0;
        padding: 0.4em;
        margin: 0 0 0.5em 0;
    }
    button:not(:disabled):active {
        background-color: #ddd;
    }
    button:hover{
        background-color: var(--tetriary-color);
        -webkit-transition: background-color 300ms linear;
        -ms-transition: background-color 300ms linear;
        transition: background-color 300ms linear;
    }
</style>