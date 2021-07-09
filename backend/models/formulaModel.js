import mongoose from "mongoose";

const formulaSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

const Formula = mongoose.model('Formula', formulaSchema)

export default Formula
