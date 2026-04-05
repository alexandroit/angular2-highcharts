# angular-highcharts Repo Migration

This branch and npm package are ready for the renamed line:

- Branch: `replay/angular-highcharts`
- Latest commit: `d0149e0`
- Published package: `@revivejs/angular-highcharts@21.0.0`

## Current Status

What is already done:

- Full replay from the Angular 4 baseline through Angular 21 on a dedicated branch
- Global package rename from `@revivejs/angular2-highcharts` to `@revivejs/angular-highcharts`
- Published npm package `@revivejs/angular-highcharts@21.0.0`
- All versioned demos under `docs-src/angular-4` through `docs-src/angular-21` now reference the renamed package
- Generated docs under `docs/angular-4` through `docs/angular-21` now use the renamed package and GitHub Pages base path

What is still external to this repository:

- The GitHub repository `alexandroit/angular-highcharts` does not exist yet
- GitHub Pages for `https://alexandroit.github.io/angular-highcharts/` is not configured yet
- Release tags for the replayed history do not exist in a dedicated `angular-highcharts` repository yet

## Important Warning

This branch already points README badges, repository links, issue links, and GitHub Pages links to `alexandroit/angular-highcharts`.

That means:

- the npm package is correct for the new name
- the source tree is correct for the new name
- but public GitHub links will remain broken until the new repository is created

Do not treat the migration as fully complete until the repository and Pages site exist.

## Recommended Migration Steps

1. Create a new GitHub repository named `angular-highcharts`.
2. Add it as a second remote from this branch.
3. Push `replay/angular-highcharts` to the new repository as its default branch.
4. Configure GitHub Pages to publish the `docs/` folder from the default branch.
5. Re-check `README.md`, badges, issue links, and live demo links after Pages is live.
6. Recreate semantic release tags in the new repository for the replayed history.
7. Decide whether the old `angular2-highcharts` repository should stay active, redirect, or be archived.
8. Optionally deprecate `@revivejs/angular2-highcharts` on npm with a message pointing to `@revivejs/angular-highcharts`.

## Suggested Git Commands

```bash
git remote add new-origin git@github.com:alexandroit/angular-highcharts.git
git push -u new-origin replay/angular-highcharts:master
```

If the new repository uses `main` instead of `master`:

```bash
git push -u new-origin replay/angular-highcharts:main
```

## Suggested Tag Strategy

Because this is a new repository, you can create the historical tags there without colliding with the old project:

- `v4.0.0`
- `v5.0.0`
- `v6.0.4`
- `v7.0.1`
- `v8.0.0`
- `v9.0.0`
- `v10.0.1`
- `v11.0.0`
- `v12.0.0`
- `v13.0.0`
- `v14.0.0`
- `v15.0.0`
- `v16.0.0`
- `v17.0.0`
- `v18.0.0`
- `v19.0.0`
- `v20.0.0`
- `v21.0.0`

Apply those tags in the dedicated repository only after deciding which replay commits should represent each release.

## PR Scope

This branch is useful as:

- a reviewable rename branch inside the current repository
- the source branch to seed a dedicated `angular-highcharts` repository

It should not be considered the final hosting destination by itself.
