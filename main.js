//1.
const cimElem = document.getElementById("focim")
cimElem.textContent = "Mátrix rendszer"

//2.
const statuszElemek = document.getElementsByClassName("statusz-szoveg")
//3.
console.log(statuszElemek.length)

//4.
statuszElemek[0].textContent = "Rendszer ellenőrzése folyamatban..."
//5
statuszElemek[1].textContent = "Kapcsolódás a hálózathoz..."

//6
const listaElemek = document.querySelectorAll(".lista-elem")
//7
console.log(listaElemek[0].textContent)
//8
listaElemek[1].textContent = "Szerver állapot: ONLINE"
//9
const nevInput = document.querySelector("#jatekos-nev-input")
//10
const inditoGomb = document.querySelector("#indito-gomb")
//11
const eredmenyDiv = document.getElementById("eredmeny")
//12
inditoGomb.addEventListener("click", function(){
    const gombSzoveg = inditoGomb.textContent;
    const jatekosNev = nevInput.value;
    eredmenyDiv.textContent = `Üdvözlünk, ${jatekosNev}! Végrehajtott akció: ${gombSzoveg}`;
})