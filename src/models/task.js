const mongoose = require('mongoose');

// defining schema for the Tasks model
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},
    {
        timestamps: true
    })

// Creating mongoose model for Task collection
const Task = mongoose.model('Task', taskSchema)

module.exports = Task;