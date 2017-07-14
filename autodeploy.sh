# gitlab & github 自动部署脚本
#!/bin/bash

WEB_PATH='/usr/share/nginx/html/fed'
WEB_USER='root'
WEB_USERGROUP='lovelucydev'

echo "Start deployment"
cd $WEB_PATH
echo "pulling source code..."
git reset --hard origin/master
git clean -f
git pull
git checkout master
# echo "changing permissions..."
# chown -R $WEB_USER:$WEB_USERGROUP $WEB_PATH
echo "Finished."