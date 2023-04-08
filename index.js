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
    if (option === "all") {
        res.json(data);
    }
    else if (option === "fruits") {
        const filteredData = data.filter(row => row[5].toLowerCase() === option);
        res.json(filteredData);
    }
    else if (option === "vegetable") {
        const filteredData = data.filter(row => row[5].toLowerCase() === option);
        res.json(filteredData);
    }
    else {
        const filteredData = data.filter(row => row[6].toLowerCase() === option);
        res.json(filteredData);
    }
    // console.log("hello");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});