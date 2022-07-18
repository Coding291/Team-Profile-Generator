//Here we create a file system
const fs = require('fs');

//Here we create our function to generate template for the manager
const generateTemplateManager = (answers) => {
   console.log(answers)
  //here it would return the following formatting in the template
 return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
          <h1 class = text-align center> Team Profile </h1>
      </header>
        </div>
      </header>
      <main>
      <div class="container">
              <div class="row justify-content-center" id="team-cards">
              <div class="col-4 mt-4">
              <div class="card h-100">
              <div class="card-header">
           <h3> ${answers.name} </h3>
           <h4>Manager</h4>
             <p> Email: <a href = ${answers.id} >${answers.id}</a></p>
             <p> ID: ${answers.email}  </p>
             <p> Office Number: ${answers.officeNumber} </p>
           </div>
         </div>
        </div>
     </div>
     </div>
     </main>
     
    </body>
    </html>
    `;
  };
  //Here we did the same for the engineer to generate it onto the template
  const generateTemplateEngineer = (answers) => {
    console.log(answers)
     //here it would return the following formatting in the template
  return `
     <!DOCTYPE html>
     <html lang="en">
   
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Team</title>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
       <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
       <link rel="stylesheet" href="style.css">
     </head>
   
     <body>
       <header>
         <div class="container flex-row justify-space-between align-center py-3">
         
         </div>
       </header>
       <main>
       <div class="col-4 mt-4">
       <div class="card h-100">
       <div class="card-header">
       <h3> ${answers.name} </h3>
       <h4>Engineer</h4>
       </div>
       <div class="card-body">
       <p> Email: <a href = ${answers.id}>${answers.id}</a>  </p>
       <p> ID: ${answers.email} </p>
       <p> Github: <a href = ${answers.github} >${answers.github}</a></p>
       </div>
       </div>
       </div>
       
       </main>
      
     </body>
     </html>
     `;
   };
//Here we did the same for the intern to generate it onto the template
   const generateTemplateIntern = (answers) => {
    console.log(answers)
     //here it would return the following formatting in the template
  return `
     <!DOCTYPE html>
     <html lang="en">
   
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Team</title>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
       <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
       <link rel="stylesheet" href="style.css">
     </head>
   
     <body>
       <header>
         <div class="container flex-row justify-space-between align-center py-3">
         
         </div>
       </header>
       <main>
       <div class="col-4 mt-4">
       <div class="card h-100">
       <div class="card-header">
       <h3> ${answers.name} </h3>
       <h4>Intern</h4>
       </div>
       <div class="card-body">
       <p> Email: <a href = ${answers.id} >${answers.id}</a>   </p>
       <p> ID: ${answers.email} </p>
       <p> School: ${answers.school}</p>
       </div>
       </div>
       </div>
       
       </main>
       </main>
      
     </body>
     </html>
     `;
   };
  //here we create function that generate the entire HTML template
   const generateTemplate = (data) => {
    console.log(data)
    //we call the manager template function we created above
      generateTemplateManager(data)
      //we call the engineer template function we created above
      generateTemplateEngineer(data)
      //we call the intern template function we created above
      generateTemplateIntern(data)
      //here we created an empty html array to store the loop
      let html = []
      //here we have created the for-loop 
      for( var i = 0; i < data.length; i++) {
        //which checks if the role is equal to manager 
         if (data[i].getRole() === "Manager") {
            //it would generate a template for manager 
            let manager = generateTemplateManager(data[i])
            //this would push it to the template
            html.push(manager)
         }
         //or else if the user choose engineer
         else if (data[i].getRole() === "Engineer") {
            //it would generate a template for engineer
            let engineer = generateTemplateEngineer(data[i])
            //this would push it to the template
            html.push(engineer)
         }
         //or else we will have the procedure for the intern
         else {
            let intern = generateTemplateIntern(data[i])
            html.push(intern)
         }
         
      }
      //here we used .join method to have it altogether
      return html.join('')
   }
//this is where export our template file 
  module.exports = generateTemplate;