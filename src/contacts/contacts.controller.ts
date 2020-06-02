import { ContactsService } from './contacts.service';
import { Controller, Get, Req, Query, Post, Body, Delete, Put } from "@nestjs/common";
import { Contact } from 'src/contacts/contacts.model';

@Controller("contact")
export class ContactsController {
    constructor(private readonly contactsService: ContactsService) {}

    @Get()
    async findContact(@Query('query') query: string): Promise<Contact | null> {
        return await this.contactsService.find(query);
    }

    @Post()
    async create(@Body() contact: Contact): Promise<Contact> {
        return await this.contactsService.create(contact);
    }

    @Delete()
    async delet(@Body() id: string): Promise<Contact> {
        return await this.contactsService.delete(id);
    }

    @Put()
    async update(@Body('id') id: string, @Body('data') updateData: any): Promise<Contact> {
        return await this.contactsService.updatae(id, updateData);
    }

    @Get('all')
    async getAll(): Promise<Contact[] | null> {
        return await this.contactsService.findAll();
    }
}