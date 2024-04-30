// Dependencies
const app = require('./app');

// Configuration
require('dotenv').config();
const port = process.env.PORT || 3000;

// Listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
