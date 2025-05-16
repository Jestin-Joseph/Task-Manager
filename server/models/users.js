const db = require("../db");


exports.getAllUsers = ()=>{
    const users = db.select("*").from('users');
    return users
}

exports.getUserByEmail = (email)=>{
    return db('users').where({email}).first();
}

exports.registerUser = (data) => {
    // try{
    //     const query = db.insert(data).into('users');
    //     return query
    // } catch (error) {
    //     return error
    // }
    
    return db("users").insert(data).returning("*");
}