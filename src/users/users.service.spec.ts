import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { ConfigService } from '@nestjs/config';
import { PostService } from 'src/posts/providers/post.service';
import { DataSource } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService,
        {
        provide:ConfigService,
        useValue:{}
      },
      {
        provide:PostService,
        useValue:{}
      },
      {
        provide:ConfigService,
        useValue:{}
      },
      {
        provide:DataSource,
        useValue:{}
      },
      {
        provide:getRepositoryToken(User),
        useValue:{}
      },
    ]
      ,
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe("createUser",()=>{
    it("should be defined",()=>{
      expect(service.createUser).toBeDefined()
    });
    it("should create user ",async()=>{
      

    })
  })
});
