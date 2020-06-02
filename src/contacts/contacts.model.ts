import { prop } from "@typegoose/typegoose"

export class Contact {
    @prop({required: true})
    name: string;

    @prop({required: true})
    surname: string;

    @prop({required: true})
    number: String;

    @prop({required: true})
    birthday: Date;

    @prop({required: true})
    address: string;

    @prop({required: true})
    city: string;

    @prop({required: true})
    state: string;

    @prop({required: true})
    zip: string;
}