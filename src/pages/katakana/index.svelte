<Counter type="countdown" value={countdown} />
<Counter
  type="completion"
  value={[$counter, $selected.limit === '' ? 40 : $selected.limit]} />
<div class="flex flex-col h-screen justify-center items-center bg-gray-100">
  <h1 class="text-8xl {$selected.font}">{katakana}</h1>
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
  import { metatags, redirect } from "@sveltech/routify"
  import Counter from "../_components/Counter.svelte"
  import Progressbar from "../_components/Progressbar.svelte"
  import { selected, scores, isValid, counter } from "../_components/stores"
  import data from "../../data/katakana.json"
  import { Timer, shuffleArray } from "../_components/utils"

  metatags.title = "Hiragana | カナイズ"
  metatags.description = "Hiragana and katakana quiz app"

  let input

  let currentData = shuffleArray(data.data).splice(
    0,
    $selected.limit === "" ? 40 : $selected.limit
  )
  let katakana = currentData[0].katakana

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
    if ($counter + 1 === $selected.limit) $redirect("/result")
    if (input === currentData[$counter].romaji) {
      const correct = {
        katakana: currentData[$counter].katakana,
        user: input,
        correct: currentData[$counter].romaji,
      }

      scores.update(curr => ({
        ...curr,
        correct: [...curr.correct, correct],
      }))
    } else {
      const wrong = {
        katakana: currentData[$counter].katakana,
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
    katakana = currentData[$counter].katakana
    countdown = parseInt($selected.time)
    timer.reset()
  }
</script>
