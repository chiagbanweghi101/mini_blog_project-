# Dev Insights — Mini Blog

Internal mini blog platform for **Dev Insights** employees to share quick web development tips, insights, and updates.

Built with **React**, **TypeScript**, and **Vite**.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm (comes with Node.js)

## Install

```bash
npm install
```

## Run (development)

Starts the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build & preview (production)

```bash
npm run build
npm run preview
```

## Test / verify

There is no automated test suite in this foundation build. To verify manually:

1. Run `npm run dev`
2. Confirm the **Dev Insights** header and **New Post** link render
3. Confirm three sample posts appear with title, author, preview, and date
4. Confirm posts by **Moses Peter** have a highlighted background
5. Confirm the post dated “today” shows a **New!** badge
6. Open the browser console and confirm `[withLogger] PostList mounted` is logged

You can also run `npm run build` to type-check and produce a production bundle.

---

## Project structure

```
src/
  components/     # Header, Post, PostList
  hoc/            # withLogger Higher-Order Component
  styles/         # External CSS for Header and Post
  types/          # TypeScript interfaces (Post)
  utils/          # Date/preview helpers
  App.tsx         # Root component
  main.tsx        # Vite entry point
```

---

## Design choices

### Functional vs. class components

All UI components are **functional components**.

- They are the modern React default and work cleanly with hooks (`useEffect` in the HOC).
- `Post` is wrapped with `React.memo` for the same kind of shallow prop comparison that `PureComponent` provides on class components — without needing a class.
- A class component was considered for `Post`, but functional + `memo` better matches what we learned in the first weeks and keeps the codebase consistent.

### Styling methods (two approaches)

1. **External CSS files** — `src/styles/Header.css`, `src/styles/Post.css`, plus `App.css` / `index.css`
2. **Inline styles** — used in `Post` (author name emphasis) and `PostList` (section layout)

### Conditional styling

- Posts by **Moses Peter** receive the `post-card--featured` class (lemon-green background).
- Posts published within the last **24 hours** show a **New!** badge.

### Optimization strategies

- **`React.memo`** on `Post` to avoid unnecessary re-renders when parent state changes but post props stay the same.
- **Unique `key` props** (`post.id`) when mapping the list in `PostList`.
- **`withLogger` HOC** wraps `PostList` and logs mount/unmount messages to the console.

> Note: In React Strict Mode (development), mount effects may run twice. That is expected and helps surface side-effect bugs.

---

## Challenges & reflections

- Keeping types consistent across `Post`, `PostList`, and helpers meant defining a shared `Post` interface early in `src/types/post.ts`.
- Balancing two styling methods without overcomplicating the UI: external CSS for structure/theme, inline styles for small dynamic touches.
- Ensuring the **New!** badge actually appears in demos by using today’s date for one sample post while keeping older dates for the others.

---

## External libraries / packages

| Package | Purpose |
|---------|---------|
| `react` | UI library |
| `react-dom` | DOM rendering |
| `vite` | Dev server & bundler |
| `@vitejs/plugin-react` | React support for Vite |
| `typescript` | Static typing |
| `@types/react` / `@types/react-dom` / `@types/node` | Type definitions |
| `oxlint` | Linting (Vite template default) |

No CSS-in-JS libraries were added; styling uses external CSS + inline styles.

---

## Author

Junior developer assessment for **Dev Insights** Mini Blog foundation.
