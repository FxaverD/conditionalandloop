import PromptSync from "prompt-sync"; 
var prompt = PromptSync()
var Destination = prompt('Lokasi Destinasi?')
var Jarak = prompt('Berapa Jarak (dalam km)?')
var Kecepatan = prompt('Berapa kecepatan perjalanan (dalam km/jam)?')
var Waktu = Jarak/Kecepatan
console.log ('Waktu Perjalanan yang akan kamu tempuh ke ' + Destination + ' adalah ' + Waktu + ' jam ')