# Sample app

This sample app is for testing GitOps

If you want to run using Docker

```shell
docker build -t myapp .
docker run -p 3000:3000 -d -e "CLUSTER=prod" --name myapp myapp
curl http://localhost:3000
```

If any problem with port conflict

```shell
docker run -p <host_port>:3000 -d -e "CLUSTER=prod" --name myapp myapp
```

or change the Dockerfile


Once deployed, to clean the Docker container
```shell
docker kill myapp
docker rm myapp
```