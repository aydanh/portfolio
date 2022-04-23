<script>
    import NavButton from '../components/NavButton.svelte';
    import PageContent from '../components/PageContent.svelte';
</script>

<div class="padding">
    <PageContent title="Hello!">
        <p>I am <span class="name">Hasan Can Aydan</span>, a <span class="occupation">computer engineer</span> specializing in <span class="field">web development.</span></p>
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
    
    .name{
        color: var(--tetriary-color);
        font-size: 1.3em;
    }

    .occupation{
        font-weight: bold;
        font-size: 1.1em;
    }

    .field{
        font-style: italic;
        font-size: 1.2em;
    }
</style>