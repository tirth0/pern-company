'use strict';


//create a ramdom list of firstNames of size 100
var firstNames = ['Tirtho', 'Raj', 'Sai','Babu', 'Work', 'Shravan', 'Ishant'];
var lastNames = ['Sen', 'Sharma', 'Kumar', 'Bumrah', 'Esoteric', 'Kunct']

const date = new Date()
//company data
const ct = Array(100).fill(0).map(()=>(
  {
    name: firstNames[Math.floor(parseInt(Math.random()*firstNames.length))],
    employeeCount: Math.floor(parseInt(Math.random()*100)),
    password: firstNames[Math.floor(parseInt(Math.random()*firstNames.length))],
    createdAt : date,
    updatedAt : date
  }
))

//user data
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('company', ct, {});

    const companyIds = await queryInterface.sequelize.query(`SELECT id FROM company`);
    const userIds = Array(100).fill(0).map(()=>(
      {
        companyId: companyIds[0][parseInt(Math.random()*99)].id,
        firstName: firstNames[Math.floor(parseInt(Math.random()*firstNames.length))],
        lastName: lastNames[Math.floor(parseInt(Math.random()*lastNames.length))],
        password: firstNames[Math.floor(parseInt(Math.random()*firstNames.length))],
        createdAt : date,
        updatedAt : date
      }
    ))

    await queryInterface.bulkInsert('user', userIds, {});

    //create lists
    const listDetails = Array(100).fill(0).map(()=>(
      {
        companyId: companyIds[0][parseInt(Math.random()*99)].id,
        name: firstNames[Math.floor(parseInt(Math.random()*firstNames.length))],
        description: `lorem dorem ipsum depsum`,
        createdAt : date,
        updatedAt : date
      }
    ))

    await queryInterface.bulkInsert('list_details', listDetails, {});
    

    //get list ids
    const listIds = await queryInterface.sequelize.query(`SELECT id FROM list_details`);
    console.log(listIds[0][parseInt(Math.random()*99)].id)
    //create task details
    


    
    //create task details
    const taskDetails = Array(100).fill(0).map(()=>(
      {
        
        name: firstNames[Math.floor(parseInt(Math.random()*firstNames.length))],
        description: `lorem laurem loremsum depsum`,
        status : 'in progress',
        createdAt : date,
        updatedAt : date
      }
    ));
    await queryInterface.bulkInsert('task_details', taskDetails, {});

    const taskIds = await queryInterface.sequelize.query(`SELECT id FROM task_details`);

    let count=0;

    const task = Array(100).fill(0).map(()=>(
      {
        id: taskIds[0][count++].id, 
        listId: listIds[0][parseInt(Math.random()*99)].id,
        createdAt : date,
        updatedAt : date
      }
    )) 
    await queryInterface.bulkInsert('task', task, {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
  }
};
