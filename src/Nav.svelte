<script>
    import { fly } from 'svelte/transition';
    import Image from "svelte-image";
    import { media } from 'svelte-match-media'
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let page;
    export let visible = false;
</script>

{#if $media.desktop || visible}
<nav class:nav={$media.desktop} class:mobile-nav={$media.mobile} transition:fly="{{ y: -200, duration: 500 }}">
    <div class="nav-content">
        <div class="pp-container" class:pp-mobile={$media.mobile}><Image class="pp" src="img/pp.jpeg" /></div>
        <ul class="links">
            <li><a on:click={() => dispatch('navigate')} class:current={page == 'home'} href="#home">Home</a></li>
            <li><a on:click={() => dispatch('navigate')} class:current={page == 'about'} href="#about">About Me</a></li>
            <li><a on:click={() => dispatch('navigate')} class:current={page == 'projects'} href="#projects">Projects</a></li>
        </ul>
        <a href="resume.pdf" target="_blank"><button class="outline-button">Resume</button></a>
        <ul class="horizontal-list">
            <li class:bigger={$media.mobile}><a href="mailto:hcaydan92@hotmail.com" target="_blank"><Image src="img/mail.png" /></a></li>
            <li class:bigger={$media.mobile}><a href="https://www.linkedin.com/in/hasan-can-aydan-92b161107/" target="_blank"><Image src="img/linkedin.png" /></a></li>
            <li class:bigger={$media.mobile}><a href="https://github.com/aydanh" target="_blank"><Image src="img/github.png" /></a></li>
        </ul>
    </div>
</nav>
{/if}

<style>
    nav{
        padding: 40px 20px;
        overflow-y: auto;
    }
    .nav{
        min-width:300px;
        height: calc(100vh - 80px);
    }
    .mobile-nav{
        position: fixed;
        top:0;
        left:0;
        height: calc(100% - 120px);
        z-index: 10;
        background-color:var(--secondary-color);
        width: calc(100% - 40px);
		font-size: 1.5em !important;
        padding-top:80px;
    }
    .nav-content{
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .pp-container{
        border: 1px solid black;
        border-radius: 50%;
        width: 50%;
        overflow: hidden;
        display: flex;
        max-width: 200px;
    }
    .pp-mobile{
        width: 150px !important;
        height: 150px !important;
    }
    ul{
        padding: 0;
        list-style: none;
    }
    .links li{
        margin:10px 0;
    }
    .links li a{
        color: #393E46;
        text-decoration: none;
    }
	.current{
		color: var(--primary-color) !important;
	}

    .horizontal-list{
        display: flex;
    }
    .horizontal-list li{
        width: 32px;
        height: 32px;
    }

    .bigger{
        width: 48px !important;
        height: 48px !important;
    }
</style>