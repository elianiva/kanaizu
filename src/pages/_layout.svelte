<div in:fade="{{duration: 500}}" class="flex flex-col min-h-screen">
  <slot />
</div>

<script>
  import {fade} from "svelte/transition"
</script>
