import { Employee } from "./Employee";

export interface EmployeeDatabase {
    getEmployee(id: string): Promise<Employee | undefined>
    getEmployees(filterText: string): Promise<Employee[]>
    addEmployees(employees: Employee[]): Promise<void>;
}
