<div
  class="fixed top-0 left-0 right-0 bottom-0 bg-black z-10 opacity-75 flex
    align-center justify-center" />
<div class="relative p-8 bg-white rounded-md h-64 w-64 opacity-100 z-20">
  <h1 class="text-gray-900 text-2xl mplus">Hiragana Settings</h1>
  <Button
    onclick={() => isVisible.update(status => !status)}
    txt="ok"
    styles="montserrat font-semibold hover:bg-black bg-gray-900 text-white hover:move-up"
    />
</div>

<script>
  import Button from "./Button.svelte"
  import { isVisible } from "./stores.js"
</script>
