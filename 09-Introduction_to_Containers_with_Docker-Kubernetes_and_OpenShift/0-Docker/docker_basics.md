# Cheat Sheet: Docker CLI

- curl localhost                :Pings the application.
- docker build                  :Builds an image from a Dockerfile.
- docker build . -t             :Builds the image and tags the image id.
- docker CLI                    :Start the Docker command line interface.
- docker container rm           :Removes a container.
- docker images                 :Lists the images.
- docker ps                     :Lists the containers.
- docker ps -a                  :Lists the containers that ran and exited successfully.
- docker pull                   :Pulls the latest image or repository from a registry.
- docker push                   :Pushes an image or a repository to a registry.
- docker run                    :Runs a command in a new container.
- docker run -p                 :Runs the container by publishing the ports.
- docker stop                   :Stops one or more running containers.
- docker stop $(docker ps -q)   :Stops all running containers.
- docker tag                    :Creates a tag for a target image that refers to a source image.
- docker –version               :Displays the version of the Docker CLI.
- exit                          :Closes the terminal session.
- export MY_NAMESPACE               :Exports a namespace as an environment variable.
- git clone                         :Clones the git repository that contains the artifacts needed.
- ibmcloud cr images                :Lists images in the IBM Cloud Container Registry.
- ibmcloud cr login                 :Logs your local Docker daemon into IBM Cloud Container Registry.
- ibmcloud cr namespaces            :Views the namespaces you have access to.
- ibmcloud cr region-set            :Ensures that you are targeting the region appropriate to your cloud account.
- ibmcloud target                   :Provides information about the account you’re targeting.
- ibmcloud version                  :Displays the version of the IBM Cloud CLI.
- ls                                :Lists the contents of this directory to see the artifacts.

## Docker Commands used in Skills Network Labs during the docker_exercise-1

- docker --version

- docker images

- docker pull <hello-world>

- docker run <hello-world>

- docker ps -a

- docker container rm <container_id>

- docker build . -t <first_docker_container:v0>

- docker run -dp 8080:8080 <first_docker_container:v0>

<!-- Make a request:  curl localhost:8080 -->

- docker stop <73d8ed2f5663>

- docker stop $(docker ps -q)

- docker ps

- docker ps -a

## IBM Cloud Commands used in Skills Network Labs during the docker_exercise-1

- ibmcloud --version

- ibmcloud target

- ibmcloud cr namespaces

- ibmcloud cr region-set <us-south>

- ibmcloud cr login

- export MY_NAMESPACE=sn-labs-$USERNAME

- docker tag myimage:v1 us.icr.io/$MY_NAMESPACE/<hello-world:1>

- docker push us.icr.io/$MY_NAMESPACE/<hello-world:1>

- ibmcloud cr images

- ibmcloud cr images --restrict $MY_NAMESPACE
