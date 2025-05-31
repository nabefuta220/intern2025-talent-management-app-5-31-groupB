test("getEmployeesのテスト(id検索-1)", async () => {
    const { EmployeeDatabaseInMemory } = await import("../employee/EmployeeDatabaseInMemory");
    const db = new EmployeeDatabaseInMemory();
    const employee = await db.getEmployee("1");
    expect(employee).toEqual({ id: "1", name: "Jane Doe", age: 22 });
});

test("getEmployeesのテスト(id検索-2)", async () => {
    const { EmployeeDatabaseInMemory } = await import("../employee/EmployeeDatabaseInMemory");
    const db = new EmployeeDatabaseInMemory();
    const employee = await db.getEmployee("2");
    expect(employee).toEqual({ id: "2", name: "John Smith", age: 28 });
});

test("getEmployeesのテスト(id検索-3)", async () => {
    const { EmployeeDatabaseInMemory } = await import("../employee/EmployeeDatabaseInMemory");
    const db = new EmployeeDatabaseInMemory();
    const employee = await db.getEmployee("3");
    expect(employee).toEqual({ id: "3", name: "山田 太郎", age: 27 });
});

