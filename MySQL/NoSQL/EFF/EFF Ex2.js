use DBEmployes

db.employes.insertMany([
    [
  {
    "_id": "e1",
    "nomEmp": "Lamrabet",
    "prenomEmp": "Oussama",
    "poste": "Directeur",
    "Departement": {
      "codeDep": "1",
      "nomDep": "RH"
    }
  },
  {
    "_id": "e2",
    "nomEmp": "Amrani",
    "prenomEmp": "Fatima",
    "poste": "Chef de Projet",
    "Departement": {
      "codeDep": "2",
      "nomDep": "IT"
    }
  },
  {
    "_id": "e3",
    "nomEmp": "Benkirane",
    "prenomEmp": "Hicham",
    "poste": "Directeur",
    "Departement": {
      "codeDep": "3",
      "nomDep": "Finance"
    }
  },
  {
    "_id": "e4",
    "nomEmp": "Kamal",
    "prenomEmp": "Yasmine",
    "poste": "Analyste",
    "Departement": {
      "codeDep": "4",
      "nomDep": "Marketing"
    }
  },
  {
    "_id": "e5",
    "nomEmp": "Tazi",
    "prenomEmp": "Sami",
    "poste": "Directeur",
    "Departement": {
      "codeDep": "1",
      "nomDep": "RH"
    }
  }
]
    
]);



db.employes.find().sort({ nomEmp: 1 });


db.employes.countDocuments({ poste: "Directeur" });




db.employes.deleteOne({ _id: "e5" });




db.employes.aggregate([
  { $group: { _id: "$poste", nombre: { $sum: 1 } } }
]);




