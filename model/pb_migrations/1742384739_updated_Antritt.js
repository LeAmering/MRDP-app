/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1256482579")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1256482579")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": ""
  }, collection)

  return app.save(collection)
})
