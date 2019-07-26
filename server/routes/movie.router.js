const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const sqlText = 'SELECT * FROM movies;';
    pool.query(sqlText).then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

router.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const sqlText = 'SELECT * FROM movies WHERE id=$1;';
    pool.query(sqlText, [id]).then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.log('Error when getting specific movie by id', err);
        res.sendStatus(500);
    })
})

module.exports = router;