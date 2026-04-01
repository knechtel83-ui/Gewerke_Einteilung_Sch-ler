/*************************************************************
 * render.js – BLOCK 7 – Struktur für Ergebnis-Anzeige
 *
 * Dieses Modul beschreibt die komplette Darstellung der Ergebnisse
 * nach der Verteilung:
 *
 *  ✓ Durchgang 1
 *  ✓ Durchgang 2
 *  ✓ Durchgang 3
 *  ✓ Durchgang 4
 *  ✓ Geschlossene Gewerke (0 SuS)
 *  ✓ Schüler ohne Priorität
 *
 *  KEINE ausführbare Berechnung – nur Struktur + Beschreibung.
 *************************************************************/

/*
    FUNKTION: renderDurchgang(dgNummer, belegung)

    Zweck:
      - Erstellt eine HTML-Tabelle für den angegebenen Durchgang.
      - Gewerke werden sortiert ausgegeben.
      - Jede Zeile enthält:
          Gewerkname | Anzahl Schüler | Liste der Schüler

    Sichtbarkeit:
      - Gewerke mit 0 Schülern werden trotzdem angezeigt
        (Option B: "Gewerke <6 sichtbar als 0 SuS").

    Schritte (Pseudocode):
      1. DOM-Element für DG suchen: #durchgang{dgNummer}
      2. Tabelle erzeugen:
           <table>
             <tr><th>Gewerk</th><th>Anzahl</th><th>Schüler</th></tr>
      3. Für jedes Gewerk im Objekt 'belegung':
           - gewName = Schlüssel
           - liste = belegung[gewName]
           - anzahl = liste.length
      4. Tabellenzeile erzeugen
      5. Schülernamen in kommaseparierter Darstellung anzeigen
      6. Tabelle in das DOM-Element einfügen
*/


/*
    FUNKTION: renderGeschlosseneGewerke(liste)

