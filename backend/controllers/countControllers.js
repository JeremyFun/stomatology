import asyncHandler from "express-async-handler"
import Count from "../models/countModel.js"

// @desc     Created new order
// @route    POST /api/orders
// @access   Private
export const addCount = asyncHandler(async (req, res) => {
    const {
        name
    } = req.body
    if (name) {
        const count = new Count({
            name
        })
        const createdCount = await count.save()
        res.status(201).json(createdCount)
    }
})

export const getAllCount = asyncHandler(async (req, res) => {
    const count = await Count.find({})
    res.json(count)
})

export default {addCount, getAllCount}
