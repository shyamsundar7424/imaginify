import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// utils.ts
export function handleError(error: unknown): never {
  console.error("An error occurred:", error);
  throw error; // Re-throw for proper propagation
}
