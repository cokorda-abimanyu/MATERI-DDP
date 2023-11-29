//Cok Gde Abimanyu Pradnyana Putra
//2301010055
//Sistem Informasi PAGI2

let waktu_mulai = new Date().getTime();

//import datetime
const fs = require('fs');
const prompt = require('prompt-sync')();

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 1;

let soal = [
    {
        "q": "Yang merupakan member JKT 48?",
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut',
        ],
        "a": 1 
    },
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0 
    },
    {
        "q": "Siapa aktor film Dilan?",
        "o": [
            'Made',
            'Kadek',
            'Komang',
            'Iqbal',
        ],
        "a": 3 
    },
    {
        "q": "Siapa nama Buk Kantin selasar?",
        "o": [
            'Men Lengar',
            'Pan Lemper',
            'Bli Sempler',
            'Men Doblar',
        ],
        "a": 0 
    },
    {
        "q": "Siapa penemu seblak?",
        "o": [
            "Jarwo Seblak",
            "Sopo Bakso",
            "Asep Lele",
            "Dudung Rendang",
        ],
        "a": 0 
    }
];

let nama = prompt('Input nama: ');

for (let i = 0; i < soal.length; i++) {
    console.log(`\n${i + 1}. ${soal[i].q}`);
    for (let j = 0; j < soal[i].o.length; j++) {
        console.log(`   ${j + 1}. ${soal[i].o[j]}`);
    }

    let jawaban = parseInt(prompt('Silahkan Jawab (input nomor ): '));

    if (jawaban === soal[i].a + 1) {
        score += point_per_soal;
        jawaban_benar++;
    } else {
        jawaban_salah++;
    }
}

let waktu_selesai = new Date().getTime();

console.log("Waktu mulai", waktu_mulai)
console.log("Waktu selesai", waktu_selesai)
console.log("Jarak/interval waktu mulai-selesai", (waktu_selesai-waktu_mulai) / 1000)

console.log("\nKuis selesai");
console.log("\nStatistic Kuis");
console.log('Nama\t\t:', nama);
console.log('Score\t\t:', score);
console.log('Jawaban benar\t:', jawaban_benar);
console.log('Jawaban salah\t:', jawaban_salah);