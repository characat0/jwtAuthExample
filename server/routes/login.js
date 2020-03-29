const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../config");

const router = Router();

router.post('/', (req, res) => {
    console.log('Request received');
    const { username } = req.body;
    // revisar "malformed POST"
    if (!username && (typeof username !== 'string' || typeof username !== 'number')) {
        res.status(400);
        return res.send('Malformed request');
    }

    const token = jwt.sign({ username}, SECRET);

    return res.send(token);
});

// rechazar el resto de metodos
router.all('/', (req, res) => res.sendStatus(405));

module.exports = router;