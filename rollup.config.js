import typescript from "rollup-plugin-typescript2";
import pkg from './package.json';

const globals = {
  axios: "axios"
}

export default [
  {
    input: "src/index.ts",
    output: [{
      file: pkg.main,
      format: "cjs",
      globals: globals
    }, {
      file: pkg.module,
      format: "es",
      globals: globals
    }],
    external: [
      "axios"
    ],
    plugins: [typescript({ verbosity: 2, clean: true })]
  }
];
