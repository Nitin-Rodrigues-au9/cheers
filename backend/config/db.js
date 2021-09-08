const mongoose = require('mongoose')
const MongoUri = "mongodb+srv://nitin123:nitin123@cluster0.8jlmu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(MongoUri,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
    console.log(`Mongodb connected successfully  ${conn.connection.host}`)
    } catch (error) {
        console.log(`error :${error.message}`)
    }
}

module.exports = connectDB