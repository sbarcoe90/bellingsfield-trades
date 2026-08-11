const CONTACTS = [
  {
    "category": "Appliance Repair",
    "name": "Lorcan Washing Machine Repair",
    "phone": "086 275 5275",
    "intl": "353862755275"
  },
  {
    "category": "Appliance Repair",
    "name": "Mark Appliance Repair",
    "phone": "087 239 2579",
    "intl": "353872392579"
  },
  {
    "category": "Appliance Repair",
    "name": "Petro TV Repair",
    "phone": "087 708 3417",
    "intl": "353877083417"
  },
  {
    "category": "Appliance Repair",
    "name": "Dermot Washing Machine Repair",
    "phone": "086 842 5709",
    "intl": "353868425709"
  },
  {
    "category": "Builder / Attic",
    "name": "Andrew Builder",
    "phone": "089 247 3632",
    "intl": "353892473632"
  },
  {
    "category": "Builder / Attic",
    "name": "Ben Builder",
    "phone": "085 172 5870",
    "intl": "353851725870"
  },
  {
    "category": "Builder / Attic",
    "name": "Sean Attic Flooring",
    "phone": "085 848 3551",
    "intl": "353858483551"
  },
  {
    "category": "Builder / Attic",
    "name": "Steven Attic & Ladder Solutions",
    "phone": "087 983 5432",
    "intl": "353879835432"
  },
  {
    "category": "Carpenter / Joiner",
    "name": "Colm Carpenter",
    "phone": "087 213 9330",
    "intl": "353872139330"
  },
  {
    "category": "Carpenter / Joiner",
    "name": "Hugh Carpenter",
    "phone": "087 231 3618",
    "intl": "353872313618"
  },
  {
    "category": "Carpenter / Joiner",
    "name": "John Panelling",
    "phone": "086 325 0491",
    "intl": "353863250491"
  },
  {
    "category": "Carpenter / Joiner",
    "name": "Josh Long - Highfield Carpentry",
    "phone": "083 845 7442",
    "intl": "353838457442"
  },
  {
    "category": "Carpenter / Joiner",
    "name": "Kevin Kitchen Fitter",
    "phone": "086 844 5927",
    "intl": "353868445927"
  },
  {
    "category": "Carpenter / Joiner",
    "name": "Mike Carpenter",
    "phone": "087 416 1659",
    "intl": "353874161659"
  },
  {
    "category": "Chimney / Stove",
    "name": "Jim Stove Services",
    "phone": "087 297 3817",
    "intl": "353872973817"
  },
  {
    "category": "Cleaning",
    "name": "D•S Car Detailing",
    "phone": "085 119 0148",
    "intl": "353851190148"
  },
  {
    "category": "Cleaning",
    "name": "Agnes Cleaner",
    "phone": "087 147 2352",
    "intl": "353871472352"
  },
  {
    "category": "Cleaning",
    "name": "Aiva Cleaner",
    "phone": "085 148 6800",
    "intl": "353851486800"
  },
  {
    "category": "Cleaning",
    "name": "Baiano Cleaner",
    "phone": "087 629 7886",
    "intl": "353876297886"
  },
  {
    "category": "Cleaning",
    "name": "Chimney Cleaner",
    "phone": "086 274 8325",
    "intl": "353862748325"
  },
  {
    "category": "Cleaning",
    "name": "Daniela Cleaner",
    "phone": "083 018 7376",
    "intl": "353830187376"
  },
  {
    "category": "Cleaning",
    "name": "Katrina Cleaner",
    "phone": "086 377 9526",
    "intl": "353863779526"
  },
  {
    "category": "Cleaning",
    "name": "Kevin Window Cleaner",
    "phone": "089 496 3307",
    "intl": "353894963307"
  },
  {
    "category": "Cleaning",
    "name": "Leinster Hygiene Services",
    "phone": "085 209 4876",
    "intl": "353852094876"
  },
  {
    "category": "Cleaning",
    "name": "Lightech Cleaning Solutions",
    "phone": "085 109 7542",
    "intl": "353851097542"
  },
  {
    "category": "Cleaning",
    "name": "Louise Cleaner",
    "phone": "085 116 9178",
    "intl": "353851169178"
  },
  {
    "category": "Cleaning",
    "name": "Naah Cleaner",
    "phone": "087 292 7351",
    "intl": "353872927351"
  },
  {
    "category": "Cleaning",
    "name": "Sonata Cleaner",
    "phone": "085 247 3732",
    "intl": "353852473732"
  },
  {
    "category": "Cleaning",
    "name": "Tamara Cleaner",
    "phone": "083 095 7737",
    "intl": "353830957737"
  },
  {
    "category": "Cleaning",
    "name": "Good Cleaning Ireland - Tasha",
    "phone": "089 610 0858",
    "intl": "353896100858"
  },
  {
    "category": "Electrician",
    "name": "Conor Keaveney Electrician",
    "phone": "087 782 0884",
    "intl": "353877820884"
  },
  {
    "category": "Electrician",
    "name": "Declan Electrician",
    "phone": "087 223 0142",
    "intl": "353872230142"
  },
  {
    "category": "Electrician",
    "name": "Kane Electrician",
    "phone": "087 608 1114",
    "intl": "353876081114"
  },
  {
    "category": "Electrician",
    "name": "Mariusz Electrician",
    "phone": "089 974 3682",
    "intl": "353899743682"
  },
  {
    "category": "Electrician",
    "name": "Mik Electrician",
    "phone": "086 819 7205",
    "intl": "353868197205"
  },
  {
    "category": "EV / Renewable Energy",
    "name": "Emerald Renewable Heating - Eoin",
    "phone": "085 768 7116",
    "intl": "353857687116"
  },
  {
    "category": "EV / Renewable Energy",
    "name": "Smartzone Car Charging - Kelly",
    "phone": "087 367 0899",
    "intl": "353873670899"
  },
  {
    "category": "Gardening / Landscaping",
    "name": "Jack Gardener",
    "phone": "087 484 7691",
    "intl": "353874847691"
  },
  {
    "category": "Gardening / Landscaping",
    "name": "Kildare Gardening",
    "phone": "085 820 3830",
    "intl": "353858203830"
  },
  {
    "category": "Gardening / Landscaping",
    "name": "Lee Gardener",
    "phone": "085 104 5088",
    "intl": "353851045088"
  },
  {
    "category": "Gardening / Landscaping",
    "name": "Lily Landscapes",
    "phone": "085 118 8487",
    "intl": "353851188487"
  },
  {
    "category": "Gardening / Landscaping",
    "name": "Ronan Walsh Landscaper",
    "phone": "087 202 0471",
    "intl": "353872020471"
  },
  {
    "category": "Glazing / Windows & Doors",
    "name": "Paneless Solutions - Window & Door Repairs",
    "phone": "087 700 5443",
    "intl": "353877005443"
  },
  {
    "category": "Handyman / Flat-pack",
    "name": "Joe Flat-Pack Assembly",
    "phone": "085 748 0113",
    "intl": "353857480113"
  },
  {
    "category": "Handyman / Flat-pack",
    "name": "Michael Handyman",
    "phone": "086 878 5237",
    "intl": "353868785237"
  },
  {
    "category": "Handyman / Flat-pack",
    "name": "Ronan Bradfix",
    "phone": "087 918 5169",
    "intl": "353879185169"
  },
  {
    "category": "Other Home Service",
    "name": "Alan Driveway Services",
    "phone": "087 917 5050",
    "intl": "353879175050"
  },
  {
    "category": "Other Home Service",
    "name": "Alan Smoke Alarm Services",
    "phone": "087 656 8039",
    "intl": "353876568039"
  },
  {
    "category": "Other Home Service",
    "name": "Charlie All Watch",
    "phone": "086 258 6525",
    "intl": "353862586525"
  },
  {
    "category": "Painter & Decorator",
    "name": "Anto Dublin Feature Walls",
    "phone": "086 669 9111",
    "intl": "353866699111"
  },
  {
    "category": "Painter & Decorator",
    "name": "Archie Wallpapering",
    "phone": "089 442 5576",
    "intl": "353894425576"
  },
  {
    "category": "Painter & Decorator",
    "name": "Bart Painter",
    "phone": "085 124 2002",
    "intl": "353851242002"
  },
  {
    "category": "Painter & Decorator",
    "name": "Gerry Painter",
    "phone": "085 821 8460",
    "intl": "353858218460"
  },
  {
    "category": "Painter & Decorator",
    "name": "Martin Painter",
    "phone": "087 223 9026",
    "intl": "353872239026"
  },
  {
    "category": "Painter & Decorator",
    "name": "Nic Painter & Decorator",
    "phone": "087 469 0169",
    "intl": "353874690169"
  },
  {
    "category": "Painter & Decorator",
    "name": "Paul Painter",
    "phone": "087 191 1246",
    "intl": "353871911246"
  },
  {
    "category": "Pet Services",
    "name": "Tom Dog Groomer",
    "phone": "087 655 2471",
    "intl": "353876552471"
  },
  {
    "category": "Pet Services",
    "name": "Houch Dog Trainer - Athy",
    "phone": "086 730 0353",
    "intl": "353867300353"
  },
  {
    "category": "Pet Services",
    "name": "Irene Dog Services",
    "phone": "086 076 5086",
    "intl": "353860765086"
  },
  {
    "category": "Plumber",
    "name": "Dave Plumber",
    "phone": "085 101 0987",
    "intl": "353851010987"
  },
  {
    "category": "Plumber",
    "name": "Graeme Plumber",
    "phone": "085 220 9592",
    "intl": "353852209592"
  },
  {
    "category": "Plumber",
    "name": "Kris Plumber",
    "phone": "085 242 9658",
    "intl": "353852429658"
  },
  {
    "category": "Plumber",
    "name": "Paul Plumber",
    "phone": "085 748 4030",
    "intl": "353857484030"
  },
  {
    "category": "Plumber",
    "name": "Tom Plumber",
    "phone": "086 265 1264",
    "intl": "353862651264"
  },
  {
    "category": "Taxi / Transport",
    "name": "AKM Taxi",
    "phone": "089 414 1259",
    "intl": "353894141259"
  },
  {
    "category": "Taxi / Transport",
    "name": "Don Taxi",
    "phone": "086 171 3887",
    "intl": "353861713887"
  },
  {
    "category": "Taxi / Transport",
    "name": "Dave Man with Van",
    "phone": "085 833 1533",
    "intl": "353858331533"
  },
  {
    "category": "Taxi / Transport",
    "name": "Man with Van - Kilcullen",
    "phone": "086 325 5984",
    "intl": "353863255984"
  },
  {
    "category": "Taxi / Transport",
    "name": "Mark Taxi",
    "phone": "087 674 1410",
    "intl": "353876741410"
  },
  {
    "category": "Taxi / Transport",
    "name": "Naas Taxi",
    "phone": "085 248 0480",
    "intl": "353852480480"
  },
  {
    "category": "Tiler",
    "name": "Gareth Byrne Tiler",
    "phone": "085 123 2943",
    "intl": "353851232943"
  },
  {
    "category": "Tiler",
    "name": "Gareth Byrne Tiler",
    "phone": "085 123 2943",
    "intl": "353851232943"
  },
  {
    "category": "Tiler",
    "name": "Greg Tiler",
    "phone": "087 666 6461",
    "intl": "353876666461"
  },
  {
    "category": "Tiler",
    "name": "Robert Tiler",
    "phone": "087 352 6606",
    "intl": "353873526606"
  },
  {
    "category": "Builder / Attic",
    "name": "Dylan Rooney Attic Conversions",
    "phone": "083 346 1591",
    "intl": "353833461591"
  },
  {
    "category": "Electrician",
    "name": "Andy Kelly Electrician",
    "phone": "085 122 0345",
    "intl": "353851220345"
  },
  {
    "category": "Plumber",
    "name": "Devine Plumbing",
    "phone": "085 288 9357",
    "intl": "353852889357"
  },
  {
  "category": "Outdoor Living",
  "name": "Two Islands Outdoor Living",
  "phone": "086 258 3474",
  "intl": "353862583474"
},
{
  "category": "Builder / Attic",
  "name": "PT Attic Conversions",
  "phone": "087 912 7682",
  "intl": "353879127682"
},
{
  "category": "Teachers / Grinds",
  "name": "Shane Mangan - Maths Grinds",
  "phone": "085 141 1693",
  "intl": "353851411693"
},
{
  "category": "Teachers / Grinds",
  "name": "Fiona Malone McCormack - Maths Grinds",
  "phone": "087 784 7766",
  "intl": "353877847766"
},
  {
  "category": "Teachers / Grinds",
  "name": "Spanish & Geography Grinds",
  "phone": "089 237 4204",
  "intl": "353892374204"
},
{
  "category": "Teachers / Grinds",
  "name": "Primary School Tutor",
  "phone": "086 196 9911",
  "intl": "353861969911"
},
{
  "category": "Teachers / Grinds",
  "name": "Junior Cycle Maths Tutoring",
  "phone": "089 448 5475",
  "intl": "353894485475"
}
];
