# Test package locally

Two ways to try this linter package locally.

Preferred creating package locally to install in another project instead of a symlink

## Create package locally

Create a package locally using [yarn pack](https://classic.yarnpkg.com/en/docs/cli/pack). This will create a `*.tgz` file of the package that can be installed in another project.

From another project, install this package using `yarn add` or `npm install`.

```bash
# Using yarn
yarn add ../../path/to/tgz/file.tgz

# Using npm
npm install ../../path/to/tgz/file/tgz
```

### Check content of local package

```bash
tar -tvf style-lint-js-v1.tgz
```

## Link package

Run [yarn link](https://classic.yarnpkg.com/lang/en/docs/cli/link/) from this directory

And then run `yarn link style-lint-js` from another project using this package.

### Unlink package

Reverse the link procedure.

Run `yarn unlink style-lint-js` from the project using this package.

Run `yarn unlink` from this directory.
