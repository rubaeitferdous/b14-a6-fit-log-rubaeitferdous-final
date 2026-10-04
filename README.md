# FitLog

FitLog is a responsive workout library and training log for planning and tracking strength workouts. Browse exercises, review their details, build a plan of up to five lifts for today, and save workouts to revisit later.

## Features

- Browse workout cards with muscle groups, equipment, duration, calories, and rating.
- Open a dedicated detail page for each workout, including specifications and instructions.
- Add up to five workouts to today's plan, mark completed workouts, or remove them.
- Save workouts for later and switch between the plan and saved lists.
- Sort plan and saved workouts by duration, calories, or rating.
- View live exercise, duration, and calorie totals for today's plan.
- Keep plan, saved, and completion data across reloads using browser local storage.
- Use the responsive interface on mobile, tablet, and desktop.

## Technologies

- [Next.js](https://nextjs.org/) App Router
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- FitLog Workers API

## Workout data

Workout data is fetched from the FitLog API:

- All workouts: <https://api.api-store.workers.dev/api/fitlog>

The workout list is fetched on the server and revalidated every hour. Plan and saved workout selections are stored in the browser under the `fitlog-plan` local-storage key.

## Getting started

### Requirements

- Node.js 20.9 or later
- npm

### Install and run

```bash
npm install
npm run dev
```

Open <http://localhost:3000> in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server (run `npm run build` first) |

## Deployment

FitLog can be deployed to a Next.js-compatible hosting provider, such as Vercel. Connect the repository, install dependencies, and use `npm run build` as the build command. No environment variables are required by the current application.
