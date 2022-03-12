<script>
    import NavButton from '../components/NavButton.svelte';
</script>

<div class="content">
    <h1>Hello!</h1>
    <p>I am Hasan Can Aydan, a computer engineer specializing in web development.</p>
    <NavButton target="about" text="Learn More" />
</div>

<style>
    .content{
        padding-top: 20vh;
    }
    h1{
        font-size: 3em;
    }
    p{
        font-size: 2em;
    }
</style>