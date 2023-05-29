import { tokens } from "../theme";

export const mockDataApiDetails =[
  {
    id:1,
    hostHeader: "ipay.ebay.com",
    contentLength: "541",
    userAgent: "Mozilla UA",
    httpMethod: "GET",
    url: "ebay.com/v1/item_details/5325",
    posture: "2",
    riskScore: "5"

  }
]

export const mockDataApiDiscoveryHostnameList =[
  {
    id: 1,
    hostname: "ebay.com",
    basepath: "/v1/item_details/5325",
    dateFirstSeen: '05/02, 2023',
    format: "JSON, XML",
    requestsInLast24Hours: '2301',
    totalErrors: 321,
    details: "Details"
  },
  {
    id: 2,
    hostname: "www.ebay.com",
    basepath: "/v1/user/12151/tokens",
    dateFirstSeen: 'May 25, 2023',
    format: "JSON",
    requestsInLast24Hours: '5236',
    totalErrors: 234
  },
  {
    id: 3,
    hostname: "static.ebay.com",
    basepath: "/v2/oath/",
    dateFirstSeen: '05/04, 2023',
    format: "JSON",
    requestsInLast24Hours: '5432',
    totalErrors: 342
  },
  {
    id: 4,
    hostname: "www1.ebay.com",
    basepath: "/v1/ssjohn/tasks/6x6231",
    dateFirstSeen: '05/01, 2023',
    format: "JSON, XML",
    requestsInLast24Hours: '953',
    totalErrors: 684
  },
  {
    id: 5,
    hostname: "ebay.com",
    basepath: "/sessions/5523",
    dateFirstSeen: '05/07, 2023',
    format: "JSON, XML",
    requestsInLast24Hours: '4223',
    totalErrors: 483
  },
  {
    id: 6,
    hostname: "v2.ebay.com",
    basepath: "/equipment/111/cycles/",
    dateFirstSeen: '05/12, 2023',
    format: "JSON, XML",
    requestsInLast24Hours: '912',
    totalErrors: 786
  },  

];

export const mockDataTopApiEndpoints =[
  {
    id: 1,
    apiEndPoint: "/v1/order/order_details",
    numberOfRequests: 45012,
    httpMethod: "GET",
    trafficPercent: 38
  },
  {
    id: 2,
    apiEndPoint: "/v2/products/product_details",
    numberOfRequests: 35011,
    httpMethod: "POST",
    trafficPercent: 25
  },
];

export const mockDataTeam = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "manager",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "user",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "admin",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    access: "user",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    access: "manager",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    access: "user",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    access: "user",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    access: "admin",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 515234",
    city: "Evertin",
    zipCode: "51523",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "4123 Ever Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    address: "51234 Avery Street, Cantory, ND 212412",
    city: "Colunza",
    zipCode: "111234",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredack@gmail.com",
    age: 42,
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    age: 11,
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFory, ND 212412",
    city: "Colunza",
    zipCode: "1234",
    registrarId: 92197,
  },
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    cost: "21.24",
    phone: "(665)121-5454",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    cost: "1.24",
    phone: "(421)314-2288",
    date: "05/15/2021",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    cost: "11.24",
    phone: "(422)982-6739",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    cost: "80.55",
    phone: "(921)425-6742",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    cost: "1.24",
    phone: "(421)445-1189",
    date: "01/12/2021",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    cost: "63.12",
    phone: "(232)545-6483",
    date: "11/02/2022",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    cost: "52.42",
    phone: "(543)124-0123",
    date: "02/11/2022",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    cost: "21.24",
    phone: "(222)444-5555",
    date: "05/02/2021",
  },
];

export const mockTransactions = [
  {
    txId: "Brute Force Authentication",
    user: "IP: 141.51.123.1",
    date: "2021-09-01",
    cost: "OWASP API5",
  },
  {
    txId: "Injection",
    user: "IP: 192.168.4.1",
    date: "2022-04-01",
    cost: "OWASP API8",
  },
  {
    txId: "Broken Authentication",
    user: "IP: 622.11.151.1",
    date: "2021-09-01",
    cost: "OWASP API2",
  },
  {
    txId: "Query Parameter Fuzzing",
    user: "IP: 72.878.909.1",
    date: "2022-11-05",
    cost: "OWASP API4",
  },
  {
    txId: "PII",
    user: "IP: 98.235.90.23",
    date: "2022-11-02",
    cost: "PII",
  },
  {
    txId: "Excessive Errors",
    user: "IP: 57.87.98.32",
    date: "2021-09-01",
    cost: "OWASP API7",
  },
  {
    txId: "No Rate Limit",
    user: "IP: 26.52.772.66",
    date: "2019-04-15",
    cost: "OWASP API6",
  },
];

export const mockBarData = [
  {
    "status": "2xx",
    "2xx": 5098,
    "2xxColor": "hsl(241, 70%, 50%)",
  },
  {
    "status": "3xx",
    "3xx": 2198,
    "3xxColor": "hsl(313, 70%, 50%)",
  },
  {
    "status": "4xx",
    "4xx": 902,
    "4xxColor": "hsl(328, 70%, 50%)",
  },
  {
    "status": "5xx",
    "5xx": 500,
    "5xxColor": "hsl(65, 70%, 50%)",
  },
]

export const mockPieData = [
  {
    id: "Vulnerabilities",
    label: "Vulnerabilities",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "Injection",
    label: "Injection",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "Authentication",
    label: "Authentication",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "PII",
    label: "PII",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    "id": "5xx",
    "color": "hsl(340, 70%, 50%)",
    "data": [
      {
        "x": "05/01",
        "y": 145
      },
      {
        "x": "05/02",
        "y": 151
      },
      {
        "x": "05/03",
        "y": 19
      },
      {
        "x": "05/04",
        "y": 140
      },
      {
        "x": "05/05",
        "y": 189
      },
      {
        "x": "05/06",
        "y": 202
      },
      {
        "x": "05/07",
        "y": 1143
      },
      {
        "x": "05/08",
        "y": 222
      },
      {
        "x": "05/09",
        "y": 247
      },
      {
        "x": "05/10",
        "y": 282
      },
      {
        "x": "05/11",
        "y": 105
      },
      {
        "x": "05/12",
        "y": 208
      }
    ]
  },
  {
    "id": "4xx",
    "color": "hsl(192, 70%, 50%)",
    "data": [
      {
        "x": "05/01",
        "y": 95
      },
      {
        "x": "05/02",
        "y": 116
      },
      {
        "x": "05/03",
        "y": 79
      },
      {
        "x": "05/04",
        "y": 39
      },
      {
        "x": "05/05",
        "y": 257
      },
      {
        "x": "05/06",
        "y": 299
      },
      {
        "x": "05/07",
        "y": 80
      },
      {
        "x": "05/08",
        "y": 287
      },
      {
        "x": "05/09",
        "y": 203
      },
      {
        "x": "05/10",
        "y": 235
      },
      {
        "x": "05/11",
        "y": 153
      },
      {
        "x": "05/12",
        "y": 41
      }
    ]
  },
  {
    "id": "3xx",
    "color": "hsl(154, 10%, 80%)",
    "data": [
      {
        "x": "05/01",
        "y": 181
      },
      {
        "x": "05/02",
        "y": 182
      },
      {
        "x": "05/03",
        "y": 114
      },
      {
        "x": "05/04",
        "y": 245
      },
      {
        "x": "05/05",
        "y": 226
      },
      {
        "x": "05/06",
        "y": 241
      },
      {
        "x": "05/07",
        "y": 121
      },
      {
        "x": "05/08",
        "y": 258
      },
      {
        "x": "05/09",
        "y": 182
      },
      {
        "x": "05/10",
        "y": 115
      },
      {
        "x": "05/11",
        "y": 110
      },
      {
        "x": "05/12",
        "y": 150
      }
    ]
  },
  {
    "id": "2xx",
    "color": "hsl(104, 70%, 50%)",
    "data": [
      {
        "x": "05/01",
        "y": 1024
      },
      {
        "x": "05/02",
        "y": 1159
      },
      {
        "x": "05/03",
        "y": 1040
      },
      {
        "x": "05/04",
        "y": 1218
      },
      {
        "x": "05/05",
        "y": 1199
      },
      {
        "x": "05/06",
        "y": 1285
      },
      {
        "x": "05/07",
        "y": 93
      },
      {
        "x": "05/08",
        "y": 935
      },
      {
        "x": "05/09",
        "y": 1090
      },
      {
        "x": "05/10",
        "y": 1235
      },
      {
        "x": "05/11",
        "y": 1216
      },
      {
        "x": "05/12",
        "y": 1119
      }
    ]
  }
]

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];