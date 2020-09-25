<div class="text-left w-full">
  <span class="block text-2xl font-bold tracking-wider mb-2 mplus">{title} ({data.length})</span>
  <table class="rounded-md overflow-hidden mplus w-full">
    <thead>
      <tr class="bg-gray-200 text-xl">
        <th class="px-6 py-4">#</th>
        <th class="px-6 py-4">Hiragana</th>
        <th class="px-6 py-4">Correct</th>
        <th class="px-6 py-4">Your Answer</th>
      </tr>
    </thead>
    <tbody>
      {#if data.length < 1}
        <tr
          class="bg-white text-lg">
          <td class="px-6 py-4 text-center" colspan="4">You don't have any {type} answer.</td>
        </tr>
      {:else}
        {#each data as item, index}
          <tr
            class="bg-white text-lg even:bg-gray-100">
            <td class="px-6 py-4">{index + 1}</td>
            <td class="px-6 py-4">{item.hiragana}</td>
            <td class="px-6 py-4">{item.correct}</td>
            <td class="px-6 py-4">{item.user}</td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>

<script>
  export let data, title, type
</script>
