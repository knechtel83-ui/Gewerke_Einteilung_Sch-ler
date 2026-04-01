/*************************************************************
 * logic.js – BLOCK 6 – GRUNDSTRUKTUR (KEINE Logik!)
 *
 * Dieses Modul stellt die Struktur bereit, damit später
 * die Verteilungslogik eingebaut werden kann.
 *************************************************************/

/*
    DATENMODELLE
    ============

    Diese Objekte enthalten später die Inhalte aus Excel
    und werden von render.js ausgegeben.
*/

let schueler = [];            // Schüler mit gültigen Prioritäten
let schueler_ohne_prio = [];  // Schüler, die keine Priorität gesetzt haben

let kapazitaeten = {};        // Kapazitäten der Gewerke
let aktivierungen = {         // Aktivierungen pro Durchgang
    1: {},
    2: {},
    3: {},
    4: {}
};

/*
    SCHNITTSTELLEN FÜR ANDERE MODULE
    =================================
    Diese Funktionsgerüste werden VON ui.js und xlsx.js aufgerufen.
    Sie enthalten noch KEINE Logik.
*/

// Wird von xlsx.js aufgerufen, wenn Excel geladen wurde
function verarbeiteExcelDaten(sheetData) {
    // Platzhalter – hier werden später Daten verarbeitet
    console.log("Excel-Daten empfangen (Platzhalter).", sheetData);
}

// Wird von ui.js aufgerufen: Kapazitäten übernehmen
function setKapazitaeten(map) {
    kapazitaeten = map;
}

// Wird von ui.js aufgerufen: Toggle-Zustände übernehmen
function setAktivierungen(durchgang, map) {
    aktivierungen[durchgang] = map;
}

// Diese Funktion wird später die komplette Verteilung starten
function starteVerteilung() {
    console.log("Verteilung wird gestartet… (Platzhalter)");
}

/*
    EXPORTS / GLOBALE EINBINDUNGEN
    ===============================
    Diese Befehle stellen sicher, dass ui.js & render.js
    später auf die Daten zugreifen können.
*/

window.verarbeiteExcelDaten = verarbeiteExcelDaten;
window.starteVerteilung = starteVerteilung;
window.setKapazitaeten = setKapazitaeten;
window.setAktivierungen = setAktivierungen;
