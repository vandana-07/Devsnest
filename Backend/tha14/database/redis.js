//redis store
//redis client
//npm i -s express-session redis connect-redis
const redis= require("redis");
const connectRedis=require("connect-redis");
const session=require("express-session");

//redis-store

const RedisStore=connectRedis(session);
const redisClient = redis.createClient({
    host:"localhost",
    port:6379
});

redisClient.on('error',function(err){
    console.error('could not connect to redis',err);
});
redisClient.on('connect',function(){
    console.log('connected to redis');
})

module.exports={
    redisClient,
    RedisStore,
    session
}