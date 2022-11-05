
import dbConnect from "../../../utils/mongo";
import Product from "../../../models/Product";



  dbConnect();
  export default async function handler  (req, res) {
    switch(req.method){
        case "GET":
            await getAllProducts(req, res)
            break;
       
       
    }
}



const getAllProducts = async (req, res) => {
    try {
        let products = await Product.find()
       
        res.send(products)
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

