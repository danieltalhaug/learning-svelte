<script lang="ts">
    // Types
    import type { poll } from './common/types';
    import { buttonTypes } from './common/enums';
    // Components
    import AppContainer from './lib/AppContainer.svelte';
    import AppAside from './lib/AppAside.svelte';
    import PollForm from './lib/PollForm.svelte';
    import Button from './lib/Button.svelte';

    let showAside = false;
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
    <Button
        type={buttonTypes.PRIMARY}
        on:clicked={toggleAside}
    >
        New poll
    </Button>
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
