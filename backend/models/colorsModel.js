import mongoose from "mongoose";

const colorsSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

const Colors = mongoose.model('Colors', colorsSchema)

export default Colors
