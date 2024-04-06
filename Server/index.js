const express =require("express")
const bodyParser= require("body-parser")
const cors= require("cors")
const app= express()
const mongoose=require("mongoose")
const static = express.static("static");
const Dress =require("./Models/Dress")


app.use("/", static);
app.use(cors());
app.use(bodyParser.json()); // for post
app.use(bodyParser.urlencoded({ extended: true }));



//Connection
mongoose
  .connect("mongodb://localhost:27017/E-commerce")
  .then(() => console.log("Db connected"))
  .catch((err) => console.log("Db connection failed"));

  app.get("/dress" ,async(req,res)=>{
    try {
        const Dress_Details = await Dress.find();
        res.json(Dress_Details);
    } catch (error) {
        console.error("Error fetching dress:", error);
        res.status(500).json({ error: "Error fetching dress" });
    }
})
app.get("/Westernwear" ,async(req,res)=>{
    try {
        const Dress_Details = await Dress.find({ Category: "Westernwear-Women" });
        res.json(Dress_Details);
    } catch (error) {
        console.error("Error fetching dress:", error);
        res.status(500).json({ error: "Error fetching dress" });
    }
})
app.get("/Indianwear" ,async(req,res)=>{
    try {
        const Dress_Details = await Dress.find({ Category: "Indianwear-Women" });
        res.json(Dress_Details);
    } catch (error) {
        console.error("Error fetching dress:", error);
        res.status(500).json({ error: "Error fetching dress" });
    }
})
app.get("/Footwear" ,async(req,res)=>{
    try {
        const Dress_Details = await Dress.find({ Category: "Footwear-Women" });
        res.json(Dress_Details);
    } catch (error) {
        console.error("Error fetching dress:", error);
        res.status(500).json({ error: "Error fetching dress" });
    }
})
app.get("/Watches" ,async(req,res)=>{
    try {
        const Dress_Details = await Dress.find({ Category: "Watches-Women" });
        res.json(Dress_Details);
    } catch (error) {
        console.error("Error fetching dress:", error);
        res.status(500).json({ error: "Error fetching dress" });
    }
})
app.listen(4000,()=>{
    console.log("App Started")
  })
