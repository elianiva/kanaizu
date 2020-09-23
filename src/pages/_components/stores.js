import { writable, readable } from "svelte/store"

export const isVisible = writable(false)

export const selected = writable({
  level: "n5",
  limit: "",
  time: "10s",
  font: "noto-sans",
})

export const data = readable({
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
    placeholder: 40,
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
})
