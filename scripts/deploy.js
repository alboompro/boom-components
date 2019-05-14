const path = require("path");
const chalk = require("chalk");
const cp = require("child_process");
const fse = require("fs-extra");
const minimist = require("minimist");
const packageJSON = require("../package.json");

const packagePath = process.cwd();
const buildPath = path.join(packagePath, "./build");

/**
 * This will execute a command inside a child process
 * using the options provided
 */
async function executeCommand(command, opts = {}) {
  const commandOptions = Object.assign(
    { cwd: path.cwd, stdio: "inherit" },
    opts
  );
  return cp.execSync(command, commandOptions);
}

/**
 * If no version is provided, this will be called to infer
 *  a new version based on the last one. However, this will simply add
 * a patch level to the release, if a new version is needed
 * it's our obligation to provide it.
 */
async function getNewVersion() {
  const version = packageJSON.version.split(".");
  version[version.length - 1] = parseInt(version[version.length - 1]) + 1;
  return version.join(".");
}

/**
 * Since we're running publish on build path, we manually have to update
 * our main package.json to reflect the new version. This will do
 * that for us
 *
 * @param {string} version Version being released
 */
async function updatePackage(newVersion, dryRun = false) {
  console.log("Atualizando package.json principal");
  const { version, ...packageData } = packageJSON;
  const newPackageData = {
    version: newVersion,
    ...packageData
  };
  if (dryRun) {
    console.log();
    console.log("Informações novas do package.json:");
    console.log(newPackageData);
  } else {
    const targetPath = path.resolve(packagePath, "package.json");
    await fse.writeFile(
      targetPath,
      JSON.stringify(newPackageData, null, 2),
      "utf8"
    );
  }
}

/**
 *
 * @param {string} version Version for the package being deployed
 * @param {boolean} dryRun Only show the process being executed without releasing a new version
 */
async function run(version = undefined, dryRun = false) {
  try {
    const targetVersion = version || (await getNewVersion());
    const deployCmd = dryRun
      ? "npm pack --dry-run"
      : `yarn publish --new-version ${targetVersion}`;
    const commandsArray = [
      { cmd: "yarn build", opts: {} },
      {
        cmd: deployCmd,
        opts: { cwd: buildPath }
      }
    ];

    console.log(
      `Started deploy for @alboom/boom-components ${chalk.cyan(
        `v${targetVersion}`
      )}`
    );

    commandsArray.forEach(async command =>
      executeCommand(command.cmd, command.opts)
    );

    await updatePackage(targetVersion, dryRun);

    console.log();
    console.log(chalk.green("Processo concluido"));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

const args = minimist(process.argv.slice(2));

const { version } = args;
const dryRun = args["dry-run"];

// run(version, dryRun);
updatePackage(version, dryRun);
