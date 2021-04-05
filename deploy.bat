npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:CeansBzh/CeansBzh.github.io.git main:gh-pages