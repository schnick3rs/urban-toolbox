<script>
    import { Card } from "flowbite-svelte";

    export let data;
</script>

<h1>all the playbooks</h1>

<div class="grid grid-cols-3 gap-4">
    {#each data.summaries as { slug, title, gist }}
        <Card
                href="/playbooks/{slug}"
                img="/playbook-{slug}.png"
                padding="lg"
                imgClass="h-40"
        >
            <h5 class="text-2xl">{title}</h5>
            <p>{gist}</p>
        </Card>
    {/each}
</div>