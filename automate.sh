#!/bin/sh
docker build -t my-todolist:1.0 .
brew install kubectl
brew cask install minikube 
curl -L https://github.com/zchee/docker-machine-driver-xhyve/releases/download/v0.3.0/docker-machine-driver-xhyve > /usr/local/bin/docker-machine-driver-xhyve
chmod +x /usr/local/bin/docker-machine-driver-xhyve
sudo chown root:wheel /usr/local/bin/docker-machine-driver-xhyve
sudo chmod u+s /usr/local/bin/docker-machine-driver-xhyve
minikube start --vm-driver=xhyve
kubectl create -f deployment.yaml
kubectl create -f svc.yml
open  "http://"$(minikube ip)":30061"