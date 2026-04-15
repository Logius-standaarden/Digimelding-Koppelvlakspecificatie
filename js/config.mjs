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
  nl_markdownTableClass: "simple",
  previousPublishDate: "2021-01-31",
  previousPublishVersion: "1.3",
  pubDomain: "digimelding",
  publishDate: "2021-02-19",
  publishVersion: "1.4",
  shortName: "koppelvlak",
  specStatus: "WV",
  specType: "HR",
  subtitle: "Handreiking",
});
