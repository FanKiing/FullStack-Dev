use InnovConsul

db.Projets.insertMany([
 {
  nom: "Optimisation CRM",
  client: "TechNova",
  budget: 50000,
  duree: "6 months",
  jalons: ["Analysis", "Development", "Testing", "Deployment"],
  equipe: ["E001", "E002", "E003"]
 },
 {
  nom: "Transformation Digitale",
  client: "GreenCorp",
  budget: 80000,
  duree: "12 months",
  jalons: ["Planning", "Implementation", "Training", "Validation"],
  equipe: ["E003", "E004", "E005"]
 }
])

db.Employes.insertMany([
 { _id: "E001", nom: "Martin", role: "Consultant", specialisation: "CRM" },
 { _id: "E002", nom: "Dupuis", role: "Analyst", specialisation: "Data" },
 { _id: "E003", nom: "Ndiaye", role: "Developer", specialisation: "Backend" },
 { _id: "E004", nom: "Tran", role: "Project Manager", specialisation: "Agile" },
 { _id: "E005", nom: "Lopez", role: "Consultant", specialisation: "Cloud" }
])

db.Taches.insertMany([
 {
  nom: "Configure CRM",
  projet: "Optimisation CRM",
  assigne: "E001",
  statut: "In Progress",
  echeance: ISODate("2024-01-15")
 },
 {
  nom: "Analyze client data",
  projet: "Optimisation CRM",
  assigne: "E002",
  statut: "Completed",
  echeance: ISODate("2023-12-10")
 },
 {
  nom: "Deploy backend",
  projet: "Transformation Digitale",
  assigne: "E003",
  statut: "In Progress",
  echeance: ISODate("2024-02-28")
 }
])


db.Projets.find()

db.Projets.aggregate([
 { $match: { nom: "Optimisation CRM" } },
 { $unwind: "$equipe" },
 {
  $lookup: {
   from: "Employes",
   localField: "equipe",
   foreignField: "_id",
   as: "employee"
  }
 },
 { $unwind: "$employee" },
 { $project: { _id: 0, nom: "$employee.nom" } }
])

db.Projets.aggregate([
 { $group: { _id: "$client", totalBudget: { $sum: "$budget" } } }
])

db.Taches.aggregate([
 { $match: { statut: "Completed" } },
 { $group: { _id: "$assigne", completedTasks: { $sum: 1 } } }
])

db.Taches.find({
 echeance: { $lt: new Date() },
 statut: { $ne: "Completed" }
})

db.Projets.find(
 { nom: "Transformation Digitale" },
 { _id: 0, jalons: 1 }
)

db.Projets.find({ budget: { $gt: 60000 } })

db.Employes.aggregate([
 {
  $lookup: {
   from: "Taches",
   localField: "_id",
   foreignField: "assigne",
   as: "tasks"
  }
 },
 { $match: { tasks: { $size: 0 } } }
])

db.Taches.aggregate([
 { $group: { _id: "$projet", numberOfTasks: { $sum: 1 } } }
])
