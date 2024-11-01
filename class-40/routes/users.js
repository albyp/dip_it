const express = require('express');
const router = express.Router();

router.get('/', (request, reponse) => {
    response.send('This is the users');
});

router.get('/:id', (request, reponse) => {
    response.send(`User details for ID: ${request.params.id}`);
});

// export
module.exports = router;