import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function getChildIndex(node: HTMLElement) {
  return Array.prototype.indexOf.call(node.parentNode?.childNodes, node)
}

export function invariant<T>(
  val: T | null | undefined,
  message: string,
): asserts val is T {
  if (val === undefined || val === null) {
    throw new Error(message)
  }
}
