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
