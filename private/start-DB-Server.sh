currentdir=$(pwd)
dbpath=$(echo ${currentdir}/db)
mongod --dbpath=${dbpath}
#mongod --dbpath=/home/mamadz/Documents/codes/github/csc-expo/expo-csc-batch3/private/db
