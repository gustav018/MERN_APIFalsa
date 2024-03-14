const express = require("express");
const { faker } = require('@faker-js/faker');

const app = express();
const port = 8000;

class  Usuario {
    constructor(){
        this._id = faker.string.uuid();
        this.username = faker.internet.userName();
        this.email = faker.internet.email();
        this.avatar = faker.image.avatar();
        this.password = faker.internet.password();
        this.birthdate = faker.date.birthdate();
    }
}

class Empresa{
    constructor(){
        this._id = faker.string.uuid();
        this.name = faker.company.name();
        this.address = faker.location.streetAddress();
        this.city = faker.location.city();
        this.state = faker.location.state();
        this.zipCode = faker.location.zipCode();
        this.country = faker.location.country();
    }
}



app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


app.post("/api/user/new", (req, res) => {
    const newUser = new Usuario();
    console.log(newUser);
    res.json( { newUser: newUser } );
});



app.post("/api/company/new", (req, res) => {
    const newCompany = new Empresa();
    console.log(newCompany);
    res.json( { newCompany: newCompany } );
});


app.post("/api/user/company", (req, res) => {
    const newCompany = new Empresa();
    const newUser = new Usuario();
    
    res.json( { newCompany, newUser  } );
});



app.get("/api/user/:id", (req, res) => {
  const userId = req.params.id;
  
  const user = {
      _id: userId,
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate()
  };

  
  res.json({ user });
});

app.get("/api/company/:id", (req, res) => {
  const companyId = req.params.id;

  const company = {
      _id: companyId,
      name: faker.company.name(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country()
  };
  res.json({ company });
});


app.listen( port, () => console.log(`Listening on port: ${port} (http://localhost:${port}/)`) );