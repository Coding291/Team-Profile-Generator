const Intern = require('../lib/Intern.js');


test('creates a Manager object', () => {
    const intern = new Intern('Muhammad', 4, "azam.m2 @gmail.com", 'Madison Park ');
  
    expect(intern.name).toBe('Muhammad');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    
   
  });