# k8s sample apps


git init
git branch -M main
git add .
git commit -m "initial commit"
git remote add origin git@github.com:jonathan-macke/k8s-sample-apps.git
git push -u origin main


```shell

```


```shell
flux bootstrap github --owner=jonathan-macke --repository=k8s-sample-apps --private=false --personal=true --path=infra --branch=main
► connecting to github.com
► cloning branch "main" from Git repository "https://github.com/jonathan-macke/k8s-sample-apps.git"
✔ cloned repository
► generating component manifests
✔ generated component manifests
✔ committed component manifests to "main" ("265c36bc080a582e3c670c2b794fb71c9f0a0896")
► pushing component manifests to "https://github.com/jonathan-macke/k8s-sample-apps.git"
► installing components in "flux-system" namespace
✔ installed components
✔ reconciled components
► determining if source secret "flux-system/flux-system" exists
► generating source secret
✔ public key: ecdsa-sha2-nistp384 AAAAE2VjZHNhLXNoYTItbmlzdHAzODQAAAAIbmlzdHAzODQAAABhBP0fkr6vCNAkvUI/hM5aM4z6Zopp84EokCuRuyx171hXOCNSPU5GR5AYXA07OjxqjVi1zTxGrJra2/ODz5btMJ0gRsGLAv8q6ruNGoboQxq24roye4et/8mXMEq/wyaSnA==
✔ configured deploy key "flux-system-main-flux-system-./infra" for "https://github.com/jonathan-macke/k8s-sample-apps"
► applying source secret "flux-system/flux-system"
✔ reconciled source secret
► generating sync manifests
✔ generated sync manifests
✔ committed sync manifests to "main" ("fcbaa2fdfbe6b2e5982bd785fb7365b5e998b630")
► pushing sync manifests to "https://github.com/jonathan-macke/k8s-sample-apps.git"
► applying sync manifests
✔ reconciled sync configuration
◎ waiting for GitRepository "flux-system/flux-system" to be reconciled
✔ GitRepository reconciled successfully
◎ waiting for Kustomization "flux-system/flux-system" to be reconciled
✔ Kustomization reconciled successfully
► confirming components are healthy
✔ helm-controller: deployment ready
✔ kustomize-controller: deployment ready
✔ notification-controller: deployment ready
✔ source-controller: deployment ready
✔ all components are healthy
```