# Rowdys Cup 2026 – Scoreboard Web App

## Overview

Eine für Fire TV Stick und Tablets optimierte, moderne, bildschirmfüllende Anzeige für Scores, Teams und Timer. Unterstützung für Touch und Tastatur, keine linke Sidebar – nur noch große Bedienelemente unten, ideal für 1920x1080 Displays.

## Features

- Zwei Teams mit großen Logos auswählbar (Dropdown).
- Score-Inkrement und -Dekrement per Klick (oben/unten im Scorefeld) und Tastatur (Fire TV Stick: 1/4 Heim +/-, 2/5 Gast +/-).
- Timer wählbar (8,10,12 min), Start/Pause/Reset—Blinken bei Ende.
- Alles fullscreen und automatisch responsive (Tablet/TV).
- Große Buttons für Fernbedienung/Touch-Bedienung.
- Minimalistische Bedienleiste am unteren Bildschirmrand (umschaltbar).

## Dateien

- **index.html:** Grundgerüst, lädt `style.css` und `script.js`.
- **style.css:** Optimale Styles für 1080p, große Abstände, responsive, Kontrast.
- **script.js:** Logik für Scores, Timer, Buttonsteuerung (inkrementieren/dekrementieren), Dropdown-Auswahl.
- **img/**: Logo-Bilder der Teams (Benenne die Bilder von img_1.jpg ... img_16.jpg, wie in den Dropdowns, kein Subfolder nötig).
- **README.md:** Diese Anleitung.

## Bedienungshinweise

- **Team wählen:** Dropdown unten, Teamnamen wählen, wird direkt angezeigt.
- **Punkte:** Score-Balken oben/unten anklicken für +/- (Klick- oder Touch-Unterstützung); FireTV-Remote: Tasten 1/4 für Heim +/-, 2/5 für Gast +/-
- **Timer:** Zeit-Slot wählen, Start/Pause/Reset, bei Ablauf blinkt der Screen rot.
- **Bedienleiste ein-/ausklappen:** Button „☰ Bedienleiste“ unten links — praktisch, um mehr Platz für den Score zu bekommen.

## Anpassung

- Du kannst in der `style.css` die Farbwerte (Theme) oder Abstände Pixel-genau anpassen.
- In der `script.js` weitere Hotkeys oder Features ergänzen.
- Logos/Bilder auf 400x210 Pixel bringen, damit die Anzeige immer gut aussieht.

## Browser-Kompatibilität

- Getestet mit Chrome, Firefox und Silk-Browser auf Fire TV Stick.
- Keine Abhängigkeit von Spezial-Bibliotheken; funktioniert out-of-the-box als einfache statische Webseite, auch ohne Server.

---

Viel Spaß beim nächsten Turnier!