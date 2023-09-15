<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    // types
    import { buttonTypes } from '../common/enums';

    export let type: buttonTypes;
    const dispatch = createEventDispatcher();
</script>

<button
    class="{type} px-8 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition border-2 border-indigo-600"
    on:click={() => dispatch('clicked')}
>
    <slot />
</button>

<style lang="postcss">
    .primary {
        @apply bg-indigo-600 text-indigo-50 font-semibold;
    }

    .primary, .secondary {
        @apply hover:bg-indigo-500 hover:text-indigo-50;
    }
</style>