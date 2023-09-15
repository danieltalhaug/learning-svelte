<script lang="ts">
    export let label: string;
</script>

<label class="flex flex-col gap-2 text-base font-medium">
    {label}
    <slot />
</label>