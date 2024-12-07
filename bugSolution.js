```javascript
//Corrected aggregation pipeline
db.collection.aggregate([
  {$match: { /* filter criteria */ }},
  {$group: {_id: "$fieldName", sum: {$sum: {$toDouble: "$anotherField"}}}}, //Corrected
  {$sort: {sum: -1}}
])
```