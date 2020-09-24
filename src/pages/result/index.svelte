<div class="min-h-screen flex flex-col items-center text-center pb-16 bg-gray-100">
  <h1
    class="text-6xl px-4 py-2 bg-gray-900 text-white font-bold mt-16 mb-8
      tracking-widest rounded-md mplus">
    Final <span class="text-gray-900 bg-gray-100 rounded-md px-2">Result</span>
  </h1>
  <div class="flex gap-8">
    <Table data={$scores.correct} title="Correct" />
    <Table data={$scores.wrong} title="Wrong" />
  </div>
</div>

<script>
  import {scores} from "../_components/stores"
  import Table from "./_components/Table.svelte"
  /* const scores = { */
  /*   correct: [ */
  /*     { */
  /*       hiragana: "わたし", */
  /*       correct: "watashi", */
  /*       user: "watashi", */
  /*     }, */
  /*   ], */
  /*   wrong: [ */
  /*     { */
  /*       hiragana: "わたし", */
  /*       correct: "watashi", */
  /*       user: "watashi", */
  /*     }, */
  /*   ], */
  /*   times: [1], */
  /* } */
</script>
