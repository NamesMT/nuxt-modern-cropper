# AGENTS.md

`nuxt-modern-cropper` is a Nuxt 3 module wrapping [vue-modern-cropper](https://github.com/NamesMT/vue-modern-cropper) (a wrapper over `cropperjs` v2). It registers `<ModernCropper />` client-only via `addComponent`; the npm package ships only `dist` (`files: ["dist"]`).

## Docs

Three tiers, so a reader loads only what the task needs:

1. **`AGENTS.md`** (this file) — orientation and the rules that prevent defects. Read every session.
2. **`.agentDocs/`** — depth that would bloat this file: module rationale, traps with their causes,
   compatibility rules. Read on demand.
3. **`README.md` / `docs/`** — for a person using the package, not for an agent.

**There is no `.agentDocs/` here yet and none is needed at this size.** Create one when a section
above outgrows a screen or two: move the *reasoning* out and keep the *rule* here with a pointer to
it — nobody reads a file they do not open. Each document opens with a one-line scope, and this file
links it.

## Commands

```sh
pnpm run dev:prepare      # stub build + generate .nuxt and playground/.nuxt types — run this first
pnpm run dev              # nuxi dev playground
pnpm run dev:build        # nuxi build playground
pnpm run lint             # eslint (@nuxt/eslint-config); it also owns formatting
pnpm run test             # vitest run — the e2e suite (`test:watch` to watch)
pnpm run test:types       # vue-tsc --noEmit in the root and in playground/
pnpm run prepack          # nuxt-module-build build -> dist, the real build
pnpm run release:check 1.8.0   # validate a version against package.json
pnpm run release:preview  # print the changelog the next release would get
```

No `check`/`quickcheck` script. CI runs `lint`, and `dev:prepare` then `pnpm test`; the release gate is `lint && test:types && vitest run`.

## Structure

- `src/module.ts` — `defineNuxtModule` with `configKey: 'modernCropper'`; the `addComponent` call points at
  `vue-modern-cropper`'s `ModernCropper` with `mode: 'client'`.
- `src/runtime/server/tsconfig.json` — the only runtime file; there is no runtime plugin or component.
- `test/basic.test.ts` — `@nuxt/test-utils/e2e` test over `test/fixtures/basic/**`, a minimal Nuxt app whose
  `nuxt.config.ts` imports the module from `../../../src/module`.
- `playground/**` — the dev app; its `nuxt.config.ts` loads the module from `../src/module`.
- `.github/workflows/ci.yml` — push/PR to `main`, on Node 22: a lint job and a test job (`dev:prepare` then `pnpm test`).
- `.github/workflows/release.yml` — manual, version-first release on Node 24 (see below).
- `dist/` — build output, gitignored, never committed.

## Conventions

- Conventional commits (`feat:`, `fix:`, `chore:`, …) — the changelog is derived from them.
- ESLint flat config via `@nuxt/eslint-config` with `tooling` and `stylistic`; run `pnpm run lint` before claiming a change is clean.
- TypeScript throughout, ESM only (`"type": "module"`), pnpm 12 (`packageManager`).
- `vue-modern-cropper@^1` is a required peer dependency — a consuming app must install both.

## Releasing

Manual and version-first: dispatch **Actions → Release → Run workflow** with the version; it is the only publish path (a pushed tag publishes nothing). `dry-run` still writes `CHANGELOG.md`, bumps `package.json` and creates the commit and tag locally — it only skips the push, GitHub release and npm publish. One-time trusted-publisher setup (publish once by hand first) is in the README.

## Gotchas

- There is no `build` script — `pnpm run prepack` (`nuxt-module-build build`) is the build, and `npm publish` re-runs
  `prepublishOnly` (`pnpm run dev:prepare`) then `prepack` anyway.
- `pnpm run test:types` and the e2e suite both fail without a prior `pnpm run dev:prepare`.
- The release workflow's `--clean` requires a clean `git status`; `dev:prepare` only writes gitignored dirs
  (`.nuxt`, `playground/.nuxt`, `dist`), so it does not trip that check.
- No local `vue-modern-cropper` workspace entry exists: `dev:prepare`, the playground and the e2e fixture all
  resolve the required peer from the *published* `^1` in the lockfile, not from your checkout.

## How to work here

- Check who calls it before you change it; if the impact is unclear, say so rather than guessing.
- Never overwrite or delete a large section you have not understood.
- Do not invent requirements; surface what looks needed.
- Report the risk, not only the change — correctness, security, operational, integration.
- **Fix the root cause, not the instance.** The same bug under another name — a copied helper, a rule
  stated twice, a guard bypassed by a second path — means fix the class: one implementation, one guard.
  That is the work, not a follow-up to ask for.
- Verify before claiming, and say which direction you checked; a passing test is not evidence it pinned
  anything (`test/basic.test.ts` only asserts the fixture page renders).
- If recall of this project is missing, read this file + `git log` before acting.

## Conciseness (applies everywhere)

Prune verbose, keep correctness — code, comments, docs alike. Code: a comment only for non-obvious
intent. Docs: one idea per sentence; cut what would not change what a reader does. Delete history
`git log` already holds — keep the rule, not the story. Never drop a caveat to save a line.

## User-facing docs

`README.md` is the only user-facing doc here (there is no `docs/`): concise first read, depth behind its
`<details>` spoilers, visuals for skimmers. Docs ship with the change, in the same commit — a new
`package.json` script moves the "Local development" block with it.
