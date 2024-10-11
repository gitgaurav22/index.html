const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const json2csv = require('json2csv').parse;
const ExcelJS = require('exceljs');
const PDFDocument = require('pdfkit');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sample Data (replace with DB connection)
const sampleData = {
    sales: [{ id: 1, product: 'Laptop', amount: 1500 }, { id: 2, product: 'Phone', amount: 800 }],
    inventory: [{ id: 1, product: 'Laptop', stock: 50 }, { id: 2, product: 'Phone', stock: 150 }],
    user: [{ id: 1, name: 'John Doe', email: 'john@example.com' }]
};

// Generate Report API
app.get('/api/report/:type', (req, res) => {
    const { type } = req.params;
    if (sampleData[type]) {
        res.json(sampleData[type]);
    } else {
        res.status(404).json({ message: 'Report type not found' });
    }
});

// Export Data API
app.post('/api/export', (req, res) => {
    const { format, data } = req.body;

    if (format === 'csv') {
        const csv = json2csv(data);
        res.header('Content-Type', 'text/csv');
        res.attachment('export.csv');
        res.send(csv);
    } else if (format === 'excel') {
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('Export');
        sheet.addRows(data);

        res.header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        workbook.xlsx.write(res).then(() => res.end());
    } else if (format === 'pdf') {
        const doc = new PDFDocument();
        res.header('Content-Type', 'application/pdf');
        doc.pipe(res);

        data.forEach(row => {
            doc.text(JSON.stringify(row));
        });
        doc.end();
    } else {
        res.status(400).json({ message: 'Invalid export format' });
    }
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
