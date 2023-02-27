const { Router } = require("express");
const { Activity} = require("../db");

const router = Router();

// Ruta para desplegar actividades
const postActivity = async (name, difficulty, duration, season, countries) => {
 
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season
    });

    await newActivity.addCountries(countries)
    return newActivity;
};

const searchActivities = async () => {
  try {
    const getActivities = await Activity.findAll();
    return getActivities;
  } catch (error) {
    console.log('No existen actividades')
  }
}

router.post('/', async (req, res) => {
  try {
    let { name, difficulty, duration, season, countries } = req.body;
    let newActivity = await postActivity(name, difficulty, duration, season, countries)
    res.status(201).send(newActivity)
  } catch (error) {
    console.log('No se pudo crear la actividad')
  }
});

router.get('/', async (req, res) => {
  try {
    const getActivities = await searchActivities();
    res.status(200).json(getActivities);
  } catch (error) {
    console.log('No existen actividades')
  }
})

module.exports = router;
