/* eslint-disable no-console */
const path = require("path");
const fse = require("fs-extra");

const packagePath = process.cwd();
const buildPath = path.join(packagePath, "./build");

async function includeFileInBuild(file) {
  const sourcePath = path.resolve(packagePath, file);
  const targetPath = path.resolve(buildPath, path.basename(file));
  await fse.copy(sourcePath, targetPath);
  console.log(`Copied ${sourcePath} to ${targetPath}`);
}

async function createPackageFile() {
  const packageData = await fse.readFile(
    path.resolve(packagePath, "./package.json"),
    "utf8"
  );
  const {
    nyc,
    scripts,
    devDependencies,
    workspaces,
    dependencies,
    files,
    jest,
    ...packageDataOther
  } = JSON.parse(packageData);
  const newPackageData = {
    ...packageDataOther,
    private: false,
    main: "./index.js",
    module: "./esm/index.js",
    peerDependencies: dependencies
  };
  const targetPath = path.resolve(buildPath, "./package.json");

  await fse.writeFile(
    targetPath,
    JSON.stringify(newPackageData, null, 2),
    "utf8"
  );
  console.log(`Created package.json in ${targetPath}`);

  return newPackageData;
}

async function prepend(file, string) {
  const data = await fse.readFile(file, "utf8");
  await fse.writeFile(file, string + data, "utf8");
}

async function addLicense(packageData) {
  const license = `/** @license BoomComponents v${packageData.version}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

`;
  await Promise.all(
    ["./index.js", "./esm/index.js", "./umd/boom-components.min.js"].map(
      async file => {
        try {
          await prepend(path.resolve(buildPath, file), license);
        } catch (err) {
          if (err.code === "ENOENT") {
            console.log(`Skipped license for ${file}`);
          } else {
            throw err;
          }
        }
      }
    )
  );
}

async function run() {
  try {
    const packageData = await createPackageFile();

    await Promise.all(
      ["./README.md", "./LICENSE"].map(file => includeFileInBuild(file))
    );

    await addLicense(packageData);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
