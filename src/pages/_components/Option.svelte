<div class="flex items-center justify-between gap-8">
  <label class="text-xl" for="level">{data.title}</label>
  {#if type === 'input'}
    <input
      class="py-2 px-2 bg-white rounded-md shadow-md text-lg"
      type="number"
      min={data.min}
      max={data.max}
      bind:value={$selected[name]}
      placeholder={data.placeholder} />
  {:else if type === 'checkbox'}
    <input
      class="w-4 h-4 bg-white rounded-md shadow-md text-lg"
      type="checkbox"
      bind:value={$selected[name]} />
  {:else}
    <select
      class="py-2 px-4 bg-white rounded-md shadow-md text-lg"
      bind:value={$selected[name]}
      id="level">
      {#each data.items as item}
        <option value={item.value}>{item.text}</option>
      {/each}
    </select>
  {/if}
</div>

<script>
  import { selected } from "./stores"
  export let data, name
  export let type = "select"
</script>
