CI/CD Pipeline with GitHub Actions & Docker (No Cloud Needed)
Objective

Set up a full CI/CD pipeline that automatically:

Runs tests for your application

Builds a Docker image

Pushes the image to Docker Hub

Deploys it locally using Minikube or a local VM

This workflow allows continuous integration and deployment without relying on any cloud platform.

Tools & Technologies

GitHub Actions – for CI/CD workflows

Docker – for containerization

Docker Hub – for storing and distributing images

Minikube / Local VM – for deploying the Docker image locally

Mini Guide
1️⃣ Dockerize Your Application

Write a Dockerfile describing how to build your app image.

Optionally, create a docker-compose.yml to orchestrate multi-container setups.

2️⃣ Configure CI/CD Workflow

Create a .github/workflows/ci-cd-pipeline.yml file.

Key steps include:

Checkout repository

Install dependencies

Run tests

Build Docker image

Log in to Docker Hub

Push Docker image

Example of workflow tag configuration:

tags: divyansh720/myapp:latest


Make sure to replace divyansh720 with your Docker Hub username.

3️⃣ Deploy Locally

Use Minikube or a local VM:

docker pull divyansh720/myapp:latest
docker run -p 8080:8080 divyansh720/myapp:latest


Verify the app is running in the browser or via curl.