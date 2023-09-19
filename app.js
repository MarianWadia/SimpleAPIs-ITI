const express = require('express');
const app = express();
const port = 4000;

// Define your array of products
const products = [
    { id: 0, name: "p1", color: "red", price: 100 },
    { id: 1, name: "p2", color: "blue", price: 200 },
    { id: 2, name: "p3", color: "black", price: 300 }
  ];


// Middleware to enable JSON parsing
app.use(express.json());

// Define routes

app.get('/home', (req, res)=>{
    res.send('<b>Welcome to our APIs</b>')
})

app.get('/products', (req, res)=>{
    res.json(products);
})

app.get('/products/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const product = products.find(product => product.id === id)
    if(product){
        res.json(product);
    }else{
        res.status(404).send('Product not found');
    }
})

app.get('/', (req, res)=>{
    res.redirect('/home')
})


// Handle 404 Not Found for any other route
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
