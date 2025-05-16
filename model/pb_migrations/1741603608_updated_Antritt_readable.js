/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3173880902")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT `Antritt`.id, `Kandidat`.`Vorname`, `Kandidat`.`Nachname`, `Kandidat`.`Klasse`, `Fach`.`Kurzform`, `Antritt`.`Thema1`, `Antritt`.`Thema2`, `Antritt`.`Themenwahl`, `Antritt`.`StartVB`, `Antritt`.`Beginn`, `Antritt`.`Ende`, Kommission_Pruefer.`Nachname` as Pruefer, Kommission_Beisitz.`Nachname` as Beisitz, Kommission_KV.`Nachname` as KV \nFROM `Antritt` \n  JOIN `Kandidat` ON `Antritt`.`KandidatID` = `Kandidat`.id\n  JOIN  `Fach` ON `Antritt`.`FachID` = `Fach`.id\n  LEFT JOIN `Kommissionsmitglied` AS `Kommission_Pruefer` ON `Antritt`.`Pruefer` = Kommission_Pruefer.id\n  LEFT JOIN `Kommissionsmitglied` AS `Kommission_Beisitz` ON `Antritt`.`Beisitz` = Kommission_Beisitz.id\n  LEFT JOIN `Kommissionsmitglied` AS `Kommission_KV` ON `Antritt`.`KV` = Kommission_KV.id;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_8GTY")

  // remove field
  collection.fields.removeById("_clone_3CWC")

  // remove field
  collection.fields.removeById("_clone_SpaT")

  // remove field
  collection.fields.removeById("_clone_ffVM")

  // remove field
  collection.fields.removeById("_clone_fbyL")

  // remove field
  collection.fields.removeById("_clone_L73U")

  // remove field
  collection.fields.removeById("_clone_35AL")

  // remove field
  collection.fields.removeById("_clone_hOp4")

  // remove field
  collection.fields.removeById("_clone_0Okg")

  // remove field
  collection.fields.removeById("_clone_HzRc")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_4kQ6",
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
    "id": "_clone_v98r",
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
    "id": "_clone_8MFI",
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
    "id": "_clone_X53B",
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
    "id": "_clone_Wr3c",
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
    "id": "_clone_pYDj",
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
    "id": "_clone_zh0c",
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
    "id": "_clone_Ca6I",
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
    "id": "_clone_TZGU",
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
    "id": "_clone_VEhc",
    "max": "",
    "min": "",
    "name": "Ende",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_e7WH",
    "max": 0,
    "min": 0,
    "name": "Pruefer",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_QZ3F",
    "max": 0,
    "min": 0,
    "name": "Beisitz",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_nPTU",
    "max": 0,
    "min": 0,
    "name": "KV",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3173880902")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT `Antritt`.id, `Kandidat`.`Vorname`, `Kandidat`.`Nachname`, `Kandidat`.`Klasse`, `Fach`.`Kurzform`, `Antritt`.`Thema1`, `Antritt`.`Thema2`, `Antritt`.`Themenwahl`,  `Antritt`.`StartVB`, `Antritt`.`Beginn`, `Antritt`.`Ende` FROM `Antritt`, `Kandidat`, `Fach`\nWHERE `Antritt`.`KandidatID` = `Kandidat`.id AND `Antritt`.`FachID` = `Fach`.id"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_8GTY",
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
    "id": "_clone_3CWC",
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
    "id": "_clone_SpaT",
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
    "id": "_clone_ffVM",
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
    "id": "_clone_fbyL",
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
    "id": "_clone_L73U",
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
    "id": "_clone_35AL",
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
    "id": "_clone_hOp4",
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
    "id": "_clone_0Okg",
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
    "id": "_clone_HzRc",
    "max": "",
    "min": "",
    "name": "Ende",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // remove field
  collection.fields.removeById("_clone_4kQ6")

  // remove field
  collection.fields.removeById("_clone_v98r")

  // remove field
  collection.fields.removeById("_clone_8MFI")

  // remove field
  collection.fields.removeById("_clone_X53B")

  // remove field
  collection.fields.removeById("_clone_Wr3c")

  // remove field
  collection.fields.removeById("_clone_pYDj")

  // remove field
  collection.fields.removeById("_clone_zh0c")

  // remove field
  collection.fields.removeById("_clone_Ca6I")

  // remove field
  collection.fields.removeById("_clone_TZGU")

  // remove field
  collection.fields.removeById("_clone_VEhc")

  // remove field
  collection.fields.removeById("_clone_e7WH")

  // remove field
  collection.fields.removeById("_clone_QZ3F")

  // remove field
  collection.fields.removeById("_clone_nPTU")

  return app.save(collection)
})
