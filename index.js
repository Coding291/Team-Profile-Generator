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
        name: 'names',
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
        name: 'OfficeNumber',
        message: 'What is your managers Office Number? ',
        }

     ]) 
        .then ((answer) => {
            console.log(answer)
            const manager = new Manager(answer.name, answer.email, answer.id, answer.OfficeNumber)
            team.push(manager)
            addMember()

        }) 

        

     }

const addEngineer = profileData => {
    inquirer.prompt ([
    {
        
            type: 'input',
            name: 'names',
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
            message: 'What is your engineers Github username?', 
            }
    
    

])
   .then ((answer) => {
    console.log(answer)
    const engineer = new Engineer(answer.name, answer.email, answer.id, answer.github)
    team.push(engineer)  
    addMember()
   })
}

const addIntern = profileData => {
     inquirer.prompt ([
    {
            type: 'input',
            name: 'names',
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
        addMember() 
   })
}


const addMember = (profileData) => {
    return inquirer.prompt ([

                {
                type: 'checkbox',
                name: 'department',
                message: 'Where type of team member do you want to add?',
                choices: ['Engineer', 'Intern', 'I do not wish to add any more members']
                 
        }
                
            ])
            .then ((answer) => {

                if (answer.department[0]) {
                   addEngineer()
                }
                if (answer.department[1]) {
                    addIntern()
                }
                else  {
                    const pageHTML = generatePage(profileData);
                        console.log(pageHTML)
                        fs.writeFile('./index.html', pageHTML, err => {
                            if (err) {
                              console.log(err);
                              return;
                            }
                            console.log('Page created! Check out index.html in this directory to see it!')
                })
                }
                

        })
}
addManager()

   

