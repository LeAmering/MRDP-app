/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_348922829")

  // update collection data
  unmarshal({
    "name": "Themengebiet"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_348922829")

  // update collection data
  unmarshal({
    "name": "Themengebier"
  }, collection)

  return app.save(collection)
})
