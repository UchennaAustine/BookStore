import express, { Application } from "express"
import mdatabase from "./Config/BookstoreDatabase"
import cors from "cors"
import router from "./Router/BookStoreRouter"

const port: number = 3344

const app:Application = express()
mdatabase

app.use(express.json())
.use(cors())
.use("/api", router)

app.get("/", (req, res)=>{
    res.status(200).json({
        message: "data has being gotten"
    })
})

app.listen(port, ()=>{
    console.log("Server is Active and Running on port:", port);
    
})