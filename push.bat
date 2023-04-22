@echo off
set /p msg=input commit content:
echo git add .
cmd /c "git add ."
echo pnpm cz
cmd /c "pnpm cz"
echo git push
cmd /c "git push"
exit