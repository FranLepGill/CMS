const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "John Doe",
        "website": "johndoe.com"
    };
    res.send(data);
});

module.exports = router;