export default function handler(req){
    console.log(req.body);
    Response.json({name:"John Doe"},{status:200})
   }