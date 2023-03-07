const { Sequelize } = require('sequelize');
const { Activity } = require('./models');
const sequelize = new Sequelize('postgres://travel_blog_backend_user:eeOMJ0Wt7gSsuY5FKosAQIMSuRTuiCLx@dpg-cg3a2uhmbg5fch3lmve0-a/travel_blog_backend')

// const http = require('http');

const port = 3001;

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());


app.post('/activity', async (req, res) => {
    const { date, city, country, activityName, price } = req.body;
    const newActivity = await Activity.create({
        date,
        city,
        country,
        activityName,
        price
    });
    res.json({
        id: newActivity.id
    });
});

app.post('/location', async (req, res) => {
    const { city, country } = req.body;
    const newLocation = await Location.create({
        city,
        country
    });
    res.json({
        id: newLocation.id
    });
});

app.post('/date', async (req, res) => {
    const { date } = req.body;
    const newDate = await Day.create({
        date
    });
    res.json({
        id: newDate.id
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

