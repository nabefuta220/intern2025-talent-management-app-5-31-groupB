import { Employee } from "./Employee";

export interface EmployeeDatabase {
  getEmployee(id: string): Promise<Employee | undefined>;
  getEmployees(
    filterText: string,
    filterAffiliation: string,
    filterPosition: string
  ): Promise<Employee[]>;
}
