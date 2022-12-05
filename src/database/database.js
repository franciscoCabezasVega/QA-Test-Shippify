import mysql from "promise-mysql";
import config from "./../config";

const connection = mysql.createConnection({
    host:'shippify4.cv2sgxogwffx.sa-east-1.rds.amazonaws.com',
    user:'candidate5',
    password:'ubnpS3rySnj88Sum',
    database:'shippify5',
    port:'3306'
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};
