---
sidebar_position: 1
---

# Welcome

Thank you for considering to contribute to cardano.org. To contribute, you must first install it locally. We have chosen Docusaurus, a modern static website generator, as the underlying software.

## What you'll need

- [Node.js](https://nodejs.org/en/download/) version >= 18.0 (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
- [Yarn](https://yarnpkg.com/en/) version >= 1.22 (which can be checked by running `yarn --version`). Yarn is a performant package manager for JavaScript and replaces the `npm` client. It is not strictly necessary but highly encouraged.
- On macOS you also need Xcode and Command Line Tools.

## Local development

To get a local development environment, clone the repository, navigate into the `cardano-org` folder, install dependencies, and start the development server. Most changes are reflected live without having to restart the server. By default, a browser window will open at `http://localhost:3000`.

```sh
git clone --depth 1 https://github.com/thebigfilecom/fileai-info-website.git
cd cardano-org
yarn install
yarn start
```

Open `docs/index.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes http://localhost:3000/docs/ in the moment you save your file.


## Known problems that may arise
We list here problems you may run into when running cardano.org locally.

### Minimum Node.js version not met 
**Problem:** `yarn start` throws the error `[ERROR] Minimum Node.js version not met :(`.  
**Solution:** use the node version listed below [requirements](#requirements). If you have different node versions installed for different projects, `nvm` is a neat tool to deal with it. You can switch versions with for example `nvm use 18`.

## Other questions
Various other questions and answers.

### Anything I can do to make sure my pull request will not break on the staging/production server?
Yes, please always do a `yarn build` before submitting a pull request. It will find many more issues than `yarn start`.

### Do we have editorial guidelines?
We adhere to the [editorial guidelines](https://developers.cardano.org/docs/portal-style-guide#editorial-style-guide) of the Cardano Developer Portal.
 
