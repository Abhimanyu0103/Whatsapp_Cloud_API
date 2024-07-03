const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Route to serve HTML content
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Node.js App</title>
        </head>
        <body>
            <h1>Welcome to My Node.js Application</h1>
            <p>This is a simple paragraph to test the deployment on IIS.</p>
        </body>
        </html>
    `);
});

// Your existing API routes
const apiRoute = require("../apiwhatsapp/src/routes/routes");
app.use("/whatsapp", apiRoute);

app.listen(PORT, () => {
    console.log("The port is: " + PORT);
});
