const fs = require('fs');

const src = 'node_modules/three/examples/jsm/libs/draco/gltf';
const output = 'public/draco';

if (!fs.existsSync(output)) {
  fs.mkdirSync(output, { recursive: true });
}

// Copy draco decoder from three.js into the public directory
if (fs.existsSync(src)) {
  fs.copyFileSync(`${src}/draco_decoder.wasm`, `${output}/draco_decoder.wasm`);
  fs.copyFileSync(`${src}/draco_wasm_wrapper.js`, `${output}/draco_wasm_wrapper.js`);
}
