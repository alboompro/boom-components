import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import nodeGlobals from "rollup-plugin-node-globals";
import { terser } from "rollup-plugin-terser";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";

const input = "./src/index.js";
const globals = {
  react: "React",
  "react-dom": "ReactDOM",
  "prop-types": "PropTypes",
  "styled-components": "styled",
  "react-is": "react-is",
  classnames: "classnames",
  formik: "formik"
};

const babelOptions = {
  exclude: /node_modules/,
  runtimeHelpers: true,
  configFile: "./config/babel.config.js"
};

const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/
};

function onwarn(warning) {
  throw Error(warning.message);
}

export default [
  {
    input,
    onwarn,
    output: {
      file: "build/umd/boom-components.min.js",
      format: "umd",
      name: "BoomComponents",
      globals
    },
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
      replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
      sizeSnapshot({ snapshotPath: "size-snapshot.json" }),
      terser()
    ]
  }
];
