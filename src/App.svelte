<script lang="ts">
    // Types
    import type { poll } from './common/types';
    import { buttonTypes } from './common/enums';
    // Components
    import AppContainer from './lib/AppContainer.svelte';
    import AppAside from './lib/AppAside.svelte';
    import PollsList from './lib/PollsList.svelte';
    import PollForm from './lib/PollForm.svelte';
    import Button from './lib/Button.svelte';

    let showAside = false;

    function toggleAside() {
        showAside = !showAside;
    }
</script>

<AppContainer>
    <header class="text-center my-12 flex gap-8 flex-col">
        <h1 class="text-indigo-950 text-4xl font-black">Pollio</h1>
        <p class="text-lg text-indigo-800">
            No, not a dyslexic's version of the devestating virus but a simple poll creator made using Svelte and Tailwind CSS with help from 
            <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO">Net Ninja</a>'s Svelte beginners course.
        </p>
        <span>
            <Button
                type={buttonTypes.PRIMARY}
                on:click={toggleAside}
            >
                { !showAside ? 'New poll' : 'Close' }
            </Button>
        </span>
    </header>
    <PollsList />
</AppContainer>

<AppAside
    show={showAside}
    title={'Create new poll'}
    subtitle={'Add a question and the amount of options you want, submit to create a new poll.'}
>
    <PollForm
        on:cancel={toggleAside}
    />
</AppAside>

<style>

</style>
