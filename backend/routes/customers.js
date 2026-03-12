// Customer routes for SmartInvoice API
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Get all customers' });
});

router.post('/', (req, res) => {
    res.json({ message: 'Create new customer' });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Get customer ${req.params.id}` });
});

router.put('/:id', (req, res) => {
    res.json({ message: `Update customer ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.json({ message: `Delete customer ${req.params.id}` });
});

module.exports = router;