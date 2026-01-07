use TechLearn

db.createCollection("Stagiaires")

db.Stagiaires.insertMany([
  {
    nom: "El Amrani",
    prenom: "Youssef",
    filiere: { _id: "DW", intitule: "Développement Web" },
    niveau: "2A",
    option: "Full Stack",
    moyenne1A: 15.8,
    adresse: { ville: "Agadir", codePostal: "80000" },
    dateNaissance: ISODate("2004-02-14"),
    inscription: 2021
  },
  {
    nom: "Alaoui",
    prenom: "Salma",
    filiere: { _id: "CS", intitule: "Cyber Security" },
    niveau: "1A",
    option: null,
    moyenne1A: null,
    adresse: { ville: "Marrakech", codePostal: "40000" },
    dateNaissance: ISODate("2006-07-09"),
    inscription: 2022
  },
  {
    nom: "Bennani",
    prenom: "Hicham",
    filiere: { _id: "AI", intitule: "Artificial Intelligence" },
    niveau: "3A",
    option: "Data Science",
    moyenne1A: 16.2,
    moyenne2A: 15.4,
    adresse: { ville: "Rabat", codePostal: "10000" },
    dateNaissance: ISODate("2003-11-21"),
    inscription: 2021
  },
  {
    nom: "Zahraoui",
    prenom: "Imane",
    filiere: { _id: "DW", intitule: "Développement Web" },
    niveau: "1A",
    option: null,
    moyenne1A: null,
    adresse: { ville: "Casablanca", codePostal: "20000" },
    dateNaissance: ISODate("2006-01-30"),
    inscription: 2021
  },
  {
    nom: "Tazi",
    prenom: "Omar",
    filiere: { _id: "ID", intitule: "Infrastructure Digitale" },
    niveau: "2A",
    option: "Cloud",
    moyenne1A: 13.6,
    adresse: { ville: "Fès", codePostal: "30000" },
    dateNaissance: ISODate("2004-09-05"),
    inscription: 2020
  },
  {
    nom: "Idrissi",
    prenom: "Nour",
    filiere: { _id: "AI", intitule: "Artificial Intelligence" },
    niveau: "2A",
    option: "ML Engineer",
    moyenne1A: 14.2,
    adresse: { ville: "Tanger", codePostal: "90000" },
    dateNaissance: ISODate("2004-05-18"),
    inscription: 2021
  },
  {
    nom: "El Khatib",
    prenom: "Aya",
    filiere: { _id: "DW", intitule: "Développement Web" },
    niveau: "3A",
    option: "Mobile",
    moyenne1A: 12.9,
    moyenne2A: 13.7,
    adresse: { ville: "Oujda", codePostal: "60000" },
    dateNaissance: ISODate("2003-03-12"),
    inscription: 2020
  },
  {
    nom: "Mansouri",
    prenom: "Kamal",
    filiere: { _id: "CS", intitule: "Cyber Security" },
    niveau: "2A",
    option: null,
    moyenne1A: 15.1,
    adresse: { ville: "Meknès", codePostal: "50000" },
    dateNaissance: ISODate("2004-12-02"),
    inscription: 2021
  },
  {
    nom: "Ouazzani",
    prenom: "Sara",
    filiere: { _id: "AI", intitule: "Artificial Intelligence" },
    niveau: "1A",
    option: null,
    moyenne1A: null,
    adresse: { ville: "Béni Mellal", codePostal: "23000" },
    dateNaissance: ISODate("2006-10-27"),
    inscription: 2023
  },
  {
    nom: "Chafik",
    prenom: "Rachid",
    filiere: { _id: "DW", intitule: "Développement Web" },
    niveau: "2A",
    option: "Front-End",
    moyenne1A: 11.8,
    adresse: { ville: "Safi", codePostal: "46000" },
    dateNaissance: ISODate("2004-06-07"),
    inscription: 2021
  },
  {
    nom: "Rahmani",
    prenom: "Meriem",
    filiere: { _id: "ID", intitule: "Infrastructure Digitale" },
    niveau: "3A",
    option: "DevOps",
    moyenne1A: 14.9,
    moyenne2A: 16.0,
    adresse: { ville: "Kénitra", codePostal: "14000" },
    dateNaissance: ISODate("2003-08-19"),
    inscription: 2021
  },
  {
    nom: "El Bakkali",
    prenom: "Anass",
    filiere: { _id: "AI", intitule: "Artificial Intelligence" },
    niveau: "3A",
    option: "NLP",
    moyenne1A: 13.2,
    moyenne2A: 14.1,
    adresse: { ville: "Agadir", codePostal: "80000" },
    dateNaissance: ISODate("2003-04-25"),
    inscription: 2020
  },
  {
    nom: "Fahmi",
    prenom: "Jamal",
    filiere: { _id: "DW", intitule: "Développement Web" },
    niveau: "2A",
    option: null,
    moyenne1A: 16.5,
    adresse: { ville: "Tétouan", codePostal: "93000" },
    dateNaissance: ISODate("2004-01-11"),
    inscription: 2021
  },
  {
    nom: "Boulahya",
    prenom: "Hamza",
    filiere: { _id: "CS", intitule: "Cyber Security" },
    niveau: "3A",
    option: "Pentest",
    moyenne1A: 12.4,
    moyenne2A: 12.9,
    adresse: { ville: "Errachidia", codePostal: "52000" },
    dateNaissance: ISODate("2003-09-30"),
    inscription: 2021
  }
])


db.Stagiaires.find({ inscription: 2021 })

db.Stagiaires.find(
  { "filiere.intitule": "Développement Web" },
  { _id: 0, nom: 1, prenom: 1, "adresse.ville": 1 }
)


db.Stagiaires.find({ moyenne1A: { $gt: 15 } })

db.Stagiaires.updateMany(
  { niveau: "3A" },
  { $inc: { moyenne2A: 1 } }
)


db.Stagiaires.deleteMany({ option: null })


db.Stagiaires.find({ moyenne1A: {$gte: 12, $lte : 14} })


db.Stagiaires.find({"$and" :[ {"moyenne1A" : {"$gte": 12 }} , {"moyenne1A" : {"$lte": 14 }}]})


db.Stagiaires.countDocuments({ "filiere.intitule": "Artificial Intelligence" })


db.Stagiaires.distinct("option")


db.Stagiaires.find().limit(10)



