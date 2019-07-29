const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Generic GET route
router.get('/', (req, res) => {
    const sqlText = 'SELECT * FROM movies ORDER BY title ASC;';
    pool.query(sqlText).then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
}) // end GET route

// GET route for specific details with genres
router.get('/details/genres/:id', (req, res) => {
    const id = req.params.id;
    const sqlText = `
        SELECT movies.id, movies.title, movies.description, genres.name AS genre
        FROM categorize_movies
        JOIN movies ON movies.id = categorize_movies.movie_id
        JOIN genres ON genres.id = categorize_movies.genre_id
        WHERE categorize_movies.movie_id = $1;
    `;
    pool.query(sqlText, [id]).then(result => {
        console.log(result.rows);
        res.send(result.rows);
    }).catch(err => {
        console.log('Error when getting specific movie by id', err);
        res.sendStatus(500);
    })
}) // end GET route

// GET route for specific details
router.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const sqlText = `
        SELECT * FROM movies WHERE id=$1;
    `;
    pool.query(sqlText, [id]).then(result => {
        console.log(result.rows);
        res.send(result.rows);
    }).catch(err => {
        console.log('Error when getting specific movie by id', err);
        res.sendStatus(500);
    })
}) // end GET route

// PUT route
router.put('/', (req, res) => {
    const sqlText = 'UPDATE movies SET title = $1, description = $2 WHERE id=$3;';
    const values = [req.body.title, req.body.description, req.body.id];
    pool.query(sqlText, values).then(result => {
        res.sendStatus(200);
    }).catch(err => {
        console.log('Error when updating specific movie by id', err);
        res.sendStatus(500);
    })
}) // end PUT route

module.exports = router;