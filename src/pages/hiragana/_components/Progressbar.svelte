<div
  class="fixed bottom-4 left-4 right-4 bg-gray-300 h-8 rounded-lg shadow-inner">
  <div class="h-full bg-blue-600 rounded-lg shadow-md transition-all ease-out duration-200" id="progressbar" />
</div>

<script>
  import { onMount } from "svelte"
  import { counter, selected } from "../../_components/stores.js"

  onMount(() => {
    const progressbar = document.querySelector("#progressbar")
    counter.subscribe(value => {
      const limit = $selected.limit === "" ? 40 : $selected.limit
      const width = (100 / parseInt(limit)) * $counter
      console.log(width)
      progressbar.style.width = `${width}%`
    })
  })
</script>
