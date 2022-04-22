<script>
    import NavButton from '../components/NavButton.svelte';
    import PageContent from '../components/PageContent.svelte';
</script>

<div class="padding">
    <PageContent title="Hello!">
        <p>I am Hasan Can Aydan, a computer engineer specializing in web development.</p>
        <NavButton style="font-size:1.5em;" target="about" text="Learn More" />
    </PageContent>
</div> 

<style>
    .padding{
        padding-top: 20vh;
    }
    p{
        font-size: 2em;
    }
</style>