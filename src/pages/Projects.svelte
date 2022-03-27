<script>
    import Card from '../components/ProjectCard.svelte';
</script>

<div class="content">
    <h1>Projects</h1>

    <Card position="right"
          image="img/vocofy-1.png" 
          imageratio="59%"
          title="Vocofy">
        <div slot="description">
            A social platform focusing on audio sharing with all the features of an social media application. The platform was also used for the research "Voice cloud platform for medical applications" (DOI: <a href="https://doi.org/10.1109/SIU.2017.7960685" target="_blank">10.1109/SIU.2017.7960685</a>).
        </div>
        <div class="tags" slot="tech">
            nodejs, expressjs, pug, parseserver, angularjs, mongodb, aws
        </div>
    </Card>
    <Card position="left"
          image="img/yc-1.png" 
          imageratio="75%"
          title="YorumCenter"
          external="https://www.yorumcenter.com">
        <div slot="description">
            A project that collects product comments from several e-commerce platforms. Merges duplicate products across platforms using named entity recognition.
        </div>
        <div class="tags" slot="tech">
            nodejs, expressjs, pug, sequelize, alpinejs, htmx, python, spacy, postgresql, gcloud
        </div>
    </Card>
    <Card position="right"
          image="img/kiosk-1.png" 
          imageratio="63%"
          title="Kiosk Applicaton">
        <div slot="description">
            A web application that displays information about Çanakkale Wars that happened in World War I. Adjusted to user interaction on touch screens.
        </div>
        <div class="tags" slot="tech">
            nodejs, expressjs, vuejs
        </div>
    </Card>
</div>

<style>
    .tags{
        margin-top: 10px;
    }
</style>