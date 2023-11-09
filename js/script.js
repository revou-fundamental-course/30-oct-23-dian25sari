var pria = document.getElementById("#pria");
var wanita = document.getElementById("#wanita");
var berat = document.getElementById("berat");
var tinggi = document.getElementById("tinggi");
var usia = document.getElementById("usia");
let button = document.querySelector(".hitung");
let reset = document.querySelector(".reset");
let result = document.querySelector(".hasil");
let hasil = document.getElementById("hasil");

function validate(e) {
    e.preventDefault();
    let valid = true;
    console.log(berat.value)
    
    //Menampilkan pesan error jika ada inputan yang kosong
    if (!berat.value || !tinggi.value || !usia.value) {
        const inputError = document.getElementById("nameError");
        inputError.classList.add("visible");
        inputError.innerText="Inputan tidak boleh kosong!";
        inputError.setAttribute("aria-hidden", false);
        inputError.setAttribute("aria-invalid", true);
        valid = false;
    }
    
    //Jika tidak ada inputan yang kosong maka hitungan diproses
    if (valid) {        
        var tinggiMeter = tinggi.value/100;
        var bmi = berat.value/(tinggiMeter*tinggiMeter);
        hasil.innerHTML = bmi.toFixed(2);
        if (bmi < 18.5) {
            document.getElementById("kategori").innerText="Anda memiliki kekurangan berat badan";
        } else if(18.5<=bmi && bmi<=24.9) {
            document.getElementById("kategori").innerText="Anda memiliki berat badan ideal";
        } else if(25<=bmi && bmi<=29.9) {
            document.getElementById("kategori").innerText="Anda memiliki berat badan anda berlebih";
        } else if(30<=bmi) {
            document.getElementById("kategori").innerText="Anda termasuk obesitas";
        }  
    }    
}

button.addEventListener("click", validate);
reset.addEventListener("click", function(){
    document.getElementById("form").reset();  
})