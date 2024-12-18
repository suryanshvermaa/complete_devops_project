#!/bin/bash
kubectl delete -f ../k8s_manifests/backend/cm.yml -f ../k8s_manifests/backend/secrets.yml -f ../k8s_manifests/backend/deployment.yml -f ../k8s_manifests/backend/svc.yml
kubectl delete -f ../k8s_manifests/db/pv.yml -f ../k8s_manifests/db/pvc.yml -f ../k8s_manifests/db/secrets.yml -f ../k8s_manifests/db/deployment.yml -f ../k8s_manifests/db/svc.yml
kubectl delete namespace my-app