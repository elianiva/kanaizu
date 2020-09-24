<Counter type="countdown" value={countdown} />
<Counter
  type="completion"
  value={[$counter, $selected.limit === '' ? 40 : $selected.limit]} />
<div class="flex flex-col h-screen justify-center items-center bg-gray-100">
  <h1 class="text-8xl {$selected.font}">{hiragana}</h1>
  <span class="block text-6xl h-32">{input ? input : ''}</span>
  <input
    class="rounded-md shadow-lg text-4xl p-4 outline-none text-center"
    type="text"
    bind:value={input}
    on:keydown={e => e.key === 'Enter' && next()}
    placeholder="Insert your answer" />
</div>
<Progressbar />

<script>
  import { onMount } from "svelte"
  import { redirect } from "@sveltech/routify"
  import Counter from "./_components/Counter.svelte"
  import Progressbar from "./_components/Progressbar.svelte"
  import { selected, scores, isValid, counter } from "../_components/stores"
  import data from "../../data/hiragana.json"
  import { Timer, shuffleArray } from "../_components/utils"
  let input

  let currentData = shuffleArray(data.data).splice(0, $selected.limit)
  let hiragana = currentData[0].hiragana

  let countdown = parseInt($selected.time)

  const timer = new Timer(() => {
    countdown -= 1
    if (countdown === 0) {
      next()
    }
  }, 1000)

  onMount(() => {
    if (!$isValid) $redirect("/")
    timer.start()
  })

  const next = () => {
    if (input === currentData[$counter].romaji) {
      const correct = {
        hiragana: currentData[$counter].hiragana,
        user: input,
        correct: currentData[$counter].romaji,
      }

      scores.update(curr => ({
        ...curr,
        correct: [...curr.correct, correct],
      }))
    } else {
      const wrong = {
        hiragana: currentData[$counter].hiragana,
        user: input,
        correct: currentData[$counter].romaji,
      }
      scores.update(curr => ({
        ...curr,
        wrong: [...curr.wrong, wrong],
      }))
    }
    scores.update(curr => ({
      ...curr,
      times: [...curr.times, parseInt($selected.time) - countdown],
    }))
    counter.update(n => n + 1)
    input = ""
    hiragana = currentData[$counter].hiragana
    countdown = parseInt($selected.time)
    timer.reset()
  }
</script>
