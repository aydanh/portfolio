<script>
	import { fade } from 'svelte/transition';
	import Nav from "./Nav.svelte"
	import Home from "./pages/Home.svelte"
	import Projects from "./pages/Projects.svelte";
	import About from "./pages/About.svelte";
    import { media } from 'svelte-match-media'
	import viewport from './useViewportAction';
	import { onMount } from "svelte";

	onMount(() => {
		window.onhashchange = function() {
			page = window.location.hash.split('#')[1];
			if (!window.innerDocClick) {
				document.getElementById(page).scrollIntoView();
			}
		}
	})

	function goUp(){
		window.scrollTo(0,0);
	}
	function enterViewPort(viewport){
		const location = window.location.toString().split('#')[0];
		history.replaceState(null, null, location + '#' + viewport);
		page = viewport;
	}

	let upButtonVisible =  false;
	let page = "home";
	let navVisible = false;
</script>
<main class:main={$media.desktop} class:mobile={$media.mobile}>
	{#if $media.mobile && !navVisible}
		<div class="header">
			<button on:click={()=>{navVisible = true}} class="navbutton" transition:fade={{ duration: 500 }}><img alt="menu" src="img/menu.png" /></button>
			<a href="resume.pdf" target="_blank"><button class="outline-button header-resume">Resume</button></a>
		</div>
	{:else if $media.mobile && navVisible}
		<button on:click={()=>{navVisible = false}} class="navbutton" transition:fade={{ duration: 500 }}><img alt="menu" src="img/close.png" /></button>
	{/if}
	<div use:viewport on:enterViewport={() => {upButtonVisible = false;}} on:exitViewport={() => {upButtonVisible = true;}}></div>
	<Nav {page} visible={navVisible} on:navigate={() => {navVisible = false}}/>
	<div class="content" class:dcontent={$media.desktop} class:mcontent={$media.mobile}>
		<div id="home" class="page odd fullpage" class:dpage={$media.desktop}><div class="pageanchor" use:viewport on:enterViewport={() => enterViewPort("home")}></div><Home/></div>
		<div id="about" class="page even" class:dpage={$media.desktop}><div class="pageanchor" use:viewport on:enterViewport={() => enterViewPort("about")}></div><About/></div>
		<div id="projects" class="page even" class:dpage={$media.desktop}><div class="pageanchor" use:viewport on:enterViewport={() => enterViewPort("projects")}></div><Projects/></div>
	</div>
	{#if $media.mobile && upButtonVisible}
		<button class="upbutton" on:click={goUp}><img alt="upbutton" src="img/upbtn.png" /></button>
	{/if}
</main>

<style>
	main {
		width:100%;
		height:100vh;
		display: flex;
	}
	.main{
		height:100vh;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.mobile{
		width:100%;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.content{
		height: 100%;
		overflow-y: auto;
		width: 100%;
		scroll-behavior: smooth;
	}
	.mcontent{
		height: initial !important;
		overflow: visible !important;
	}
	.page{
		max-width: 100%;
		padding: 20px;
		position:relative;
		padding-bottom:40px;
	}
	.dpage{
		padding-left: 10vw !important;
		padding-right: 10vw !important;
		min-height: 100vh;
	}
	.fullpage{
		min-height: calc(100vh - 60px);
	}
	.pageanchor{
		height: 50px;
		top: calc(50% - 25px);
		position:absolute;
	}

	.upbutton{
		width:48px;
		height: 48px;
		position:fixed;
		bottom:1.5em;
		right: 1.5em;
		border: none;
		background-color: unset;
	}
	.upbutton img{
		width: 100%;
		height: 100%;
	}
	.upbutton:hover{
		width: 64px;
		height: 64px;
		bottom: calc(1.5em - 8px);
		right: calc(1.5em - 8px);
	}

	.header{
		position:fixed;
		height:65px;
		width: 100%;
		background-color: var(--secondary-color);
		z-index: 1;
	}

	.navbutton{
		position:fixed;
		top:0;
		left:0;
		z-index: 100;
		width: 64px;
		height: 64px;
		background-color: rgba(0,0,0,0);
		border:none;
	}
	.navbutton img{
		width: 100%;
		height: 100%;
	}

	.header-resume{
		position: fixed;
		right:10px;
		top: calc(30px - 1em);
	}
</style>