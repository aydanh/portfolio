<script>
	import Nav from "./Nav.svelte"
	import Home from "./pages/Home.svelte"
	import Skills from "./pages/Skills.svelte";
	import Projects from "./pages/Projects.svelte";
	import About from "./pages/About.svelte";
    import { media } from 'svelte-match-media'
	import viewport from './useViewportAction';
	import { onMount } from "svelte";
	import Image from './components/Image.svelte';

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
</script>
<main class:main={$media.desktop} class:mobile={$media.mobile}>
	<div use:viewport on:enterViewport={() => {upButtonVisible = false;}} on:exitViewport={() => {upButtonVisible = true;}}></div>
	<Nav {page}/>
	<div class="content" class:dcontent={$media.desktop} class:mcontent={$media.mobile}>
		<div id="home" class="page" use:viewport on:enterViewport={() => enterViewPort("home")}><Home/></div>
		<div id="about" class="page" use:viewport on:enterViewport={() => enterViewPort('about')}><About/></div>
		<div id="skills" class="page" use:viewport on:enterViewport={() => enterViewPort('skills')}><Skills/></div>
		<div id="projects" class="page" use:viewport on:enterViewport={() => enterViewPort('projects')}><Projects/></div>
	</div>
	{#if $media.mobile && upButtonVisible}
		<button class="upbutton" on:click={goUp}><img alt="upbutton" src="img/upbtn.png" /></button>
	{/if}
</main>

<style>
	main {
		padding:20px;
		width:calc(100% - 40px);
		height:calc(100vh - 40px);
		display: flex;
	}
	.main{
		height:calc(100vh - 40px);
		justify-content: flex-start;
		align-items: flex-start;
	}
	.mobile{
		padding:20px;
		width:calc(100% - 40px);
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.content{
		height: 100%;
		overflow: auto;
		width: 100%;
		scroll-behavior: smooth;
	}

	.dcontent{
		margin-left:10vw;
	}
	.mcontent{
		height: initial !important;
		overflow: visible !important;
	}
	.page{
		min-height: 100vh;
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
</style>