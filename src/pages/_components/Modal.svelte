<div
  class="fixed top-0 left-0 right-0 bottom-0 bg-black z-10 bg-opacity-90 flex
    items-center justify-center mplus"
  transition:fade={{ duration: 250 }}>
  <div
    class="flex flex-col align-center relative p-8 bg-white rounded-md z-20"
    transition:fly={{ y: -25, duration: 250 }}>
    <h1 class="text-gray-900 text-2xl mplus font-semibold mb-4">{title}</h1>
    <form
      class="flex flex-col gap-4 text-gray-800"
      on:submit|preventDefault={() => null}>
      <Option data={data.limit} name="limit" type="input" />
      <Option data={data.time} name="time" />
      <Option data={data.font} name="font" />
      <div class="flex items-center justify-between gap-8">
        <span class="text-xl">Font preview</span>
        <span class="text-2xl {$selected.font}">ひらがなとカタカナ</span>
      </div>
    </form>
    <div class="flex gap-4 mt-4">
      <Button
        href={$url(`../${path}`)}
        link={true}
        onclick={() => isValid.set(true)}
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
  import { url } from "@sveltech/routify"
  import Button from "./Button.svelte"
  import Option from "./Option.svelte"
  import { isVisible, selected, isValid } from "./stores.js"

  export let data, title, path
</script>
