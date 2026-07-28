import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [ { 
        "company" : "Logius",
        "name" : "Peter Haasnoot",
        "url" : "https://www.logius.nl"
      } ],
  editors: [
      { 
        "company" : "Logius",
        "name" : "Peter Haasnoot",
        "url" : "https://www.logius.nl"
      }
    ],
  github: "https://github.com/Logius-standaarden/Digimelding-Koppelvlakspecificatie",
  pubDomain: "digimelding",
  shortName: "koppelvlak",
  specType: "HR",
  specStatus: "DEF",
  previousPublishVersion: "1.4.0",
  publishVersion: "1.4.1",
  publishDate: "2026-07-28",
});
