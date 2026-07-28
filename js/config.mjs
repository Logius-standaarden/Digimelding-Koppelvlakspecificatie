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
        "name" : "Edwin Wisse",
        "url" : "https://www.logius.nl"
      },
      { 
        "company" : "Logius",
        "name" : "Peter Haasnoot",
        "url" : "https://www.logius.nl"
      }
    ],
  github: "https://github.com/Logius-standaarden/Digimelding-Koppelvlakspecificatie",
  pubDomain: "digimelding",
  publishDate: "2021-02-19",
  publishVersion: "1.4.0",
  shortName: "koppelvlak",
  specStatus: "DEF",
  specType: "HR",
  subtitle: "Handreiking",
});
