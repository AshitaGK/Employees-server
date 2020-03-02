var faker = require('faker');

function generateEmployees() {
    var employees = []

    for(var id=0; id <20; id++) {
      var firstName = faker.name.firstName();
      var lastName = faker.name.lastName();
      var email = faker.internet.email();
      var randomCard = faker.helpers.createCard();
      
      employees.push({
          "id": id,
          "first_name": firstName,
          "last_name": lastName,
          "email": email,
        //   "random_card": randomCard
      })
}

   return {"employees": employees }
}

 module.exports = generateEmployees
