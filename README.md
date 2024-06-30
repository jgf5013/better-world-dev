# Better World Dev

## How To
- https://cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling

## GCP
Make sure you have a `GOOGLE_APPLICATION_CREDENTIALS` environment variable set - i.e. export GOOGLE_APPLICATION_CREDENTIALS="/Users/john.fisher/workspace/jgf5013/better-world-dev/flashcards-422320-d7de8565d4d9.json"

docker build . --platform=linux/amd64 --tag flashcards-remix-app:1.1
docker tag flashcards-remix-app:1.1 gcr.io/flashcards-422320/alpine/flashcards-remix-app:1.1
docker push gcr.io/flashcards-422320/alpine/flashcards-remix-app:1.1


## Local
#### Pull
docker pull gcr.io/flashcards-422320/alpine/flashcards-remix-app:1.1
#### Run
docker run -p 3000:3000 gcr.io/flashcards-422320/alpine/flashcards-remix-app:1.1 (served from localhost)