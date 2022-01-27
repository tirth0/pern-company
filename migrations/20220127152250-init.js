'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('company', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false
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
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      email: {
        type: Sequelize.STRING
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

    await queryInterface.createTable('list_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,

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

    await queryInterface.createTable('list', {
      listId: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        references : {
          model : 'list_details',
          key : 'id'
        },
        primaryKey: true,

      },
      employeeId : {
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : 'user',
          key : 'id'
        },
        primaryKey: true,
      },
      taskId : {
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : 'task_details',
          key : 'id'
        },
        primaryKey: true,
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
        autoIncrement: true,
        type: Sequelize.INTEGER,
        references : {
          model : 'list_details',
          key : 'id'
        },
        primaryKey: true,

      },
      taskId : {
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : 'task_details',
          key : 'id'
        },
        primaryKey: true,
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