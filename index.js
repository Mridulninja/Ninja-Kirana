const express = require('express');
const cors = require('cors');
const { getDataFromSheet } = require('./google-sheets');
const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.get('/items/:option', async (req, res) => {
    const { option } = req.params;
    let data = await getDataFromSheet('1GI7rgBl2ziVPUR-wtK-7E2-psdIAOywjAf5N2IJANBI');
    data.shift();
    const filteredData = data.filter(row => row[6].toLowerCase() === option);
    if (option === "all") {
        data.shift();
        res.json(data);
    }
    else {
        res.json(filteredData);
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});