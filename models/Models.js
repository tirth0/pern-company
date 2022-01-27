import { DataTypes } from 'DataTypes'
import sequelize from '../db'


const Company = sequelize.define('company', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull : false
    },
    employeeCount : {
        type: DataTypes.INTEGER,
        allowNull : false
    },
    password : {
        type: DataTypes.STRING,
        allowNull : false
    
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
    } 
});


const User = sequelize.define('user', {
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

const ListDetails = sequelize.define('list_details', {
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
})

const TaskDetails = sequelize.define('task_details', {
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
})

const List = sequelize.define('list', {
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
})

const Task = sequelize.define('task', {
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
    
})

