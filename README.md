# Bühnenkompass Berlin

Ein Theater-Finder für Menschen, die noch nicht wissen, was ihnen gefällt. Neun Entweder-oder-Fragen ohne Fachbegriffe ergeben ein Geschmacksprofil. Daraus empfiehlt die Seite passende Berliner Bühnen und sortiert den Spielplan der nächsten Wochen nach Passung.

**Live:** https://stefanieschutta.github.io/buehnenkompass-/

## Funktionen

- Geschmackstest mit 9 Fragen, Profil mit 7 einstellbaren Achsen
- Empfehlungen aus 24 Berliner Häusern, plus ein bewusster Ausreißer außerhalb des Profils
- Spielplan mit Filtern nach Zeitraum und Sparte, sortiert nach Passung
- Tagebuch: Bewertungen gesehener Stücke verschieben das Profil
- Deutsch und Englisch, heller und dunkler Modus, WCAG 2.2 AA

## Daten

`spielplan.js` enthält eine Auswahl aus dem Ticketkalender von berlin.de und wird wöchentlich automatisch aktualisiert. Die Hausprofile sind redaktionelle Einschätzungen. Profil und Tagebuch werden nur im Browser gespeichert.

## Technik

Zwei statische Dateien (`index.html`, `spielplan.js`), Vanilla JS, kein Build-Schritt. Icons: Phosphor.

Ein persönliches Side Project von Stefanie Schutta.
