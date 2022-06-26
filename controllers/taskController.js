import ConnectDB from "../utils/dbconnect"
import Task from '../models/taskSchema'

export async function createTask(req, res) {
    try {
        await ConnectDB()
        const { data: { title, color, desc, pinned, urgency, cat } } = req.body

        const newItem = await Task.create({ title, color, desc, pinned, urgency, cat })
        return res.status(200).end()
    } catch (err) {
        console.log(err)
        return res.status(500).end()
    }
}

export async function deleteTask(req, res) {
    const { id } = req.body

    try {
        await ConnectDB()
        await Task.deleteOne({ _id: id })

        return res.status(200).end()
    } catch (err) {
        console.log(err)
        return res.status(400).end()
    }
}

export async function updateTask(req, res) {
    try {
        await ConnectDB()
        const results = await Task.find({})

        return res.status(200).json({
            count: results.length,
            data: results
        })
    } catch (err) {
        return res.status(500).end()
    }
}

export async function getTask(req, res) {
    try {
        await ConnectDB()
        const results = await Task.find({})

        return res.status(200).json({
            count: results.length,
            data: results
        })
    } catch (err) {

    }
}