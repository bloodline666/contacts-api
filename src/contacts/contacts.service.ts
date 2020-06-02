import { Contact } from './contacts.model';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class ContactsService {
    constructor(
        @InjectModel(Contact) private readonly contactModel: ReturnModelType<typeof Contact>
    ) {}

    async create(createContactDao: Contact): Promise<Contact> {
        const foundContact = await this.contactModel.findOne(createContactDao).exec();
        if (foundContact !== null) {
            return foundContact;
        } else {
            const createdContact = new this.contactModel(createContactDao);
            return await createdContact.save();
        }
    }

    async delete(id: string): Promise<Contact> {
        return await (await this.contactModel.findByIdAndDelete(id));
    }
   
    async updatae(id: string, updateData: any): Promise<Contact> {
        return await this.contactModel.findByIdAndUpdate(id, updateData).exec();
    }

    async find(query: string): Promise<Contact> | null {
        if (query === undefined || query === '') {
            return null;
        } 
        let contact = null;
        if (query.split(' ').length === 1) {
            contact = await this.findByName(query);
            if (contact === null) {
                contact = await this.findBySurname(query);
            }
        } else if (query.split(' ').length > 1) {
            contact = await this.findByFullName(query);
        }
        return contact;
    }

    async findByFullName(fullName: string): Promise<Contact> | null {
        return await this.contactModel.findOne({name: fullName.split(' ')[0], surname: fullName.split(' ')[1]}).exec();
    }

    async findByName(name: string): Promise<Contact> | null {
        return await this.contactModel.findOne({name: name}).exec();
    }

    async findBySurname(surname: string): Promise<Contact> | null {
        return await this.contactModel.findOne({surname: surname}).exec();
    }

    async findAll(): Promise<Contact[] | null> {
        return await this.contactModel.find().exec();
    }
}