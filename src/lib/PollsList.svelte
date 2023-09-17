<script lang="ts">
    // types
    import type { poll } from '../common/types';
    // Libs
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    //Components
    import Poll from './Poll.svelte';
    import Card from './Card.svelte';

    export let polls: poll[];

    const duration = 150;

</script>

<article class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
    {#each polls as poll (poll.id)}
    <div
        in:fade={{duration}}
        out:fade={{duration}}
        animate:flip={{duration}}
    >
        <Card>
            <Poll {poll} on:vote on:delete />
        </Card>
    </div>
    {/each}
</article>

<style>

</style>