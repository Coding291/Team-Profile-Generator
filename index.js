//Here we retrieve the data from the html template js file
const generatePage = require("./html-template")
//used file system 
const fs = require('fs')
//use the inquirer package 
const inquirer = require('inquirer');
//we have the Manager class that access the Manager.js file
const Manager = require("./lib/Manager")
//we have the Manager class that access the Manager.js file
const Engineer = require("./lib/Engineer")
//we have the Manager class that access the Manager.js file
const Intern = require("./lib/Intern") 
//Here we have an array that would save all the team members
const team = []

//Here we have a function for Manager with the following parameter
const addManager = profileData => {
      inquirer.prompt ([ 

      // // Here are the questions for the manager
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
        name: 'officeNumber',
        message: 'What is your managers Office Number? '
        }

     ]) 
        // then using .then function with parameter
        .then ((answer) => {
            console.log(answer)
            //here we create a new object for manager that would take in the instances of the questions
            const manager = new Manager(answer.name, answer.email, answer.id, answer.officeNumber)
            //and here we push and add the manager
            team.push(manager)
            //here we call this function so this gets exectuted when then statement is processed successfully
            addMember(profileData)
           

        }) 

        

     }
//Here we have a function for Engineer with the following parameter
const addEngineer = profileData => {
    inquirer.prompt ([
    {
        // Here are the questions for the engineer
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
            message: 'What is your engineers Github username?'
            }
    
    

])
   // then using .then function with parameter
   .then ((answer) => {
    console.log(answer)
     //here we create a new object for engineer that would take in the instances of the questions
    const engineer = new Engineer(answer.name, answer.email, answer.id, answer.github)
    //and here we push and add the engineer
    team.push(engineer)  
    //here we call this function so this gets exectuted when then statement is processed successfully
    addMember(profileData)

   })
}
//Here we have a function for Engineer with the following parameter
const addIntern = profileData => {
     inquirer.prompt ([
    {
            // Here are the questions for the engineer
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
            message: 'Which school does your intern go to?' 
            }
    
            

])
     // then using .then function with parameter
    .then ((answer) => {
        console.log(answer)
        //here we create a new object for intern that would take in the instances of the questions
        const intern = new Intern(answer.name, answer.email, answer.id, answer.school)
          //and here we push and add the intern
        team.push(intern) 
        //here we call this function so this gets exectuted when then statement is processed successfully
        addMember(profileData) 
        // generateManagerTemplate(answers)
   })
}

//Here we created a new function to add a new member if the user likes to add
const addMember = (profileData) => {
    // returns the prompts
    return inquirer.prompt ([
           //Here it asks whether or not the user wants to add a member to the team
                {
                type: 'list',
                name: 'department',
                message: 'Where type of team member do you want to add?',
                choices: ['Engineer', 'Intern', 'I do not wish to add any more members']
                 
        }
                
            ])
            //we used a .then function and also gave a parameter
            .then ((answer) => {

                console.log(answer)
                //Here we checks if the user choose Engineer
                if (answer.department === "Engineer") {
                    //then the following function would execute
                   addEngineer()
                }
                // else if the user choose to pick intern
                else if (answer.department === "Intern") {
                    //then this function would execute
                    addIntern()
                }
                //else the user choose not to add anymore members 
                else  {
                    //here it will generate an HTML page
                    const pageHTML = generatePage(team);
                        console.log(pageHTML)
                        //using fs.write file it would have three arguments one would be the page second would be the data displaying on the page and the third would be if in case anything goes wrong it will throw an error
                        fs.writeFile('./index.html', pageHTML, err => {
                            //here it checks for the error
                            if (err) {
                              console.log(err);
                              return;
                            }
                            console.log('Page created! Check out index.html in this directory to see it!')
                })
                
            }

        })
    }
//here we call this function to get it all started
addManager()



