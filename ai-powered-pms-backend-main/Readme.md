# Example Microservice

This repository contains the code for the Example Microservice, a scalable system application built using Node.js, Express, and MongoDB. The application can be deployed as a standalone Express server, an Azure Function App, or using Kubernetes with Minikube or Azure Kubernetes Service (AKS).

## Prerequisites

Before you proceed, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=linux%2Ccsharp%2Cbash#v2)
- [Helm](https://helm.sh/docs/intro/install/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)

## Deployment

### 1. Standalone Express Server

To deploy the Example Microservice as a standalone Express server, follow these steps:

1. Clone the repository and navigate to the project folder:
```js
git clone https://github.com/your-username/example-microservice.git
cd example-microservice
```
2. Install the required Node.js packages:
```js
npm install
```

The application should now be running on `http://localhost:3000`.

### 2. Azure Function Apps Style Deployment

To deploy the Example Microservice as an Azure Function App, follow these steps:

1. Follow the instructions in the [Standalone Express Server](#1-standalone-express-server) section to clone the repository and install the Node.js packages.

2. Log in to your Azure account:
```js
az login
```
3. Create a new Azure Functions App:
```js
az functionapp create --resource-group <your-resource-group> --consumption-plan-location <your-location> --runtime node --functions-version 3 --name <your-function-app-name> --storage-account <your-storage-account-name>
```
4. Publish the application to the Azure Functions App:
```js
func azure functionapp publish <your-function-app-name> --node
```
The application should now be running on your Azure Functions App URL.

### 3. Minikube Deployment

To deploy the Example Microservice using Minikube, follow these steps:

1. Follow the instructions in the [Standalone Express Server](#1-standalone-express-server) section to clone the repository and install the Node.js packages.

2. Start Minikube:
```js
minikube start
```
3. Set your terminal to use Minikube's Docker daemon:
```js
eval $(minikube docker-env)
```
4. Build the Docker image for the Example Microservice:
```js
docker build -t example-microservice:latest .
```
5. Install the Helm chart into your Minikube cluster:
```js
helm install example-microservice chart/example-microservice
```
The application should now be running on your Minikube cluster. To access the service, run the following command:
```js
minikube service example-microservice
```
### 4. Azure Kubernetes Services (AKS) Deployment

To deploy the Example Microservice using Azure Kubernetes Service (AKS), follow these steps:

1. Follow the instructions in the [Standalone Express Server](#1-standalone-express-server) section to clone the repository and install the Node.js packages.

2. Log in to your Azure account:
```js
az login
```
3. Create a new AKS cluster:
```js
az aks create --resource-group <your-resource-group> --name <your-aks-cluster-name> --node-count 1 --enable-addons monitoring --generate-ssh-keys
```
4. Connect to the AKS cluster using `kubectl`:
```js
az aks get-credentials --resource-group <your-resource-group> --name <your-aks-cluster-name>
```
5. Build the Docker image for the Example Microservice:
```js
docker build -t example-microservice:latest .
```
6. Push the Docker image to your Azure Container Registry (ACR):
```js
az acr login --name <your-acr-name>
docker tag example-microservice:latest <your-acr-name>.azurecr.io/example-microservice:latest
docker push <your-acr-name>.azurecr.io/example-microservice:latest
```
7. Update the `values.yaml` file in the `chart/example-microservice` folder with the image repository and tag:
```js
image:
repository: <your-acr-name>.azurecr.io/example-microservice
tag: latest
```
8. Install the Helm chart into your AKS cluster:
```js
helm install example-microservice chart/example-microservice
```
The application should now be running on your AKS cluster. To access the service, run the following command:
```js
kubectl port-forward service/example-microservice 3000:3000
```
Visit `http://localhost:3000` in your browser to access the application.

Now that you have deployed the Example Microservice on your AKS cluster and accessed it through port forwarding, you can interact with the application via its APIs using a tool like Postman, curl, or a custom client.

To monitor the status of your application and its components, use the Kubernetes dashboard or Azure Portal. Additionally, you can use the kubectl command line tool to manage and monitor your deployed services, pods, and other Kubernetes objects.

Remember to keep your application up-to-date with the latest changes by periodically updating the Docker image and Helm chart.

For more information on working with AKS, visit the official Azure Kubernetes Service documentation.

Happy coding!


