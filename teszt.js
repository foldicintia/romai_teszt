import { romaiSzamokkaAlakit } from "./main.js";

export function teszteles() {
    console.log("Teszteljük a szamToRoman függvényt:");

    // Teszt 1: 1 -> I
    console.log("Teszt 1:", szamToRoman(1) === 'I' ? "Sikeres" : "Sikertelen");

    // Teszt 2: 5 -> V
    console.log("Teszt 2:", szamToRoman(5) === 'V' ? "Sikeres" : "Sikertelen");

    // Teszt 3: 9 -> IX
    console.log("Teszt 3:", szamToRoman(9) === 'IX' ? "Sikeres" : "Sikertelen");

    // Teszt 4: 12 -> XII
    console.log("Teszt 4:", szamToRoman(12) === 'XII' ? "Sikeres" : "Sikertelen");

    // Teszt 5: 29 -> XXIX
    console.log("Teszt 5:", szamToRoman(29) === 'XXIX' ? "Sikeres" : "Sikertelen");

    // Teszt 6: 39 -> XXXIX
    console.log("Teszt 6:", szamToRoman(39) === 'XXXIX' ? "Sikeres" : "Sikertelen");

}
teszteles();