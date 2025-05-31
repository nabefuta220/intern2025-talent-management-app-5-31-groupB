test("getEmployeesのテスト(id検索)", async () => {
    const { EmployeeDatabaseInMemory } = await import("../employee/EmployeeDatabaseInMemory");
    const db = new EmployeeDatabaseInMemory();
    const employee = await db.getEmployee("1");
    expect(employee).toEqual({ id: "1", name: "Jane Doe", age: 22 });
});

