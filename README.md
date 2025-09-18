Hier ist ein Beispiel für ein README plus Bedienungsanleitung in Deutsch (für die Projektdatei `README.md`). Das ist ideal für das Github-Repository, aber auch als Info für jeden Nutzer.

```markdown
# Rowdys Cup 2026 – Scoreboard

***

Ein flexibles Scoreboard für Vereins-, Turnier- und Freizeitspiele mit Logo-Auswahl, Drag & Drop und Timer. Funktioniert auf PC, Tablet und Handy.

## Inhalt

1. [Überblick](#überblick)
2. [Installation](#installation)
3. [Bedienungsanleitung](#bedienungsanleitung)
4. [Funktionen](#funktionen)
5. [FAQs](#faqs)
6. [Screenshot](#screenshot)

---

## Überblick

Mit dem Scoreboard können Spielergebnisse von zwei Teams angezeigt, Logos einfach ausgewählt und das Spiel per Timer verwaltet werden. Es eignet sich für Fußball, Basketball, Volleyball und andere Sportarten.

---

## Installation

1. Lade alle Dateien in einen Ordner:
   - `index.html`
   - `style.css`
   - `script.js`
   - Ordner `img` mit Bilddateien z.B. `img/img_1.jpg` bis `img/img_16.jpg`
2. Öffne die Datei `index.html` im Browser.

Keine Installation oder Backend nötig – nur ein moderner Browser!

---

## Bedienungsanleitung

### Team-Logo auswählen

- **Sidebar:** Ziehe ein Team-Logo per Drag & Drop in das Scoreboard auf Heim oder Gast.
- **Dropdown:** Wähle ein Team aus der Liste unter dem jeweiligen Score, das Logo wird automatisch gesetzt.
- **Klickauswahl:** Klicke zuerst auf "Logo wählen" unter dem Heim- oder Gast-Score – dann klicke auf ein Logo in der Sidebar.

### Punktestand ändern

- **Klick:** Klick auf die Zahl im Scoreboard bei „Heim“ oder „Gast“:
  - Klick oben (+1), Klick unten (–1).
- **Tastatur:** Nutze die Zahlentasten:
  - `1` Heim +1, `4` Heim –1, `2` Gast +1, `5` Gast –1.

### Timer

- Wähle die gewünschte Zeit im Dropdown aus.
- Starte den Timer mit **Start**.
- Pausiere mit **Pause**, setzte zurück mit **Reset**.
- Bei Ablauf blinkt der Hintergrund rot und "Spielende" erscheint.

### Sidebar aus-/einklappen

- Klicke auf das **☰**-Symbol oben links, um die Sidebar einzublenden/auszublenden.

---

## Funktionen

- Drag & Drop von Teamlogos
- Logo-Auswahl per Dropdown oder Klick
- Animierte Punktestand-Anzeige, inkl. Tasteneingabe
- Spiel-Timer und Fortschrittsanzeige
- Responsive Design für Smartphone, Tablet und PC

---

## FAQs

**Wie viele Teams kann ich anzeigen?**  
Bis zu 16 (angepasst mit neuen Bildern im img-Ordner).

**Welche Image-Formate sind erlaubt?**  
`JPG` – PNG funktioniert auch, wenn transparent gewünscht.

**Geht das auch offline?**  
Ja, einfach Ordner lokal öffnen!

---

## Screenshot

*(Hier Bild einfügen, z.B. mit Markdown:)*  
`![Rowdys Cup Scoreboard](img/screenshot.jpg)`

---

## Hinweise

- Drag & Drop benötigt ggf. Polyfill damit es zuverlässig auf Tablets und Smartphones läuft. Die Polyfill (`drag-drop-touch.min.js`) ist bereits eingebunden.
- Die Bildauswahl im Dropdown funktioniert nur, wenn die Werte exakt zu den Pfaden der Bilder passen (`img/img_2.jpg`).
- Für Änderungen am Layout passe die Styles in `style.css` an.

---

**Viel Erfolg beim Turnier und viel Spaß mit dem Scoreboard!**
```
Dieses README gibt eine Übersicht, Installationsinfo, Bedienung und Tipps für User.
