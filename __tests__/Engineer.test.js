const Engineer = require('../lib/Engineer.js');


test('creates a Manager object', () => {
    const engineer = new Engineer('Muhammad', 4, "azam.m2 @gmail.com");
  
    expect(engineer.name).toBe('Muhammad');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    
    
   
  });