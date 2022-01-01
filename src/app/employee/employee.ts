export class Employee{
    id : number = 0;
    firstName : string = "";
    lastName : string = "";
    username : string = "";
    email : string = "";
    birthDate : string = "";
    basicSalary : number = 0;
    status : string = "";
    group : string = "";
    description : string = "";

    constructor (id: number,firstName: string,lastName: any,username: any,email: any,birthDate: any,basicSalary: any,status: any,group: any,description: any){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.birthDate = birthDate;
        this.basicSalary = basicSalary;
        this.status = status;
        this.group = group;
        this.description = description;
    }
}