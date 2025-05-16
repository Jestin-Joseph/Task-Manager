const bcrypt = require('bcrypt')
const userModel = require('../models/users')


exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        
        console.log("suck a ");
        res.send({ users })
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Internal server error" });
    }

}

exports.signUp = async (req, res) =>{
    try{
        const data  = req.body;

        const existingUser = await userModel.getUserByEmail(data.email);
        if (existingUser){
            return res.status(409).send({message: 'User with this email already exists'});
        }

        passHash = await bcrypt.hash(data.password, 10);
        data.password = passHash;
        const insertUser = await userModel.registerUser(data);
        // console.log(`user registered with email: ${data.email}`)
        res.status(201).send({message: "User Successfully registered"})
    } catch (err) {

    }
}

exports.signUp = async (req, res) => {
    try{
        
    } catch (error) {

    }
}