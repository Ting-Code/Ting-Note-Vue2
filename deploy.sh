rm -rf dist &&
npm run build &&
cd dist &&
git init &&
git add . &&
git commit -m "Update" &&
git branch -M master &&
git remote add origin git@gitee.com:TINGCYGF/note-view.git &&
git push -f -u origin master &&
cd -


