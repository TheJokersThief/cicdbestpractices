# Contributing

First of all, thanks for even considering contributing to this project. It will work best with a diverse perspective of voices and experiences!

## How to run the site locally

To run the site locally, you will need these tools installed:

* NodeJS (version: `lts/hydrogen`)

### `site-content` directory

This directory houses all of the content of the site, and is primarily where you'll want to do your work.

```bash
cd site-content
```

### Install dependencies

```bash
npm install
```

### Start the site locally

```bash
npm start
```

This will start a local server at [http://localhost:3000/](http://localhost:3000/) which will auto-reload when you make changes to the site files.

## Project structure

### `site-content` directory

This directory houses all of the content of the site, and is primarily where you'll want to do your work.

* `src/assets`: Stores image assets used in the guides
* `src/content/docs/ci`: Guides about Continuous Integration
* `src/content/docs/languages`: Guides assembled from snippets concerning languages
* `src/content/docs/providers`: Guides assembled from snippets concerning CI/CD providers
