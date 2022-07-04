const generatePage = require("./html-template")
const fs = require('fs')
const inquirer = require('inquirer');


const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const team = []


const addManager = profileData => {
      inquirer.prompt ([ 

      
        {
        type: 'input',
        name: 'name',
        message: 'What is your managers name?',
           
         },
         {
        type: 'input',
        name: 'id',
        message: 'What is your managers ID?',
       
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is your managers email address?',
         
        },
        {
        type: 'input',
        name: 'description',
        message: 'What is your managers Office Number? ',
        }

     ]) 
        .then ((answer) => {
            console.log(answer)
            const manager = new Manager(answer.name, answer.email, answer.id, answer.description)
            team.push(manager)

        }) 

        

     }

const addEngineer = profileData => {
    return inquirer.prompt ([
    {
        
            type: 'input',
            name: 'name',
            message: 'What is your engineers name?',
             
            },
            {
            type: 'input',
            name: 'id',
            message: 'What is your engineers ID?',
           
            },
            {
            type: 'input',
            name: 'email',
            message: 'What is your engineers email address?',
             
            },
            {
            type: 'input',
            name: 'github',
            message: 'What is your engineers Github?', 
            }
    
    

])
   .then ((answer) => {
    console.log(answer)
    const engineer = new Engineer(answer.name, answer.email, answer.id, answer.github)
    team.push(engineer)  
   })
}

const addIntern = profileData => {
    return inquirer.prompt ([
    {
            type: 'input',
            name: 'name',
            message: 'What is your interns name?',
           
            },
            {
            type: 'input',
            name: 'id',
            message: 'What is your interns ID?',
           
            },
            {
            type: 'input',
            name: 'email',
            message: 'What is your interns email address?',
             
            },
            {
            type: 'input',
            name: 'school',
            message: 'Which school does your intern go to?', 
            }
    
            

])
    .then ((answer) => {
        console.log(answer)
        const intern = new Intern(answer.name, answer.email, answer.id, answer.school)
        team.push(intern)  
   })
}


const addMember = (profileData) => {
    return inquirer.prompt ([
        {
            
                type: 'input',
                name: 'add',
                message: 'Would you like to add a member? (Y/N)',
                default: false
               
                },
                {
                type: 'input',
                name: 'department',
                message: 'Where do you want the member to add?',
                choices: ['Engineer', 'Intern', 'I do not wish to add any more members']
                 
        }
                
            ])
            .then ((answer) => {
                if (answer.add) {
                    const pageHTML = generatePage(profileData);
                        console.log(pageHTML)
                        fs.writeFile('./index.html', pageHTML, err => {
                            if (err) {
                              console.log(err);
                              return;
                            }
                            console.log('Page created! Check out index.html in this directory to see it!');
                })
            }
                else {
                   return false
                }

                if (answer.choices[0]) {
                   return addEngineer()
                }
                else if (answer.choices[1]) {
                   return addIntern()
                }
                else if (answer.choices[2]) {
                    const pageHTML = generatePage(profileData);
                        console.log(pageHTML)
                        fs.writeFile('./index.html', pageHTML, err => {
                            if (err) {
                              console.log(err);
                              return;
                            }
                            console.log('Page created! Check out index.html in this directory to see it!');
                })
                }
                else {
                    console.log("Please put a valid answer")
                }

        })
}
addManager()
   .then(addMember)
  
   

//     .then(addEngineer)
//     .then(addIntern)
//     .then(profileData => {
//     const pageHTML = generatePage(profileData);
//     console.log(pageHTML)
//     fs.writeFile('./index.html', pageHTML, err => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log('Page created! Check out index.html in this directory to see it!');
      
//       });


    
//   });







// addManager()
//        //and using .then method we retrieve the answers to generate template
//       .then(answers => {
//           generatePage(answers)
//       })
// addEngineer()
//       .then(answers => {
//           generatePage(answers)
//       })
// addIntern()
//        .then(answers => {
//           generatePage(answers)
//       })
