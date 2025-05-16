/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_348922829")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number2590006623",
    "max": null,
    "min": null,
    "name": "Nummer",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_348922829")

  // remove field
  collection.fields.removeById("number2590006623")

  return app.save(collection)
})
