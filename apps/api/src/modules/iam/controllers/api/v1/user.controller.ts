import { Controller, Get, Query } from "@nestjs/common";
import { UserIndexRequest } from "../../../requests/v1/user-index.request";
import { UserService } from "../../../services/user.service";


@Controller('api/v1/users')
export class UserController {

    constructor(
        private readonly userService: UserService
    ){}

    @Get()
    async indexPage(@Query() indexRequest: UserIndexRequest): Promise<any> {
        const data = await this.userService.fetch(indexRequest);
        return data;
    }

}