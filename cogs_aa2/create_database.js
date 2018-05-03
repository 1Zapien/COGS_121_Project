// Node.js + Express server backend for petsapp
// v2 - use SQLite (https://www.sqlite.org/index.html) as a database
//
// COGS121 by Philip Guo
// https://github.com/pgbovine/COGS121

// run this once to create the initial database as the pets.db file
//   node create_database.js

// to clear the database, simply delete the pets.db file:
//   rm pets.db

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('regions_detail.db');

// run each database statement *serially* one after another
// (if you don't do this, then all statements will run in parallel,
//  which we don't want)
db.serialize(() => {
  // create a new database table:
  db. run("CREATE TABLE regions_to_details (region TEXT, inst TEXT, detail TEXT )");
  // insert 4 rows of data for regions:
  db.run("INSERT INTO regions_to_details VALUES ('Cerebral Cortex', '“Cortex” = “Bark”, Outermost structure, covering most of brain, Evolutionarily recent, esp expanded in humans. Bulges: Gyri (singular: Gyrus), Folds: Sulci (singular: Sulcus) or Fissures (if very deep). Central Sulcus divides Parietal from Frontal Lobe, Lateral Sulcus divides Temporal from Frontal Lobe', '(ventral posterior): Visual Processing Includes primary projection area (V1 or Striate) from LGN of Thalamus & some higher visual areas. Divided into separate pathways for Color, Detail, Motion, Depth, etc that move into other lobes')");
  db.run("INSERT INTO regions_to_details VALUES ('Hindbrain', 'Ancient, posterior part of brain consisting of Medulla, Pons and Cerebellum', '(Latin for “Bridge) Relays info between Cortex & Cerebellum and between Brain & Spinal Cord. Pons (& Medulla) also include Cranial Nerves V through XII that carry sensory/motor info to/from the head. Plus they include Reticular Formation (involved in Arousal) and Raphe System (involved in Sleep)')");
  db.run("INSERT INTO regions_to_details VALUES ('Midbrain', 'Central structures above Hindbrain; Proportionally larger & more important in simpler brains', 'Part of sensory pathways to brain. (Latin for Roof, as in Plate Tectonics in geology). Consists of Superior Colliculus (Vision – including for Blindsight) and Inferior Colliculus (Audition)')");
  db.run("INSERT INTO regions_to_details VALUES ('Forebrain', 'Most anterior portion of brain. Two divisions: Diencephalon (part of brain stem) and Telencephalon (the rest)', 'Telencephalon and Diencephalon')");


  console.log('successfully created the users_to_pets table in regions_detail.db');

  // print them out to confirm their contents:
  db.each("SELECT region, inst, detail FROM regions_to_details", (err, row) => {
      console.log(row.region + ": " + row.inst + ' - ' + row.detail);
  });
});

db.close();