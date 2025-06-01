test("getEmployeesのテスト(空文字列)", async () => {
  const { EmployeeDatabaseInMemory } = await import(
    "../employee/EmployeeDatabaseInMemory"
  );
  const db = new EmployeeDatabaseInMemory();
  const employees = await db.getEmployees("", "");
  expect(employees.length).toBe(3); //現在のところ，表示順は未定義
});

test("getEmployeesのテスト(氏名完全一致-1)", async () => {
  const { EmployeeDatabaseInMemory } = await import(
    "../employee/EmployeeDatabaseInMemory"
  );
  const db = new EmployeeDatabaseInMemory();
  const employees = await db.getEmployees("Jane Doe", "");
  expect(employees.length).toBe(1);
  expect(employees[0]).toEqual({ id: "1", name: "Jane Doe", age: 22 });
});

test("getEmployeesのテスト(氏名完全一致-2)", async () => {
  const { EmployeeDatabaseInMemory } = await import(
    "../employee/EmployeeDatabaseInMemory"
  );
  const db = new EmployeeDatabaseInMemory();
  const employees = await db.getEmployees("John Smith", "");
  expect(employees.length).toBe(1);
  expect(employees[0]).toEqual({ id: "2", name: "John Smith", age: 28 });
});

test("getEmployeesのテスト(氏名完全一致-3)", async () => {
  const { EmployeeDatabaseInMemory } = await import(
    "../employee/EmployeeDatabaseInMemory"
  );
  const db = new EmployeeDatabaseInMemory();
  const employees = await db.getEmployees("山田 太郎", "");
  expect(employees.length).toBe(1);
  expect(employees[0]).toEqual({ id: "3", name: "山田 太郎", age: 27 });
});

test("getEmployeesのテスト(氏名完全一致-存在しない氏名)", async () => {
  const { EmployeeDatabaseInMemory } = await import(
    "../employee/EmployeeDatabaseInMemory"
  );
  const db = new EmployeeDatabaseInMemory();
  const employees = await db.getEmployees("未定義　太郎", "");
  expect(employees.length).toBe(0);
});
