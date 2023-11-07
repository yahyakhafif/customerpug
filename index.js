const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

let customers = [
    { id: '1588323375416', firstname: 'John', lastname: 'Johnson', email: 'john@johnson.com', phone: '8233243' },
    { id: '1588323375417', firstname: 'Mary', lastname: 'Smith', email: 'mary@smith.com', phone: '6654113' },
    { id: '1588323375418', firstname: 'Peter', lastname: 'North', email: 'peter@north.com', phone: '901176' },
]

app.get("/customers", (req, res) => {
    res.render("customerList", { customers: customers });
})

app.get("/addcustomer", (req, res) => {
    res.render("addCustomer");
})

app.post("/addcustomer", (req, res) => {
    const newCustomer = { firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email, phone: req.body.phone };
    customers = [...customers, newCustomer];
    res.redirect("/customers");
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`the server is running on port ${port}`);
});
