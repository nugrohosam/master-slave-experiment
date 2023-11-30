import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "entities/iam/user.entity";
import { Like, Repository } from "typeorm";
import { UserIndexRequest } from "../requests/v1/user-index.request";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){}

    async fetch(indexRequest: UserIndexRequest): Promise<User[]> {
        const users = await this.userRepository.find({
            where: {
                fullname: Like(`%${indexRequest.search}%`),
                password: Like(`%${indexRequest.search}%`) 
            },
            // take: 1000000
        });

        return users;
    }
}