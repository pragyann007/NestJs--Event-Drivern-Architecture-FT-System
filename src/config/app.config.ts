import { registerAs } from "@nestjs/config"


export default registerAs("app",()=>({
    environment:process.env.NODE_ENV,
    jwtSecret:process.env.JWT_SECRET,
    jwtTokenAudience:process.env.JWT_AUDIENCE,
    jwtTokenIssuer:process.env.JWT_TOKEN_ISSUER,
    jwtAccessTokenTtl:process.env.JWT_ACCESS_TOKEN_TTL,
    jwtRefreshTokenTtl:process.env.JWT_REFRESH_TOKEN_TTL,


}))
