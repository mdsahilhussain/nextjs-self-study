import { ClassValue, clsx } from "clsx";
import { twMerge } from 'tailwind-merge'

export function clsname(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}