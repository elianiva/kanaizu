<div
  class="{type === 'countdown' ? 'left-4' : 'right-4'} fixed top-4 py-4 px-8 bg-gray-800
    rounded-lg">
  <span
    class="text-2xl text-white mplus font-bold">{Array.isArray(value) ? `${value[0]} / ${value[1]}` : value}</span>
</div>

<script>
  export let type
  export let value
</script>
