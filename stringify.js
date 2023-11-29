let siswa = {
    nama: "Dono Doni Dora",
    nilai: 99,
    status: true
}

let siswa_string = JSON.stringify(siswa)

console.log("Teks string siswa:", siswa_string)
let doni_json = '{"nama":"Doni","nilai":80,"status":true}';

let data_siswa = '[{"nama":"Doni","nilai":80,"status":false},{"nama":"Umi","nilai":70,"status":true}]'


let daftar_siswa = JSON.parse(data_siswa)

console.log("Array daftar_siswa: ", daftar_siswa)

let nama = "Poki"
let bilangan = 10
console.log(JSON.stringify(bilangan))