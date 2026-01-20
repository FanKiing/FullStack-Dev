use covid
db.dropDatabase()
db.cas.insertMany([
    { "pays": "France", "date": "2023-12-01", "casConfirmes": 12000000, "deces": 140000, "guerisons": 11500000 },
    { "pays": "Espagne", "date": "2023-12-01", "casConfirmes": 8000000, "deces": 100000, "guerisons": 7500000 },
    { "pays": "Italie", "date": "2023-12-01", "casConfirmes": 10000000, "deces": 130000, "guerisons": 9500000 },
    { "pays": "Allemagne", "date": "2023-12-01", "casConfirmes": 11000000, "deces": 120000, "guerisons": 10500000 }])

db.Vaccins.insertMany([
    { "pays": "France", "population": 67000000, "vaccinesAdministres": 120000000, "doseComplete": 60000000 },
    { "pays": "Espagne", "population": 47000000, "vaccinesAdministres": 90000000, "doseComplete": 45000000 },
    { "pays": "Italie", "population": 60000000, "vaccinesAdministres": 110000000, "doseComplete": 58000000 },
    { "pays": "Allemagne", "population": 83000000, "vaccinesAdministres": 160000000, "doseComplete": 80000000 }])
    
   // Q3 
db.cas.find().count()

//Q4
db.cas.find({"pays":"France"}, {"casConfirmes":1, "deces":1, "_id":0})

db.cas.aggregate([
    {$match:{"pays":"France"}},
    {$project:{
        "casConfirmes":1, "deces":1, "_id":0
    }}
])

//Q5
db.cas.aggregate([
    {$group:{"_id":"$pays", "taux_mortalite":{"$sum":{$multiply:[{$divide:["$deces", "$casConfirmes"]}, 100]}}}}
    
])

db.cas.aggregate([
    {$group:{"_id":"$pays", "total_deces": {"$sum":"$deces"}, "total_casConfirmes":{"$sum":"$casConfirmes"}}},
    {$project:{
        "taux_mortalite":{$multiply:[{$divide:["$total_deces", "$total_casConfirmes"]}, 100]}
    }}
])

db.cas.aggregate([
    {$group:{"_id":"$pays", "total_deces": {"$sum":"$deces"}, "total_casConfirmes":{"$sum":"$casConfirmes"}}},
    {$addFields:{
        "taux_mortalite":{$multiply:[{$divide:["$total_deces", "$total_casConfirmes"]}, 100]}
    }}
])

//Q6
db.cas.find({$expr:{"$lt":["$guerisons", {$multiply:[0.95, "$casConfirmes"]}]}}, {"pays":1, "_id":0})

//Q7
db.Vaccins.aggregate([
    {$group:{"_id":"$pays", "population_entierement_vaccinee":{"$sum":{$multiply:[{$divide:["$doseComplete", "$population"]}, 100]}}}}
    
])

//Q8
db.Vaccins.aggregate([
    {$group:{"_id":"$pays", "population_entierement_vaccinee":{"$sum":{$multiply:[{$divide:["$doseComplete", "$population"]}, 100]}}}},
    {$match:{"population_entierement_vaccinee":{"$lt":70}}}
    
])

//Q9
db.cas.find({"casConfirmes":{"$gt":10000000}})

//Q10
db.cas.aggregate([
    {$group:{"_id":"$pays", "max_deces":{"$max":"$deces"}}},
    {$sort:{"max_deces":-1}},
    {$limit:1}
    ])
    
//Q11
db.cas.aggregate([
    {$group:{"_id":null, "avgèdeces":{"$avg":"$deces"}, "avg_casConfirmes":{"$avg":"$casConfirmes"}}},
    ])    
    
db.cas.aggregate([
    {$group:{"_id":"$pays", "nbr":{"$sum":1}}}
    ])       
    
