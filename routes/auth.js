import express from 'express';
import {Company, User} from '../models/Models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const router = express.Router();


/**
 * @api {post} register route to register a company
*/
router.post('/register-company', async (req, res) => {
    const {name, employeeCount = 0, password} = req.body;
    console.log(req.body);
    try {
        const c = await Company.findOne({where : {name:name}});
        if (c) {
            console.log(c)
            return res.status(400).json({
                message: 'Company already exists'
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const company = await Company.create({
            name,
            employeeCount,
            password : hashedPassword
        });
        res.status(200).json({company, message: "Company Create"});
    } catch (err) {
        console.error(err.message);
        res.status(500).json({code : "Server Error"});
    }
});


/**
 * @api {post} register route to register a user
*/
router.post('/register-user', async (req, res) => {
    const {companyId, firstName, lastName, password, email} = req.body;
    try {
        const u = await User.findOne({where: {email:email}});
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
            password : hashedPassword,
            email
        });
        res.status(200).json({user, message: "User Created"});
    } catch (err) {
        console.error(err.message);
        res.status(500).json({code : "Server Error"});
    }
}) 

/**
 * @api {post} login route to login a user
*/
router.post('/login-user', async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({where: {email:email}});
        if (!user) {
            return res.status(400).json({
                message: 'User does not exist'
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid Password'
            })
        }
        const access_token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN_SHORT
        });
        const refresh_token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN_LONG
        });
        res.status(200).json({user, message: "User Logged In", tokens : {
            access_token,
            refresh_token
        }});
    } catch (err) {
        console.error(err.message);
        res.status(500).json({code : "Server Error"});
    }
})

/**
 * api {post} login route to login a company
*/
router.post('/login-company', async (req, res) => {
    const {name, password} = req.body;
    try {
        const company = await Company.findOne({where : {name:name}});
        if (!company) {
            return res.status(400).json({
                message: 'Company does not exist'
            })
        }
        const isMatch = await bcrypt.compare(password, company.password);
        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid Password'
            })
        }
        const access_token = jwt.sign({id: company.id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN_SHORT
        });
        const refresh_token = jwt.sign({id: company.id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN_LONG
        });
        res.status(200).json({company, message: "Company Logged In", tokens : {
            access_token,
            refresh_token
        }});
    } catch (err) {
        console.error(err.message);
        res.status(500).json({code : "Server Error"});
    }
})

export default router;