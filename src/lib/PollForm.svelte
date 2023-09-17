<script lang="ts">
    // Types
    import type { id, question, option } from '../common/types';
    import { buttonTypes } from '../common/enums';
    // Components
    import FormLabel from './FormLabel.svelte';
    import Button from './Button.svelte';
    // Libs
    import { nanoid } from 'nanoid';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let form: HTMLFormElement;
    let newQuestion: question = '';
    let options: option[] = [
        {id: nanoid(), value: '', count: 0},
    ]
    
    function onAddNewoption() {
        options = [
            ...options,
            {id: nanoid(), value: '', count: 0},
        ];
    }

    // Gets the Index of the option, can be used for displaying it's number
    // in the rendered list of options
    function getoptionIndex(id: id) {
        return options.findIndex(option => option.id === id);
    }

    // Submits and creates a new poll
    function onSubmit(): void {
        dispatch('submit', {
            id: nanoid(),
            question: newQuestion,
            options,
        });

        resetForm();
    }

    function onCancel(): void {
        dispatch('cancel');
        resetForm();
    }

    function resetForm() {
        newQuestion = '';
        options = [{id: nanoid(), value: '', count: 0}];

        form.reset();
    }

</script>

<form
    bind:this={form}
    class="flex flex-col gap-4"
    on:submit|preventDefault
>
    <FormLabel label={'Poll question'}>
        <input type="text" class="focus" bind:value={newQuestion}>
    </FormLabel>

    {#each options as option (option.id)}
        <FormLabel label={'Option ' + (getoptionIndex(option.id) + 1)}>
            <input type="text" class="focus" bind:value={option.value}>
        </FormLabel>
    {/each}

    <Button
        type={buttonTypes.SECONDARY}
        on:click={onAddNewoption}
    >
        + Add option
    </Button>

    <footer class="my-4 flex justify-between">
        <Button
            type={buttonTypes.SECONDARY}
            on:click={onCancel}
        >
            Cancel
        </Button>
        <Button
            type={buttonTypes.PRIMARY}
            on:click={onSubmit}
        >
            Create poll
        </Button>
    </footer>
</form>

<style lang="postcss">
    input {
        @apply pl-2 text-indigo-900 w-full h-10 rounded-md;
    }
</style>