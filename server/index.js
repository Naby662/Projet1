import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import authRoutes from './routes/users.js'
import matiereRoutes from './routes/matiere.js'
import tacheRoutes from './routes/tache.js'

const app = express()

dotenv.config()

const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI
app.use(express.json())
app.use(cors())

app.use('/uploads', express.static('uploads'))

//app.use('/auth', authRoutes)
//app.use('/matieres', matiereRoutes)

app.use('/auth', authRoutes)
app.use('/tache', tacheRoutes)

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
        console.log(`Server running on  http://localhost:${PORT}`)
    })    
}).catch(err => { console.log(err) })



