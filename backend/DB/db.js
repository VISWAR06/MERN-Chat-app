import mongoose from 'mongoose'

const connect=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(conn.connection.host)

    }catch(error){
        console.log(error.message)
    }
}
export default connect