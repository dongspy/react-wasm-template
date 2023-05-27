# react-wasm-template

importing the wasm function compiled by rust using react


## install and run

```
cd wasm
wasm-pack build

cd ../react-app
npm run dev
```

vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    wasm(),
    topLevelAwait()],
})

```
