'use strict';

const IShopDao = require('../interfaces/IShopDao');
const FirebaseConnection = require('./FirebaseConnection');

class ShopFirebaseDao extends IShopDao {

  constructor() {
    super();
    this.firebaseConnection = new FirebaseConnection();
    this.db = this.firebaseConnection.getFirebaseContextDb();
  }

  save(entity) {
    try {
      this.db.collection('shops').doc(entity.id).set(entity).then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      }).catch(function (error) {
        console.error("Error adding document: ", error);
      });
    }
    catch (err) {
      console.log(err);
    }
    return entity;
  }

  remove(id) {

  }

  get(id) {

  }

  async getbyType(type) {
    var collection = [];
    let collectionsRef = this.db.collection('shops').where('type','==', type).orderBy('id');
    let allData = await collectionsRef.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          collection.push(doc.data());
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });

      return  Promise.resolve(collection);

  }

  async all() {
    var collection = [];
    let collectionsRef = this.db.collection('shops').orderBy('id');
    let allData = await collectionsRef.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          collection.push(doc.data());
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });

      return  Promise.resolve(collection);
  }
}

const instance = new ShopFirebaseDao()
Object.freeze(instance);

module.exports = instance;
