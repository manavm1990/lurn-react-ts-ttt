# React TTT (TS)

## Scripts

- `npm start` - Starts the development server.
- `npm test` - Runs the test suite with [Vitest](https://vitest.dev/guide/cli.html#commands).

See [package.json](./package.json) for more scripts

## Linting and Prettier

This project uses `"standard"` linting with the recommended for `react` and `"prettier"`.

It also lints `"testing-library"` and `"jest-dom"`.

## VS Code Extensions and Settings

It also includes sensible VS Code defaults for [settings](./.vscode/settings.json) and [extensions](./.vscode/extensions.json).

For the **settings**, we are doing things like:

- `"css.validate": false,` - TailwindCSS uses a lot of custom CSS syntax that VS Code doesn't understand, so we disable validation.
- `"editor.formatOnSave": true,` - We want to format our code on save.
- `"editor.defaultFormatter": "esbenp.prettier-vscode",` - We want to use Prettier to format our code.
- `"editor.codeActionsOnSave": { "source.fixAll.eslint": true },` - We want to use ESLint to fix any linting errors on save.

You should install the recommended extensions when you open the project in VS Code to get the full benefit of these settings.

## License

[MIT](./LICENSE)

## Credits

This project was bootstrapped with [create-vite](https://vitejs.dev/guide/).

Like it? Give it a ⭐️ on [GitHub](https://github.com/manavm1990/vite-react-tailwind-vitest).

Questions? Comments? Concerns? Find me on [Twitter](https://twitter.com/GoCodeFinity).
