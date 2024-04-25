
function romaiSzamokkaAlakit(szam) {

    const romaiSzamok = { 
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let romai = '';
   // let maradek = szam;

    for (let key in romaiSzamok) {
        // console.log(key)
        while (szam >= romaiSzamok[key]) {
            romai += key;
            romai -= romaiSzamok[key];
            console.log(szam);
    }}
    return romai;    
}


romaiSzamokkaAlakit(3);