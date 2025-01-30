const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        email: 'princemikeorji@gmail.com',
        current_datetime: new Date().toISOString(),
        github_url: 'https://github.com/princeorji/basic_info_app'
    })
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})