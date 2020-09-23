<button
  class="font-4xl text-2xl rounded-md shadow-lg smooth {styles}"
  on:click={onclick}>
  {txt}
</button>

<script>
  import { url } from "@sveltech/routify"

  export let onclick, txt, styles
</script>
