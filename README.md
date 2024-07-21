# Better World Dev

## How To
- https://cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling

## GCP
Make sure you have a `GOOGLE_APPLICATION_CREDENTIALS` environment variable set - i.e. export GOOGLE_APPLICATION_CREDENTIALS="/Users/john.fisher/workspace/jgf5013/better-world-dev/GOOGLE_APPLICATION_CREDENTIALS.json"

docker build . --platform=linux/amd64 --tag flashcards-remix-app:1.1
docker tag flashcards-remix-app:1.1 gcr.io/flashcards-422320/alpine/flashcards-remix-app:1.1
docker push gcr.io/flashcards-422320/alpine/flashcards-remix-app:1.1


## Local

| What | Command | Notes |
|------|---------|-------|
| Build the app | `yarn run build` | Produces a `{appName}/dist` folder |
| Run unit tests for the app | `yarn run test` |  |
| Run a command like `build` or `lint` from the root | `yarn workspaces foreach --all run {command}` | Check `package.json` for list of commands |

#### Pull
docker pull gcr.io/flashcards-422320/alpine/flashcards-remix-app:1.1
#### Run
docker run -p 3000:3000 gcr.io/flashcards-422320/alpine/flashcards-remix-app:1.1 (served from localhost)


## Authenticating GitHub Actions with Google Cloud
There is a GitHub Actions secret with the following format where GOOGLE_APPLICATION_CREDENTIALS_PRIVATE_KEY is the actual key (see the git-ignored .env):
```
  GOOGLE_APPLICATION_CREDENTIALS={
    "type": "service_account",
    "project_id": "flashcards-422320",
    "private_key_id": "2650ababc5cacd4e7666c08be5bdbfab1efb6fb4",
    "private_key": {GOOGLE_APPLICATION_CREDENTIALS_PRIVATE_KEY},
    "client_email": "github-integration@flashcards-422320.iam.gserviceaccount.com",
    "client_id": "109812425483212975970",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/github-integration%40flashcards-422320.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
```