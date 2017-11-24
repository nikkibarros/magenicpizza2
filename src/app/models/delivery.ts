import { Order } from './order';

export class Delivery {
    orders: Order[];
    firstName: string;
    lastName: string;
    emailAddress: string;
    contactNumber: string;
    street: string;
    city: string;
    zip: string;

    constructor (
        orders: Order[],
        firstName: string,
        lastName: string,
        emailAddress: string,
        contactNumber: string,
        street: string,
        city: string,
        zip: string
    ) {
        this.orders = orders;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.contactNumber = contactNumber;
        this.street = street;
        this.city = city;
        this.zip = zip;
    }
}
