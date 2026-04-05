# README.md

# MindSpace: Enterprise Mindmap Architecture

## Project Overview
MindSpace is a secure, client-side-only mindmap generation tool. It leverages React Flow for canvas management and Zustand for state. By processing data strictly on the client and relying on local JSON exports, the application bypasses the need for a database, achieving a zero-data-retention security posture.

## Architecture Summary
- **Framework:** Next.js 14 (App Router)
- **State Management:** Zustand
- **Canvas Engine:** React Flow
- **Styling:** Tailwind CSS
- **Validation:** Zod
- **Infrastructure:** Vercel (Native) / Docker (Agnostic)

## Setup Instructions

### Local Development
1. Clone the repository.
2. Copy the environment template: `cp .env.example .env.local`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

### Docker Usage
To test the production build in an isolated environment:
```bash
docker-compose up --build
```
Access the application at `http://localhost:3000`.

## CI/CD Overview
GitHub Actions is configured to run on every push and Pull Request to `main`. The pipeline guarantees code quality by sequentially executing:
1. **ESLint checks:** Static code analysis for patterns and smells.
2. **Jest Unit Tests:** Validation of core store logic and state transitions.
3. **Next.js Production Build:** Ensuring the application compiles successfully for deployment.

## Deployment
This project is optimized for **Vercel**. To deploy:
1. Push your code to a GitHub repository.
2. Import the project into the Vercel Dashboard.
3. The platform will automatically detect the Next.js framework and deploy via the `main` branch.

## Security Notes
- **Secrets Management:** No database is utilized. If third-party API keys are introduced, they must be prefixed with `NEXT_PUBLIC_` only if required by the client. Server-side secrets must never be prefixed to avoid browser exposure.
- **Data Privacy:** User data resides entirely in the browser memory (DOM). "Saving" a mindmap generates a local Blob URL for immediate download; no data is sent to a server.