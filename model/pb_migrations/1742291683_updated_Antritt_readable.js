/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3173880902")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT `Antritt`.id, `Kandidat`.`Vorname`, `Kandidat`.`Nachname`, `Kandidat`.`Klasse`, `Fach`.`Kurzform`, `Antritt`.`Thema1`, `Antritt`.`Thema2`, `Antritt`.`Themenwahl`, `Antritt`.`StartVB`, `Antritt`.`Beginn`, `Antritt`.`Ende`, Kommission_Pruefer.`Nachname` as Pruefer, Kommission_Beisitz.`Nachname` as Beisitz, Kommission_KV.`Nachname` as KV, `Antritt`.`KandidatID`\nFROM `Antritt` \n  JOIN `Kandidat` ON `Antritt`.`KandidatID` = `Kandidat`.id\n  JOIN  `Fach` ON `Antritt`.`FachID` = `Fach`.id\n  LEFT JOIN `Kommissionsmitglied` AS `Kommission_Pruefer` ON `Antritt`.`Pruefer` = Kommission_Pruefer.id\n  LEFT JOIN `Kommissionsmitglied` AS `Kommission_Beisitz` ON `Antritt`.`Beisitz` = Kommission_Beisitz.id\n  LEFT JOIN `Kommissionsmitglied` AS `Kommission_KV` ON `Antritt`.`KV` = Kommission_KV.id;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_kvTv")

  // remove field
  collection.fields.removeById("_clone_7KLi")

  // remove field
  collection.fields.removeById("_clone_Dou4")

  // remove field
  collection.fields.removeById("_clone_Zf35")

  // remove field
  collection.fields.removeById("_clone_aCsv")

  // remove field
  collection.fields.removeById("_clone_53IT")

  // remove field
  collection.fields.removeById("_clone_kCsr")

  // remove field
  collection.fields.removeById("_clone_xKUo")

  // remove field
  collection.fields.removeById("_clone_MR27")

  // remove field
  collection.fields.removeById("_clone_vdr8")

  // remove field
  collection.fields.removeById("_clone_6gnj")

  // remove field
  collection.fields.removeById("_clone_gIbi")

  // remove field
  collection.fields.removeById("_clone_88gS")

  // remove field
  collection.fields.removeById("relation557436767")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_C1wG",
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
    "id": "_clone_8MIZ",
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
    "id": "_clone_Zqn4",
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
    "id": "_clone_KMdf",
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
    "id": "_clone_RaEH",
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
    "id": "_clone_A1LX",
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
    "id": "_clone_kEPe",
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
    "id": "_clone_l0z9",
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
    "id": "_clone_CHZl",
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
    "id": "_clone_W1Zd",
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
    "id": "_clone_aL9k",
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
    "id": "_clone_m4FC",
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
    "id": "_clone_RVUZ",
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
    "id": "_clone_gMeU",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "KandidatID",
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
    "viewQuery": "SELECT `Antritt`.id, `Kandidat`.`Vorname`, `Kandidat`.`Nachname`, `Kandidat`.`Klasse`, `Fach`.`Kurzform`, `Antritt`.`Thema1`, `Antritt`.`Thema2`, `Antritt`.`Themenwahl`, `Antritt`.`StartVB`, `Antritt`.`Beginn`, `Antritt`.`Ende`, Kommission_Pruefer.`Nachname` as Pruefer, Kommission_Beisitz.`Nachname` as Beisitz, Kommission_KV.`Nachname` as KV, `Antritt`.id as KadidatId\nFROM `Antritt` \n  JOIN `Kandidat` ON `Antritt`.`KandidatID` = `Kandidat`.id\n  JOIN  `Fach` ON `Antritt`.`FachID` = `Fach`.id\n  LEFT JOIN `Kommissionsmitglied` AS `Kommission_Pruefer` ON `Antritt`.`Pruefer` = Kommission_Pruefer.id\n  LEFT JOIN `Kommissionsmitglied` AS `Kommission_Beisitz` ON `Antritt`.`Beisitz` = Kommission_Beisitz.id\n  LEFT JOIN `Kommissionsmitglied` AS `Kommission_KV` ON `Antritt`.`KV` = Kommission_KV.id;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_kvTv",
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
    "id": "_clone_7KLi",
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
    "id": "_clone_Dou4",
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
    "id": "_clone_Zf35",
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
    "id": "_clone_aCsv",
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
    "id": "_clone_53IT",
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
    "id": "_clone_kCsr",
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
    "id": "_clone_xKUo",
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
    "id": "_clone_MR27",
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
    "id": "_clone_vdr8",
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
    "id": "_clone_6gnj",
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
    "id": "_clone_gIbi",
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
    "id": "_clone_88gS",
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
    "collectionId": "pbc_1256482579",
    "hidden": false,
    "id": "relation557436767",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "KadidatId",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("_clone_C1wG")

  // remove field
  collection.fields.removeById("_clone_8MIZ")

  // remove field
  collection.fields.removeById("_clone_Zqn4")

  // remove field
  collection.fields.removeById("_clone_KMdf")

  // remove field
  collection.fields.removeById("_clone_RaEH")

  // remove field
  collection.fields.removeById("_clone_A1LX")

  // remove field
  collection.fields.removeById("_clone_kEPe")

  // remove field
  collection.fields.removeById("_clone_l0z9")

  // remove field
  collection.fields.removeById("_clone_CHZl")

  // remove field
  collection.fields.removeById("_clone_W1Zd")

  // remove field
  collection.fields.removeById("_clone_aL9k")

  // remove field
  collection.fields.removeById("_clone_m4FC")

  // remove field
  collection.fields.removeById("_clone_RVUZ")

  // remove field
  collection.fields.removeById("_clone_gMeU")

  return app.save(collection)
})
