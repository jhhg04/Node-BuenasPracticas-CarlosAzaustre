const express = require('express');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');

const app = express();

app.use(express.json());
app.use('/api/v1/workouts', v1WorkoutRouter);

module.exports = app;
