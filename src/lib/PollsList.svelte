<script lang="ts">
    import type { poll } from '../common/types';
    import Poll from './Poll.svelte';
    import Card from './Card.svelte';

    export let polls: poll[];

</script>

<article class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
    {#each polls as poll (poll.id)}
    <Card>
        <Poll {poll} on:vote />
    </Card>
    {/each}
</article>

<style>

</style>