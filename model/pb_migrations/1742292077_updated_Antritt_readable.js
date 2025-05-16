/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3173880902")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT `Antritt`.id, `Kandidat`.`Vorname`, `Kandidat`.`Nachname`, `Kandidat`.`Klasse`, `Fach`.`Kurzform`, `Antritt`.`Thema1`, `Antritt`.`Thema2`, `Antritt`.`Themenwahl`, `Antritt`.`StartVB`, `Antritt`.`Beginn`, `Antritt`.`Ende`, Kommission_Pruefer.`Nachname` as Pruefer, Kommission_Beisitz.`Nachname` as Beisitz, Kommission_KV.`Nachname` as KV, `Antritt`.`KandidatID`, `Antritt`.`FachID`, `Antritt`.`KV` as KVID, `Antritt`.`Pruefer` as PrueferID, `Antritt`.`Beisitz` as BeisitzID\nFROM `Antritt` \n  JOIN `Kandidat` ON `Antritt`.`KandidatID` = `Kandidat`.id\n  JOIN  `Fach` ON `Antritt`.`FachID` = `Fach`.id\n  LEFT JOIN `Kommissionsmitglied` AS `Kommission_Pruefer` ON `Antritt`.`Pruefer` = Kommission_Pruefer.id\n  LEFT JOIN `Kommissionsmitglied` AS `Kommission_Beisitz` ON `Antritt`.`Beisitz` = Kommission_Beisitz.id\n  LEFT JOIN `Kommissionsmitglied` AS `Kommission_KV` ON `Antritt`.`KV` = Kommission_KV.id;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_U3ZQ")

  // remove field
  collection.fields.removeById("_clone_h3vJ")

  // remove field
  collection.fields.removeById("_clone_3oop")

  // remove field
  collection.fields.removeById("_clone_Y33A")

  // remove field
  collection.fields.removeById("_clone_Tw0Q")

  // remove field
  collection.fields.removeById("_clone_Ptgq")

  // remove field
  collection.fields.removeById("_clone_rC5E")

  // remove field
  collection.fields.removeById("_clone_6HSf")

  // remove field
  collection.fields.removeById("_clone_X3jZ")

  // remove field
  collection.fields.removeById("_clone_3ydm")

  // remove field
  collection.fields.removeById("_clone_nveA")

  // remove field
  collection.fields.removeById("_clone_gEtM")

  // remove field
  collection.fields.removeById("_clone_ViMq")

  // remove field
  collection.fields.removeById("_clone_pmCz")

  // remove field
  collection.fields.removeById("_clone_tIqh")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_8MZ0",
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
    "id": "_clone_GtcU",
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
    "id": "_clone_SbS9",
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
    "id": "_clone_FWLv",
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
    "id": "_clone_0B7P",
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
    "id": "_clone_THwm",
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
    "id": "_clone_zqIl",
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
    "id": "_clone_trrx",
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
    "id": "_clone_UzwN",
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
    "id": "_clone_Dsxg",
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
    "id": "_clone_9JQH",
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
    "id": "_clone_8MZx",
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
    "id": "_clone_8SzN",
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

  // add field
  collection.fields.addAt(14, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_6854027",
    "hidden": false,
    "id": "_clone_QKAn",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "KandidatID",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(15, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4238004052",
    "hidden": false,
    "id": "_clone_DGOE",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "FachID",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(16, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1657749142",
    "hidden": false,
    "id": "_clone_10I0",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "KVID",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(17, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1657749142",
    "hidden": false,
    "id": "_clone_TxGc",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "PrueferID",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(18, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1657749142",
    "hidden": false,
    "id": "_clone_f5Xq",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "BeisitzID",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3173880902")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT `Antritt`.id, `Kandidat`.`Vorname`, `Kandidat`.`Nachname`, `Kandidat`.`Klasse`, `Fach`.`Kurzform`, `Antritt`.`Thema1`, `Antritt`.`Thema2`, `Antritt`.`Themenwahl`, `Antritt`.`StartVB`, `Antritt`.`Beginn`, `Antritt`.`Ende`, Kommission_Pruefer.`Nachname` as Pruefer, Kommission_Beisitz.`Nachname` as Beisitz, Kommission_KV.`Nachname` as KV, `Antritt`.`KandidatID`, `Antritt`.`FachID`\nFROM `Antritt` \n  JOIN `Kandidat` ON `Antritt`.`KandidatID` = `Kandidat`.id\n  JOIN  `Fach` ON `Antritt`.`FachID` = `Fach`.id\n  LEFT JOIN `Kommissionsmitglied` AS `Kommission_Pruefer` ON `Antritt`.`Pruefer` = Kommission_Pruefer.id\n  LEFT JOIN `Kommissionsmitglied` AS `Kommission_Beisitz` ON `Antritt`.`Beisitz` = Kommission_Beisitz.id\n  LEFT JOIN `Kommissionsmitglied` AS `Kommission_KV` ON `Antritt`.`KV` = Kommission_KV.id;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_U3ZQ",
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
    "id": "_clone_h3vJ",
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
    "id": "_clone_3oop",
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
    "id": "_clone_Y33A",
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
    "id": "_clone_Tw0Q",
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
    "id": "_clone_Ptgq",
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
    "id": "_clone_rC5E",
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
    "id": "_clone_6HSf",
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
    "id": "_clone_X3jZ",
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
    "id": "_clone_3ydm",
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
    "id": "_clone_nveA",
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
    "id": "_clone_gEtM",
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
    "id": "_clone_ViMq",
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

  // add field
  collection.fields.addAt(14, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_6854027",
    "hidden": false,
    "id": "_clone_pmCz",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "KandidatID",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(15, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4238004052",
    "hidden": false,
    "id": "_clone_tIqh",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "FachID",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("_clone_8MZ0")

  // remove field
  collection.fields.removeById("_clone_GtcU")

  // remove field
  collection.fields.removeById("_clone_SbS9")

  // remove field
  collection.fields.removeById("_clone_FWLv")

  // remove field
  collection.fields.removeById("_clone_0B7P")

  // remove field
  collection.fields.removeById("_clone_THwm")

  // remove field
  collection.fields.removeById("_clone_zqIl")

  // remove field
  collection.fields.removeById("_clone_trrx")

  // remove field
  collection.fields.removeById("_clone_UzwN")

  // remove field
  collection.fields.removeById("_clone_Dsxg")

  // remove field
  collection.fields.removeById("_clone_9JQH")

  // remove field
  collection.fields.removeById("_clone_8MZx")

  // remove field
  collection.fields.removeById("_clone_8SzN")

  // remove field
  collection.fields.removeById("_clone_QKAn")

  // remove field
  collection.fields.removeById("_clone_DGOE")

  // remove field
  collection.fields.removeById("_clone_10I0")

  // remove field
  collection.fields.removeById("_clone_TxGc")

  // remove field
  collection.fields.removeById("_clone_f5Xq")

  return app.save(collection)
})
