<div class="text-left">
  <span class="block text-2xl font-bold tracking-wider mb-2 mplus">{title} ({data.length})</span>
  <table class="rounded-md overflow-hidden mplus">
    <thead>
      <tr class="bg-gray-200 text-xl">
        <th class="px-6 py-4">#</th>
        <th class="px-6 py-4">Hiragana</th>
        <th class="px-6 py-4">Correct</th>
        <th class="px-6 py-4">Your Answer</th>
      </tr>
    </thead>
    <tbody>
      {#each data as correct,index}
        <tr class="bg-white text-lg border-solid border-gray-200 border-t-2 odd:bg-gray-100">
          <td class="px-6 py-4">{index+1}</td>
          <td class="px-6 py-4">{correct.hiragana}</td>
          <td class="px-6 py-4">{correct.correct}</td>
          <td class="px-6 py-4">{correct.user}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<script>
  export let data, title
</script>
