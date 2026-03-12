// Invoice routes for SmartInvoice API
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Get all invoices' });
});

router.post('/', (req, res) => {
    res.json({ message: 'Create new invoice' });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Get invoice ${req.params.id}` });
});

router.put('/:id', (req, res) => {
    res.json({ message: `Update invoice ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.json({ message: `Delete invoice ${req.params.id}` });
});

module.exports = router;