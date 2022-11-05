import connectDB from "../../../utils/mongo";
import Product from "../../../models/Product";

connectDB()

export default async function handler (req, res)  {
  switch(req.method){
      case "GET":
          await getProduct(req, res)
          break;
      case "PUT":
          await updateProduct(req, res)
          break;
    
  }
}

const getProduct = async (req, res) => {
  try {
      const { id } = req.query;

      const product = await Product.findById(id)
      if(!product) return res.status(400).json({err: 'This product does not exist.'})
      
      res.json({ product })

  } catch (err) {
      return res.status(500).json({err: err.message})
  }
}

const updateProduct = async (req, res) => {
  try {
      const {id} = req.query
      const zaza = req.body

      await Product.findOneAndUpdate({_id: id}, zaza)

      res.json({msg: 'Success! Updated a product'})
  } catch (err) {
      return res.status(500).json({err: err.message})
  }
}
