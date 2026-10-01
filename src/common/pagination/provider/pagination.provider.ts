import { Inject, Injectable } from '@nestjs/common';
import { PaginationQueryDTO } from '../dtos/pagination.dto';
import { ObjectLiteral, Repository } from 'typeorm';
import { IPaginate } from '../interfaces/Pagination';
import {REQUEST} from "@nestjs/core";
import type { Request } from 'express';

@Injectable()
export class PaginationProvider {

    constructor(
        @Inject(REQUEST)
        private readonly request:Request
    ){}
    async paginate<T extends ObjectLiteral>(repiository:Repository<T>,paginateQuery:PaginationQueryDTO):Promise<IPaginate<T> | null> {

        if(!paginateQuery.page||!paginateQuery.limit){return null}
        const page = paginateQuery.page;
        const limit =paginateQuery.limit;

        let offSet=(page-1)*limit;
        const results = await repiository.find({
            skip: offSet,
            take:limit
        })

        const baseURI = `${this.request.protocol}://${this.request.host}/`;

        const newUri = new URL(this.request.url,baseURI)

        const totalItems = await repiository.count();
        const totalPages = Math.ceil(totalItems/limit);

        const next = page==totalPages ? page : page+1 ;
        const previous = page===1 ? page : page-1 ;

        const firstPage = `${newUri.origin}${newUri.pathname}?limit=${paginateQuery.limit}&page=1`;

        const lastPage = `${newUri.origin}${newUri.pathname}?limit=${paginateQuery.limit}&page=${totalPages}`;

        const currentPage = `${newUri.origin}${newUri.pathname}?limit=${paginateQuery.limit}&page=${page}`;

        const previousPage = `${newUri.origin}${newUri.pathname}?limit=${paginateQuery.limit}&page=${previous}`;

        const nextPage = `${newUri.origin}${newUri.pathname}?limit=${paginateQuery.limit}&page=${next}`;

        const finalResponse:IPaginate<T> = {
            data:results,
            meta:{
                currentPage:page,
                itemsPerPage:limit,
                totalItems:totalItems,
                totalPages:totalPages
            },
            links:{
                first:firstPage,
                last:lastPage,
                current:currentPage,
                previous:previousPage,
                next:nextPage
            }
        }

        return finalResponse ;

    }
}
