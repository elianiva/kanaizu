<div class="w-full flex flex-col items-center justify-center">
  <h1
    class="text-8xl font-bold mplus tracking-widest px-8 py-4 bg-gray-900
      text-white rounded-lg mt-4xl mt-far">
    クナイズ <span class="text-gray-900 bg-gray-100 px-4 rounded-lg">kunaizu</span>
  </h1>
  <span class="text-4xl mplus my-8">ひらがな and カタカナ quiz app</span>
  <div class="flex gap-4">
    <Button
      to="/hiragana"
      txt="Hiragana"
      styles="montserrat font-semibold hover:text-blue-600 hover:move-up" />
    <Button
      to="/katakana"
      txt="Katakana"
      styles="montserrat font-semibold hover:text-blue-600 hover:move-up" />
  </div>
</div>

<script>
  import { metatags } from "@sveltech/routify"
  import Button from "./_components/Button.svelte"
  metatags.title = "Kunaizu | クナイズ"
  metatags.description = "Hiragana and katakana quiz app"
</script>
