import { IsOptional, IsString } from 'class-validator';

export class UserIndexRequest {
    @IsString()
    @IsOptional()
    search?: string;

    @IsString()
    @IsOptional()
    gender?: string;

    @IsString()
    @IsOptional()
    created_at?: string;
}
