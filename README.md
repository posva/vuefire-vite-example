# Vite example with VueFire

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
