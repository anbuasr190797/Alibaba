require('dotenv').config({ path: '../../.env' });
module.exports = {
    development: {
        replication: {
          read: [
            {
              username:'adminanbu4',
              password:'19aas27ams#1A',
              database:'student_hub',
              host:'database2.mysql.polardb.eu-west-1.rds.aliyuncs.com',
             
            }
          ],
          write:   {
            username:'adminanbu4',
            password:'19aas27ams#1A',
            database:'student_hub',
            host:'database2.mysql.polardb.eu-west-1.rds.aliyuncs.com',
           
          }
        },
        port: +(process.env.DATABASE_PORT),
        dialect: 'mysql',
        logging: false,
        pool: {
          max: 30,
          idle: 30000,
          evict: 10000,
          acquire: 60000
        }
      },
}