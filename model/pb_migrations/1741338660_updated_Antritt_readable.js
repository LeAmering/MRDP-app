/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3173880902")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT `Antritt`.id, `Kandidat`.`Vorname`, `Kandidat`.`Nachname`, `Kandidat`.`Klasse`, `Fach`.`Kurzform`, `Antritt`.`Thema1`, `Antritt`.`Thema2`, `Antritt`.`Themenwahl`,  `Antritt`.`StartVB`, `Antritt`.`Beginn`, `Antritt`.`Ende` FROM `Antritt`, `Kandidat`, `Fach`\nWHERE `Antritt`.`KandidatID` = `Kandidat`.id AND `Antritt`.`FachID` = `Fach`.id"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_6ay4")

  // remove field
  collection.fields.removeById("_clone_OWCl")

  // remove field
  collection.fields.removeById("_clone_wNG4")

  // remove field
  collection.fields.removeById("_clone_uPyL")

  // remove field
  collection.fields.removeById("_clone_q46i")

  // remove field
  collection.fields.removeById("_clone_njbc")

  // remove field
  collection.fields.removeById("_clone_Ay2c")

  // remove field
  collection.fields.removeById("_clone_EpDK")

  // remove field
  collection.fields.removeById("_clone_u0Tt")

  // remove field
  collection.fields.removeById("_clone_pg1k")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_2v9D",
    "max": 0,
    "min": 0,
    "name": "Vorname",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_pFw9",
    "max": 0,
    "min": 0,
    "name": "Nachname",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_iQN1",
    "max": 0,
    "min": 0,
    "name": "Klasse",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_BoVB",
    "max": 0,
    "min": 0,
    "name": "Kurzform",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_AGLw",
    "max": null,
    "min": null,
    "name": "Thema1",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_XMUS",
    "max": null,
    "min": null,
    "name": "Thema2",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_348922829",
    "hidden": false,
    "id": "_clone_3Oui",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Themenwahl",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "_clone_urr6",
    "max": "",
    "min": "",
    "name": "StartVB",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "_clone_a5DZ",
    "max": "",
    "min": "",
    "name": "Beginn",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "_clone_Ptiz",
    "max": "",
    "min": "",
    "name": "Ende",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3173880902")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT `Antritt`.id, `Kandidat`.`Vorname`, `Kandidat`.`Nachname`, `Kandidat`.`Klasse`, `Fach`.`Kurzform`, `Antritt`.`Thema1`, `Antritt`.`Thema2`, `Antritt`.`Themenwahl`,  `Antritt`.`StartVB`, `Antritt`.`Beginn`, `Antritt`.`Ende` FROM `Antritt`, `Kandidat`, `Fach`"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
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
  }))

  // add field
  collection.fields.addAt(2, new Field({
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
  }))

  // add field
  collection.fields.addAt(3, new Field({
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
  }))

  // add field
  collection.fields.addAt(4, new Field({
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
  }))

  // add field
  collection.fields.addAt(5, new Field({
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
  }))

  // add field
  collection.fields.addAt(6, new Field({
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
  }))

  // add field
  collection.fields.addAt(7, new Field({
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
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "_clone_EpDK",
    "max": "",
    "min": "",
    "name": "StartVB",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "_clone_u0Tt",
    "max": "",
    "min": "",
    "name": "Beginn",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "_clone_pg1k",
    "max": "",
    "min": "",
    "name": "Ende",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // remove field
  collection.fields.removeById("_clone_2v9D")

  // remove field
  collection.fields.removeById("_clone_pFw9")

  // remove field
  collection.fields.removeById("_clone_iQN1")

  // remove field
  collection.fields.removeById("_clone_BoVB")

  // remove field
  collection.fields.removeById("_clone_AGLw")

  // remove field
  collection.fields.removeById("_clone_XMUS")

  // remove field
  collection.fields.removeById("_clone_3Oui")

  // remove field
  collection.fields.removeById("_clone_urr6")

  // remove field
  collection.fields.removeById("_clone_a5DZ")

  // remove field
  collection.fields.removeById("_clone_Ptiz")

  return app.save(collection)
})
