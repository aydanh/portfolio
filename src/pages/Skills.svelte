<script>
    import Image from "../components/Image.svelte";
</script>

<div class="content">
    <h1>Skills & Tools</h1>
    <div class=flex>
        <Image width="48px" height="48px" text="nodejs" src="img/nodejs.png" />
        <Image width="48px" height="48px" text="javascript" src="img/javascript.png" />
        <Image width="48px" height="48px" text="typescript" src="img/typescript.png" />
        <Image width="48px" height="48px" text="rest" src="img/rest.png" />
        <Image width="48px" height="48px" text="postgresql" src="img/postgresql.png" />
        <Image width="48px" height="48px" text="mongodb" src="img/mongodb.png" />
        <Image width="48px" height="48px" text="sequelize" src="img/sequelize.png" />
        <Image width="48px" height="48px" text="html" src="img/html.png" />
        <Image width="48px" height="48px" text="css" src="img/css.png" />
        <Image width="48px" height="48px" text="angular" src="img/angular.png" />
        <Image width="48px" height="48px" text="react" src="img/react.png" />
        <Image width="48px" height="48px" text="vue" src="img/vue.png" />
        <Image width="48px" height="48px" text="svelte" src="img/svelte.png" />
        <Image width="48px" height="48px" text="python" src="img/python.png" />
        <Image width="48px" height="48px" text="aws" src="img/aws.png" />
        <Image width="48px" height="48px" text="salesforce" src="img/salesforce.png" />
    </div>
    <p>
        Since beginning my journes as a developer more than six years ago, I took on many projects that required me to use various technologies.
    </p>
    <p>
        The main are of my expertise is fullstack development. I have created both server side rendered and single page applications using several frameworks.
        I have architected and implemented many web applications for both business and consumer use. I have knowledge of both SQL and NoSQL databases and can write complex queries from stratch and also using an orm.
    </p>
    <p>
        I also have working knowledge of common AWS services and experience developing custom solutions for Salesforce CRM with apex classes, apex triggers, visualforce pages and lightning components.
    </p>
</div>

<style>
    h1{
        font-size: 3em;
    }
    p{
        font-size: 1.5em;
    }
    .flex{
        display: flex;
        flex-wrap: wrap;
    }
</style>