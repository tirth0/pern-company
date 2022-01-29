import { DataTypes } from 'sequelize';
import sequelize from '../db'


export const Company = sequelize.define('company', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      onDelete : 'Cascade',
      onUpdate : 'Cascade'
    },
    name: {
      type: DataTypes.STRING,
      allowNull : false,
      unique: true,
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


export const User = sequelize.define('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      onDelete : 'Cascade',
      onUpdate : 'Cascade'
    },
    companyId : {
      type : DataTypes.INTEGER,
      allowNull : false,
      references : {
        model : 'company',
        key : 'id'
      }
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    password : {
      type: DataTypes.STRING,
      allowNull : false
    },
    email: {
      type: DataTypes.STRING,
      unique : true
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






export const Task = sequelize.define('task', {
    id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        onDelete : 'Cascade',
        onUpdate : 'Cascade'

    },
    listId : {
      type : DataTypes.INTEGER,
      allowNull : false,
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




export const TaskDetails = sequelize.define('task_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
        onDelete : 'Cascade',
        onUpdate : 'Cascade'
      },
      name : {
        type : DataTypes.STRING,
        allowNull : false,
      },
      description : {
        type : DataTypes.STRING,
      },
      status : {
        type : DataTypes.STRING,
        allowNull:false
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



export const List = sequelize.define('list', {
    listId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      onDelete : 'Cascade',
      onUpdate : 'Cascade'
    },
    
    employeeId : {
      type : DataTypes.INTEGER,
    },
    taskId : {
      type : DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
})




export const ListDetails = sequelize.define('list_details', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
      onDelete : 'Cascade',
      onUpdate : 'Cascade'
    },
    companyId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      
    },
    name : {
      type : DataTypes.STRING,
      allowNull : false,
    },
    description : {
      type : DataTypes.STRING,

    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
})

Company.hasMany(User, {foreignKey : 'companyId'});


User.belongsTo(Company, {
  foreignKey: 'companyId',
  onDelete : 'Cascade',
  onUpdate : 'Cascade'
});



User.belongsToMany(Task, {
  through: 'list',
  foreignKey: 'employeeId',
  onDelete : 'Cascade',
})



Task.belongsToMany(User, {
  through: 'list',
  foreignKey: 'taskId',
  onDelete : 'Cascade',
})

Task.hasMany(List, {foreignKey: 'taskId'});

User.belongsToMany(ListDetails, {
  through: 'list',
  foreignKey: 'employeeId',
  onDelete : 'Cascade',
})



ListDetails.belongsToMany(User, {
  through: 'list',
  foreignKey: 'listId',
  onDelete : 'Cascade',
})

List.belongsTo(ListDetails, {foreignKey: 'listId'});



TaskDetails.hasOne(Task, {
  foreignKey : 'id',
  onDelete : 'Cascade',
  onUpdate : 'Cascade'
})


