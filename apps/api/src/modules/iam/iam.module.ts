import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "entities/iam/user.entity";
import { UserController } from "./controllers/api/v1/user.controller";
import { UserService } from "./services/user.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User,
        ]),
    ],
    controllers: [
        UserController,
    ],
    providers: [
        UserService,
    ],
    exports: [],
})
export class IamModule {}
