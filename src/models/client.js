import {Schema, model} from 'mongoose'

const taskSchema = new Schema({
    rut: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    apellidoPat: String,
    apellidoMat: String,
    nombre: String,
    activo: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true,
    versionKey: false
});

export default model('Client', taskSchema)
    