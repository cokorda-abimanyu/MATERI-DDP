let waktu_mulai = new Date().getTime();

//import datetime
const fs = require('fs');
const prompt = require('prompt-sync')();

let waktu_selesai = new Date().getTime();

console.log("Waktu mulai", waktu_mulai)
console.log("Waktu selesai", waktu_selesai)
console.log("Jarak/interval waktu mulai-selesai", (waktu_selesai-waktu_mulai) / 1000)



