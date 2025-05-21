const tasksModel = require('../models/tasks')

exports.getUserTasks = async (req, res) => {
    try {
        const userTasks = await tasksModel.getUserTasksModel(req.user.id)
        // const date = new Date(userTasks.due_date);
        // const formatted_due = date.toLocaleDateString('en-US');
        // userTasks.due_date =  formatted_due;
        // console.log(formatted_due)
        res.status(201).send({ title: "All Tasks", content: userTasks })
    } catch (error) {
        console.log("Error fetching data", error)
        res.status(500).json({
            message: "Failed to retrieve user tasks",
            error: error.message  // or just 'error' if you want the full stack
        });
    }
}

exports.createUserTask = async (req, res) => {
    try {
        res.send("matchaaaa")

    } catch {
        res.send("pakaaaa")
    }
}