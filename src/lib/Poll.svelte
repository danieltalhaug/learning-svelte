<script lang="ts">
    // Types
    import type { id, poll } from '../common/types';
    import { buttonTypes } from '../common/enums';
    // Libs
    import { createEventDispatcher } from 'svelte';
    // Components
    import Button from './Button.svelte';
    
    export let poll: poll;
    const dispatch = createEventDispatcher();

    function doVote(event: KeyboardEvent, optionId: id) {
        // TODO: Figure out the correct event type for mouse because apparently 
        // MouseEvent is not good enough
        if (event.pointerType === 'mouse' || event.key === 'Enter') {
            dispatch('vote', {
                pollId: poll.id,
                optionId,
            });
        }
    }

    function doDelete(): void {
        dispatch('delete', poll.id);
    }

    $: totalCount = poll.options.reduce((sum, current) => sum + current.count, 0);
    $: votePercentageWidth = (optionCount: number) => Math.floor(100 / totalCount * optionCount) || 0;
</script>

<section>
    <header class="mb-4 text-xl truncate">
        <h3 class="text-indigo-50">{ poll.question }</h3>
        <span class="text-sm text-indigo-300">Total votes: <strong>{totalCount}</strong></span>
    </header>
    {#each poll.options as option (option.id)}
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <section
            tabindex="0"
            class="px-4 py-2 my-4 bg-indigo-50 hover:bg-indigo-100 transition rounded-sm focus cursor-pointer relative"
            on:click={() => doVote(event, option.id)}
            on:keypress={() => doVote(event, option.id)}
        >
            <div
                class="absolute top-0 left-0 h-full bg-indigo-200 transition-all"
                style={`width: ${votePercentageWidth(option.count)}%`}
            />
            <h4 class="relative flex justify-between">{option.value} <span>{option.count}</span></h4>
        </section>
    {/each}
    <footer>
        <Button type={buttonTypes.DELETE} on:click={doDelete}>
            Delete
        </Button>
    </footer>
</section>

<style lang="postcss">

</style>