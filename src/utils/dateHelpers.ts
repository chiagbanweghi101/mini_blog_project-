/** Returns true if the given ISO date string falls within the last 24 hours. */
export function isPostedWithinLast24Hours(datePosted: string): boolean {
  const postedAt = new Date(datePosted).getTime();
  const now = Date.now();
  const twentyFourHoursMs = 24 * 60 * 60 * 1000;

  return now - postedAt <= twentyFourHoursMs && now - postedAt >= 0;
}

/** Formats an ISO date string into a readable local date. */
export function formatDisplayDate(datePosted: string): string {
  return new Date(datePosted).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/** Short preview of post content (first few words). */
export function getContentPreview(content: string, wordLimit = 15): string {
  const words = content.trim().split(/\s+/);
  if (words.length <= wordLimit) {
    return words.join(' ');
  }
  return `${words.slice(0, wordLimit).join(' ')}…`;
}
