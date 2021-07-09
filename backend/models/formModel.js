import mongoose from "mongoose";

const formSchema = mongoose.Schema({
        colors: {
            type: String,
            required: true
        },
        count: {
            type: String,
            required: true,
        },
        costumer: {
            type: String,
            required: true
        },
        formula: {
            type: String,
            required: true,
        },
        introduction: {
            type: String,
            required: true,
        },
        pacient: {
            type: String,
            required: true,
        },
        services: {
            type: String,
            required: true,
        },
        technic: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('Form', formSchema)

export default User

