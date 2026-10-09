import { registerAs } from "@nestjs/config"


export default registerAs("app",()=>({
    environment:process.env.NODE_ENV,
    jwtSecret:process.env.JWT_SECRET,
    jwtTokenAudience:process.env.JWT_AUDIENCE,
    jwtTokenIssuer:process.env.JWT_TOKEN_ISSUER,
    jwtAccessTokenTtl:process.env.JWT_ACCESS_TOKEN_TTL,
    jwtRefreshTokenTtl:process.env.JWT_REFRESH_TOKEN_TTL,
    cloudinaryApiKey:process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret:process.env.CLOUDINARY_API_SECRET,
    cloudinaryCloudName:process.env.CLOUDINARY_CLOUD_NAME,


}))
