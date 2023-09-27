# Contributing

### Development Workflow:

1. Always start by ensuring that your local `main` branch is up-to-date by running `git pull origin main`.
2. Make sure to run `npm install` to install all project dependencies.
3. Create a new branch for your work from the `main` branch.

### Folder naming convention.
1. Direct folders in the `src` directory should be in lowercase and separated by dashes, if necessary.
    - Shared components should be placed under `src/components`.
    - Pages should be placed under `src/pages`. Note that this project may not require routing for multiple pages.
    - Shared custom hooks can be placed under `src/hooks`.
    - Layouts can be placed under `src/layout`.
2. Subfolders and files within the `src` directory should use CamelCase naming.

### Commit message convention

While there are no strict rules for commit messages, please follow these recommendations:

- Start with an uppercase letter.
- Keep the message length below 120 characters.
- Make the message as descriptive as possible.
- Use sub-messages to provide additional details. For example: `git commit -m "Add new feature" -m "This is a detailed description of the feature."`

### Branch naming convention.

Except for the `main` and `develop` branches, all other branches should use the following prefixes:

- `fix-`: For bug fixes (e.g., `fix-sidebar`).
- `feature-`: For new features (e.g., `feat-sidebar`).
- `refactor-`: For code structure refactoring.
- `docs-`: For documentation changes.
- `test-`: For adding or updating tests (e.g., unit or snapshot tests).
- `chore-`: For tooling changes, such as version upgrades.

### Linting and Testing

`Typescript` is used for type checking. `eslint` with `prettier` for linting and formatting the code, and jest for testing. Before committing, it is advisable to run the following first:

- `npm run test` - To ensure that all tests pass
- `npm run lint` - To ensure that code lints are removed
- `npm run format` - To ensure that code is formatted with prettier
- `npm run build` - To ensure that development builds will not fail

### Creating a pull and merge request

- Once a branch is pushed to origin, a pull request will have to be created. This alerts the other team members to review
- Always ensure that one person reads and approves the pull request
