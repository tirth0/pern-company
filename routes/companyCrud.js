import express from 'express';
import { Company, User, ListDetails, TaskDetails, List, Task } from '../models/Models';
import passport from 'passport'
import sequelize from '../db'
const router = express.Router();

/**
 * Add A User to the company 
*/
router.post('/add-user', passport.authenticate('company', {session:false}), async (req, res) => {
    const {companyId, firstName, lastName, password, email} = req.body;
    try {
        const u = await User.findOne({email: email});
        if (u) {
            return res.status(400).json({
                message: 'User already exists'
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            companyId,
            firstName,
            lastName,
            hashedPassword,
            email
        });
        res.status(200).json({user, message: "User Created"});
    } catch (err) {
        console.error(err.message);
        res.status(500).json({code: 'Server Error'});
    }
})

/**
 * Delete User 
*/
router.delete('/delete-user/:id', passport.authenticate('company', {session:false}), async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            })
        }
        await user.remove();
        res.status(200).json({message: "User Deleted"});
    } catch (err) {
        console.error(err.message);
        res.status(500).json({code : 'Server Error'});
    }
});

/**
 * Create New List  
*/
router.post('/create-list', passport.authenticate('company', {session:false}), async (req, res) => {
    const {companyId, name, description} = req.body;
    console.log(companyId)
    let transaction = await sequelize.transaction();
    try {
        const l = await ListDetails.findOne({
            where : {
                name : name,
                companyId : companyId
            }
        })
        if (l) {
            return res.status(400).json({
                message: 'List already exists'
            })
        }
        
        const listDetails = await ListDetails.create({
            name,
            description,
            companyId : companyId
        },{transaction});
        // const list = await List.create({
        //     listId : listDetails.id,
        // },{transaction})
        transaction.commit();
        res.status(200).json({listDetails, message: "List Created"});
    } catch (err) {
        transaction.rollback();
        console.error(err.message);
        res.status(500).json({code : 'Server Error'});
    }
})

router.post('/create-task', passport.authenticate('company', {session:false}), async (req, res) => {
    const {listId, name, description, status} = req.body;
    let transaction = await sequelize.transaction();
    try {
        const t = await TaskDetails.findOne({
            include : [{
                model : Task,
                where : {
                    listId : listId
                }
            }],
           where : {
               name : name,
            }
        })
        if (t) {
            return res.status(400).json({
                message: 'Task already exists'
            })
        }

        const taskDetails = await TaskDetails.create({
            name,
            description,
            status,
        },{transaction});

        const task = await Task.create({
            listId : listId,
            id : taskDetails.id
            
        }, {transaction})

        const list = await List.create({
            listId : listId,
            taskId : task.id
            
        }, {transaction})
        
        

        transaction.commit();
        res.status(200).json({taskDetails, message: "Task Created"});
    } catch (err) {
        transaction.rollback();
        console.error("***",err.message);
        res.status(500).json({code : 'Server Error'});
    }
})

router.post('/update-task', passport.authenticate('company', {session:false}), async (req, res) => {
    const {taskId, assign, status} = req.body;
    let transaction = await sequelize.transaction();
    try {
        const join = await List.findOne({
            where  : {
                id : taskId,
                employeeId : assign
            }
        })

        if(join){
            return res.status(400).json({message : 'Task already Assigned'});
        }

        const task = await Task.findOne({
            where : {
                id : taskId
            }
        })
        
        if (assign){
            const list = await List.create({
                employeeId : assign,
                listId : task.listId,
                taskId : taskId
            },
            {transaction});
            
        }

        if (status)
        {
            const taskDetails = await TaskDetails.update({
            status: status,
            },{
                where : { id : taskId}
            }, {transaction}
            )
        }

        
        transaction.commit();
        res.status(200).json({message: "Task Updated"});
    }
    catch(err){
        transaction.rollback();
        console.log(err);
        res.status(500).json({code : 'Server Error'});
    }
});


router.get("/get-list/:id", passport.authenticate('company', {session:false}), async (req, res) => {
    const {id} = req.params;
    try {
        const dataPending = await List.findAll({
            where : {employeeId : id, },
            include : [{
                model : Task,
                attributes : ['listId'],
                required : true,
                through : {
                    attributes : []
                },
                include : [{
                    model : TaskDetails,
                    attributes : ['id'],
                    required : true,
                    where : {'status' : 'done'},
                    through : {
                        attributes : []
                    }
                }]
            }
        ]
        });

        res.status(200).json({dataPending});
    }
    catch(err){
        console.log(err);
        res.status(500).json({code : 'Server Error'});
    }
});


router.get('/tasks', passport.authenticate('company', {session:false}), async (req, res) => {
    try {
        const data = await TaskDetails.findAll({
            include : [{
                model : Task,
                required : true
            }]
        });
        res.status(200).json({data});
    }
    catch(err){
        console.log(err);
        res.status(500).json({code : 'Server Error'});
    }
});


router.get('/get-all-users', passport.authenticate('company', {session:false}), async (req, res) => {
    try {
        const data = await User.findAll({
            include : [{
                model : Company,
                required : true,
            }]
        });
        res.status(200).json({data});

    }
    catch(err){
        console.log(err);
        res.status(500).json({code : 'Server Error'});
    }
});


router.post('/get-tasks-by-user', passport.authenticate('company', {session:false}), async (req, res) => {
    const {id, status} = req.body;
    try {
        const data = await User.findAll({
            include : [{
                model : Task,
                required : true,
                include : [{
                    model : TaskDetails,
                    required : true,
                    where : {
                        status : status
                    }
                }]
            }],
            where : {
                id : id
            }
        });
        res.status(200).json({data});
    }
    catch(err){
        console.log(err);
        res.status(500).json({code : 'Server Error'});
    }
});
            
            


export default router;