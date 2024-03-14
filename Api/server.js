const express = require("express");
const app = express();
const port = 8000;
    
// req es la abreviatura para request
// res es la abreviatura para response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World me actualice" });
});
// esto tiene que estar debajo de los otros bloques de código
app.listen( port, () => console.log(`Listening on port: ${port}`) );
