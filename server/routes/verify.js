const { Router } = require("express");
const authorization = require("../lib/authorization");

const router = Router();

router.use(authorization);

router.get('/', (req, res) => res.status(200).send('Verificado'));

// rechazar el resto de metodos
router.all('/', (req, res) => res.sendStatus(405));

module.exports = router;