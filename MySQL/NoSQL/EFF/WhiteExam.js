use PatientsManager

db.createCollection("patients")

db.patients.insertMany([
    {
        _id: 1,
        nom: "Sara El Amrani",
        ville: "Rabat",
        dateNaissance: ISODate("1999-04-12"),
        telephone: "0612345678",
        sexe: "F"
    },
    {
        _id: 2,
        nom: "Anas Benali",
        ville: "Casablanca",
        dateNaissance: ISODate("1994-11-22"),
        telephone:"0623456789",
        sexe:"M"
    }
])



db.medecins.insertMany([
    {
        _id: 101,
        nom: "Dr Bennis",
        specialite: "Generaliste",
        tarif: 200,
        telephone: "0678901234"
    },
    {
        _id: 102,
        nom: "Dr El Fassi",
        specialite: "Cardiologie",
        tarif: 500,
        telephone: "0689012345"
    }
])


db.rendezvous.insertMany([
    {
        _id:9001,
        patientId: 1,
        medecinId: 101,
        dateRDV: ISODate("2026-01-10"),
        statut: "Honore",
        paiement: "Paye"
    },
    {
        _id: 9002,
        patientId: 2,
        medecinId: 102,
        dateRDV: ISODate("2026-01-25"),
        statut: "EnAttente",
        paiement: "NonPaye"
    }
])



//Q1//


db.patients.find({ "ville": "Rabat" })


//Q2//

db.medecins.updateOne(
  { "_id": 101 },
  { "$inc": { "tarif": 20 } }
)


//Q3//

db.medecins.find({
  "tarif": { $gt: 300 },
  "specialite": "Généraliste"
})


//Q4//

db.rendezvous.countDocuments()


//Q5//


db.rendezvous.aggregate([
  { "$group": { "_id": "$statut", "total": { "$sum": 1 } } }
])


//Q6//

db.medecins.aggregate([
    {
        "$lookup": {
            "from": "rendezvous",
            "localField": "_id",
            "foreignField": "medecinId",
            "as": "rds"
        }
    },
    {
        "$project": {
            "nom": 1,
            "specialite": 1,
            "nbRendezVous": {"$size" : "$rds"}
        }
    }
])


//Q7//


db.rendezvous.aggregate([
  {
    "$project": {
      "_id": 1,
      "dateRDV": 1,
      "nbJoursDepuisRDV": {
        "$dateDiff": {
          "startDate": "$dateRDV",
          "endDate": new Date(),
          "unit": "day"
        }
      }
    }
  }
])


//Q8//


db.patients.aggregate([
  {
    "$lookup": {
      "from": "rendezvous",
      "localField": "_id",
      "foreignField": "patientId",
      "as": "rendezvous"
    }
  }
])





