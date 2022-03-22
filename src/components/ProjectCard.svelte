<script>
    import Image from "svelte-image";
    import { media } from 'svelte-match-media'

    export let image;
    export let imageratio = "100%";
    export let position;
    export let title;
    export let external;
    export let github;
</script>

<div class="card-container">
    <div class="title">
        <h2>{title}</h2>
        {#if external}
            <span class="external">
                <a href={external}>
                    <Image src="img/external.png"/>
                </a>
            </span>
        {/if}
        {#if github}
            <span class="external">
                <a href={github} target="_blank">
                    <Image src="img/github.png"/>
                </a>
            </span>
        {/if}
    </div>
    <div class="card" class:mcard={$media.mobile || $media.half}>
        {#if $media.desktop && !$media.half}
            {#if position!="right"}
                <div class="image-container">
                    <Image ratio={imageratio} src={image} />
                </div>
            {/if}
            <div class="content">
                <p><slot name="description"></slot></p>
                <slot name="tech"></slot>
            </div>
            {#if position=="right"}
                <div class="image-container">
                    <Image ratio={imageratio} src={image} />
                </div>
            {/if}
        {:else}
            <div class="image-mcontainer">
                <Image ratio={imageratio} src={image} />
            </div>
            <div>
                <p><slot name="description"></slot></p>
                <slot name="tech"></slot>
            </div>
        {/if}
    </div>
</div>

<style>
    p{
        margin:0;
        padding:0;
    }

    .card-container{
        margin: 30px 0;
    }

    .card{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mcard{
        flex-direction: column;
    }

    .image-container{
        flex:2;
        padding:5px;
    }

    .image-mcontainer{
        width: 90%;
    }

    .content{
        flex:3;
        padding: 5px;
    }

    .external{
        display: inline-block;
        height: 1em;
        width: 1em;
        margin: 0 5px;
    }

    .title{
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
</style>