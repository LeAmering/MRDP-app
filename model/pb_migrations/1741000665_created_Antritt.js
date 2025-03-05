/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_6854027",
        "hidden": false,
        "id": "relation3077666185",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "KandidatID",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_4238004052",
        "hidden": false,
        "id": "relation4090275231",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "FachID",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "date1565347723",
        "max": "",
        "min": "",
        "name": "StartVB",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "hidden": false,
        "id": "date302237594",
        "max": "",
        "min": "",
        "name": "Beginn",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "hidden": false,
        "id": "date4086213197",
        "max": "",
        "min": "",
        "name": "Ende",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "hidden": false,
        "id": "number3998274128",
        "max": null,
        "min": null,
        "name": "Thema1",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "number2002355178",
        "max": null,
        "min": null,
        "name": "Thema2",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_348922829",
        "hidden": false,
        "id": "relation3997322281",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "Themenwahl",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_1657749142",
        "hidden": false,
        "id": "relation792906477",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "Pruefer",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_1657749142",
        "hidden": false,
        "id": "relation1206709238",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "Beisitz",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_1657749142",
        "hidden": false,
        "id": "relation3495719152",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "KV",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_1256482579",
    "indexes": [],
    "listRule": null,
    "name": "Antritt",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1256482579");

  return app.delete(collection);
})
