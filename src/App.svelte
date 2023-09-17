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
    let polls: poll[] = [
        {
            id: "EdmNyOwVF8OHhZm2fafY_",
            question: "Favourite food?",
            options: [
                {
                    id: "cl-JMyPaMWAYY4n5wgd4k",
                    value: "Tacos",
                    count: 4
                },
                {
                    id: "1yYee_WLRcRfVCCSl8za8",
                    value: "Pizza",
                    count: 2
                },
                {
                    id: "yDjbl7iYk3fPPy9hy0orc",
                    value: "BBQ",
                    count: 3
                },
                {
                    id: "2zo9yBplLMay1tX6Ipmzh",
                    value: "Hamburger",
                    count: 9
                }
            ]
        },
        {
            id: "N3MvjvlU-1cRHE5_suEHI",
            question: "Favourite car brand?",
            options: [
                {
                    id: "pugHH39eofm5ckQ-UZN-F",
                    value: "Ferrari",
                    count: 8
                },
                {
                    id: "mehMHHZK8W39znFe7F4oC",
                    value: "Lamborghini",
                    count: 24
                },
                {
                    id: "Dj9iHZoOmEsoG3cvHPyQg",
                    value: "Aston Martin",
                    count: 6
                }
            ]
        }
    ];

    function handleVote(event: CustomEvent): void {    
        const { pollId, optionId } = event.detail;
        const poll = polls.find(poll => poll.id === pollId);
        
        poll?.options.find(option => {
            if (option.id === optionId) {
                return option.count++;
            } 
        });

        // Trigger rerender
        polls = polls;
    } 

    function toggleAside() {
        showAside = !showAside;
    }

    function onCreatePoll(event: CustomEvent) {
        if (!event?.detail) {
            return;
        }

        polls = [...polls, event.detail];
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
    <PollsList {polls} on:vote={handleVote} />
</AppContainer>

<AppAside
    show={showAside}
    title={'Create new poll'}
    subtitle={'Add a question and the amount of options you want, submit to create a new poll.'}
>
    <PollForm
        on:submit={onCreatePoll}
        on:cancel={toggleAside}
    />
</AppAside>

<style>

</style>
