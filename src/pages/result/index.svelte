<div
  class="min-h-screen w-full flex flex-col items-center px-16 pb-16 bg-gray-100">
  <h1
    class="text-6xl px-4 py-2 bg-gray-900 text-white font-bold mt-16 mb-8
      tracking-widest rounded-md mplus">
    Final <span class="text-gray-900 bg-gray-100 rounded-md px-2">Result</span>
  </h1>
  <div
    class="flex justify-between items-center w-full p-4 bg-white rounded-md
      shadow-md">
    <span class="text-2xl mplus">Your average time was <span class="font-bold">{average}
        second. <span
          class="font-bold text-blue-600">{getMessage(average)}</span></span></span>
    <Button
      link={true}
      href="/"
      txt="Play Again"
      styles="bg-gray-900 text-white mplus px-4 py-2 self-start hover:bg-black hover:move-up" />
  </div>
  <div
    class="flex flex-col items-center w-full p-4 bg-white rounded-md shadow-md
      mt-8">
    <span class="text-4xl font-bold mplus">Details</span>
    <hr class="w-1/12 h-1 bg-gray-300 rounded-md" />
    <div class="w-full grid grid-cols-2 gap-8 mt-4">
      <Table data={$scores.correct} title="Correct" type="correct" />
      <Table data={$scores.wrong} title="Wrong" type="wrong" />
    </div>
  </div>
</div>

<script>
  import { scores } from "../_components/stores"
  import Table from "./_components/Table.svelte"
  import Button from "../_components/Button.svelte"
  const totalTime = $scores.times.reduce((curr, acc) => (curr + acc), 0)
  const average = totalTime / $scores.times.length

  const getMessage = avg => {
    if (avg < 2) return "Awesome!"
    if (avg < 5) return "Great!"
    if (avg < 10) return "You're doing OK!"
    return "Maybe try it again? But faster."
  }
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
