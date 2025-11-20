//Initializing server
const express = require("express");
const server = express();
const port = 3000;
const mongoose = require("mongoose");
require("dotenv").config();
const { DB_URI }= process.env;
const cors = require("cors");
const Product = require("./models/product");

//Middleware
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(cors());

//DB connection and server listening
mongoose.connect(DB_URI).then(() => {
    server.listen(port, () => {
        console.log(`Database is connected\nServer is listening on ${port}`);
        //console.log(new Date(Date.now()));
    });
})
.catch((error) => console.log((error.message)));

//Routes
//Root route
server.get("/", (request, response) => {
    response.send(`Server is live`);
});

//To GET all data from products collection
server.get("/products", async(request, response) => {
    try{
        const products = await Product.find();
        response.send(products);
    } catch(error) {
        response.status(500).send({message: error.message});
    }
});

//Allows us to POST a new contact to DB
//This will allow us to package the data/collect it from the ProductForm.jsx submissions
server.post("/products", async (request, response) => {
    const {id, productName, brand, image, price} = request.body;
    const newContact = new Product({
        id,
        productName,
        brand,
        image,
        price,
    });
    try{
         await newContact.save();
         response.status(200).send({message: `Product is added successfully!`, 
                                    date: new Date(Date.now()),
         });
    } catch (error) {
        response.status(400).send({message: error.message});
    }
});

//To DELETE a contact from DB by its id
server.delete("/products/:id", async (request, response) => {
    const {id} = request.params;
    try{
        await Product.findByIdAndDelete(id);
        response.send({message: `Product is deleted`, 
                       date: new Date(Date.now()),
                    });
    } catch (error) {
        response.status(400).send({message: error.message});
    }
});

//To GET one contact by id //editing it
server.get("/products/:id", async(request, response) => {
    const {id} = request.params;
    try{
        const productToEdit = await Product.findById(id);
        response.send(productToEdit);
    } catch(error) {
        response.status(500).send({message: error.message});
    }
});

//To PATCH a contact by id
server.patch("/products/:id", async(request, response) => {
    const {id} = request.params;
    const {id: customId, productName, brand, image, price} = request.body;
    try{
        await Product.findByIdAndUpdate(id, {
            id: customId,
            productName,
            brand,
            image,
            price,
        });
        response.send({message: `Product has been updated` ,
            DATE: new Date(Date.now()),
        });
    } catch(error) {
        response.status(500).send({message: error.message});
    }
});

