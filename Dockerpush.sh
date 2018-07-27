echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push statnlp/web-negationscope
docker push statnlp/web-negationscope:$APP_VERSION
