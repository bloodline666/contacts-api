import { ContactsModule } from './contacts/contacts.module';
import { Module } from '@nestjs/common';
import { TypegooseModule } from "nestjs-typegoose";

@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://localhost:27017/contacts", {
      useNewUrlParser: true,
    }),
    ContactsModule
  ]
})
export class AppModule {}
