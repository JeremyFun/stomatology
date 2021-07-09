import mongoose from "mongoose";

const servicesSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

const Services = mongoose.model('Services', servicesSchema)

export default Services
