# Vite example with VueFire

- [Demo on Stackblitz](https://stackblitz.com/github/posva/vuefire-vite-example?file=README.md)
- [Online Demo](https://vite-vuefire.web.app/)

This is a working example of how to use VueFire with Vite created with:

```sh
npx create vite my-vuefire-app --template vue-ts
```

Then added VueFire and firebase

```sh
npm i firebase vuefire
```

> **Note**
> Replace `npm` with your favorite package manager

Settup a Firebase app at [Firebase Console](https://console.firebase.google.com/) and follow their instructions to get your Firebase config and set it in `main.ts`.

Used `firebase-tools` package to add the configuration to the project with:

```sh
firebase init
```

The options selected were:

- Realtime Database
- Firestore
- Hosting

Make sure to change the `public` directory to `dist`, configure as a single-page-app. If you set up GitHub actions, **make sure the repository is created** before calling `firebase init`. If you miss any step, that's fine you can call `firebase init` again and select only what you want to add.

## GitHub Workflows

The GitHub workflows you will find in this repository have been adapted from the generated ones to include a cache with pnpm.

## Firebase config

If you want to use this repository as a starter for your project, make sure to replace the different firebase files with your own or simply, run `firebase init` to override them. You will also need to update the config in `main.ts` with your own.
