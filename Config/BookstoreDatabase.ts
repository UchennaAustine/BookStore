import mongoose from "mongoose";

const bookStoreDatabase = "mongodb://0.0.0.0:27017/bookStoreDatabase"
mongoose.connect(bookStoreDatabase)
mongoose.connection.once("open", ()=>{
    console.log(`Database is Connected on: ${mongoose.connection.host}`);
    
})
.on("error", (err) =>{
    console.log("An error occured in the connection process", err.message)
})

export default mongoose