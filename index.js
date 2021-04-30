const express= require("express");



const PORT=4000||process.env.PORT;

const app= express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.post("/donor",(req,res)=>{
    const {lastname,firstname, streetaddress,city, state, country, postalCode,phone, email, preferredContact, preferredPayment, frequency, donationAmmount,comments}=req.body;
    console.log(req.body)
    res.status(200).json({body: req.body})
})

app.listen(PORT,()=>{
console.log(`application is running in ${PORT}`)
});