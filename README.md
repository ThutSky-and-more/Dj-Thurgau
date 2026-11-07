# DJ Thurgau

Statische Website für einen Open-Format-DJ. Die Seiten in dist sind direkt als HTML bearbeitbar. CSS, JavaScript, Bilder, Videos und Schriften liegen in dist/assets.

## Lokal anschauen

1. Das ZIP entpacken.
2. dist/index.html im Browser öffnen. Die Navigation und die Clips funktionieren lokal. Das Booking-Formular wechselt auf dem veröffentlichten Netlify-Deploy in den Sendemodus.

## Auf Netlify veröffentlichen

1. Den entpackten Ordner dist bei [Netlify Drop](https://app.netlify.com/drop) hochladen. Bei einem Git-Import das ganze Projekt verwenden. Die Datei netlify.toml setzt dist als Publish-Verzeichnis. Das Build-Kommando bleibt leer.
2. Im Netlify-Projekt unter **Forms** die Formularerkennung (**Enable form detection**) aktivieren. Danach denselben Ordner noch einmal bereitstellen, damit Netlify das Formular **dj-booking** erkennt.
3. Auf der Netlify-Adresse unter **Booking** eine Testanfrage senden. Die Dankesseite sollte erscheinen. Unter **Forms → dj-booking** sollte der Eingang sichtbar sein.
4. Falls du eine Benachrichtigung pro Anfrage möchtest, richte in Netlify unter **Forms → Submission notifications** eine Benachrichtigung an deine Booking-Adresse ein.

[Netlify-Anleitung zur Formularerkennung](https://docs.netlify.com/manage/forms/setup/)

## Vor dem öffentlichen Start

- DJ Thurgau ist der gewählte Arbeitsname. Er steht im Kopf, im Fuss und in den Seitentiteln. Falls du einen DJ-Namen einführen willst, kannst du diese Stellen in den HTML-Dateien anpassen.
- Ergänze unter **Kontakt** in dist/datenschutz.html die Identität und Kontaktdaten des verantwortlichen Betreibers sowie die Details, die auf deine tatsächliche Datenbearbeitung und Hosting-Konfiguration zutreffen. [Informationen des EDÖB](https://www.edoeb.admin.ch/de/datenschutzerklaerungen-im-internet)
- Die orange beleuchteten Stimmungsbilder wurden für diese Website generiert. Die drei Clips und ihre Vorschaubilder stammen aus deinen Aufnahmen. In den Web-Clips wurde die Audiospur entfernt.
- Die Schriften werden lokal geladen. Lizenz und Urheberhinweise zu Open Sans findest du in dist/assets/fonts.
