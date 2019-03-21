var faker = require('faker');

var database = { communities: []};

for (var i = 1; i<= 300; i++) {
  database.communities.push({
    id: i,
    community_name: faker.name.firstName(),
    community_logo: faker.image.imageUrl()
    
  });
}

console.log(JSON.stringify(database));
