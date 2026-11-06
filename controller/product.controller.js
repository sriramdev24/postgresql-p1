import { sql } from "../config/db.js";

export const GetProducts = async (req,res)=>{
    try{
        const r = await sql`select * from products`;
        return res.status(200).json({"ok":true , "data":r})
    }
    catch(e){
        console.log(e)
       return res.status(500).json({"ok":false , 'msg':"Server Error"})
    }
   
}

export const CreateProducts = async (req,res)=>{
    try {
        const {name , image_url , price}  = req.body;
        if(!name || !image_url || !price){
            return res.status(400).json({"ok":false , 'msg':"Some feilds are Missing"})
        }
        await sql`
          INSERT INTO products (name , image , price) VALUES (${name} , ${image_url} , ${price})
        `
        return res.status(201).json({"ok":true , 'msg':"Product Created"})

    } catch (error) {
        console.log(error)
       return res.status(500).json({"ok":false , 'msg':"Server Error"})

    }
}

export const GetProduct = async (req, res)=>{
    try {
        const pid = req.params.id;
        const product = await sql`SELECT * FROM products where id=${pid}`
        return res.status(200).json({"ok":true , "data":product})
    } catch (error) {
       return res.status(500).json({"ok":false , 'msg':"Server Error"})
        
    }
}

export const UpdateProduct = async (req, res)=>{
    return res.status(200).json({"status":"Update Specific Product"})
}

export const DeleteProduct =  async (req, res)=>{
    return res.status(200).json({"status":"Delete Specific Product"})
}