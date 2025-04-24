
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface UpsertCompanyInput {
    id?: Nullable<string>;
    name: string;
    phone: string;
    email: string;
}

export interface UpsertUserInput {
    id?: Nullable<string>;
    name: string;
    lastname: string;
    email: string;
    idNumber: string;
    idType: string;
    role: string;
}

export interface CreateBuildingInput {
    name: string;
    address: string;
    city: string;
    district: string;
    countryCode: string;
    postalCode: string;
    companyId: string;
}

export interface UpdateBuildingInput {
    name?: Nullable<string>;
    address?: Nullable<string>;
    city?: Nullable<string>;
    district?: Nullable<string>;
    countryCode?: Nullable<string>;
    postalCode?: Nullable<string>;
    companyId?: Nullable<string>;
    id: string;
}

export interface CreateApartmentInput {
    apartmentNumber: string;
    towerNumber: string;
    userId?: Nullable<string>;
    buildingId: string;
}

export interface UpdateApartmentInput {
    apartmentNumber?: Nullable<string>;
    towerNumber?: Nullable<string>;
    userId?: Nullable<string>;
    buildingId?: Nullable<string>;
    id: string;
}

export interface MinimalCompany {
    id: string;
    name: string;
}

export interface Company {
    id: string;
    name: string;
    phone: string;
    email: string;
}

export interface UserSummary {
    id: string;
    name: string;
    lastname: string;
    email: string;
    role: string;
    idNumber?: Nullable<string>;
    idType?: Nullable<string>;
}

export interface ApartmentUser {
    id: string;
    name: string;
    lastname: string;
    email: string;
}

export interface MinimalBuilding {
    id: string;
    name: string;
    address: string;
    district: string;
    city: string;
    countryCode: string;
}

export interface Building {
    id: string;
    name: string;
    address: string;
    district: string;
    city: string;
    countryCode: string;
    postalCode: string;
    company?: Nullable<Company>;
}

export interface MinimalApartment {
    id: string;
    apartmentNumber: string;
    towerNumber: string;
}

export interface Apartment {
    id: string;
    apartmentNumber: string;
    towerNumber: string;
    user?: Nullable<ApartmentUser>;
    building: MinimalBuilding;
}

export interface IQuery {
    companies(): MinimalCompany[] | Promise<MinimalCompany[]>;
    companyById(id: string): Company | Promise<Company>;
    users(): UserSummary[] | Promise<UserSummary[]>;
    buildings(): MinimalBuilding[] | Promise<MinimalBuilding[]>;
    building(id: string): Building | Promise<Building>;
    apartment(id: string): Apartment | Promise<Apartment>;
    apartments(): MinimalApartment[] | Promise<MinimalApartment[]>;
}

export interface IMutation {
    createCompany(input: UpsertCompanyInput): boolean | Promise<boolean>;
    createUser(input: UpsertUserInput): boolean | Promise<boolean>;
    createBuilding(input: CreateBuildingInput): boolean | Promise<boolean>;
    updateBuilding(input: UpdateBuildingInput): boolean | Promise<boolean>;
    createApartment(input: CreateApartmentInput): boolean | Promise<boolean>;
    updateApartment(input: UpdateApartmentInput): boolean | Promise<boolean>;
}

type Nullable<T> = T | null;
