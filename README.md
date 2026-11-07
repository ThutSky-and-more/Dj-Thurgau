# DJ Thurgau

Statische Website für einen Open-Format-DJ. Im Download liegen index.html, galerie.html, kontakt.html und assets direkt auf der obersten Ebene. Im Sites-Quellprojekt stehen dieselben Website-Dateien im Ordner dist.

## Lokal anschauen

Das ZIP in einen leeren Ordner entpacken und index.html im Browser öffnen. Die Navigation und die Galerie funktionieren lokal. Der Formularversand wird auf Netlify aktiv.

## Bestehendes Netlify-Projekt aktualisieren

1. Im bestehenden Netlify-Projekt unter **Forms → Form detection** prüfen, ob die Formularerkennung aktiv ist. Falls nötig, **Enable form detection** auswählen.
2. Unter **Deploys** den frisch entpackten Ordner hochladen, in dem du direkt index.html, kontakt.html und assets siehst. Bei Git-Import des Downloadpakets ist das Publish-Verzeichnis die Projektwurzel. Das Paket enthält dafür netlify.toml. Im Sites-Quellprojekt zeigt netlify.toml auf dist.
3. Nach dem Deploy sollte unter **Forms** das Formular **dj-booking** erscheinen. Beim Verarbeiten fügt Netlify dem Formular den versteckten Eintrag form-name mit dem Wert dj-booking hinzu. Der Quelltext der veröffentlichten Kontaktseite zeigt, ob dieser Schritt erfolgt ist.
4. Auf der Netlify-Adresse über **Booking** eine Testanfrage mit deiner E-Mail und einer kurzen Nachricht senden. Du solltest die Dankesseite sehen. Den Eingang findest du in **Forms → dj-booking**. Falls der Test fehlt, prüfe dort auch **Spam submissions**.
5. Für E-Mail-Hinweise auf neue Anfragen gibt es **Forms → Submission notifications**.

[Netlify-Anleitung zur Formularerkennung](https://docs.netlify.com/manage/forms/setup/)

## Weitere Galeriebilder einfügen

1. Lege deine Bilddatei in assets/media ab, etwa event-frauenfeld.webp.
2. Öffne galerie.html. Kopiere in der gallery-grid einen ganzen Block von <figure class="gallery-item"> bis </figure>.
3. Ersetze den Bildpfad bei href und src. Passe den Alt-Text, die Bildunterschrift und bei Bedarf width und height an. Das Label Stimmungsbild gehört zu den generierten Bildern und lässt sich bei eigenen Fotos entfernen.
4. Speichere die Datei und stelle den Ordner erneut bereit. Das neue Bild erscheint im Raster und lässt sich wie die vorhandenen Bilder öffnen.

## Vor dem öffentlichen Start

- DJ Thurgau ist der gewählte Arbeitsname. Er steht im Kopf, im Fuss und in den Seitentiteln.
- Ergänze unter **Kontakt** in datenschutz.html die Identität und Kontaktdaten des verantwortlichen Betreibers sowie die Angaben zu deiner tatsächlichen Datenbearbeitung und Hosting-Konfiguration. [Informationen des EDÖB](https://www.edoeb.admin.ch/de/datenschutzerklaerungen-im-internet)
- Die als Stimmungsbilder gekennzeichneten Motive wurden für diese Website generiert.
- Die Schriften werden lokal geladen. Lizenz und Urheberhinweise zu Open Sans findest du in assets/fonts.
