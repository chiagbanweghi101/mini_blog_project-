export interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  datePosted: string; // ISO date string (e.g. YYYY-MM-DD or full ISO timestamp)
}
