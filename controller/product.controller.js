import { sql } from "../config/db.js";

export const GetProducts = async (req,res)=>{
    try{
        const r = await sql`select * from products`;
        return res.status(200).json(r)
    }
    catch(e){
        console.log(e)
       return res.status(500).json({"status":false , 'msg':"Server Error"})
    }
   
}

export const CreateProducts = async (req,res)=>{
    return res.status(200).json({"status":"Working Good."})
}

export const GetProduct = async (req, res)=>{
    return res.status(200).json({"status":"Specific Product"})
}

export const UpdateProduct = async (req, res)=>{
    return res.status(200).json({"status":"Update Specific Product"})
}

export const DeleteProduct =  async (req, res)=>{
    return res.status(200).json({"status":"Delete Specific Product"})
}