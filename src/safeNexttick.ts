import { isFunction } from './base'

export async function delayTimer(delay = 0) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve(true)
      clearTimeout(timer)
    }, delay)
  })
}
export async function safeNextick(): Promise<void>
export async function safeNextick(option: { delay: 0 }): Promise<void>
export async function safeNextick(fn: () => void): Promise<void>
export async function safeNextick(fn: () => void, option: { delay: 0 }): Promise<void>
export async function safeNextick(fnOrOption?: (() => void) | { delay: 0 }, option?: { delay: 0 }) {
  const delay = (typeof fnOrOption === 'function' ? option?.delay : fnOrOption?.delay) ?? 0
  await delayTimer(delay)
  const fn = typeof fnOrOption === 'function' ? fnOrOption : undefined
  if (fn && isFunction(fn))
    fn()
}
