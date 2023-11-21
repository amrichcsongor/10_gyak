window.onload = function () {

    console.log("betöltődött");
    drawPascal(10);

}

var pascalDiv = document.getElementById('pascal');

var drawPascal = function (sorSzam) {
    for (var sor = 0; sor < 10; sor++) {
        var ujElem = document.createElement('div');
        ujElem.classList.add('újosztály');
        pascalDiv.appendChild(ujSorDiv);
        //új div létrehozása az új sornak
        //új div osztálylistájához add hozzá a "sor"-t
        //új div-et add hozzá a "pascal" gyermekeihez
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var ujElemDiv = document.createElement('div');
            ujElemDiv.classList.add('elem');
            ujElemDiv.innerText = //sor + ";" + oszlop
                faktoriálisR(sor) / (faktoriálisR(oszlop) * faktoriálisR(sor - oszlop));
            ujSorDiv.appendChild(ujElemDiv);
            //új div létrehozása az új elemnek
            //új elem div osztálylistájához add hozzá az "elem"-et
            //teszteléshet .innerHTML = `${sor}:${oszlop}`
            //legyen az innerHTML a megfelelő szám
            //új elem div-et vedd fel a sor elemei közé
        }
    }
}



var faktoriálisR = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktoriálisR(n - 1)
    }
}