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
            A social platform focusing on voice recording and sharing. It has all the features a social network should have like following others, sharing, liking, commenting and messaging.
        </div>
        <div slot="tech">
            nodejs, expressjs, pug, parseserver, angularjs, mongodb, aws
        </div>
    </Card>
    <Card position="left"
          image="img/yc-1.png" 
          imageratio="75%"
          title="YorumCenter"
          external="https://www.yorumcenter.com">
        <div slot="description">
            A project that aggregates product comments from several e-commerce platforms. Merges duplicate products across platforms using named entity recognition.
        </div>
        <div slot="tech">
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
        <div slot="tech">
            nodejs, expressjs, vuejs
        </div>
    </Card>
</div>