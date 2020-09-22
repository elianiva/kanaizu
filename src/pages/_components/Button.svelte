<a
  class="py-4 px-8 font-4xl text-2xl rounded-md shadow-md smooth {styles}"
  href={$url(to)}>
  {txt}
</a>

<script>
  import { url } from "@sveltech/routify"
  export let to, txt, styles
</script>
