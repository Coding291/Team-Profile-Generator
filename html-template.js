const fs = require('fs');

let html;

const generateTemplate = (answers) => {
   console.log(answers)
   //Here we insert data by the assigning html to the following
 return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">Team</h1>
        </div>
      </header>
      <main>
      <div class="container card my-5">
      <h2>  </h2>
      <p> ID:  </p>
      <p> Email:  </p>
      <p> School:  </p>
      <p> Github:  </p>
      </div>
      </main>
     
    </body>
    </html>
    `;
  };
  module.exports = generateTemplate;