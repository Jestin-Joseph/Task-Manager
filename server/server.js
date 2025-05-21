require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth')
const protectedRoutes = require('./routes/tasks')
const app = express();

// Simplified CORS
app.use(cors());

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/app', protectedRoutes);

// Test route
app.get('/', (req, res) => {
    console.log("tried")
    res.json({ message: "hey boy" });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));