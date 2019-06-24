let defaultPresets;

if (process.env.BABEL_ENV === "es") {
  defaultPresets = [];
} else {
  defaultPresets = [
    [
      "@babel/preset-env",
      {
        modules: ["esm", "production-umd"].includes(process.env.BABEL_ENV)
          ? false
          : "commonjs"
      }
    ]
  ];
}

const productionPlugins = [
  "@babel/plugin-proposal-class-properties",
  [
    "@babel/plugin-proposal-decorators",
    {
      legacy: true
    }
  ],
  "@babel/plugin-proposal-export-default-from",
  "@babel/plugin-proposal-export-namespace-from",
  "@babel/plugin-proposal-object-rest-spread",
  "@babel/plugin-transform-member-expression-literals",
  "@babel/plugin-transform-object-assign",
  "@babel/plugin-transform-property-literals",
  "@babel/plugin-transform-runtime",
  "@babel/plugin-transform-spread",
  "@babel/plugin-transform-template-literals"
];

module.exports = {
  presets: defaultPresets.concat(["@babel/preset-react"]),
  plugins: productionPlugins,
  ignore: [], // Fix a Windows issue.
  env: {
    cjs: {
      plugins: productionPlugins
    },
    esm: {
      plugins: productionPlugins
    },
    es: {
      plugins: productionPlugins
    },
    production: {
      plugins: productionPlugins
    },
    "production-umd": {
      plugins: productionPlugins
    },
    test: {
      plugins: productionPlugins
    }
  }
};
