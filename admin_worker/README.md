# .

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

==========다운받는법~~~
https://tailwindcss.com/docs/installation/using-vite

-------------1. 이걸 터미널에
npm install tailwindcss @tailwindcss/vite

----------vite config
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

$ cd "d:\Students\정현영\vue_study2\admin_worker\admin_worker" && npm run dev
---
> v_event@0.0.0 dev
> vite

---

npm install chart.js vue-chartjs
