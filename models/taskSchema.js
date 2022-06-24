import { Schema, model, models } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: '#ffffff'
    },
    urgency: {
        type: Number,
        default: 0
    },
    cat: {
        type: String,
        required: true
    }
})

const Task = models.Task || model('Task', taskSchema)

export default Task