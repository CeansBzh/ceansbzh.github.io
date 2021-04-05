call npm run build
call cd dist
call git init
call git add -A
call git commit -m 'deploy'
call git push -f git@github.com:CeansBzh/CeansBzh.github.io.git main:gh-pages