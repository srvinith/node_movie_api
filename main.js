import express from 'express'

const app = express();

app.get('/',(req,res)=>{
res.json({msg:"hello student!"});
});

app.listen(6969,()=>{
    console.log(`this server is run in ${6969}`);

})
export default app