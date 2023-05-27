# react-wasm-template

using react to import the wasm function compiled by rust 


## install and run

```
cd wasm
wasm-pack build

cd ../react-app
npm run dev
```

## core code

wasm/src/lib.rs

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

```


react-app/vite.config.js

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

react-app/src/wasm.jsx

```javascript
import React, { useEffect, useState } from 'react';

function Wasm() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    import('../../wasm/pkg')
      .then(module => {
        const a = 2;
        const b = 3;
        const sum = module.add(a, b); // 使用 Rust 的 WebAssembly 模块
        setResult(sum);
      })
      .catch(err => {
        // Handle error
        console.error("Error importing Wasm module:", err);
      });
  }, []);

  return <div>using rust add function, 3 + 2 is {result}</div>;
}

export default Wasm;

```
