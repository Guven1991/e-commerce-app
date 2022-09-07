const Redis = require("ioredis");
const redis = new Redis(
    // {
    //     host:'host',
    //     password:'password',
    //     port:6379
    // }
);

export default redis;
