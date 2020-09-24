import { writable, readable } from "svelte/store"

export const isVisible = writable(false)

export const selected = writable({
  auto: false,
  limit: "",
  time: "10",
  font: "noto-sans",
})

export const data = readable({
  auto: {
    title: "Automatic enter",
    placeholder: 40,
  },
  limit: {
    title: "Word Limit",
    min: 10,
    max: 800,
    placeholder: 40,
  },
  time: {
    title: "Time Limit",
    items: [
      { value: "10", text: "10 secs" },
      { value: "30", text: "30 secs" },
      { value: "60", text: "1 min" },
      { value: "120", text: "2 mins" },
      { value: "400", text: "5 mins" },
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
})
