/*************************************************************
 * xlsx.js – Excel laden und Daten in sheetData umwandeln
 * Funktioniert mit: <script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>
 *************************************************************/

/**
 * Liest die Excel-Datei ein und übergibt sheetData an die Logik
 */
function loadExcel() {
    const input = document.getElementById("excelFile");
    const status = document.getElementById("excelStatus");

    if (!input || !input.files || input.files.length === 0) {
        status.textContent = "Bitte zuerst eine Excel-Datei auswählen.";
        status.style.color = "red";
        return;
    }

    const file = input.files[0];
    status.textContent = "Excel wird geladen...";
    status.style.color = "blue";

    const reader = new FileReader();

    reader.onload = function (e) {
        try {
            // Excel-Daten auslesen
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Erstes Tabellenblatt verwenden
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            // JSON / Array erzeugen
            const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            // an deine Logik weitergeben (Modul B)
            if (typeof verarbeiteExcelDaten === "function") {
                verarbeiteExcelDaten(sheetData);

                status.textContent = "Excel erfolgreich geladen.";
                status.style.color = "green";
            } else {
                status.textContent = "Fehler: Logik-Modul nicht gefunden.";
                status.style.color = "red";
            }

        } catch (err) {
            console.error(err);
            status.textContent = "Fehler beim Lesen der Excel-Datei.";
            status.style.color = "red";
        }
    };

    reader.onerror = function () {
        status.textContent = "Fehler beim Datei-Lesen.";
        status.style.color = "red";
    };

    reader.readAsArrayBuffer(file);
}
