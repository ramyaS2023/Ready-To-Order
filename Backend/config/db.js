import mongoose from "mongoose";


const connectDB = async ()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI)
        // const con = await mongoose.connect("mongodb+srv://panduramya2002_db_user:1IlEkr7btt1FxHQf@fooddeliverydb.gtoipsb.mongodb.net/fooddel?retryWrites=true&w=majority&appName=FoodDeliveryDB").then()
        console.log("MongoDb  Connected SuccessFully");
    }
    catch(error){
        console.log(error.message);
    }
}


export default connectDB

// --------------------------------------------------------------------------------------------
