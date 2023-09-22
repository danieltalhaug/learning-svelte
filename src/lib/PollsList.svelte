<script lang="ts">
    // types
    import type { poll } from '../common/types';
    // Libs
    //import { onDestroy } from 'svelte';
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    // Stores
    import PollStore from '../stores/PollStore';
    //Components
    import Poll from './Poll.svelte';
    import Card from './Card.svelte';

    const duration = 150;

    function handleVote(event: CustomEvent): void {
        const { pollId, optionId } = event.detail;

        PollStore.update(polls => {
            const poll = polls.find(poll => poll.id === pollId);
            poll?.options.find(option => {
                if (option.id === optionId) {
                    return option.count++;
                } 
            });

            return [...polls];
        });
    }

    function handleDelete(event: CustomEvent) {
        PollStore.update(polls => {
            return polls.filter(poll => poll.id !== event.detail);
        });
    }

    /*
    let polls: poll[] = [];

    Subscribe to store, must also remember to unsubscribe on distroy to prevent memory leaks
    and performance issues

    const unsub = PollStore.subscribe(data => {
        polls = data;
    });

    onDestroy(() => {
        unsub();
    });
    */
</script>

<article class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
    {#each $PollStore as poll (poll.id)}
    <div
        in:fade={{duration}}
        out:fade={{duration}}
        animate:flip={{duration}}
    >
        <Card>
            <Poll {poll} on:vote={handleVote} on:delete={handleDelete} />
        </Card>
    </div>
    {/each}
</article>

<style>

</style>