const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for handling form submission
app.post('/submit-form', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Save the data to a file
    const data = `${name}, ${email}, ${phone}, ${message}\n`;
    fs.appendFile('form_data.txt', data, (err) => {
        if (err) throw err;
        console.log('Data saved successfully');
    });

    res.send('Form submitted successfully!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
