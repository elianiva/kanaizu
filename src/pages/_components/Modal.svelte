<div
  class="fixed top-0 left-0 right-0 bottom-0 bg-black z-10 bg-opacity-90 flex
    items-center justify-center"
  transition:fade={{ duration: 250 }}>
  <div
    class="flex flex-col align-center relative p-8 bg-white rounded-md z-20"
    transition:fly={{ y: -25, duration: 250 }}>
    <h1 class="text-gray-900 text-2xl mplus font-semibold mb-4">
      Hiragana Settings
    </h1>
    <form class="flex flex-col gap-4 text-gray-800">
      <Option data={data.level} />
      <div class="flex items-center justify-between gap-8">
        <label class="text-xl" for="level">Word limit</label>
        <input
          class="py-2 px-2 bg-white rounded-md shadow-md text-lg"
          type="number"
          min="10"
          max="800"
          placeholder="40" />
      </div>
      <Option data={data.time} />
      <Option data={data.font} />
      <div class="flex items-center justify-between gap-8">
        <span class="text-xl">Font preview</span>
        <span class="text-2xl">ひらがなとカタカナ</span>
      </div>
    </form>
    <div class="flex gap-4 mt-4">
      <Button
        onclick={() => isVisible.update(status => !status)}
        txt="Start"
        styles="py-2 flex-1 montserrat font-semibold hover:bg-black bg-gray-900 text-white hover:move-up" />
      <Button
        onclick={() => isVisible.update(status => !status)}
        txt="Cancel"
        styles="py-2 flex-1 montserrat font-semibold hover:bg-gray-300 bg-gray-200 text-gray-600 hover:move-up" />
    </div>
  </div>
</div>

<script>
  import { fade, fly } from "svelte/transition"
  import Button from "./Button.svelte"
  import Option from "./Option.svelte"
  import { isVisible } from "./stores.js"

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
    time: {
      title: "Time Limit",
      items: [
        { value: "10s", text: "10 secs" },
        { value: "30s", text: "30 secs" },
        { value: "1m", text: "1 mins" },
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
</script>
