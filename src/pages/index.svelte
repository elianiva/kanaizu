{#if isModalShown}
  <Modal data={data} />
{/if}

<div class="flex-1 flex flex-col items-center justify-center">
  <h1
    class="text-8xl font-bold mplus tracking-widest px-8 py-4 bg-gray-900
      text-white rounded-lg mt-4xl mt-far">
    カナイズ <span class="text-gray-900 bg-gray-100 px-4 rounded-lg">kanaizu</span>
  </h1>
  <span class="text-4xl mplus my-8">ひらがな and カタカナ quiz app</span>
  <div class="flex gap-4">
    <Button
      onclick={() => isVisible.update(status => !status)}
      txt="Hiragana"
      styles="py-4 px-8 montserrat font-semibold hover:bg-black bg-gray-900 text-white hover:move-up" />
    <Button
      onclick={() => isVisible.update(status => !status)}
      txt="Katakana"
      styles="py-4 px-8 montserrat font-semibold hover:bg-black bg-gray-900 text-white hover:move-up" />
  </div>
</div>
<Footer />

<script>
  import { metatags } from "@sveltech/routify"
  import Button from "./_components/Button.svelte"
  import Footer from "./_components/Footer.svelte"
  import Modal from "./_components/Modal.svelte"
  import { isVisible } from "./_components/stores.js"

  let isModalShown

  isVisible.subscribe(value => {
    isModalShown = value
  })

  const data = {
    level: {
      title: "JLPT Level",
      items: [
        { value: "n5", text: "N5" },
        { value: "n4", text: "N4" },
        { value: "n3", text: "N3" },
        { value: "n2", text: "N2" },
        { value: "n1", text: "N1" },
      ],
    },
    limit: {
      title: "Word Limit",
      min: 10,
      max: 800,
      placeholder: 40
    },
    time: {
      title: "Time Limit",
      items: [
        { value: "10s", text: "10 secs" },
        { value: "30s", text: "30 secs" },
        { value: "1m", text: "1 min" },
        { value: "2m", text: "2 mins" },
        { value: "5m", text: "5 mins" },
      ],
    },
    font: {
      title: "Font Family",
      items: [
        { value: "noto-sans", text: "Noto Sans JP" },
        { value: "noto-serif", text: "Noto Serif JP" },
        { value: "mplus-normal", text: "M PLUS 1p" },
        { value: "mplus", text: "M PLUS Rounded 1c" },
      ],
    },
  }

  metatags.title = "Kanaizu | カナイズ"
  metatags.description = "Hiragana and katakana quiz app"
</script>
