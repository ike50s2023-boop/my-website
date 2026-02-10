@echo off
set "PATH=%PATH%;C:\Program Files\nodejs\"
call npm run build
python -m http.server 8080 --directory out
