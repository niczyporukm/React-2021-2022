const { Console } = require('console');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
let airportsList = require('../common/consts/airports')

router.get('/', (req, res) => {
    res.status(200).json(airports.map((airport) => ({id: airport.id, name: airport.name})))
})

router.get('/delayed', (req, res, next) => {
    setTimeout(() => {
        res.status(200).json(airports.map((airport) => ({id: airport.id, name: airport.name})))
    }, 3000);
})

router.get('/delayed/failed', (req, res, next) => {
    setTimeout(() => {
        res.status(500).json({error: 'This is error message from API... :('})
    }, 3000);
})

router.post('/new', jsonParser, (req, res) => {
    airports.push(req.body)
    res.status(200).json(req.body)
})

router.get("/:id/delayed", (req, res) => {
    setTimeout(() => {
        res.status(200).json(req.airportToReturn)
    }, 3000);
})

router.route("/:id")
    .get((req, res) => {
        res.status(200).json(req.airportToReturn)
    })
    .put(jsonParser,(req, res) => {
        const idFromParams = req.params.id;
        const existingIndex = airports.findIndex((airport) => airport.id == idFromParams);
        airports[existingIndex] = req.body;
        res.send(`Update get by id ${req.params.id}`)
    })
    .delete((req, res) => {
        if (req.airportToDelete) {
            res.status(200).json(req.airportToDelete);
            res.send(`HAS BEEN DELETED`)
        } else {
            res.status(404).json({error: 'Airport not exist'})
        }
    })

    let airports = airportsList;
    router.param("id", (req, res, next, id) => {
        req.airportsList = airports;
        if (req.method === 'GET') {
            req.airportToReturn = airports.find((airport) => airport.id === id);
        }
        if (req.method === 'DELETE') {
            req.airportToDelete = airports.find((airport) => airport.id === id);
            airports = airports.filter((airport) => airport.id !== id)
            req.airportsList = airports;
        }

        next();
    })

    router.param("/new", (req, res, next, id) => {
        next();
    })


module.exports = router;