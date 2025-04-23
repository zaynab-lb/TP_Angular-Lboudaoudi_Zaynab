enum UserType {
    Admin = "Admin",
    Member = "Member",
    Guest = "Guest"
}
export class User {
    private userId: number;
    private firstName: string;
    private lastName: string;
    private age: number;
    private userType: UserType;

    constructor(userId: number, firstName: string, lastName: string, age: number) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.userType = UserType.Member; // Default user type
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

    public getUserId(): number {
        return this.userId;
    }

    public setUserId(userId: number): void {
        this.userId = userId;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public getUserType(): UserType {
        return this.userType;
    }
    
    public setUserType(userType: UserType): void {
        this.userType = userType;
    }
}