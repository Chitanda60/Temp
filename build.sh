# 取得环境变量
ENV_TYPE=$1

# 检查 是否 有错误并退出 build 的 function
function checkExit()
{
    echo 'check exit --------------------------------------- '
    if [ $1 = 1 ] ;then
        echo ' --------------------------------------- error'
        exit 1
    fi
}

echo $ENV_TYPE

# 更新包信息
# npm dedupe
# npm install --registry https://r.cnpmjs.org/

# 执行打包任务
NODE_ENV=$ENV_TYPE npm run build:webpack
checkExit $?
NODE_ENV=$ENV_TYPE npm run build:gulp
checkExit $?
