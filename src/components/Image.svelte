<script>
    import Image from "svelte-image";
    
    export let width = '100%';
    export let height = '100%';
    export let src;
    export let text= '';
</script>

<div class="container">
    <div style="width: {width}; height: {height}">
        <Image src={src} />
    </div>
    {#if text}
    <div>{text}</div>
    {/if}
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-items: center;
        margin: 5px;
    }
</style>