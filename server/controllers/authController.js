const bcrypt = require('bcrypt')
const userModel = require('../models/users')
const jwt = require('jsonwebtoken');


exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.send({ users })
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Internal server error" });
    }

}

exports.signUp = async (req, res) => {
    try {
        const data = req.body;
        
        const existingUser = await userModel.getUserByEmail(data.email);
        if (existingUser) {
            return res.status(409).send({ message: 'User with this email already exists' });
        }

        passHash = await bcrypt.hash(data.password, 10);
        data.password = passHash;
        const insertUser = await userModel.registerUser(data);
        // console.log(`user registered with email: ${data.email}`)
        res.status(201).send({ message: "User Successfully registered" })
    } catch (err) {

    }
}

exports.signIn = async (req, res) => {
    try {
        const data = req.body;
        
        const user = await userModel.getUserByEmail(data.email);
        if (!user) {
            res.status(404).send({ message: "User with this email does not exist. Please check and try again" })
        }
        isPasswordMatch = await bcrypt.compare(data.password, user.password);

        if (!isPasswordMatch) {
            res.status(401).send({ message: "Password Incorrect! Check and please try again" })

        }
        // console.log("hello")    
        const token = jwt.sign({ id: user.id, role: user.role, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' })
        
        const userDetails ={
            first_name: user.first_name,
            last_name: user.last_name,
            role: user.role,
            email: user.email
        }
        // console.log({ message: "authentication successful!", token, userDetails  })
        res.status(201).send({ message: "authentication successful!", token, userDetails  })

        // console.log("data: ", data)
    } catch (error) {

    }
}

// jestinjoseph106@gmail.com