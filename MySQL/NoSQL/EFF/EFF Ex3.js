use DBV

db.terrains.insertMany(
    [
  {
    "NumT": "T1",
    "Type": "agricole",
    "Prix": 200000,
    "Titre_foncier": "TF001",
    "Cin": "P1",
    "Adresse": "Route des Fermes, Rabat",
    "Superficie": 500,
    "Notaire": {
      "Numn": "N1",
      "Nom": "El Amrani",
      "Prenom": "Hassan",
      "Adresse": "Rabat",
      "Tel": "0661234567"
    }
  },
  {
    "NumT": "T2",
    "Type": "lotissement",
    "Prix": 400000,
    "Titre_foncier": "TF002",
    "Cin": "P2",
    "Adresse": "Rabat",
    "Superficie": 300,
    "Notaire": {
      "Numn": "N2",
      "Nom": "Bouazza",
      "Prenom": "Ahmed",
      "Adresse": "Rabat",
      "Tel": "0662345678"
    }
  }]
)



db.terrains.find({ "Notaire.Adresse": "Rabat" }, { Notaire: 1, _id: 0 }).sort({ "Notaire.Nom": 1 });




db.terrains.aggregate([
  { $group: { _id: "$Type", total: { $sum: 1 } } }
]);



db.terrains.aggregate([
  { $match: { Type: "agricole" } },
  { $group: { _id: null, prixMax: { $max: "$Prix" } } }
]);





db.terrains.updateMany(
  { Type: "agricole", Cin: { $in: ["P1", "P4"] } },
  { $mul: { Prix: 1.01 } }
);





db.terrains.updateOne(
  { "Notaire.Numn": "N2" },
  { $unset: { "Notaire.Adresse": "", "Notaire.Tel": "" } }
);