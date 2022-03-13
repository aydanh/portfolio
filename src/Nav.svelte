<script>
    import Image from "svelte-image";
    import { media } from 'svelte-match-media'
    export let page;
</script>

<nav class:nav={$media.desktop} class:mobile-nav={$media.mobile}>
    <div class="pp"><Image class="pp" src="img/pp.jpeg" /></div>
    <ul class="links">
        <li><a class:current={page == 'home'} href="#home">Home</a></li>
        <li><a class:current={page == 'about'} href="#about">About Me</a></li>
        <li><a class:current={page == 'skills'} href="#skills">Skills</a></li>
        <li><a class:current={page == 'projects'} href="#projects">Projects</a></li>
    </ul>
    <ul class="horizontal-list">
        <li><a href="mailto:hcaydan92@hotmail.com" target="_blank"><Image src="img/mail.png" /></a></li>
        <li><a href="https://www.linkedin.com/in/hasan-can-aydan-92b161107/" target="_blank"><Image src="img/linkedin.png" /></a></li>
        <li><a href="https://github.com/aydanh" target="_blank"><Image src="img/github.png" /></a></li>
    </ul>
</nav>

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
        display:flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width:100%; 
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
		color: #00ADB5 !important;
	}

    .horizontal-list{
        display: flex;
    }
    .horizontal-list li{
        width: 32px;
        height: 32px;
    }
</style>