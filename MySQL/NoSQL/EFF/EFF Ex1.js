use DBE


db.evenement.insertMany([
    [
  {
    "_id": "e1",
    "theme": "Développement Web",
    "Description": "Introduction au développement web moderne",
    "cout_journalier": 500,
    "Durée": 13,
    "Ateliers": [
      {
        "_id": "1",
        "nomAtelier": "Atelier HTML",
        "descriptionAtelier": "Introduction à HTML"
      },
      {
        "_id": "2",
        "nomAtelier": "Atelier CSS",
        "descriptionAtelier": "Les bases de CSS pour le design"
      }
    ]
  },
  {
    "_id": "e2",
    "theme": "Data Science",
    "Description": "Analyse de données avec Python",
    "cout_journalier": 550,
    "Durée": 10,
    "Ateliers": [
      {
        "_id": "1",
        "nomAtelier": "Atelier Pandas",
        "descriptionAtelier": "Manipulation de données avec Pandas"
      },
      {
        "_id": "2",
        "nomAtelier": "Atelier Matplotlib",
        "descriptionAtelier": "Visualisation des données avec Matplotlib"
      },
      {
        "_id": "3",
        "nomAtelier": "Atelier NumPy",
        "descriptionAtelier": "Introduction à NumPy pour les calculs"
      }
    ]
  },
  {
    "_id": "e3",
    "theme": "Cloud Computing",
    "Description": "Introduction aux concepts du Cloud",
    "cout_journalier": 600,
    "Durée": 16,
    "Ateliers": [
      {
        "_id": "1",
        "nomAtelier": "Atelier AWS",
        "descriptionAtelier": "Introduction à Amazon Web Services"
      },
      {
        "_id": "2",
        "nomAtelier": "Atelier Azure",
        "descriptionAtelier": "Introduction à Microsoft Azure"
      }
    ]
  }
]
    
])




db.evenement.find({}, { theme: 1, Description: 1, _id: 0 });





db.evenement.find({ theme: "Développement Web" }).forEach(function(doc) {
   print("Nombre d'ateliers: " + doc.Ateliers.length);
});


db.evenement.aggregate(
    [
        {$match: {theme: "Développement Web"}}, {$project : {"NbrAteliers" : {$size : "$Ateliers"}}}
    ]
)




db.evenement.updateOne({ _id: "e2" }, { $set: { cout_journalier: 600 } });



db.evenement.deleteMany({ Durée: { $gt: 15 } });


