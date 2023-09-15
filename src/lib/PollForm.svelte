<script lang="ts">
    // Types
    import type { id, question, answer } from '../common/types';
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
    let answers: answer[] = [
        {id: nanoid(), value: '', count: 0},
    ]
    
    function onAddNewAnswer() {
        answers = [
            ...answers,
            {id: nanoid(), value: '', count: 0},
        ];
    }

    // Gets the Index of the answer, can be used for displaying it's number
    // in the rendered list of answers
    function getAnswerIndex(id: id) {
        return answers.findIndex(answer => answer.id === id);
    }

    // Submits and creates a new poll
    function onSubmit(): void {
        dispatch('submit', {
            id: nanoid(),
            question: newQuestion,
            answers,
        });

        resetForm();
    }

    function onCancel(): void {
        dispatch('cancel');
        resetForm();
    }

    function resetForm() {
        form.reset();
    }

</script>

<form
    bind:this={form}
    class="flex flex-col gap-4"
    on:submit|preventDefault
>
    <FormLabel label={'Poll question'}>
        <input type="text" bind:value={newQuestion}>
    </FormLabel>

    {#each answers as answer (answer.id)}
        <FormLabel label={'Answer ' + (getAnswerIndex(answer.id) + 1)}>
            <input type="text" bind:value={answer.value}>
        </FormLabel>
    {/each}

    <Button
        type={buttonTypes.SECONDARY}
        on:clicked={onAddNewAnswer}
    >
        + Add question
    </Button>

    <footer class="my-4 flex justify-between">
        <Button
            type={buttonTypes.SECONDARY}
            on:clicked={onCancel}
        >
            Cancel
        </Button>
        <Button
            type={buttonTypes.PRIMARY}
            on:clicked={onSubmit}
        >
            Create poll
        </Button>
    </footer>
</form>

<style lang="postcss">
    input {
        @apply pl-2 text-indigo-900 w-full h-10 focus:outline-none rounded-md focus:ring-2 ring-indigo-400 focus:ring-opacity-75;
    }
</style>