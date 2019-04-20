
### Heroku

#### Deployment - UI

To deploy to the heroku repository / staging, navigate to the `ui` directory and run the following commands:

```
git add .
git commit -m "meaningful commit message for heroku deploy"
git push heroku master
heroku open
```

If successful, changes should appear here: [https://share-ui.herokuapp.com/](https://share-ui.herokuapp.com/)

More on how it works here: [https://github.com/mars/create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack)

Issue tracking the initial deployment here: [https://github.com/escobard/share/issues/3](https://github.com/escobard/share/issues/3)


#### Deployment - API

To deploy to the heroku repository / staging, navigate to the `api` directory and run the following commands:

```angular2html
git add .
git commit -m "meaningful commit message for heroku deploy"
git push heroku master
heroku openn
```

If successful, changes should appear here: [https://share-controller.herokuapp.com/](https://share-controller.herokuapp.com/)

Issue tracking the initial deployment here: [https://github.com/escobard/share/issues/27](https://github.com/escobard/share/issues/27)

### GCP

Using GCP buckets to manually upload + move files into the correct project folder using the `gsutil rsync` cli tool of gcp

For example:

```angular2html
gsutil rsync -r gs://share-api-bucket ./api
```

Moves all files under the `share-api-bucket` to the `./api` within the gcp project.

#### Deployment - UI

To deploy to GCP, follow the instructions here: [https://medium.com/google-cloud/how-to-deploy-a-static-react-site-to-google-cloud-platform-55ff0bd0f509](https://medium.com/google-cloud/how-to-deploy-a-static-react-site-to-google-cloud-platform-55ff0bd0f509)

UI files under `share`

Once successful, app should be viewable here: [https://share-ui.appspot.com/]](https://share-ui.appspot.com/)

#### Deployment - API

To deploy to GCP, follow the instructions here: [https://codelabs.developers.google.com/codelabs/cloud-app-engine-node/index.html?index=..%2F..index#0](https://codelabs.developers.google.com/codelabs/cloud-app-engine-node/index.html?index=..%2F..index#0)

Follow UI instructions on how to sync bucket before deploying, API files under `api`

Once successful, app should be viewable here: [https://share-api-229307.appspot.com](https://share-api-229307.appspot.com)

### Circle CI

File for cicle ci docker container configurations within `.circleci/config.yml`

Project dashboard here: https://circleci.com/gh/escobard

As of January 27th, 2019, testing, production bundling, and deployment to heroku is all automated for the UI, once the master branch is updated within the github repository.