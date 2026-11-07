# DJ Thurgau

Statische Website für einen Open-Format-DJ. Die Website-Dateien liegen im Ordner dist. Öffne dist/index.html, um die Website lokal anzuschauen.

## GitHub und Netlify

Das Netlify-Projekt djthurgau veröffentlicht Änderungen am Branch main aus dem Ordner dist. Die Startdatei liegt im Repo unter dist/index.html. Die Netlify-Konfiguration steht in netlify.toml.

1. Aktiviere im Netlify-Projekt unter **Forms** die Formularerkennung, falls sie noch ausgeschaltet ist. Starte danach einen neuen Production Deploy.
2. Prüfe in Netlify unter **Deploys**, ob die aktuelle Version **Published** ist. Im **Deploy File Explorer** muss index.html direkt oben liegen.
3. Unter **Forms** sollte dj-booking erscheinen. Netlify fügt der veröffentlichten Kontaktseite ein verstecktes Feld form-name mit diesem Wert hinzu. Sende eine Testanfrage und prüfe den Eingang sowie die Dankesseite. Bei einem fehlenden Eingang kannst du auch **Spam submissions** prüfen.

[Netlify-Anleitung zur Formularerkennung](https://docs.netlify.com/manage/forms/setup/)

## Google Search Console

Die Sitemap und die kanonischen URLs verwenden https://djthurgau.netlify.app/. Sobald die Startseite öffentlich erreichbar ist, kannst du sie in der [Google Search Console](https://search.google.com/search-console/) als **URL-Präfix** hinzufügen.

- Für die Bestätigung per HTML-Datei lege Googles Verifizierungsdatei direkt in dist neben index.html und veröffentliche erneut. Bestätige dann die Property in der Search Console.
- Reiche unter **Sitemaps** die Datei sitemap.xml ein. Über **URL-Prüfung** kannst du die Indexierung der Startseite beantragen.

[Google-Anleitung für Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

## Weitere Galeriebilder einfügen

1. Lege deine Bilddatei in dist/assets/media ab, etwa event-frauenfeld.webp.
2. Öffne dist/galerie.html. Kopiere in der gallery-grid einen ganzen Block von <figure class="gallery-item"> bis </figure>.
3. Ersetze den Bildpfad bei href und src. Passe den Alt-Text, die Bildunterschrift und bei Bedarf width und height an. Das Label Stimmungsbild gehört zu den generierten Bildern und lässt sich bei eigenen Fotos entfernen.
4. Speichere die Datei und lade die geänderten Dateien ins GitHub-Repo. Das neue Bild erscheint nach dem Deploy im Raster und lässt sich wie die vorhandenen Bilder öffnen.

## Vor dem öffentlichen Start

- DJ Thurgau ist der gewählte Arbeitsname. Er steht im Kopf, im Fuss und in den Seitentiteln.
- Ergänze unter **Kontakt** in dist/datenschutz.html die Identität und Kontaktdaten des verantwortlichen Betreibers sowie die Angaben zu deiner tatsächlichen Datenbearbeitung und Hosting-Konfiguration. [Informationen des EDÖB](https://www.edoeb.admin.ch/de/datenschutzerklaerungen-im-internet)
- Die als Stimmungsbilder gekennzeichneten Motive wurden für diese Website generiert.
- Die Schriften werden lokal geladen. Lizenz und Urheberhinweise zu Open Sans findest du in dist/assets/fonts.
