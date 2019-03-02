import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      format: "umd",
      name: "sitewhere-rest-api",
      globals: {
        axios: "axios"
      }
    },
    external: ["axios"],
    plugins: [typescript()]
  }
];
