# AGENTS.md

`nuxt-modern-cropper` is a Nuxt 3 module wrapping [vue-modern-cropper](https://github.com/NamesMT/vue-modern-cropper) (a wrapper over `cropperjs` v2). It registers `<ModernCropper />` client-only via `addComponent`; the npm package ships only `dist` (`files: ["dist"]`).

## Docs

Where knowledge lives, and when to reach for each:

| tier | what it holds | when you use it |
| --- | --- | --- |
| `AGENTS.md` — this file | orientation and the rules that prevent defects | read every session; write when a rule is learned the hard way |
| `.agentDocs/` | depth: module rationale, traps with their causes, compatibility | read on demand, before touching that area; write when a rule needs its reasoning kept |
| `docs/` | how-to and reference for a person using this package | read when the task is user-facing; write in the same commit as the change |
| `README.md` | the first read, for a person | write alongside `docs/` |

- **One home per fact.** State the rule here, keep the reasoning in `.agentDocs/` and link it — never both.
- **A dead pointer is a bug.** If the target is gone, delete the pointer rather than leave it.
- Move depth behind a pointer once a section outgrows a screen or two; keep the rule inline.

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
- ESLint (`@nuxt/eslint-config`) owns lint and formatting — run `pnpm run lint` before claiming a change is clean.
- TypeScript throughout, ESM only (`"type": "module"`), pnpm 12 (`packageManager`).
- `vue-modern-cropper@^1` is a required peer dependency — a consuming app must install both.

## How to work here

- **Check the callers before you change anything.** Grep who uses it and which tests name it. If the
  impact is unclear, say so — do not guess.
- **Never overwrite or delete a large section you have not understood.** Read it, or say what you could
  not determine and ask.
- **Do not invent requirements.** Build what was asked; surface what else you notice and let it be
  decided.
- **Fix the class, not the instance.** A copied helper, a rule stated twice, a guard bypassed by a
  second path is one problem: one implementation, one guard. That is the work, not a follow-up to ask
  for. Stay inside the task rather than refactoring the world.
- **Verify before claiming, and say what you checked.** A passing test is not evidence it pins
  anything — **break the thing it guards and watch it fail.** If it still passes, either the test is
  decoration or a different guard is running; find out which. Where a stub cannot answer the question,
  drive the real thing.
- **Never write an identifier from memory.** A commit hash, path, line number or version must be quoted
  from the source; a plausible-looking invented one is worse than none.
- **A stated blocker is a hypothesis, not a fact.** Re-test "cannot install X" / "tool unavailable"
  before inheriting it, and never report a failure your own flag forced.
- **Report the risk with the change** — correctness, security, operational and integration; plus what
  you could not verify and every assumption you made. An unverified claim marked as such beats a
  confident one that is wrong.
- **Missing recall of this repo?** Read this file, `.agentDocs/` and `git log` before acting, then ask
  1–3 focused questions rather than guessing at intent.
- Here `test/basic.test.ts` only asserts the fixture page renders, so a green suite says very little.

## Conciseness

**Prune verbose, keep correctness** — code, comments, docs alike.

- Code: a comment only for non-obvious *intent*, never to restate the line, and never long. A block
  arguing for its own change is a commit message.
- Docs: one idea per sentence. Cut anything that would not change what a reader does.
- Delete history `git log` already holds — keep the *rule* that came out of it, not the story.
- **Never drop a caveat to save a line.** Concise means no filler, not fewer facts.

## User-facing docs

`README.md` is the only user-facing doc here (there is no `docs/`): concise first read, depth behind its
`<details>` spoilers, visuals for skimmers. Docs ship with the change, in the same commit — a new
`package.json` script moves the "Local development" block with it.

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
