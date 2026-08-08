const CONTACTS = [
  {
    "category": "Appliance Repair",
    "name": "Lorcan Washing Machine Repair",
    "phone": "+353862755275",
    "intl": "353862755275"
  },
  {
    "category": "Appliance Repair",
    "name": "Mark Appliance Repair",
    "phone": "+353872392579",
    "intl": "353872392579"
  },
  {
    "category": "Appliance Repair",
    "name": "Petro TV Repair",
    "phone": "+353877083417",
    "intl": "353877083417"
  },
  {
    "category": "Appliance Repair",
    "name": "Dermot Washing Machine Repair",
    "phone": "+353868425709",
    "intl": "353868425709"
  },
  {
    "category": "Builder / Attic",
    "name": "Andrew Builder",
    "phone": "+353892473632",
    "intl": "353892473632"
  },
  {
    "category": "Builder / Attic",
    "name": "Ben Builder",
    "phone": "+353851725870",
    "intl": "353851725870"
  },
  {
    "category": "Builder / Attic",
    "name": "Sean Attic Flooring",
    "phone": "+353858483551",
    "intl": "353858483551"
  },
  {
    "category": "Builder / Attic",
    "name": "Steven Attic & Ladder Solutions",
    "phone": "+353879835432",
    "intl": "353879835432"
  },
  {
    "category": "Carpenter / Joiner",
    "name": "Colm Carpenter",
    "phone": "+353872139330",
    "intl": "353872139330"
  },
  {
    "category": "Carpenter / Joiner",
    "name": "Hugh Carpenter",
    "phone": "+353872313618",
    "intl": "353872313618"
  },
  {
    "category": "Carpenter / Joiner",
    "name": "John Panelling",
    "phone": "+353863250491",
    "intl": "353863250491"
  },
  {
    "category": "Carpenter / Joiner",
    "name": "Josh Long - Highfield Carpentry",
    "phone": "+353838457442",
    "intl": "353838457442"
  },
  {
    "category": "Carpenter / Joiner",
    "name": "Kevin Kitchen Fitter",
    "phone": "+353868445927",
    "intl": "353868445927"
  },
  {
    "category": "Carpenter / Joiner",
    "name": "Mike Carpenter",
    "phone": "+353874161659",
    "intl": "353874161659"
  },
  {
    "category": "Chimney / Stove",
    "name": "Jim Stove Services",
    "phone": "+353872973817",
    "intl": "353872973817"
  },
  {
    "category": "Cleaning",
    "name": "Agnes Cleaner",
    "phone": "+353871472352",
    "intl": "353871472352"
  },
  {
    "category": "Cleaning",
    "name": "Aiva Cleaner",
    "phone": "+353851486800",
    "intl": "353851486800"
  },
  {
    "category": "Cleaning",
    "name": "Baiano Cleaner",
    "phone": "+353876297886",
    "intl": "353876297886"
  },
  {
    "category": "Cleaning",
    "name": "Chimney Cleaner",
    "phone": "+353862748325",
    "intl": "353862748325"
  },
  {
    "category": "Cleaning",
    "name": "Daniela Cleaner",
    "phone": "+353830187376",
    "intl": "353830187376"
  },
  {
    "category": "Cleaning",
    "name": "Katrina Cleaner",
    "phone": "+353863779526",
    "intl": "353863779526"
  },
  {
    "category": "Cleaning",
    "name": "Kevin Window Cleaner",
    "phone": "+353894963307",
    "intl": "353894963307"
  },
  {
    "category": "Cleaning",
    "name": "Leinster Hygiene Services",
    "phone": "+353852094876",
    "intl": "353852094876"
  },
  {
    "category": "Cleaning",
    "name": "Lightech Cleaning Solutions",
    "phone": "+353851097542",
    "intl": "353851097542"
  },
  {
    "category": "Cleaning",
    "name": "Louise Cleaner",
    "phone": "+353851169178",
    "intl": "353851169178"
  },
  {
    "category": "Cleaning",
    "name": "Naah Cleaner",
    "phone": "+353872927351",
    "intl": "353872927351"
  },
  {
    "category": "Cleaning",
    "name": "Sonata Cleaner",
    "phone": "+353852473732",
    "intl": "353852473732"
  },
  {
    "category": "Cleaning",
    "name": "Tamara Cleaner",
    "phone": "+353830957737",
    "intl": "353830957737"
  },
  {
    "category": "Cleaning",
    "name": "Good Cleaning Ireland - Tasha",
    "phone": "+353896100858",
    "intl": "353896100858"
  },
  {
    "category": "Cleaning",
    "name": "D•S Car Detailing",
    "phone": "+353851190148",
    "intl": "353851190148"
  },
  {
    "category": "Electrician",
    "name": "Conor Keaveney Electrician",
    "phone": "+353877820884",
    "intl": "353877820884"
  },
  {
    "category": "Electrician",
    "name": "Declan Electrician",
    "phone": "+353872230142",
    "intl": "353872230142"
  },
  {
    "category": "Electrician",
    "name": "Kane Electrician",
    "phone": "+353876081114",
    "intl": "353876081114"
  },
  {
    "category": "Electrician",
    "name": "Mariusz Electrician",
    "phone": "+353899743682",
    "intl": "353899743682"
  },
  {
    "category": "Electrician",
    "name": "Mik Electrician",
    "phone": "+353868197205",
    "intl": "353868197205"
  },
  {
    "category": "EV / Renewable Energy",
    "name": "Emerald Renewable Heating - Eoin",
    "phone": "+353857687116",
    "intl": "353857687116"
  },
  {
    "category": "EV / Renewable Energy",
    "name": "Smartzone Car Charging - Kelly",
    "phone": "+353873670899",
    "intl": "353873670899"
  },
  {
    "category": "Gardening / Landscaping",
    "name": "Jack Gardener",
    "phone": "+353874847691",
    "intl": "353874847691"
  },
  {
    "category": "Gardening / Landscaping",
    "name": "Kildare Gardening",
    "phone": "+353858203830",
    "intl": "353858203830"
  },
  {
    "category": "Gardening / Landscaping",
    "name": "Lee Gardener",
    "phone": "+353851045088",
    "intl": "353851045088"
  },
  {
    "category": "Gardening / Landscaping",
    "name": "Lily Landscapes",
    "phone": "+353851188487",
    "intl": "353851188487"
  },
  {
    "category": "Gardening / Landscaping",
    "name": "Ronan Walsh Landscaper",
    "phone": "+353872020471",
    "intl": "353872020471"
  },
  {
    "category": "Glazing / Windows & Doors",
    "name": "Paneless Solutions - Window & Door Repairs",
    "phone": "+353877005443",
    "intl": "353877005443"
  },
  {
    "category": "Handyman / Flat-pack",
    "name": "Joe Flat-Pack Assembly",
    "phone": "+353857480113",
    "intl": "353857480113"
  },
  {
    "category": "Handyman / Flat-pack",
    "name": "Michael Handyman",
    "phone": "+353868785237",
    "intl": "353868785237"
  },
  {
    "category": "Handyman / Flat-pack",
    "name": "Ronan Bradfix",
    "phone": "+353879185169",
    "intl": "353879185169"
  },
  {
    "category": "Other Home Service",
    "name": "Alan Driveway Services",
    "phone": "+353879175050",
    "intl": "353879175050"
  },
  {
    "category": "Other Home Service",
    "name": "Alan Smoke Alarm Services",
    "phone": "+353876568039",
    "intl": "353876568039"
  },
  {
    "category": "Other Home Service",
    "name": "Charlie All Watch",
    "phone": "+353862586525",
    "intl": "353862586525"
  },
  {
    "category": "Painter & Decorator",
    "name": "Anto Dublin Feature Walls",
    "phone": "+353866699111",
    "intl": "353866699111"
  },
  {
    "category": "Painter & Decorator",
    "name": "Archie Wallpapering",
    "phone": "+353894425576",
    "intl": "353894425576"
  },
  {
    "category": "Painter & Decorator",
    "name": "Bart Painter",
    "phone": "+353851242002",
    "intl": "353851242002"
  },
  {
    "category": "Painter & Decorator",
    "name": "Gerry Painter",
    "phone": "+353858218460",
    "intl": "353858218460"
  },
  {
    "category": "Painter & Decorator",
    "name": "Martin Painter",
    "phone": "+353872239026",
    "intl": "353872239026"
  },
  {
    "category": "Painter & Decorator",
    "name": "Nic Painter & Decorator",
    "phone": "+353874690169",
    "intl": "353874690169"
  },
  {
    "category": "Painter & Decorator",
    "name": "Paul Painter",
    "phone": "+353871911246",
    "intl": "353871911246"
  },
  {
    "category": "Pet Services",
    "name": "Tom Dog Groomer",
    "phone": "+353876552471",
    "intl": "353876552471"
  },
  {
    "category": "Pet Services",
    "name": "Houch Dog Trainer - Athy",
    "phone": "+353867300353",
    "intl": "353867300353"
  },
  {
    "category": "Pet Services",
    "name": "Irene Dog Services",
    "phone": "+353860765086",
    "intl": "353860765086"
  },
  {
    "category": "Plumber",
    "name": "Dave Plumber",
    "phone": "+353851010987",
    "intl": "353851010987"
  },
  {
    "category": "Plumber",
    "name": "Graeme Plumber",
    "phone": "+353852209592",
    "intl": "353852209592"
  },
  {
    "category": "Plumber",
    "name": "Kris Plumber",
    "phone": "+353852429658",
    "intl": "353852429658"
  },
  {
    "category": "Plumber",
    "name": "Paul Plumber - Bellingsfield",
    "phone": "+353857484030",
    "intl": "353857484030"
  },
  {
    "category": "Plumber",
    "name": "Tom Plumber - Bellingsfield",
    "phone": "+353862651264",
    "intl": "353862651264"
  },
  {
    "category": "Taxi / Transport",
    "name": "AKM Taxi",
    "phone": "+353894141259",
    "intl": "353894141259"
  },
  {
    "category": "Taxi / Transport",
    "name": "Don Taxi",
    "phone": "+353861713887",
    "intl": "353861713887"
  },
  {
    "category": "Taxi / Transport",
    "name": "Dave Man with Van",
    "phone": "+353858331533",
    "intl": "353858331533"
  },
  {
    "category": "Taxi / Transport",
    "name": "Man with Van - Kilcullen",
    "phone": "+353863255984",
    "intl": "353863255984"
  },
  {
    "category": "Taxi / Transport",
    "name": "Mark Taxi",
    "phone": "+353876741410",
    "intl": "353876741410"
  },
  {
    "category": "Taxi / Transport",
    "name": "Naas Taxi",
    "phone": "+353852480480",
    "intl": "353852480480"
  },
  {
    "category": "Tiler",
    "name": "Gareth Byrne Tiler",
    "phone": "+353851232943",
    "intl": "353851232943"
  },
  {
    "category": "Tiler",
    "name": "Greg Tiler",
    "phone": "+353876666461",
    "intl": "353876666461"
  },
  {
    "category": "Tiler",
    "name": "Robert Tiler",
    "phone": "+353873526606",
    "intl": "353873526606"
  }
];
