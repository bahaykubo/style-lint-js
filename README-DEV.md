<h1>Test Package Locally</h1>

Two ways to try this linter package locally.

Preferred creating package locally to install in another project instead of a symlink

- [Create package locally](#create-package-locally)
  - [Check content of local package](#check-content-of-local-package)
- [Link package](#link-package)
  - [Unlink package](#unlink-package)



## Create package locally

Create a package locally using [npm pack](https://docs.npmjs.com/cli/commands/npm-pack). This will create a `*.tgz` file of the package that can be installed in another project.

From another project, install this package using `npm install`.

```bash
npm install ../../path/to/tgz/file.tgz
```

### Check content of local package

```bash
tar -tvf style-lint-js-v1.tgz
```

## Link package

Run [npm link](https://docs.npmjs.com/cli/commands/npm-link) from this directory

And then run `npm link style-lint-js` from another project using this package.

### Unlink package

Reverse the link procedure.

Run `npm unlink style-lint-js` from the project using this package.

Run `npm unlink` from this directory.
