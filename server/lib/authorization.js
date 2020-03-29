const jwt = require("jsonwebtoken");
const { SECRET } = require("../config");

module.exports = function (req, res, next) {
    const header = req.headers['authorization'];

    if (!header)
        return res.sendStatus(403);
    // asumiendo la siguiente estructura:
    // Authorization: Bearer {jwt}
    const [bearer, token] = header.split(' ');
    if (bearer.toUpperCase() !== "BEARER") {
        res.status(400);
        return res.send('Malformed request');
    }
    // algoritmo por defecto: hs256
    jwt.verify(token, SECRET, (err, data) => {
        if (err) {
            res.status(401);
            return res.send('Token no valido');
        }

        req.user = data;
        next();
    })
};