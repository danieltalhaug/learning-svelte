<script lang="ts">
    export let show: boolean;
    export let title: string;
    export let subtitle: string;

    $: position = show ? 'translate-x-0' : 'translate-x-full';
</script>

<aside class="{position} top-0 right-0 md:w-[520px] w-full bg-indigo-950 text-white fixed h-full transition-transform motion-reduce:transition-none">
    <header class="p-20">
        <h3 class="text-4xl font-semibold text-white text-indigo-50">{title}</h3>
        <p class="text-base text-indigo-100 mt-2">{subtitle}</p>
    </header>
    <article class="px-20 max-h-min overflow-y-auto">
        <slot />
    </article>
</aside>