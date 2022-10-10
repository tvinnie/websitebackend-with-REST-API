// var models = require('./server.js').models;

// models.Profile.create({name:'vince'}, (err, profile)=>{
//     console.log('data?', err, profile);
// })


// models.Profile.upsert({id:"6343480e699ad15adbc24ed5",name:'vince'}, (err, profile)=>{
//     console.log('data?', err, profile);
// })

// models.Profile.findOrCreate({name:'vince1'}, (err, profile)=>{
//    if(err){
//     console.log('there was an error',err);
//    } else if(profile){
//     profile.updateAttributes({
//         email:'vin@vince.com'
//     }, (updateError, updated) => {
//         console.log('saved',updateError,updated)
//     })
//    }
// })

// var toSave = [
//     {name:"bob",email:"bob@bob.com"},
//     {name:"bob1",email:"bob1@bob.com"},
//     {name:"bob2",email:"bob2@bob.com"},
//     {name:"bob3",email:"bob3@bob.com"},
//     {name:"bob4",email:"bob4@bob.com"},
//     {name:"bob5",email:"bob5@bob.com"},
// ]

// toSave.map(obj => {
//     models.Profile.create(obj, (err, created) => {
//         console.log("Created?", created);
//     })
// })

// var filter = {
//     where: {},
//     order: 'date ASC',
//     limit:3
// }

// models.Profile.findOne({where: {name: 'bob'}}, (err, found)=>{
//     console.log('Item = ', err, found);
// })