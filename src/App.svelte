<script>
	import { fade } from 'svelte/transition';
	import Nav from "./Nav.svelte"
	import Home from "./pages/Home.svelte"
	import Projects from "./pages/Projects.svelte";
	import About from "./pages/About.svelte";
	import Contact from "./pages/Contact.svelte";
    import { media } from 'svelte-match-media'
	import viewport from './useViewportAction';
	import { onMount } from "svelte";

	onMount(() => {
		prevScroll = window.scrollY;

		window.onhashchange = function() {
			page = window.location.hash.split('#')[1];
			if (!window.innerDocClick) {
				document.getElementById(page).scrollIntoView();
			}
		}

		window.addEventListener('scroll', function(){
			let curScroll = window.scrollY;
			let direction = 0;
			if (curScroll > prevScroll) { 
				//scrolled up
				direction = 2;
			}
			else if (curScroll < prevScroll) { 
				//scrolled down
				direction = 1;
			}

			if (direction !== prevDirection) {
				toggleHeader(direction, curScroll);
			}


			prevScroll = curScroll;
		})
	});

	function goUp(){
		window.scrollTo(0,0);
	}

	function enterViewPort(viewport){
		const location = window.location.toString().split('#')[0];
		history.replaceState(null, null, location + '#' + viewport);
		page = viewport;
	}

	function toggleHeader(direction, curScroll){
		// console.log(direction);
		// console.log(curScroll);
		if (direction === 2 && curScroll > 65) { 
			navHidden = true;
			prevDirection = direction;
		}
		else if (direction === 1) {
			navHidden = false;
			prevDirection = direction;
		}
	}

	let upButtonVisible =  false;
	let page = "home";
	let navVisible = false;

	let navHidden = false;
	let prevScroll = 0;
	let prevDirection = 0;
</script>
<main class:main={$media.desktop} class:mobile={$media.mobile}>
	{#if $media.mobile && !navVisible}
		{#if !navHidden}
			<div class="header" transition:fade={{ duration: 200 }}>
				<button on:click={()=>{navVisible = true}} class="navbutton"><img alt="menu" src="img/menu.png" /></button>
				<a href="resume.pdf" target="_blank"><button class="outline-button header-resume">Resume</button></a>
			</div>
		{/if}
	{:else if $media.mobile && navVisible}
		<button on:click={()=>{navVisible = false}} class="navbutton" transition:fade={{ duration: 500 }}><img alt="menu" src="img/close.png" /></button>
	{/if}
	<div use:viewport on:enterViewport={() => {upButtonVisible = false;}} on:exitViewport={() => {upButtonVisible = true;}}></div>
	<Nav {page} visible={navVisible} on:navigate={() => {navVisible = false}}/>
	<div class="content" class:dcontent={$media.desktop} class:mcontent={$media.mobile}>
		<div id="home" class="page odd fullpage" class:dpage={$media.desktop}><div class="pageanchor" use:viewport on:enterViewport={() => enterViewPort("home")}></div><Home/></div>
		<div id="about" class="page even" class:dpage={$media.desktop}><div class="pageanchor" use:viewport on:enterViewport={() => enterViewPort("about")}></div><About/></div>
		<div id="projects" class="page odd" class:dpage={$media.desktop}><div class="pageanchor" use:viewport on:enterViewport={() => enterViewPort("projects")}></div><Projects/></div>
		<div id="contact" class="page even" class:dpage={$media.desktop}><div class="pageanchor" use:viewport on:enterViewport={() => enterViewPort("contact")}></div><Contact/></div>
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
		padding: 60px 20px;
		position:relative;
	}
	.dpage{
		padding-left: 10vw !important;
		padding-right: 10vw !important;
	}
	.fullpage{
		min-height: calc(100vh - 60px);
	}
	.pageanchor{
		top: 50%;
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
		width: 100vw;
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