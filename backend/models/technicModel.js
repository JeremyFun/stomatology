import mongoose from "mongoose";

const technicSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

const Technic = mongoose.model('Technic', technicSchema)

export default Technic
