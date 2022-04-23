<script>
    import { fly } from 'svelte/transition';
    import Image from "svelte-image";
    import { media } from 'svelte-match-media'
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let page;
    export let visible = false;

    $: isDesktop = $media.desktop && !($media.half && $media.vertical);
	$: isMobile = $media.mobile || ($media.half && $media.vertical);
</script>

{#if isDesktop || visible}
<nav class:nav={isDesktop} class:mobile-nav={isMobile} transition:fly="{{ y: -200, duration: 500 }}">
    <div class="nav-content">
        <div class="pp-container" class:pp-mobile={isMobile}><Image class="pp" src="img/pp.jpeg" /></div>
        <ul class="links">
            <li><a on:click={() => dispatch('navigate')} class:current={page == 'home'} href="#home">Home</a></li>
            <li><a on:click={() => dispatch('navigate')} class:current={page == 'about'} href="#about">About Me</a></li>
            <li><a on:click={() => dispatch('navigate')} class:current={page == 'projects'} href="#projects">Projects</a></li>
            <li><a on:click={() => dispatch('navigate')} class:current={page == 'contact'} href="#contact">Contact</a></li>
        </ul>
        <a href="resume.pdf" target="_blank"><button class="outline-button">Resume</button></a>
        <ul class="horizontal-list">
            <li class:bigger={isMobile}><a href="mailto:hcaydan92@gmail.com" target="_blank"><Image src="img/mail.png" /></a></li>
            <li class:bigger={isMobile}><a href="https://www.linkedin.com/in/hasan-can-aydan-92b161107/" target="_blank"><Image src="img/linkedin.png" /></a></li>
            <li class:bigger={isMobile}><a href="https://github.com/aydanh" target="_blank"><Image src="img/github.png" /></a></li>
        </ul>
    </div>
</nav>
{/if}

<style>
    nav{
        padding: 40px 20px;
        overflow-y: auto;
        font-size: 1.5em;
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
        padding-top:80px;
    }
    .nav-content{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height:100%;
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
    .links li a:hover{
        color: var(--primary-color);
        -webkit-transition: color 100ms linear;
        -ms-transition: color 100ms linear;
        transition: color 100ms linear;
    }
	.current{
		color: var(--primary-color) !important;
	}

    .horizontal-list{
        display: flex;
    }
    .horizontal-list li{
        width: 32px;
        height: 40px;
        padding-top:8px;
    }

    .horizontal-list li:hover{
        padding-top:0;
        -webkit-transition: padding-top 250ms linear;
        -ms-transition: padding-top 250ms linear;
        transition: padding-top 250ms linear;
    }

    .bigger{
        width: 48px !important;
        height: 48px !important;
    }
</style>