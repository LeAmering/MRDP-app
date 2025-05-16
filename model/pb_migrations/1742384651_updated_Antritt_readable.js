/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3173880902")

  // update collection data
  unmarshal({
    "listRule": null,
    "viewRule": null
  }, collection)

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

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_43uD",
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
    "id": "_clone_II4R",
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
    "id": "_clone_mhiz",
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
    "id": "_clone_z0mi",
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
    "id": "_clone_8wp0",
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
    "id": "_clone_aBSe",
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
    "id": "_clone_2UTK",
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
    "id": "_clone_ZdyM",
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
    "id": "_clone_MdX8",
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
    "id": "_clone_uOsW",
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
    "id": "_clone_JntT",
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
    "id": "_clone_tbY0",
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
    "id": "_clone_Yrih",
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
    "id": "_clone_3Msj",
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
    "id": "_clone_kfoQ",
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
    "id": "_clone_bZRE",
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
    "id": "_clone_aAci",
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
    "id": "_clone_nehk",
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
    "listRule": "",
    "viewRule": ""
  }, collection)

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

  // remove field
  collection.fields.removeById("_clone_43uD")

  // remove field
  collection.fields.removeById("_clone_II4R")

  // remove field
  collection.fields.removeById("_clone_mhiz")

  // remove field
  collection.fields.removeById("_clone_z0mi")

  // remove field
  collection.fields.removeById("_clone_8wp0")

  // remove field
  collection.fields.removeById("_clone_aBSe")

  // remove field
  collection.fields.removeById("_clone_2UTK")

  // remove field
  collection.fields.removeById("_clone_ZdyM")

  // remove field
  collection.fields.removeById("_clone_MdX8")

  // remove field
  collection.fields.removeById("_clone_uOsW")

  // remove field
  collection.fields.removeById("_clone_JntT")

  // remove field
  collection.fields.removeById("_clone_tbY0")

  // remove field
  collection.fields.removeById("_clone_Yrih")

  // remove field
  collection.fields.removeById("_clone_3Msj")

  // remove field
  collection.fields.removeById("_clone_kfoQ")

  // remove field
  collection.fields.removeById("_clone_bZRE")

  // remove field
  collection.fields.removeById("_clone_aAci")

  // remove field
  collection.fields.removeById("_clone_nehk")

  return app.save(collection)
})
