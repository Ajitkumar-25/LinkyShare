const express = require('express');
const cors = require('cors');
require('dotenv').config();
const fileRoutes = require('./routes/fileRoutes');
const emailRoutes = require('./routes/emailRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', fileRoutes);
app.use('/api', emailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
