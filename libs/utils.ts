import { type ClassValue, clsx } from "clsx";
import { format, toZonedTime } from "date-fns-tz";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toLocalTime(timestamp: number, timezoneOffset: number) {
  const date = new Date(timestamp * 1000 + timezoneOffset);
  return toZonedTime(date, "UTC");
}

export function getInitialZonedDate(timezone: string): Date {
  return toZonedTime(Date.now(), timezone);
}

export function getTimeZoneOffset(timezone: string): number {
  return toZonedTime(Date.now(), timezone).getTimezoneOffset();
}

export function formatTime(
  date: Date,
  timezone: string,
  withSeconds: boolean = false
): string {
  const timeFormat = withSeconds ? "HH:mm:ss" : "HH:mm";
  return format(date, timeFormat, { timeZone: timezone });
}

export function getFormattedTime(
  timezone: string,
  withSeconds: boolean = false
): string {
  const date = getInitialZonedDate(timezone);
  return formatTime(date, timezone, withSeconds);
}

export function extractCityFromTimeZone(timeZone: string) {
  const parts = timeZone.split("/");
  const city = parts[parts.length - 1];
  return city.replace(/_/g, " ");
}

export function capitalizeFirstLetter(word: string): string {
  if (!word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
