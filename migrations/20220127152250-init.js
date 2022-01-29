'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('company', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete : 'Cascade',
        onUpdate : 'Cascade'
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false,
        
      },
      employeeCount : {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      password : {
        type: Sequelize.STRING,
        allowNull : false

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    
    
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        onDelete : 'Cascade',
        onUpdate : 'Cascade'
      },
      companyId : {
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : 'company',
          key : 'id'
        }
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      password : {
        type: Sequelize.STRING,
        allowNull : false
      },
      email: {
        type: Sequelize.STRING,
        unique : true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('task', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete : 'Cascade',
        onUpdate : 'Cascade'

      },
      listId : {
        type : Sequelize.INTEGER,
        allowNull : false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
  });


    await queryInterface.createTable('list', {
      id : {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        onDelete : 'Cascade',
        onUpdate : 'Cascade'
      },
      listId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete : 'Cascade',
        onUpdate : 'Cascade'
      },
      
      employeeId : {
        type : Sequelize.INTEGER,
        
      },
      taskId : {
        type : Sequelize.INTEGER,
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

    

    await queryInterface.createTable('list_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete : 'Cascade',
        onUpdate : 'Cascade'
      },
      companyId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model : 'company',
          key : 'id'
        },
      },
      name : {
        type : Sequelize.STRING,
        allowNull : false,
      },
      description : {
        type : Sequelize.STRING,

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('task_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete : 'Cascade',
        onUpdate : 'Cascade'
      },
      taskId : {
        type : Sequelize.INTEGER,
        
      },
      name : {
        type : Sequelize.STRING,
        allowNull : false,
      },
      description : {
        type : Sequelize.STRING,
      },
      status : {
        type : Sequelize.STRING,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });


    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
  }
};