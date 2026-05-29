import express from "express";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
import cors from 'cors'
import connectDb from './utils/db_connection.js'
import formRoutes from './routes/formRoutes.js'
import skillRoutes from './routes/skillRoutes.js'
import projectRoutes from './routes/projectRoutes.js'
import loginRoutes from './routes/loginRoutes.js'


dotenv.config()
const port = process.env.port || 5000


const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

connectDb()

app.get('/', (req, res)=> {
    res.json("working fine")
})

app.use('/api/forms', formRoutes)
app.use('/api/skills', skillRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/admin', loginRoutes)

app.listen(port, ()=> console.log(`connected to port : ${port}`)
)