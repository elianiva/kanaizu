export const shuffleArray = arr => {
  return arr.sort(() => Math.random() - 0.5)
}

export class Timer {
  constructor(fn, time) {
    this.fn = fn
    this.time = time
    this.interval = setInterval(fn, time)
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
    return this
  }

  start() {
    if (!this.interval) {
      this.stop()
      this.interval = setInterval(this.fn, this.time)
    }
    return this
  }

  reset() {
    return this.stop().start()
  }
}
