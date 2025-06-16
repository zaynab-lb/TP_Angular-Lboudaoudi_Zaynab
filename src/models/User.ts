export enum UserType {
    Admin = "Admin",
    Member = "Member",
    Guest = "Guest"
}

export interface IUserCredentials {
  email: string;
  password: string;
}

export interface IRegisterData extends IUserCredentials {
  firstName: string;
  lastName: string;
  age: number;
  userType: UserType;
}

export class User {
    private userId: number;
    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;
    private age: number;
    private userType: UserType;

    constructor(userId: number, firstName: string, lastName: string, email: string, password: string, age: number) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userType = '' as UserType; // Default to empty string, should be set later
        this.email = email;
        this.password = password;
        this.age = age;
    }

    public fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public greetUser(): string {
        switch (this.userType) {
            case UserType.Admin:
                return `Welcome Admin ${this.fullName()}, you have full access.`;
            case UserType.Member:
                return `Welcome Member ${this.fullName()}, enjoy your shopping.`;
            default:
                return `Welcome Guest, feel free to explore.`;
        }
    }

    public get UserId(): number {
        return this.userId;
    }

    public set UserId(userId: number) {
        this.userId = userId;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public set FirstName(firstName: string) {
        this.firstName = firstName;
    }

    public get LastName(): string {
        return this.lastName;
    }

    public set LastName(lastName: string) {
        this.lastName = lastName;
    }

    public get Age(): number {
        return this.age;
    }

    public set Age(age: number){
        this.age = age;
    }

    public get UserType(): UserType {
        return this.userType;
    }
    
    public set UserType(userType: UserType) {
        this.userType = userType;
    }
    public get Email(): string {
        return this.email;
    }
    public set Email(email: string) {
        this.email = email;
    }
    public get Password(): string {
        return this.password;
    }
    public set Password(password: string){
        this.password = password;
    }
    
}