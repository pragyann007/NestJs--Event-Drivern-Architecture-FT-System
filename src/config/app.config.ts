
export const  appConfig = ()=>{
    return {
        environment:process.env.NODE_ENV,
        database:{
            type:process.env.DB_TYPE || "postgres",
            autoLoadEntities:process.env.AUTO_LOAD_ENTITIES =="true" || false ,
            synchronise:process.env.SYNCHRONISE =="true",
            port:process.env.DB_PORT,
            username:process.env.DB_USERNAME || "postgres",
            password:process.env.DB_PASSWORD ,
            name:process.env.DB_NAME,
            host:process.env.DB_HOST
                }
    }
}