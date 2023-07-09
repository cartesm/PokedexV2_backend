
export const validateUser = (schema)=>(req,resp,next)=>{
    try{
        schema.parse(req.body)
        next()
    }
    catch(err){
        resp.status(400).json(err.errors.map(er=>er.message))
    }

}