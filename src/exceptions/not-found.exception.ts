import { HttpException, HttpStatus } from "@nestjs/common";

export class NotFoundException extends HttpException {
    constructor() {
        super('ga ada', HttpStatus.NOT_FOUND);
    }
}