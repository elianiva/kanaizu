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
  import { isVisible, data } from "./_components/stores.js"

  let isModalShown


  metatags.title = "Kanaizu | カナイズ"
  metatags.description = "Hiragana and katakana quiz app"
</script>
