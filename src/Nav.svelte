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
<nav class:nav={$media.desktop} class:mobile-nav={$media.mobile} transition:fly="{{ x: -200, duration: 500 }}">
    <div class="pp"><Image class="pp" src="img/pp.jpeg" /></div>
    <ul class="links">
        <li><a on:click={() => dispatch('navigate')} class:current={page == 'home'} href="#home">Home</a></li>
        <li><a on:click={() => dispatch('navigate')} class:current={page == 'about'} href="#about">About Me</a></li>
        <li><a on:click={() => dispatch('navigate')} class:current={page == 'skills'} href="#skills">Skills</a></li>
        <li><a on:click={() => dispatch('navigate')} class:current={page == 'projects'} href="#projects">Projects</a></li>
    </ul>
    <a href="resume.pdf" target="_blank"><button class="resume-button">My Resume</button></a>
    <ul class="horizontal-list">
        <li class:bigger={$media.mobile}><a href="mailto:hcaydan92@hotmail.com" target="_blank"><Image src="img/mail.png" /></a></li>
        <li class:bigger={$media.mobile}><a href="https://www.linkedin.com/in/hasan-can-aydan-92b161107/" target="_blank"><Image src="img/linkedin.png" /></a></li>
        <li class:bigger={$media.mobile}><a href="https://github.com/aydanh" target="_blank"><Image src="img/github.png" /></a></li>
    </ul>
</nav>
{/if}

<style>
    nav{
        padding: 40px 20px;
    }
    .nav{
        display:flex;
        flex-direction: column;
        min-width:300px;
        justify-content: flex-start;
        align-items: center;
        height: calc(100vh - 80px);
    }
    .mobile-nav{
        position: fixed;
        top:0;
        left:0;
        display:flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        height: calc(100vh - 120px);
        z-index: 10;
        background-color:var(--secondary-color);
        width: calc(100vw - 40px);
		font-size: 1.5em !important;
        padding-top:80px;
    }

    .pp{
        border: 1px solid black;
        width: 50%;
        overflow: hidden;
        display: flex;
        border-radius: 15em;
        max-width: 200px;
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

    .resume-button{
        border: 1px solid var(--primary-color);
        color: var(--primary-color);
        background-color: rgba(0,0,0,0);
        border-radius: 10px;
    }
    .resume-button:not(:disabled):active {
        border: 1px solid #ddd;
        color: #ddd;
    }

    .bigger{
        width: 48px !important;
        height: 48px !important;
    }
</style>