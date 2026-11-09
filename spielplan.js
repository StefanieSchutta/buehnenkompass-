/* Bühnenkompass – Spielplan-Daten
   Wird wöchentlich neu erzeugt. Nur diese Datei ändern, nicht index.html.
   Felder je Vorstellung:
     h    = Haus-ID (muss in CONFIG.houses in index.html existieren)
     t    = Titel (Originaltitel, nicht übersetzen)
     next = nächster Termin, ISO ohne Zeitzone (Berliner Ortszeit), z. B. "2026-11-13T19:30"
     more = Anzahl weiterer Termine laut berlin.de
     typ  = schauspiel | oper | tanz | musical | show | kabarett | performance | gespraech | figuren
     d    = Kurzbeschreibung Deutsch, eigene Worte, max. ca. 15 Wörter ("" wenn keine)
     e    = dieselbe Kurzbeschreibung auf Englisch ("" wenn keine)
     url  = Termin-/Ticketseite bei berlin.de
   quellen = Kalenderseiten bei berlin.de, aus denen gelesen wird (für die Aktualisierung)
   ohneDaten = Häuser, für die berlin.de aktuell keine Termine liefert */
window.SPIELPLAN = {
  stand: '2026-11-09',
  quelle: 'Ticketkalender berlin.de',
  quellen: {
    schaubuehne:  ['https://www.berlin.de/tickets/suche/orte/schaubuehne-am-lehniner-platz-a35606e8-b512-4462-9886-b5bf82117f77/'],
    volksbuehne:  ['https://www.berlin.de/tickets/suche/orte/volksbuehne-am-rosa-luxemburg-platz-grosses-haus-72611194-da66-491e-87fd-6cc05b65f397/'],
    dt:           ['https://www.berlin.de/en/tickets/search/venues/deutsches-theater-berlin-saal-b81dd0eb-2c48-4ac1-bc31-edd048369fb7/'],
    gorki:        ['https://berlin.de/en/tickets/search/venues/maxim-gorki-theater-c0ca8967-f317-42fd-bb9f-f0d85c5fca1f'],
    be:           ['https://www.berlin.de/en/tickets/search/venues/berliner-ensemble-45400b0f-4798-429e-8d35-00a20b06530e/'],
    hau:          ['https://www.berlin.de/tickets/suche/orte/hau-hebbel-am-ufer-hau1-75d04e26-3484-4ab6-b999-2a28b50760a9/',
                   'https://www.berlin.de/tickets/suche/orte/hebbel-am-ufer-hau2-831e3dcd-68e5-439f-b5dc-bfc199b534dc/'],
    sophiensaele: ['https://www.berlin.de/tickets/suche/orte/sophiensaele-9c545e13-a649-437e-a829-e57778d2ba9a/',
                   'https://www.berlin.de/en/tickets/search/venues/sophiensaele-hochzeitssaal-106458ab-0420-463b-9e07-2deb11f34ba4/'],
    komische:     ['https://www.berlin.de/tickets/suche/orte/komische-oper-berlin-schillertheater-grosser-saal-1a1d8774-457f-406e-a760-bd9427fb75c6/'],
    staatsoper:   ['https://www.berlin.de/en/tickets/search/venues/staatsoper-unter-den-linden-e7539a02-0c3a-495a-a1c2-67d21a9df9e3/'],
    dob:          ['https://www.berlin.de/tickets/suche/orte/deutsche-oper-berlin-e616b664-7c54-40c0-b12b-d57288f75607/'],
    palast:       ['https://www.berlin.de/tickets/suche/orte/friedrichstadt-palast-f53a0499-08d9-4b2f-a3fd-062f00b62218/'],
    wintergarten: ['https://www.berlin.de/tickets/suche/orte/wintergarten-variet-13c450b0-37f1-4ea5-9e90-a92fdbc38049/'],
    bjv:          ['https://www.berlin.de/en/tickets/search/venues/bar-jeder-vernunft-1fd39939-34a5-40c1-847d-39506eac57b8/'],
    wuehlmaeuse:  ['https://www.berlin.de/en/tickets/search/venues/die-wuehlmaeuse-d0c1cecd-0f40-4a95-87c4-b8408df8d8fc/'],
    bka:          ['https://www.berlin.de/en/tickets/search/venues/bka-theater-08fedf05-a0b6-4fc8-815c-deecda48981e/'],
    nko:          ['https://www.berlin.de/en/tickets/search/venues/neukoellner-oper-1fa5e421-9ca3-4b86-8784-a9a422c898d0/'],
    schaubude:    ['https://www.berlin.de/en/tickets/search/venues/schaubude-berlin-fcce6f8c-a526-4b09-87d1-3497be66e54f/'],
    tdw:          ['https://www.berlin.de/en/tickets/search/venues/theater-des-westens-e83a20b7-1417-4598-b3f6-d3563b308ea2/']
  },
  ohneDaten: ['gorki', 'naunyn', 'radialsystem', 'chamaeleon', 'renaissance', 'etb'],
  events: [
    {h:'schaubuehne', t:'Ex', next:'2026-11-08T20:00', more:2, typ:'schauspiel', d:'Ein spät heimkehrender Architekt und seine überlastete Frau, eine Ärztin, geraten aneinander.', e:'An architect who comes home late and his overworked wife, a doctor, clash.', url:'https://www.berlin.de/tickets/theater/ex-3697e313-b5e8-4599-8304-b17f1e89ef26/'},
    {h:'schaubuehne', t:'Stereophonic', next:'2026-11-13T19:30', more:8, typ:'schauspiel', d:'Eine Band arbeitet in einem kalifornischen Studio der 1970er an ihrem Album.', e:'A band works on its album in a 1970s California studio.', url:'https://www.berlin.de/tickets/theater/stereophonic-3a648f29-ea45-4d06-b51f-fa972e429d97/'},
    {h:'schaubuehne', t:'Streit ums Politische: Die gekränkte Gesellschaft', next:'2026-11-20T19:30', more:0, typ:'gespraech', d:'Gesprächsabend darüber, warum sich Gruppen gesellschaftlich missachtet fühlen.', e:'Talk on why groups feel disregarded by society.', url:'https://www.berlin.de/tickets/theater/streit-ums-politische-die-gekraenkte-gesellschaft-48e9b73a-929f-41a1-a060-2388db14d674/'},
    {h:'schaubuehne', t:'Die Seherin', next:'2026-11-24T20:30', more:2, typ:'schauspiel', d:'Ursina Lardi als Kriegsfotografin, die durch Krisengebiete reist.', e:'Ursina Lardi as a war photographer travelling through crisis zones.', url:'https://www.berlin.de/tickets/theater/die-seherin-239ac700-a378-42a1-ba5d-e81675121424/'},
    {h:'schaubuehne', t:'Im Herzen der Gewalt', next:'2026-12-18T20:00', more:2, typ:'schauspiel', d:'Eine nächtliche Begegnung zweier Fremder in Paris nach einem Weihnachtsessen.', e:'Two strangers meet in Paris one night after a Christmas dinner.', url:'https://www.berlin.de/tickets/theater/im-herzen-der-gewalt-14d2b3ed-4997-4ae5-a2c2-8f001f4a345c/'},

    {h:'volksbuehne', t:'Mononoke', next:'2026-11-03T19:30', more:2, typ:'performance', d:'Eine Vertriebsangestellte wird von einem japanischen Geist heimgesucht.', e:'A sales employee is haunted by a Japanese spirit.', url:'https://www.berlin.de/tickets/vermischtes/mononoke-d5c7e0d5-a62d-46a7-9926-91ded2b7179a/'},
    {h:'volksbuehne', t:'Der Teich', next:'2026-11-06T20:00', more:1, typ:'schauspiel', d:'Nach Robert Walser: Ein ungeliebter Junge täuscht seinen eigenen Tod vor.', e:'After Robert Walser: an unloved boy fakes his own death.', url:'https://www.berlin.de/tickets/vermischtes/der-teich-ee91acdb-1fd7-4442-8194-318a44b43899/'},
    {h:'volksbuehne', t:'House of Hopes', next:'2026-11-09T20:30', more:0, typ:'performance', d:'Ostberliner Theaterleute treffen sich im Oktober 1989 im Foyer der Volksbühne.', e:'East Berlin theatre people gather in the Volksbühne foyer in October 1989.', url:'https://www.berlin.de/tickets/vermischtes/house-of-hopes-f2a95b10-853d-4fec-848d-31f8cab46a62/'},
    {h:'volksbuehne', t:'ja nichts ist ok', next:'2026-11-15T15:00', more:0, typ:'schauspiel', d:'Ein Telefonat, in dem jemand zu Arzt und Krankenkasse gedrängt wird.', e:'A phone call in which someone is pushed to see a doctor and call their insurer.', url:'https://www.berlin.de/tickets/vermischtes/ja-nichts-ist-ok-5ceb4e9f-e9cb-487b-8014-f56ee926377b/'},
    {h:'volksbuehne', t:'A Year without Summer', next:'2026-11-28T19:30', more:1, typ:'tanz', d:'Abend in Erinnerung an die Volksbühnen-Tänzerin Beatrice Cordua.', e:'An evening in memory of Volksbühne dancer Beatrice Cordua.', url:'https://www.berlin.de/tickets/vermischtes/a-year-without-summer-e5e032dc-dc5f-4545-9177-3c7c345e1179/'},

    {h:'dt', t:'Für Narges Mohammadi', next:'2026-11-09T19:30', more:0, typ:'gespraech', d:'', e:'', url:'https://www.berlin.de/en/tickets/miscellaneous/fuer-narges-mohammadi-12de2eb8-f199-48da-b6c9-6d286ade0e8d/'},
    {h:'dt', t:'Der Fall McNeal', next:'2026-11-11T20:00', more:0, typ:'schauspiel', d:'Was bedeutet es für die Kunst, wenn KI Bestseller schreiben kann?', e:'What does it mean for art when AI can write bestsellers?', url:'https://www.berlin.de/en/tickets/theatre/der-fall-mcneal-mcneal-57606a2b-a53f-4978-ac5b-ab9c95d4696a/'},
    {h:'dt', t:'DT Kontext: Literarische Spielzeit', next:'2026-11-13T20:00', more:0, typ:'gespraech', d:'', e:'', url:'https://www.berlin.de/en/tickets/miscellaneous/dt-kontext-deutsches-theater-berlin-4388a142-ca3b-412a-94c9-145920f26440/'},
    {h:'dt', t:'Deutscher Herbst', next:'2026-11-14T19:00', more:1, typ:'schauspiel', d:'Christopher Rüping: Eine Tochter begegnet ihrem Vater, der vergessen hat, wer er ist.', e:'Christopher Rüping: a daughter meets her father, who has forgotten who he is.', url:'https://www.berlin.de/en/tickets/theatre/deutscher-herbst-1ad1f1fd-c5d4-40a0-9dd9-435ec6f18ee4/'},

    {h:'be', t:'Daniel Kehlmann: Afrika – Buchpräsentation', next:'2026-11-15T15:00', more:0, typ:'gespraech', d:'Vorstellung des neuen Romans über Berlin im Winter 1884/85 und Kolonialpolitik.', e:'Presentation of the new novel about Berlin in the winter of 1884/85 and colonial politics.', url:'https://www.berlin.de/en/tickets/literature/daniel-kehlmann-775b2fa6-247a-4e73-8e84-b13d4842bc39/'},
    {h:'be', t:'Benjamin von Stuckrad-Barre: Udo Fröhliche', next:'2026-12-04T20:00', more:0, typ:'gespraech', d:'Literarischer Abend rund um Udo Lindenberg und dessen 80. Geburtstag.', e:'Literary evening around Udo Lindenberg and his 80th birthday.', url:'https://www.berlin.de/en/tickets/literature/benjamin-von-stuckrad-barre-6651cc45-e40d-4f40-843f-7ee1fb728b59/'},

    {h:'hau', t:'EXXY', next:'2026-11-11T20:00', more:1, typ:'tanz', d:'Tanzstück über Hochstapler-Gefühle und brüchiges Selbstwertgefühl.', e:'Dance piece about impostor feelings and fragile self-worth.', url:'https://www.berlin.de/tickets/tanz/exxy-067d7c9b-18b8-4679-a497-f4d774c48c0d/'},
    {h:'hau', t:'Justices', next:'2026-11-12T20:30', more:1, typ:'performance', d:'Rechte behinderter Menschen vor Gericht, mit Humor und Gesang frei nach Dante.', e:'Disability rights in court, with humour and song, loosely after Dante.', url:'https://www.berlin.de/tickets/theater/justices-5f4013a8-e5a1-48ec-b258-bbe4fe84f6da/'},
    {h:'hau', t:'Monga', next:'2026-11-16T19:00', more:1, typ:'performance', d:'Jéssica Teixeira nähert sich dem Leben von Julia Pastrana.', e:'Jéssica Teixeira approaches the life of Julia Pastrana.', url:'https://www.berlin.de/tickets/vermischtes/monga-da05d390-bb37-4a5b-92ee-f0c876a98c6c/'},
    {h:'hau', t:'Amoroso', next:'2026-11-19T19:00', more:0, typ:'performance', d:'Intime Performance über Liebe vom polnischen Teatr Klucz.', e:'Intimate performance about love by Poland’s Teatr Klucz.', url:'https://www.berlin.de/tickets/theater/amoroso-57b46843-8086-4d63-8e63-2b3e0d33c1b9/'},
    {h:'hau', t:'May Fall', next:'2026-11-21T19:00', more:0, typ:'tanz', d:'Choreografie von Aristide Rontini für Skånes Dansteater.', e:'Choreography by Aristide Rontini for Skånes Dansteater.', url:'https://www.berlin.de/tickets/tanz/may-fall-b3e49e9e-bf5c-4be5-a170-a3929f74a9bd/'},
    {h:'hau', t:'Dive into You', next:'2026-11-24T20:00', more:1, typ:'tanz', d:'Kat Válastur erkundet die Trümmer einer überholten Welt.', e:'Kat Válastur explores the ruins of an outdated world.', url:'https://www.berlin.de/tickets/tanz/dive-into-you-028a6613-0eb5-4da8-96b8-6038f3e4d242/'},
    {h:'hau', t:'Piece of Changes', next:'2026-11-28T19:00', more:3, typ:'tanz', d:'Elf Tänzer:innen zwischen kollektiver Ohnmacht und Widerstand.', e:'Eleven dancers between collective powerlessness and resistance.', url:'https://www.berlin.de/tickets/tanz/piece-of-changes-4fc96f3e-fe7a-4769-bd67-b4cc72a9ffea/'},
    {h:'hau', t:'Fiddler! One Night Only', next:'2026-12-12T20:00', more:0, typ:'musical', d:'Neudeutung eines Musicals, bei der die Musik im Zentrum steht.', e:'A musical reimagined with the music at its centre.', url:'https://www.berlin.de/tickets/vermischtes/fiddler-one-night-only-94ceceed-75c9-4db1-9895-61cba57b52e8/'},
    {h:'hau', t:'Di/STRAUSS technique', next:'2026-12-22T17:00', more:1, typ:'performance', d:'Queerer Abend aus Walzerklängen, Operettenkitsch und Humor.', e:'A queer evening of waltzes, operetta kitsch and humour.', url:'https://www.berlin.de/tickets/vermischtes/di-strauss-technique-f991970b-a238-4c05-b9eb-c1c721b3627e/'},

    {h:'sophiensaele', t:'Elvan Tekin: This is (not) the end', next:'2026-11-12T21:00', more:3, typ:'tanz', d:'Tanz über kulturelles Gedächtnis, Zugehörigkeit und verkörperte Praktiken.', e:'Dance about cultural memory, belonging and embodied practices.', url:'https://www.berlin.de/en/tickets/dance/elvan-tekin-this-is-not-the-end-2185cc72-d8cd-4a58-a2bc-a97ab5c768ba/'},
    {h:'sophiensaele', t:'Die Brieffreundschaft II', next:'2026-11-26T21:00', more:3, typ:'schauspiel', d:'Fortsetzung eines Stücks über den Umgang mit Gewalttätern.', e:'Sequel to a play about how we deal with perpetrators of violence.', url:'https://www.berlin.de/en/tickets/miscellaneous/markus-markustheaterkollektiv-die-brieffreundschaft-ii-c8467582-0a61-40e3-851e-814de3ed923b/'},

    {h:'nko', t:'PÖBELARIEN', next:'2026-11-13T20:00', more:5, typ:'performance', d:'Ein Kollektiv nimmt den Opernkanon auseinander, mit Beats der Snake Boys.', e:'A collective takes the opera canon apart, with beats by the Snake Boys.', url:'https://www.berlin.de/en/tickets/theatre/poebelarien-743cfcf0-9334-4692-bc48-59a7828226b5/'},
    {h:'nko', t:'1984', next:'2026-11-26T20:00', more:14, typ:'musical', d:'Musiktheater nach Orwells Roman über totale Überwachung.', e:'Music theatre after Orwell’s novel about total surveillance.', url:'https://www.berlin.de/en/tickets/musical/1984-6db7df10-2f6b-4495-8fa8-1b0ec3a7ec78/'},

    {h:'komische', t:'Madama Butterfly', next:'2026-11-21T19:00', more:8, typ:'oper', d:'Puccini in der Regie von Andrea Breth, zuvor in Aix und Lyon gezeigt.', e:'Puccini directed by Andrea Breth, previously shown in Aix and Lyon.', url:'https://www.berlin.de/tickets/show/madama-butterfly-2da63228-2f5e-4a6f-8750-9b64f6074eb3/'},

    {h:'staatsoper', t:'La Calisto', next:'2026-11-13T19:00', more:3, typ:'oper', d:'Barockoper von Cavalli aus dem Venedig des 17. Jahrhunderts.', e:'Baroque opera by Cavalli from 17th-century Venice.', url:'https://www.berlin.de/en/tickets/opera/la-calisto-a034bfce-e739-4289-8f50-f3408e8c04f1/'},
    {h:'staatsoper', t:"L'incoronazione di Poppea", next:'2026-11-20T19:00', more:3, typ:'oper', d:'Monteverdis Oper von 1642 mit historisch belegten Figuren.', e:'Monteverdi’s 1642 opera with historical characters.', url:'https://www.berlin.de/en/tickets/opera/l-incoronazione-di-poppea-681e2672-be16-46c0-a7d8-cbc66c13a5c5/'},
    {h:'staatsoper', t:'Die Zauberflöte', next:'2026-11-29T18:00', more:11, typ:'oper', d:'Mozart in der langjährigen Repertoire-Inszenierung von August Everding.', e:'Mozart in August Everding’s long-running repertoire production.', url:'https://www.berlin.de/en/tickets/opera/die-zauberfloete-staatsoper-unter-den-linden-665f57b2-eca3-4670-921b-cb9a4c183e2b/'},
    {h:'staatsoper', t:'La Bohème', next:'2026-12-04T19:30', more:9, typ:'oper', d:'Puccini: mittellose Künstler in Paris zwischen Geldnot und Verschwendung.', e:'Puccini: penniless artists in Paris between hardship and extravagance.', url:'https://www.berlin.de/en/tickets/opera/la-bohme-cd27a197-9223-453b-8c05-af29135e3ed0/'},
    {h:'staatsballett', t:'2 Chapters Love', next:'2026-12-11T19:30', more:13, typ:'tanz', d:'Tanzabend in der Staatsoper über die Grenze zwischen normalem und bizarrem Verhalten.', e:'Dance evening at the Staatsoper on the line between normal and bizarre behaviour.', url:'https://www.berlin.de/en/tickets/dance/2-chapters-love-16ad8e05-b7b5-4354-aacd-777146c142b1/'},

    {h:'dob', t:'Pique Dame', next:'2026-11-01T16:00', more:3, typ:'oper', d:'Tschaikowsky: Hermann verfällt dem Spiel, Lisa sehnt sich nach Selbstbestimmung.', e:'Tchaikovsky: Hermann falls prey to gambling, Lisa longs for self-determination.', url:'https://www.berlin.de/tickets/oper/pique-dame-132e4f39-5a77-4499-8973-67a9c4f99cb7/'},
    {h:'staatsballett', t:'Der Nussknacker', next:'2026-11-27T19:30', more:16, typ:'tanz', d:'Christian Spucks Neufassung in der Deutschen Oper nach E.T.A. Hoffmann.', e:'Christian Spuck’s new version at the Deutsche Oper, after E.T.A. Hoffmann.', url:'https://www.berlin.de/tickets/tanz/der-nussknacker-511ab1d7-1969-4151-a78f-cc4392df9c1f/'},

    {h:'palast', t:'Blinded by Delight', next:'2026-11-07T15:30', more:51, typ:'show', d:'Die aktuelle Grand-Show-Revue des Hauses.', e:'The venue’s current grand show revue.', url:'https://www.berlin.de/tickets/show/blinded-by-delight-grand-show-im-friedrichstadt-palast-2e2de2a4-b281-4b4d-8b2b-7a2ebe59a12e/'},
    {h:'wintergarten', t:'Disco', next:'2026-11-06T20:00', more:108, typ:'show', d:'Varieté zur Disco-Ära mit Artistik, Musik und Tanz.', e:'Variety show on the disco era with acrobatics, music and dance.', url:'https://www.berlin.de/tickets/show/disco-6e448648-dcbe-40e8-8a62-43741130a2f4/'},
    {h:'wintergarten', t:'Absolventengala', next:'2026-11-10T20:00', more:0, typ:'show', d:'Jubiläumsgala der Staatlichen Ballett- und Artistikschule Berlin.', e:'Anniversary gala of Berlin’s state ballet and acrobatics school.', url:'https://www.berlin.de/tickets/vermischtes/absolventengala-0d03bf9c-4bf3-45e5-aacb-22e7a8f45836/'},
    {h:'tdw', t:'Wir sind am Leben – Das Berlin Musical', next:'2026-11-08T14:30', more:285, typ:'musical', d:'Neues Musical von Peter Plate und Ulf Leo Sommer über Erinnern und Vergessen.', e:'New musical by Peter Plate and Ulf Leo Sommer about remembering and forgetting.', url:'https://www.berlin.de/en/tickets/musical/wir-sind-am-leben-the-berlin-musical-523f18be-a624-4c85-80fd-a084624d0540/'},

    {h:'bjv', t:'Carrington-Brown: So British', next:'2026-11-14T20:00', more:1, typ:'kabarett', d:'Musik-Comedy-Duo erzählt in neuer Show die eigene Geschichte.', e:'Musical comedy duo tells its own story in a new show.', url:'https://www.berlin.de/en/tickets/comedy/carrington-brown-so-british-a953f376-a318-4a58-8cb5-dcdf3e31591e/'},
    {h:'bjv', t:'Irmgard Knef: Noch da! 100 Jahr, blondes Haar', next:'2026-11-16T20:00', more:0, typ:'kabarett', d:'Neues Programm zum 100. Geburtstag der Kunstfigur Irmgard Knef.', e:'New show for the 100th birthday of the stage character Irmgard Knef.', url:'https://www.berlin.de/en/tickets/show/irmgard-knef-noch-da-100-jahr-blondes-haar-9c4da8c5-ab59-4a99-bce6-db708228f4f6/'},
    {h:'bjv', t:'Dominique Horwitz singt Brel', next:'2026-11-28T20:00', more:1, typ:'show', d:'Brel-Chansons in kleiner Besetzung, begleitet am Flügel.', e:'Brel chansons in a small line-up, accompanied on piano.', url:'https://www.berlin.de/en/tickets/show/dominique-horwitz-dominique-horwitz-singt-brel-6cff2928-a3e0-4218-ad39-5ba7263275ad/'},
    {h:'bjv', t:'Sheila Wolf: Unverschämt Charmant!', next:'2026-12-07T20:00', more:2, typ:'show', d:'Charleston, Chanson und Swing mit der Band Let\'s Misbehave.', e:'Charleston, chanson and swing with the band Let\'s Misbehave.', url:'https://www.berlin.de/en/tickets/show/sheila-wolf-praesentiert-unverschaemt-charmant-92a70105-c045-40ea-8274-bb5e701b9550/'},

    {h:'wuehlmaeuse', t:'Mundstuhl: Wir kommen!', next:'2026-11-26T20:00', more:3, typ:'kabarett', d:'Neues Comedy-Programm des Duos Mundstuhl.', e:'New comedy show by the duo Mundstuhl (in German).', url:'https://www.berlin.de/en/tickets/comedy/mundstuhl-wir-kommen-90ba119f-e8fe-4c1b-bf60-06ca5a000e15/'},
    {h:'wuehlmaeuse', t:'Alle Kassen, auch Privat', next:'2026-12-19T15:00', more:1, typ:'kabarett', d:'Solo-Comedy über einen gewöhnlichen Tag in einer Hausarztpraxis.', e:'Solo comedy about an ordinary day at a GP’s practice (in German).', url:'https://www.berlin.de/en/tickets/cabaret-show/alle-kassen-auch-privat-e94578a1-6590-4c2e-bec5-5020a642219b/'},
    {h:'wuehlmaeuse', t:'Cavewoman', next:'2026-12-20T20:00', more:5, typ:'kabarett', d:'Solo-Show, die mit männlichen Beziehungsmarotten abrechnet.', e:'Solo show taking on male relationship quirks (in German).', url:'https://www.berlin.de/en/tickets/comedy/cavewoman-praktische-tipps-zur-haltung-und-pflege-eines-beziehungstauglichen-partners-9a989957-a684-48e4-b1a1-41fdf6d85927/'},

    {h:'bka', t:'Ades Zabel Company: Wenn Ediths Glocken läuten', next:'2026-11-25T20:00', more:22, typ:'kabarett', d:'Weihnachtsshow mit Neuköllner Kunstfigur Edith Schröder und Ensemble.', e:'Christmas show with Neukölln stage character Edith Schröder and ensemble.', url:'https://www.berlin.de/en/tickets/miscellaneous/die-ades-zabel-company-wenn-ediths-glocken-laeuten-vol-23-05c61953-b2d3-45f1-8060-1362ae079108/'},
    {h:'bka', t:'C.Heiland: Der C.Hristmas Planner', next:'2026-12-08T20:00', more:0, typ:'kabarett', d:'Programm über Weihnachtsfeiern und Schrottwichteln.', e:'Show about Christmas parties and white-elephant gift swaps.', url:'https://www.berlin.de/en/tickets/concerts/c-heiland-der-c-hristmas-planner-072e25c3-9326-46a2-8c0f-0718be643805/'},
    {h:'bka', t:'Ludique', next:'2026-12-15T20:00', more:0, typ:'show', d:'Weihnachtsprogramm eines Künstler-Duos.', e:'Christmas programme by an artist duo.', url:'https://www.berlin.de/en/tickets/concerts/ludique-0af00dcf-0d08-480b-9563-d82533f3502d/'},

    {h:'schaubude', t:'Soft Squishy Things', next:'2026-11-12T20:00', more:4, typ:'figuren', d:'Eine im All gestrandete Astronautin macht Alltagsdinge zu ihren Gefährten.', e:'An astronaut stranded in space turns everyday objects into companions.', url:'https://www.berlin.de/en/tickets/theatre/soft-squishy-things-0f7110b7-52de-45e5-af11-135657d97e2d/'}
  ]
};
