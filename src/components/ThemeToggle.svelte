<script lang="ts">
    import { getTheme, setTheme } from "@scripts/theme"

    const darkThemes = ["dark", "mocha"]
    const lightThemes = ["light", "latte"]
    let toggled = $state.raw(darkThemes.includes(getTheme()));

    function onClick(e: MouseEvent) {
        setTheme(toggled ? lightThemes[darkThemes.indexOf(getTheme())] : darkThemes[lightThemes.indexOf(getTheme())]);
        toggled = darkThemes.includes(getTheme())
    }
</script>

<button onclick={onClick} name="Toggle theme">
    <div>
        <!-- svelte-ignore slot_element_deprecated -->
        {#if toggled}
            <slot name="toggled" />
        {:else}
            <slot name="untoggled" />
        {/if}
    </div>
</button>

<style lang="scss">
    button {
        all: unset;
        cursor: pointer;
        border-radius: 50%;
        transition: all 0.5s;

        div {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &:hover {
            background: color-mix(in srgb, var(--onSurfaceAlt) 8%, transparent);
        }
    }
</style>