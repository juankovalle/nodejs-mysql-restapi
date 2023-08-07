import Client from '../models/client.js'

export const getClients = async (req, res) => {
    try{
        const clients = await Client.find().lean()
        res.json(clients)
    } catch(error){
        return res.status(500).json({
            message: 'Error'
        })
    }
    
}

export const getClient = async (req, res) => {
    try{
        const clients = await Client.findOne({'rut' : req.params.rut}).lean()
        console.log(clients)
        if(clients == null) return res.status(404).json({
            message: 'Cliente no encontrado' 
        })

        res.json(clients)
    } catch(error){
        return res.status(500).json({
            message: 'Error'
        })
    }
}

export const createClient = async (req, res) => {
    try{
        const client = Client(req.body)
        await client.save();
        return res.send('OK')

    } catch(error){
        return res.status(500).json({
            message: 'Error'
        })
    }
}

export const updateClient = async (req, res) => {
    try{
        const result = await Client.findOneAndUpdate({'rut' : req.params.rut}, {$set:req.body})
        console.log(result)
        return res.send('OK')
    } catch(error){
        return res.status(500).json({
            message: 'Error'
        })
    }
}

export const deleteClient = async (req, res) => {
    try{
        const result = await Client.findOneAndDelete({'rut' : req.params.rut})
        console.log(result)
        return res.send('OK')
    } catch(error){
        return res.status(500).json({
            message: 'Error'
        })
    }
}