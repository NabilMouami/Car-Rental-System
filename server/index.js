const express = require("express");
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const uuid = require('uuid')
const app = express();
const stripe = require("stripe")("sk_");



// middleware
app.use(express.json());
app.use(cors())
app.use(express.urlencoded())
app.use(bodyParser.urlencoded({extended: true}));

// routes
const contactRouter = require('./routes/contacts');
app.use('/contacts', contactRouter);

app.post("/payment", (req, res) => {
    const { product,token } = req.body;
    console.log("PRODUCT", product);
    console.log("PRICE", product.price);
    const idempontencyKey = uuid();
    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: product.price *100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: `purchase of ${product.name}`,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }
            }
        },{idempontencyKey})
    }).then(result => res.status(200).json(result))
    .catch(err => console.log(err))
});
//file-upload

const fileRoutes = require('./routes/file-upload-routes');


require('./database')();

app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', fileRoutes.routes);
//login-register



const User = require('./models/user');

//Routes
app.post("/login", (req, res)=> {

    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                console.log(user)
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            console.log(req.body)

            res.send({message: "User not registered"})
        }
    })
}) 
app.get("/login",(req,res) => {
    User.find()
    .then(contact=> res.json(contact))
    .catch(err => res.status(400).json('Error: ' + err));
})
app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send()
                }
            })
        }
    })
    
}) 


// listening...
const port = process.env.PORT || 8282;
app.listen(port, () => console.log(`Listening on port ${port}...`));
