const Manager = require('../lib/Manager');


test('creates a Manager object', () => {
    const manager = new Manager('Muhammad', 4, "azam.m2 @gmail.com", 3);
  
    expect(manager.name).toBe('Muhammad');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
  
    
   
  });