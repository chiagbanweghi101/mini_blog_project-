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

/** Short preview of post content (keeps line breaks; caps long posts). */
export function getContentPreview(content: string, maxLines = 3): string {
  const lines = content.trim().split(/\n/).slice(0, maxLines);
  return lines.join('\n');
}
