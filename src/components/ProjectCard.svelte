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
        <h2>
            {title}
            <span class="external">
                {#if external}
                    <a href={external} target="_blank">
                        <Image src="img/external.png" />
                    </a>
                {/if}
                {#if github}
                    <a href={github} target="_blank">
                        <Image src="img/github.png" />
                    </a>
                {/if}
            </span>
        </h2>
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
                <div class="tech"><slot name="tech"></slot></div>
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
                <div class="tech"><slot name="tech"></slot></div>
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
        height: 0.8em;
        width: 0.8em;
        margin: 0.1em;
    }

    .title{
        margin-top:60px;
    }

    .tech{
        margin-top:10px;
        color:var(--primary-color);
    }
</style>