const mongoose= require("mongoose")
require("dotenv").config();
//console.log(process.env);
const Person=require("./models/PersonSchema")
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('db connected'))
.catch(err=>console.error(err))
//Person.create({prenom:"olfa",nom:"ahmed",age:26,email:"olfa@gmail.com", job:"ingénieur",adress:"sousse"})
/*Person.insertMany([{prenom:"sami",nom:"mohamed",age:32,email:"sami01sami@gmail.com", job:"dentiste",adress:"mahdia"},{prenom:"mouna",nom:"mohamed",age:35,email:"mouna.mouhamed@gmail.com", job:"aviatrice",adress:"mahdia"}])
.then(doc=>console.log(doc))
.catch(err=>console.error(err))*/
/*Person.insertMany([{prenom:"amira",nom:"mrad",age:18,email:"amirahamdi@gmail.com", job:"étudiante",adress:"tunis"},{prenom:"marwa",nom:"ayech",age:27,email:"marwaayech@gmail.com", job:"commerciale",adress:"mahdia"}])
.then(doc=>console.log(doc))
.catch(err=>console.error(err))*/
/*const newPerson = new Person({prenom:"mahdii",nom:"chaabane",age:29,email:"mahdichaabane@gmail.com", job:"développeur",adress:"sousse"} );
newPerson.prenom="mahdi";
newPerson.save().then(doc=>console.log(doc))
.catch(err=>console.error(err))*/
/*const newPerson = new Person({prenom:"rima",nom:"chaabane",age:31,email:"rimrima@gmail.com", job:"ingénieur",adress:"gabes"} );
newPerson.save().then(doc=>console.log(doc))
.catch(err=>console.error(err))*/
/*Person.find({job:"ingénieur"}).then(doc=>console.log(doc))
.catch(err=>console.error(err))*/
/*Person.findById("61680f820faed86e713276fd").then(doc=>console.log(doc))
.catch(err=>console.error(err))*/
/*Person.findById("61681e8ffa42de8605cd067e").then(doc=>console.log(doc))
.catch(err=>console.error(err))*/
/*Person.findOne({prenom:"mahdi"}).then(doc=>console.log(doc))
.catch(err=>console.error(err))*/
/*Person.find().then(doc=>console.log(doc))
.catch(err=>console.error(err))*/
/*Person.find({age:{$gte:25}}).then(doc=>console.log(doc))
.catch(err=>console.error(err))*/
/*Person.findOneAndUpdate({nom:"ahmed"},{job:"professeur"}).then(doc=>console.log(doc))
.catch(err=>console.error(err))*/
/*Person.findByIdAndDelete("6168107772499f582dd29960").then(doc=>console.log(doc))
.catch(err=>console.error(err))*/
/*Person.findByIdAndRemove("616812753cb4d29b1cfa2388").then(doc=>console.log(doc))
.catch(err=>console.error(err))*/
/*Person.deleteOne({name:"marwa"}).then(doc=>console.log(doc))
.catch(err=>console.error(err))*/

/*Person.deleteOne({name:"marwa"}).then(doc=>console.log(doc))
.catch(err=>console.error(err))*/
/*Person.find().skip(3).limit(2).then(doc=>console.log(doc))
.catch(err=>console.error(err))*/
/*Person.deleteMany({ age: { $gte: 32 } }).then(doc=>console.log(doc))
.catch(err=>console.error(err))*/
/*Person.find().count().then(doc=>console.log(doc))
.catch(err=>console.error(err))*/
//Person.deleteMany({}).then(doc=>console.log(doc)).catch(err=>console.error(err))