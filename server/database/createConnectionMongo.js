import mongoose from "mongoose";

export default async function connection() {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect("", connectionParams);
        console.log("connected to database mongoodb");
    } catch (error) {
        console.log(error);
        console.log("could not connect to database");
    }
};
 