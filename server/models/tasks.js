const db = require("../db");

exports.getUserTasksModel = (user) => {
    const data = db.select(
        '*',
        db.raw(`TO_CHAR(due_date, 'MM/DD/YYYY') AS due_date`)


    ).from('usertasks').where({user_id: user});
    return data;
}

exports.createUserTask = (user) => {
    
}