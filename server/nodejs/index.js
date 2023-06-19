import express from "express";
import authRoute from "./routes/auth.js";
import upload from "./routes/upload.js";
import createConnectionMongo from "./database/createConnectionMongo.js";
import mongoose from "mongoose";
import Grid  from "gridfs-stream";
import dotenv from 'dotenv'
dotenv.config();
import cors  from "cors";

const app = express();
app.use(cors());
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

createConnectionMongo();

let gfs;
const conn = mongoose.connection;
conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("photos"); 
}); 

app.use("/file", upload);

app.get("/file/:filename", async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        console.log("File", file)
        var readstream = gfs.createReadStream({
            filename: file.filename
          });
          readstream.on('error', function (err) {
            console.log('An error occurred!', err);
            throw err;
          });
          readstream.pipe(res);
    } catch (error) {
        res.send(error);
    }
}); 

app.delete("/file/:filename", async (req, res) => {
    try { 
        await gfs.files.deleteOne({ filename: req.params.filename });
        res.send("success");
    } catch (error) {
        console.log(error);
        res.send("An error occured.");
    }
});

app.use("/api/v1/auth",authRoute);

const port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log("listen port 8080")
})