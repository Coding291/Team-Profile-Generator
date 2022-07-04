const Employee = require('../lib/Employee.js');


test('creates a Employee object', () => {
    const employee = new Employee('Muhammad' , 4, "AZA2@gmail.com");
  
    expect(employee.name).toBe('Muhammad');
    expect(employee.id).toEqual(expect.any(Number));
    
   
  });

