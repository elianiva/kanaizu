<div class="flex items-center justify-between gap-8">
  <label class="text-xl" for="level">{data.title}</label>
  <select
    class="py-2 px-4 bg-white rounded-md shadow-md text-lg"
    name="level"
    id="level">
    {#each data.items as item}
      <option value={item.value}>{item.text}</option>
    {/each}
  </select>
</div>

<script>
  export let data
</script>
