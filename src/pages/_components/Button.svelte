{#if link}
  <a
    class="font-4xl text-2xl rounded-md shadow-lg text-center smooth {styles}"
    href={href}>
    {txt}
  </a>
{:else}
  <button
    class="font-4xl text-2xl rounded-md shadow-lg smooth {styles}"
    on:click={onclick}>
    {txt}
  </button>
{/if}

<script>
  import { url } from "@sveltech/routify"

  export let onclick = ""
  export let href = ""
  export let link = false
  export let txt, styles
</script>
