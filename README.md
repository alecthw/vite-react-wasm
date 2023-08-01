# React + TypeScript + Vite + WASM

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Rust WASM

### Pre-installed

-   [rust](https://www.rust-lang.org/learn/get-started)
-   [wasm-pack](https://github.com/rustwasm/wasm-pack)

### Community plugin:

-   [vite-plugin-wasm](https://github.com/Menci/vite-plugin-wasm) add WebAssembly ESM integration

If you want to enable HMR for rust wasm code, you can use the vite plugin for rsw to replace vite-plugin-wasm.

-   [vite-plugin-rsw](https://github.com/rwasm/vite-plugin-rsw)

## Run

### Compile rust wasm first

```bash
pnpm run build:wasm
```

### Then

```bash
pnpm run dev
pnpm run build
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
