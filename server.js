import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import 'dotenv/config'
import ProductRouter from './routes/product.route.js'
import { ConnectDB } from './config/db.js'

const app = express()
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use("/api/product" , ProductRouter)

app.listen(process.env.PORT , ()=>{
    ConnectDB().then((res)=>{
     
        if(res){
            console.log(`Server Running on the Port: ${process.env.PORT}`)
        }
    }).catch(err=>{
        console.log("Error on Running the Server" , err)
    })
    
})
