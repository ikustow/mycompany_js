export class Employee {
    id: number;
    name: string;
    surname: string;
    department_id: number;
    user_id: number;


    constructor(id: number, name: string, surname:string, department_id: number, user_id: number) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.department_id = department_id;
        this.user_id = user_id
    }
}