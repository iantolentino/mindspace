# CONTRIBUTING.md

# Contributing to MindSpace

## Contribution Workflow
1. Create a feature branch from `main` using the Branching Strategy below.
2. Implement your changes following the modular architecture.
3. Write unit tests for new business logic in `src/__tests__`.
4. Run the CI suite locally: `npm run lint && npm run test`.
5. Submit a Pull Request with a clear description of the change.

## Branching Strategy
Use the following prefixes for branch names to maintain repository organization:
- `feature/` - For new features (e.g., `feature/custom-node-colors`)
- `fix/` - For bug fixes (e.g., `fix/json-import-error`)
- `chore/` - For infrastructure, dependency updates, or documentation

## Commit Message Conventions
We follow the Conventional Commits specification:
- `feat: added custom nodes`
- `fix: resolved canvas overflow`
- `test: added store coverage`
- `docs: updated readme instructions`

## Code Quality Standards
- **React Components:** Must be functional components using Hooks. Use `memo` for expensive canvas components.
- **State Management:** All shared state must reside in the Zustand store. UI components should act as presentational layers or dispatchers.
- **Environment Variables:** Any new variable must be added to `.env.example` and validated via the Zod schema in `src/config/env.ts`.
- **Styling:** Use Tailwind utility classes. Avoid inline styles unless calculating dynamic coordinates for the canvas.

## Review and Approval Process
- Pull Requests require at least one approval from a lead maintainer.
- The automated CI pipeline (GitHub Actions) must pass entirely (Lint, Test, Build) before merging is permitted.
- **Squash and Merge** is the default merge strategy to maintain a clean, linear project history.