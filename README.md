# k8s sample apps


git init
git branch -M main
git add .
git commit -m "initial commit"
git remote add origin git@github.com:jonathan-macke/k8s-sample-apps.git
git push -u origin main


flux bootstrap github --owner=jonathan-macke --repository=k8s-sample-apps --private=false --personal=true --path=infra --branch=main