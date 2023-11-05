#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const initRequest = () => {
  return process.argv[2] === 'init';
};

const initRequestForTypescript = () => {
  return process.argv[2] === 'init-ts';
};

const backupFileIfExist = async (filename) => {
  if (fs.existsSync(filename)) {
    process.stdout.write(`Found an existing file '${filename}'. Overwriting and creating a backup...`);
    await fs.promises.rename(path.join('./', filename), path.join('./', `${filename}.bak`));
    process.stdout.write('Done.\n');
  }
};

const setConfigFile = async (defaultsPath, configDefaultFile, existingFileToBackup) => {
  await backupFileIfExist(existingFileToBackup);
  await fs.promises.copyFile(path.join(defaultsPath, configDefaultFile), path.join('./', existingFileToBackup));
  process.stdout.write(`Config file '${existingFileToBackup}' created.\n`);
};

const addIgnoreFiles = async (defaultsPath) => {
  const esLintIgnore = '.eslintignore';
  const prettierIgnore = '.prettierignore';

  if (!fs.existsSync(esLintIgnore)) {
    process.stdout.write('Creating eslint ignore file...');
    await fs.promises.copyFile(path.join(defaultsPath, esLintIgnore), path.join('./', esLintIgnore));
    process.stdout.write('Done\n');
  }
  if (!fs.existsSync(prettierIgnore)) {
    process.stdout.write('Creating prettier ignore file...');
    await fs.promises.copyFile(path.join(defaultsPath, prettierIgnore), path.join('./', prettierIgnore));
    process.stdout.write('Done\n');
  }
};

const init = async () => {
  process.stdout.write('Creating config files for ESLint and Prettier...\n');
  if (!initRequest() && !initRequestForTypescript()) {
    throw new Error("Requires 'init' option to generate default style and lint configs or 'init-ts' for typescript.");
  }

  const defaultsPath = path.join(__dirname, 'defaults');
  const defaultESLintFile = initRequestForTypescript() ? 'eslintrc-ts' : 'eslintrc';

  await setConfigFile(defaultsPath, defaultESLintFile, '.eslintrc.js');
  await setConfigFile(defaultsPath, 'prettierrc', '.prettierrc.js');
  await addIgnoreFiles(defaultsPath);
};

init().catch(console.error);
