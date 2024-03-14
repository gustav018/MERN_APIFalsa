const express = require("express");
const app = express();
const port = 8000;

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
    
// asegúrate de que las siguientes líneas se encuentren por encima de cualquier bloque de código app.get o app.post
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


app.get("/api/usuarios", (req, res) => {
    res.json( users );
});

app.post("/api/usuarios", (req, res) => {
    // req.body contendrá los datos del formulario desde Postman o desde React
    console.log(req.body);
    // podemos hacer push en el array de usuarios por ahora...
    // más tarde esto se insertará en una base de datos
    users.push(req.body);
    // siempre tendremos que responder con algo
    res.json( { status: "ok" } );
});
// si queremos obtener un usuario con un id específico, podemos hacer que el id sea parte de la url
// asegúrate de preceder la variable id con dos puntos `:`
app.get("/api/usuarios/:id", (req, res) => {
    // podemos obtener esta variable `id` de req.params 
    console.log(req.params.id);
    // asumiendo que este id es el índice del array de usuarios podríamos devolver un usuario de esta manera
    res.json( users[req.params.id] );
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );
