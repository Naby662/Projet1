import mongoose from "mongoose";

const matiereSchema = mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    niveau:{
        type: String,
        required: true
    }

}, {timestamps: true})

const Matiere = mongoose.model('matiere', matiereSchema)

export default Matiere;