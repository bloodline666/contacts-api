import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { Contact } from './contacts.model';
import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";

@Module({
    imports: [TypegooseModule.forFeature([Contact])],
    controllers: [ContactsController],
    providers: [ContactsService]
})
export class ContactsModule {}