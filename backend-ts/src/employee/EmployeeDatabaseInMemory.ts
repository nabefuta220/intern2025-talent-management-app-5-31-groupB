import { EmployeeDatabase } from "./EmployeeDatabase";
import { Employee } from "./Employee";

export class EmployeeDatabaseInMemory implements EmployeeDatabase {
  private employees: Map<string, Employee>;

  constructor() {
    this.employees = new Map<string, Employee>();
    this.employees.set("1", {
      id: "1",
      name: "Jane Doe",
      age: 22,
      affiliation: "人事部",
      position: "部長",
    });
    this.employees.set("2", {
      id: "2",
      name: "John Smith",
      age: 28,
      affiliation: "人事部",
      position: "社員",
    });
    this.employees.set("3", {
      id: "3",
      name: "山田 太郎",
      age: 27,
      affiliation: "経理部",
      position: "部長",
    });
  }

  async getEmployee(id: string): Promise<Employee | undefined> {
    return this.employees.get(id);
  }

  async getEmployees(
    filterText: string,
    filterAffiliation: string,
    filterPosition: string
  ): Promise<Employee[]> {
    const employees = Array.from(this.employees.values());
    let employeesTextFiltered, employeesAffilFiltered;
    if (filterText === "") {
      employeesTextFiltered = employees;
    } else {
      const lowerFilterText = filterText.toLowerCase();
      employeesTextFiltered = employees.filter((employee) => {
        const lowerName = employee.name.toLowerCase();
        if (lowerName === lowerFilterText) {
          return true;
        }
        const nameParts = lowerName.split(" ");
        return nameParts.some((part) => part.includes(lowerFilterText));
      });
    }

    if (filterAffiliation === "") {
      employeesAffilFiltered = employeesTextFiltered;
    } else {
      employeesAffilFiltered = employeesTextFiltered.filter((employee) => {
        return employee.affiliation === filterAffiliation;
      });
    }

    if (filterPosition === "") {
      return employeesAffilFiltered;
    } else {
      return employeesAffilFiltered.filter((employee) => {
        return employee.position === filterPosition;
      });
    }
  }
}
