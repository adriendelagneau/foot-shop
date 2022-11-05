
import dbConnect from "../../../utils/mongo";
import Product from "../../../models/Product";



  dbConnect();
  export default async function handler  (req, res) {
    switch(req.method){
        case "GET":
            await getProducts(req, res)
            break;
        case "POST":
            await createProduct(req, res)
            break;
       
    }
}

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
        const queryObj = {...this.queryString}
        const excludeFields = ['page', 'sort', 'limit']
        excludeFields.forEach(el => delete(queryObj[el]))
        
        if(queryObj.category !== 'all')
            this.query.find({category: queryObj.category})
            
        if(queryObj.title !== 'all')
            this.query.find({title: {$regex: queryObj.title}})

        if(queryObj.brand !== 'all')
            this.query.find({brand: queryObj.brand})

        this.query.find()
        return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join('')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }
        return this;
    }

    limiting(){
        const limit = this.queryString.limit
        this.query = this.query.limit(limit)
        return this;
    }

 
}

const getProducts = async (req, res) => {
    try {
        const features = new APIfeatures(Product.find(), req.query)
        .filtering().sorting().limiting()

        const products = await features.query
        
        res.json({
            status: 'success',
            result: products.length,
            products
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    }catch (err) {
        res.status(500).json(err);
    }
}