import { ApiProperty, ApiSchema } from "@nestjs/swagger"
import { ArrayNotEmpty, IsArray, IsDate, IsEnum, IsObject, IsOptional, IsString, IsISO8601 } from "class-validator"

enum PostType {
    POST = "post",
    PAGE = "page",
    STORY = "story",
    SERIES = "series"
}

enum Status {
    DRAFT = "draft",
    SCHEDULED = "scheduled",
    REVIEW = "review",
    PUBLISHED = "published"
}

export class POSTDTO {
    @ApiProperty({
        description: "Title of post",
        example: "Day in my life as a software developer."
    })
    @IsString()
    title: string

    @ApiProperty({
        description: "Type of posts.",
        example: "post"
    })
    @IsEnum(PostType)
    postType: PostType

    @ApiProperty({
        description: "Slug to be seen at the url",
        example: "day-in-life-of-software-dev"
    })
    @IsString()
    slug: string

    @ApiProperty({
        description: "Status of post ...",
        example: "published"
    })
    @IsEnum(Status)
    status: Status   

    @ApiProperty({
        description: "Content of the post",
        example: "Today i wake up at 7 at start debuging my saas error....."
    })
    @IsString()
    @IsOptional()
    content: string

    @ApiProperty({
        description: "Schema of the posts...",
        example: "viral"
    })
    @IsString()
    @IsOptional()
    schema: string

    @ApiProperty({
        description: "URI  of the posts featured Image",
        example: "http://cloudinary.com/pragyann007/images/softwar-dev-img"
    })
    @IsString()
    @IsOptional()
    featuredImageUri: string

    @ApiProperty({
        description: "Date on which post was published..",
        example: "2026-09-25T08:00:00.000Z" // Use string representation for API examples
    })
    @IsISO8601() // 👈 Recommended over @IsDate() for parsing incoming request JSON date strings
    publishOn: Date

    @ApiProperty({
        description: "Tags related to post",
        example: ["coding", "IT", "backend", "productivity"]
    })
    @IsArray()
    @IsString({ each: true })
    @ArrayNotEmpty()
    tags: string[]

    @ApiProperty({
        description: "Metadata options for this particular post",
        example: [
            { trialReel: true },
            { isScheduled: false }
        ]
    })
    @IsArray()
    @IsObject({ each: true })
    metaOptions: Record<string, any>[]; // 👈 Added brackets [] here so TS knows it's an array
}
