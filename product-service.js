// Import the Express library to create a web server
const express = require('express');

// Create an instance of the Express application
const app = express();


// Define the port number on which the server will listen
const port = 5002

// Set up a route handler for GET requests on the '/productview' endpoint
app.get('/productview', (req, res) => {
    // Return a JSON response with a list of products and their quantities
    return res.json([
        { id: 1, product: "MILK", quantity: 10 },
        { id: 2, product: "BREAD", quantity: 15 },
        { id: 3, product: "EGG", quantity: 20 },
        { id: 4, product: "CHIPS", quantity: 12 },
    ])
})

// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message to the console when the server is successfully running
    console.log('PRODUCT Service Server is running on PORT NO: ', port)
})