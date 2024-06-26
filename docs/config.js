var respecConfig = {
//	preProcess: [dfn_index],
    logos: [
//      {
////      src: './images/eu-isa-programme.png',
//      src: "./images/eu-isa2-programme.jpg",
////      url: 'https://ec.europa.eu/isa',
//      url: "https://ec.europa.eu/isa2",
////      alt: "EU ISA Programme",
////      title: "EU ISA Programme",
//      alt: "EU ISA² Programme",
//      title: "EU ISA² Programme",
//      width: 150,
////      height: 42,
//      id: 'logo-eu-isa-programme',
//    }
    ],

//    includePermalinks: true,
    addSectionLinks: true,
    doJsonLd: true,
    noRecTrack: true,    
    subtitle: "An extension to DCAT-AP for multidisciplinary research data",
//    copyrightHolder: "European Union",
//    copyrightURL: "https://europa.eu/",
    copyrightStart: 2014,
//    publishDate: "2019-07-03",
/*
    alternateFormats: [{
      label: "PDF",
      uri: "",
    }, {
      label: "DOCX",
      uri: "",
    }],    
*/
    license: "cc-by",
    specStatus: "unofficial",
    shortName: "dcat-ap-jrc",
    canonicalURI: "https://ec-jrc.github.io/dcat-ap-jrc/",
//    prevRecURI:           "",
//    previousPublishDate:  "2016-08-02",
//    previousMaturity:     "final",
    previousURI:   "https://ec-jrc.github.io/dcat-ap-jrc/1.0/",
    latestVersion: "https://ec-jrc.github.io/dcat-ap-jrc/",
    edDraftURI:    "https://ec-jrc.github.io/dcat-ap-jrc/",
    issueBase:     "https://github.com/ec-jrc/dcat-ap-jrc/issues/",
    github:        "https://github.com/ec-jrc/dcat-ap-jrc/",
//    overrideCopyright: '<p class="copyright"><a href="https://europa.eu/european-union/abouteuropa/legal_notices_en#copyright_notice">Copyright</a> © 2014-2019 <a href="https://europa.eu/">European Union</a>. This document is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by/4.0/" class="subfoot">Creative Commons Attribution 4.0 License</a>.</p>',
    editors: [
    {
      name:       "Hagar Lowenthal",
      company:    "European Commission, Joint Research Centre",
      companyURL: "https://ec.europa.eu/jrc/"
    },
    {
      name:       "Andrea Perego",
      company:    "European Parliament",
      orcid:      "0000-0001-9300-2694",
      companyURL: "https://europarl.europa.eu/"
    }
    ],
    authors: [
    {
      name:       "Hagar Lowenthal",
      company:    "European Commission, Joint Research Centre",
      companyURL: "https://ec.europa.eu/jrc/"
    },
    {
      name:       "Anders Friis-Christensen",
      company:    "European Commission, Joint Research Centre",
      companyURL: "https://ec.europa.eu/jrc/"
    },
    {
      name:       "Andrea Perego",
      company:    "European Parliament",
      orcid:      "0000-0001-9300-2694",
      companyURL: "https://europarl.europa.eu/"
    },
/*
    {
      name:       "Lorenzino Vaccari",
      company:    "European Commission, Joint Research Centre",
      companyURL: "https://ec.europa.eu/jrc/"
    },
    {
      name:       "Chrisa Tsinaraki",
      company:    "European Commission, Joint Research Centre",
      companyURL: "https://ec.europa.eu/jrc/"
    }
*/
    ],    
//    otherLinks: [{
//      key: "Contributors",
//      data: [{
//        value: "",
//        href: ""
//      }]
//    }],
//    wg: "JRC Data Support Team",
//    wgURI: "https://data.jrc.ec.europa.eu/contact",
//    wgPublicList: "",
//    wgPatentURI: "",
    inlineCSS: "true",
    lint: "false",
    localBiblio: {
      "ADMS-SKOS":{
        "href":"https://joinup.ec.europa.eu/svn/adms/ADMS_v1.00/ADMS_SKOS_v1.00.html",
        "title":"ADMS Controlled Vocabularies",
        "publisher":"European Commission",
//        "date":"2016"
      },
      "CiteDCAT-AP": {
        "href": "https://ec-jrc.github.io/datacite-to-dcat-ap/",
        "title": "DataCite to DCAT-AP Mapping",
        "authors": ["Andrea Perego","Timothy Austin"],
        "status": "Working Draft",
        "publisher":"European Commission, Joint Research Centre (JRC)",
        "date": "2019"
      },
      "CLD-FREQ": {
        "href":"http://dublincore.org/groups/collections/frequency/",
        "title":"Dublin Core Collection Description Frequency Vocabulary",
        "authors":["Dublin Core Collection Description Task Group"],
        "publisher":"Dublin Core Metadata Initiative",
        "date":"9 March 2007"
      },
      "DataCite2RDF": {
        "href":"https://doi.org/10.6084/m9.figshare.2075356",
        "title":"DataCite2RDF: Mapping DataCite Metadata Schema 3.1 Terms to RDF. Version 3.3",
        "authors":["Silvio Peroni","David Shotton","Jan Ashton","Amy Barton","Egbert Gramsbergen","Marie-Christine Jacquemot"],
        "date":"2016"
      },
      "DC2AP": {
        "href":"https://groups.google.com/a/datacite.org/group/dc2map/attach/624ec3cd533a3/DataCite%20Dublin%20Core%20AP%20-%20Draft%201_8.pdf",
        "title":"DataCite Dublin Core Application Profile (DC2AP). Version 1.8",
        "authors":["DataCite Metadata Working Group"],
        "date":"3 February 2016"
      },
      "DCAT-AP-3": {
        "href": "https://semiceu.github.io/DCAT-AP/releases/3.0.0/",
        "title": "DCAT-AP 3.0",
//        "authors": ["Makx Dekkers", "Pavlina Fragkou", "Natasa Sofou", "Bert Van Nuffelen"],
        "status": "Working Draft",
        "publisher":"European Commission",
        "date": "17 July 2023"
      },
       "DCAT-AP-JRC-1": {
        "href": "https://ec-jrc.github.io/dcat-ap-jrc/1.0/",
        "title": "DCAT-AP-JRC - Version 1",
        "authors": ["Andrea Perego","Timothy Austin"],
        "status": "Working Draft",
        "publisher":"European Commission, Joint Research Centre (JRC)",
        "date": "2019"
      },
      "DCAT-AP-SDO": {
        "href": "https://ec-jrc.github.io/dcat-ap-to-schema-org/",
        "title": "DCAT-AP to Schema.org Mapping",
        "authors": ["Andrea Perego"],
        "status": "Working Draft",
        "publisher":"European Commission, Joint Research Centre (JRC)",
        "date": "2019"
      },
      "DCAT-AP-IG":{
        "href":"https://joinup.ec.europa.eu/solution/dcat-application-profile-implementation-guidelines",
        "title":"DCAT application profile implementation guidelines",
        "publisher":"European Commission",
//        "date":"2016"
      },
      "DCWIKI": {
        "href":"http://wiki.dublincore.org/index.php/User_Guide/Publishing_Metadata",
        "title":"User Guide / Publishing Metadata",
//        "authors":["Dublin Core Metadata Initiative"],
        "publisher":"Dublin Core Metadata Initiative",
        "date":"9 March 2007"
      },
      "EPRINTS-AR": {
        "href":"http://purl.org/eprint/accessRights/",
        "title":"Eprints AccessRights Vocabulary Encoding Scheme",
        "date":"14 May 2008"
      },
      "EU-REPO-AR": {
        "href":"https://wiki.surfnet.nl/display/standards/info-eu-repo#info-eu-repo-AccessRights",
        "title":"EU-Repo: Access Rights",
        "date":"17 April 2018"
      },
      "FAIR" : {
        "title":"The FAIR Guiding Principles for scientific data management and stewardship",
        "authors":["Mark D. Wilkinson"],
        "etAl": true,
        "status":"Scientific Data, vol. 3, Article nr. 160018",
        "publisher":"Nature",
        "href":"https://doi.org/10.1038/sdata.2016.18"
      },
      "FRAPO": {
        "href":"http://purl.org/cerif/frapo",
        "title":"FRAPO, the Funding, Research Administration and Projects Ontology",
        "authors":["David Shotton"],
        "publisher":"SPAR Ontologies",
        "status":"Namespace Document",
        "date":"4 September 2017"
      },
      "FRBR": {
        "href":"http://purl.org/vocab/frbr/core#",
        "title":"Expression of Core FRBR Concepts in RDF",
        "authors":["Ian Davis","Richard Newman"],
        "publisher":"Vocab.org",
        "status":"Namespace Document",
        "date":"2005"
      },
      "GeoDCAT-XSLT":{
        "href":"https://github.com/semiceu/iso-19139-to-dcat-ap/",
        "title":"XSLT for converting ISO 19139 metadata into DCAT-AP",
        "authors":["Andrea Perego"],
//        "publisher":"",
        "date":"2015"
       },
      "GEOHASH":{
        "href":"http://en.wikipedia.org/wiki/Geohash",
        "title":"Geohash",
        "publisher":"Wikipedia"
       },
      "GEOHASH-36":{
        "href":"http://en.wikipedia.org/wiki/Geohash-36",
        "title":"Geohash-36",
        "publisher":"Wikipedia"
       },
      "GEOJSON":{
        "href":"http://geojson.org/geojson-spec.html",
        "title":"The GeoJSON Format Specification",
        "authors":["Howard Butler","Martin Daly","Allan Doyle","Sean Gillies","Tim Schaub","Christopher Schmidt"],
        "date":"16 June 2008"
      },
      "GEONAMES":{
        "href":"http://geonames.org/",
        "title":"Geonames"
       },
      "HVD": {
        "href":"http://data.europa.eu/eli/reg_impl/2023/138/oj",
        "title":"Commission Implementing Regulation (EU) 2023/138 of 21 December 2022 laying down a list of specific high-value datasets and the arrangements for their publication and re-use (Text with EEA relevance)",
        "publisher":"OJ L 19",
        "date":"21 December 2022"
      },
      "iiWAS17-JRC": {
        "href": "https://doi.org/10.1145/3151759.3151810",
        "title": "The JRC multidisciplinary research data infrastructure",
        "authors": ["Anders Friis-Christensen"],
        "etAl": true,
        "publisher":"19th International Conference on Information Integration and Web-based Applications & Services (iiWAS'17). Salzburg, Austria, 4-6 Dec 2017 ",
        "date": "2017"
      },
      "INSPIRE-DC": {
        "href":"http://inspire.ec.europa.eu/reports/ImplementingRules/metadata/MD_IR_and_DC_state%20of%20progress.pdf",
        "title":"State of progress in the development of guidelines to express elements of the INSPIRE metadata implementing rules using ISO 15836 (Dublin core)",
//        "authors":["European Commission"],
        "publisher":"European Commission",
        "date":"6 May 2008"
      },
      "INSPIRE-DCAT": {
        "href":"https://ies-svn.jrc.ec.europa.eu/projects/metadata/wiki/Alignment_of_INSPIRE_metadata_with_DCAT-AP",
        "title":"Alignment of INSPIRE metadata with DCAT-AP",
//        "authors":["European Commission"],
        "publisher":"European Commission",
        "date":"2014"
      },
      "INSPIRE-DIR": {
        "href":"http://data.europa.eu/eli/dir/2007/2/oj",
        "title":"DIRECTIVE 2007/2/EC OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 14 March 2007 establishing an Infrastructure for Spatial Information in the European Community (INSPIRE)",
        "publisher":"OJ L 108",
        "date":"25 April 2007"
      },
      "INSPIRE-SDSS-REG": {
        "href":"http://data.europa.eu/eli/reg/2010/1089",
        "title":"Commission Regulation (EU) No 1089/2010 of 23 November 2010 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards interoperability of spatial data sets and services",
        "publisher":"OJ L 323",
        "date":"8 December 2010"
      },
      "INSPIRE-MD-REG": {
        "href":"http://data.europa.eu/eli/reg/2008/1205",
        "title":"Commission Regulation (EC) No 1205/2008 of 3 December 2008 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards metadata",
        "publisher":"OJ L 326",
        "date":"4 December 2008"
      },
      "INSPIRE-MT": {
        "href":"http://inspire.ec.europa.eu/media-types/",
        "title":"INSPIRE Media Type Register",
//        "authors":["European Commission"],
        "publisher":"European Commission",
        "date":"7 November 2011"
      },
      "INSPIRE-DS": {
        "href":"http://inspire.jrc.ec.europa.eu/documents/Network_Services/TechnicalGuidance_DiscoveryServices_v3.1.pdf",
        "title":"Technical Guidance for the implementation of INSPIRE Discovery Services. Version 3.1",
//        "authors":["European Commission"],
        "publisher":"European Commission",
        "date":"7 November 2011"
      },
      "ISO-8061": {
        "authors": [
            "ISO/TC 154"
        ],
        "href": "https://www.iso.org/standard/40874.html",
        "title": "Data elements and interchange formats -- Information interchange -- Representation of dates and times",
        "publisher": "ISO",
        "status": "International Standard",
        "date": "2004",
        "isoNumber": "ISO 8061:2004"
      },
      "JRC-DP-2015": {
        "href": "https://doi.org/10.2788/607378",
        "title": "JRC Data Policy",
        "authors": ["Catherine Doldirina"],
        "etAl": true,
        "publisher":"Publications Office of the European Union",
        "date": "2015"
      },
      "JRC-DP-2019": {
        "href": "https://doi.org/10.2760/637912",
        "title": "JRC Data Policy",
        "authors": [
          "Anders-Friis Christensen",
          "Jean-Paul Triaille"
        ],
        "publisher":"Publications Office of the European Union",
        "date": "2019"
      },
      "JRC-DP": {
        "href": "https://doi.org/10.2760/637912",
        "title": "JRC Data Policy",
        "authors": [
          "Anders-Friis Christensen",
          "Jean-Paul Triaille"
        ],
        "publisher":"Publications Office of the European Union",
        "date": "2019"
      },
      "KML": {
        "href": "http://www.opengeospatial.org/standards/kml",
        "title": "OGC KML 2.3",
        "authors": ["David Burggraf"],
        "publisher":"OGC",
//        "status":"OGC® Implementation Standard",
        "date": "4 August 2015"
      },
      "LD-BOOK": {
        "href":"http://linkeddatabook.com/",
        "title":"Linked Data: Evolving the Web into a Global Data Space",
        "authors":["Tom Heath","Christian Bizer"],
        "publisher":"Morgan & Claypool",
        "date":"2011"
      },
      "LINK-PROP":{
        "href":"https://github.com/OSGeo/Cat-Interop/blob/master/LinkPropertyLookupTable.csv",
        "title":"Link properties",
        "publisher":"OSGeo"
      },
      "EUV-AR":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/access-right",
        "title":"Named Authority List: Access rights",
        "publisher":"Publications Office of the European Union"
       },
      "EUV-CB":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/corporate-body",
        "title":"Named Authority List: Corporate bodies",
        "publisher":"Publications Office of the European Union"
       },
      "EUV-CONT":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/continent",
        "title":"Named Authority List: Continents",
        "publisher":"Publications Office of the European Union"
       },
      "EUV-COUNTRIES":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/country",
        "title":"Named Authority List: Countries",
        "publisher":"Publications Office of the European Union"
       },
      "EUV-DS":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/dataset-status",
        "title":"Named Authority List: Dataset statuses",
        "publisher":"Publications Office of the European Union"
       },
      "EUV-DT":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/distribution-type",
        "title":"Named Authority List: Distribution types",
        "publisher":"Publications Office of the European Union"
       },
      "EUV-EUROVOC":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/th-dataset/-/resource/dataset/eurovoc",
        "title":"EuroVoc",
        "publisher":"Publications Office of the European Union"
       },
      "EUV-FREQ":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/frequency",
        "title":"Named Authority List: Frequencies",
        "publisher":"Publications Office of the European Union"
       },
      "EUV-FT":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/file-type",
        "title":"Named Authority List: File types",
        "publisher":"Publications Office of the European Union"
       },
      "EUV-LANG":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/language",
        "title":"Named Authority List: Languages",
        "publisher":"Publications Office of the European Union"
       },
      "EUV-LICENCES":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/licence",
        "title":"Named Authority List: Licences",
        "publisher":"Publications Office of the European Union"
       },
      "EUV-PLACES":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/place",
        "title":"Named Authority List: Places",
        "publisher":"Publications Office of the European Union"
       },
      "EUV-THEMES":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/data-theme",
        "title":"Named Authority List: Data Themes",
        "publisher":"Publications Office of the European Union"
       },
      "NEOGEO": {
        "href": "http://geovocab.org/doc/neogeo/",
        "title": "NeoGeo Vocabulary Specification - Madrid Edition",
        "authors": ["Juan Martín Salas","Andreas Harth"],
        "publisher":"GeoVocab.org",
        "date": "25 February 2012"
      },
/*
      "OpenAPI": {
         "href": "https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md",
         "title": "OpenAPI Specification. Version 3.0.2",
         "date": "08 October 2018",
         "publisher": "OAI"
      },
*/
      "OpenSearch": {
         "authors": [
           "DeWitt Clinton"
         ],
         "href":"https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md",
         "title":"OpenSearch 1.1 Draft 6",
         "date":"17 April 2018",
         "publisher":"OpenSearch"
      },
/*      
      "POWDER-S": {
        "href":"https://www.w3.org/2007/05/powder-s",
        "title":"Protocol for Web Description Resources (POWDER): POWDER-S Vocabulary (WDRS)",
        "authors":["Andrea Perego","Stasinos Konstantopoulos","Phil Archer"],
        "publisher":"W3C",
        "status":"Namespace Document",
        "date":"8 November 2010"
      },
*/      
      "SCHEMA-ORG":{
        "href":"http://schema.org/",
        "title":"Schema.org"
      },
      "SCoRO": {
        "href":"http://purl.org/spar/scoro#",
        "title":"Scholarly Contributions and Roles Ontology (SCoRO)",
        "authors":["David Shotton","Silvio Peroni"],
        "publisher":"SPAR Ontologies",
        "status":"Namespace Document",
        "date":"2017"
      },
      "SDMX":{
        "href":"https://sdmx.org/",
        "title":"Statistical Data and Metadata eXchange (SDMX)",
        "publisher":"SDMX"
      },
      "SDSVoc16-27": {
        "href": "https://www.w3.org/2016/11/sdsvoc/SDSVoc16_paper_27",
        "title": "Using DCAT-AP for research data",
        "authors": ["Andrea Perego"],
        "etAl": true,
        "publisher":"Smart Descriptions & Smarter Vocabularies (SDSVoc). Amsterdam, 30 Nov - 1 Dec 2016",
        "date": "2016"
      },
      "SPDX":{
        "href":"https://spdx.org/spdx-specification-21-web-version",
        "title":"Software Package Data Exchange (SPDX®) Specification – Version 2.1",
        "publisher":"SPDX",
        "date":"2016"
      },
      "UNSD-M49":{
        "href":"https://unstats.un.org/unsd/methodology/m49/",
        "title":"Methodology - Standard country or area codes for statistical use (M49)",
        "publisher":"United Nations Statistics Division"
       },
      "HYDRA": {
        authors: [
          "Markus Lanthaler"
        ],
        href:"https://www.hydra-cg.com/spec/latest/core/",
        title:"Hydra Core Vocabulary",
        date:"15 March 2018",
        publisher:"Hydra W3C Community Group",
        status:"Unofficial Draft"
      },
    }
  };
