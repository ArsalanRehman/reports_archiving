const express = require('express');
const mongoose = require('mongoose');

const Rapor = new mongoose.Schema({
  Baslik: String,
  RaporNo: Number,
  RaporCesidi: String,
  Icerigi: String,
  YazildigiTarih: {
    type: Date,
    default: Date.now()
  },
  YazildigiYer: String,
  TalepEdenKurum: String,
  YazanKisi: String,
  KomisyonAdi: String,
  KomisyonBaskani: String,
  KomisyonUyeleri: String,
  Fotograflar: String,
  GonderilenKurum: String,
  GonderildigiTarih: Date,
  GondermeSekli: String,
  AnahtarKelimeler: String,
  KonununKacinciRaporu: String,
  Diger: String

}
);



module.exports.RaporAK = mongoose.model('RaporAK',Rapor,'AramaKurtarma');
module.exports.RaporDB = mongoose.model('RaporDB',Rapor, 'DagitimB');
module.exports.RaporG = mongoose.model('RaporG',Rapor, 'GencIHH');
module.exports.RaporIB = mongoose.model('RaporIB',Rapor, 'IlcelerB');
 module.exports.RaporKK = mongoose.model('RaporKK',Rapor, 'KadinKollari');
module.exports.RaporKB = mongoose.model('RaporKB',Rapor, 'KayitB');
module.exports.RaporLB = mongoose.model('RaporLB',Rapor, 'LojistikN');
module.exports.RaporME = mongoose.model('RaporME',Rapor, 'MeslekiEgitim');
module.exports.RaporMisafirB = mongoose.model('RaporMisafirB', Rapor, 'MisafirB');
module.exports.RaporMuhacirB = mongoose.model('RaporMuhacirB',Rapor, 'MuhacirB');
module.exports.RaporMuhasebeB = mongoose.model('RaporMuhasebeB',Rapor, 'MuhasebeB');
module.exports.RaporU = mongoose.model('RaporU',Rapor, 'Udef');
module.exports.RaporTan = mongoose.model('RaporTan',Rapor, 'TanitimB');
module.exports.RaporTer = mongoose.model('RaporTer',Rapor, 'TercumanlikB');
module.exports.RaporTes = mongoose.model('RaporTes',Rapor, 'TespitB');
module.exports.RaporYB = mongoose.model('RaporYB',Rapor, 'YetimB');