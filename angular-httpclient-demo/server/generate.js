var faker = require('faker');

 var database = { communities: []};

 for (var i = 1; i<= 300; i++) {
  database.communities.push({
    id: i,
    community_name: faker.name.firstName(),
    community_logo: faker.image.imageUrl()
    
  });
}  

/* var database = { user_public_info: []};

for (var i = 1; i<= 300; i++) {
  database.user_public_info.push({
    id: i,
    username: faker.name.firstName(),
    karma: faker.random.number(),
    cake_day: faker.date.past(),
    about: faker.address.streetAddress()
    
  });
} */


console.log(JSON.stringify(database));
