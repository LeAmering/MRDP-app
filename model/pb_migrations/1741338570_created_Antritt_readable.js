/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_6ay4",
        "max": 0,
        "min": 0,
        "name": "Vorname",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_OWCl",
        "max": 0,
        "min": 0,
        "name": "Nachname",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_wNG4",
        "max": 0,
        "min": 0,
        "name": "Klasse",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_uPyL",
        "max": 0,
        "min": 0,
        "name": "Kurzform",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "_clone_q46i",
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
        "id": "_clone_njbc",
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
        "id": "_clone_Ay2c",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "Themenwahl",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "_clone_EpDK",
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
        "id": "_clone_u0Tt",
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
        "id": "_clone_pg1k",
        "max": "",
        "min": "",
        "name": "Ende",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      }
    ],
    "id": "pbc_3173880902",
    "indexes": [],
    "listRule": null,
    "name": "Antritt_readable",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT `Antritt`.id, `Kandidat`.`Vorname`, `Kandidat`.`Nachname`, `Kandidat`.`Klasse`, `Fach`.`Kurzform`, `Antritt`.`Thema1`, `Antritt`.`Thema2`, `Antritt`.`Themenwahl`,  `Antritt`.`StartVB`, `Antritt`.`Beginn`, `Antritt`.`Ende` FROM `Antritt`, `Kandidat`, `Fach`",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3173880902");

  return app.delete(collection);
})
