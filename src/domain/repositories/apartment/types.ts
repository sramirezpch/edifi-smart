import { Fields } from "src/infrastructure/persistence/postgres/types";

export type Apartment = {
    id: string;
    apartmentNumber: string;
    towerNumber: string;
    user: { 
        id: string;
        name: string;
        lastName: string;
        email: string;
    }
}

export type ApartmentFields = Fields<Apartment>;

export type ApartmentDetail = {
    id: string;
    apartmentNumber: string;
    towerNumber: string;
    user: { 
        id: string;
        name: string;
        lastName: string;
        email: string;
        identificationNumber: string;
    };
    building: {
        id: string;
        name: string;
        address: string;
        city: string;
        district: string;
        postalCode: string;
        countryCode: string;
        company: { 
            id: string;
            name: string;
            phone: string;
            email: string;
        }
    }
}

export type ApartmentDetailFields = Fields<ApartmentDetail>