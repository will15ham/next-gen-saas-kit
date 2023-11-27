import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import stripe from "stripe"

 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
