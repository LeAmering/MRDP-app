/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1657749142")

  // remove field
  collection.fields.removeById("text3641390455")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4238004052",
    "hidden": false,
    "id": "relation3641390455",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "Pruefungsfaecher",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1657749142")

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3641390455",
    "max": 0,
    "min": 0,
    "name": "Pruefungsfaecher",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("relation3641390455")

  return app.save(collection)
})
