import React, { useState } from 'react'

export const comparedData = [

  {
    "tripType": "PICKUP",
    "towType": "Medium",
    "minTowZone": "1",
    "maxTowZone": "99",
    "diff": -20
},
  {
    "tripType": "PICKUP",
    "towType": "Heavy",
    "minTowZone": "1",
    "oldPrice": "$5",
    "newPrice": "-",
    "maxTowZone": "99",
    "diff": "-"
},
  {
      "tripType": "abc",
      "towType": "Heavy",
      "minTowZone": "1",
      "maxTowZone": "99",
      "diff": -30
  },
  {
    "tripType": "PICKPUP",
    "towType": "ALL",
    "minTowZone": "1",
    "maxTowZone": "10",
    "diff": -20
  },
  {
    "tripType": "ALL",
    "towType": "ALL",
    "minTowZone": "1",
    "oldPrice": "$35",
    "newPrice": "-",
    "maxTowZone": "10",
    "diff": "-"
},
{
    "tripType": "ALL",
    "towType": "ALL",
    "minTowZone": "11",
    "oldPrice": "$35",
    "newPrice": "-",
    "maxTowZone": "99",
    "diff": "-"
},
  {
      "tripType": "abc",
      "towType": "Long Haul",
      "minTowZone": "1",
      "maxTowZone": "10",
      "diff": -20
  },
  {
      "tripType": "abc",
      "towType": "Long Haul",
      "minTowZone": "11",
      "maxTowZone": "50",
      "diff": -20
  },
  {
      "tripType": "abc",
      "towType": "Long Haul",
      "minTowZone": "51",
      "maxTowZone": "99",
      "diff": -20
  },
  {
      "tripType": "abc",
      "towType": "Medium",
      "minTowZone": "1",
      "maxTowZone": "10",
      "diff": -10
  },
  {
      "tripType": "abc",
      "towType": "Medium",
      "minTowZone": "11",
      "maxTowZone": "99",
      "diff": -10
  },
  {
      "tripType": "abc",
      "towType": "Standard",
      "minTowZone": "1",
      "maxTowZone": "99",
      "diff": -25
  },

  {
      "tripType": "DELIVERY",
      "towType": "Heavy",
      "minTowZone": "1",
      "maxTowZone": "99",
      "diff": -30
  },
  {
      "tripType": "DELIVERY",
      "towType": "Long Haul",
      "minTowZone": "1",
      "maxTowZone": "10",
      "diff": -20
  },
  {
      "tripType": "DELIVERY",
      "towType": "Long Haul",
      "minTowZone": "11",
      "maxTowZone": "50",
      "diff": -20
  },
  {
      "tripType": "DELIVERY",
      "towType": "Long Haul",
      "minTowZone": "51",
      "maxTowZone": "99",
      "diff": -20
  },
  {
      "tripType": "DELIVERY",
      "towType": "Medium",
      "minTowZone": "1",
      "maxTowZone": "99",
      "diff": -10
  },
  {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "1",
      "maxTowZone": "10",
      "diff": -25
  },
  {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "11",
      "maxTowZone": "50",
      "diff": -25
  },
  {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "51",
      "maxTowZone": "99",
      "diff": -25
  },

  {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "1",
      "maxTowZone": "10",
      "diff": -25
  },
  {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": 11,
      "maxTowZone": "30",
      "diff": -20
  },
  {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "31",
      "maxTowZone": "99",
      "diff": -25
  },
  {
      "tripType": "ALL",
      "towType": "Standard",
      "minTowZone": "1",
      "maxTowZone": "10",
      "diff": -30
  },
  {
      "tripType": "ALL",
      "towType": "Standard",
      "minTowZone": "11",
      "maxTowZone": "50",
      "diff": -25
  },
  {
      "tripType": "ALL",
      "towType": "Standard",
      "minTowZone": "51",
      "maxTowZone": "99",
      "diff": -25
  },

  {
    "tripType": "ALL",
    "towType": "Medium",
    "minTowZone": "1",
    "maxTowZone": "99",
    "diff": -20
  },
  {
    "tripType": "DELIVERY",
    "towType": "ALL",
    "minTowZone": "11",
    "maxTowZone": "99",
    "diff": -25
},
]


export const left = [
    {
        "tripType": "DELIVERY",
        "towType": "Standard",
        "minTowZone": 1,
        "maxTowZone": 50,
        
        "fee": "10"
    },
    {
        "tripType": "DELIVERY",
        "towType": "Standard",
        "minTowZone": 51,
        "maxTowZone": 99,
        
        "fee": "10"
    },
    {
        "tripType": "PICKUP",
        "towType": "Heavy",
        "minTowZone": 1,
        "maxTowZone": 99,
        
        "fee": "5"
    },
    {
        "tripType": "XYZ",
        "towType": "Standard",
        "minTowZone": 1,
        "maxTowZone": 99,
        
        "fee": "5"
    },
    ///////////////////////////////Ex. 1/////////////////////////////////
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 1,
    //     "maxTowZone": 30,
    //     
    //     "fee": "5"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 31,
    //     "maxTowZone": 45,
    //     
    //     "fee": "10"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 46,
    //     "maxTowZone": 99,
    //     
    //     "fee": "0"
    // },



    ///////////////////////////////Ex. 2/////////////////////////////////
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 1,
    //     "maxTowZone": 5,
    //     
    //     "fee": "5"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 6,
    //     "maxTowZone": 7,
    //     
    //     "fee": "0"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 8,
    //     "maxTowZone": 11,
    //     
    //     "fee": "10"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 12,
    //     "maxTowZone": 15,
    //     
    //     "fee": "20"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 16,
    //     "maxTowZone": 30,
    //     
    //     "fee": "30"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 31,
    //     "maxTowZone": 99,
    //     
    //     "fee": "40"
    // },


    ///////////////////////////////Ex. 3/////////////////////////////////
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 1,
    //     "maxTowZone": 1,
    //     
    //     "fee": "10"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 2,
    //     "maxTowZone": 2,
    //     
    //     "fee": "10"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 3,
    //     "maxTowZone": 3,
    //     
    //     "fee": "10"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 4,
    //     "maxTowZone": 4,
    //     
    //     "fee": "20"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 5,
    //     "maxTowZone": 5,
    //     
    //     "fee": "20"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 6,
    //     "maxTowZone": 6,
    //     
    //     "fee": "15"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 7,
    //     "maxTowZone": 7,
    //     
    //     "fee": "10"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 8,
    //     "maxTowZone": 99,
    //     
    //     "fee": "5"
    // },
]

export const right = [
    ///////////////////////////////Ex. 1/////////////////////////////////
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 1,
    //     "maxTowZone": 35,
    //     
    //     "fee": "10"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 36,
    //     "maxTowZone": 42,
    //     
    //     "fee": "15"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 43,
    //     "maxTowZone": 45,
    //     
    //     "fee": "25"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 46,
    //     "maxTowZone": 70,
    //     
    //     "fee": "30"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 71,
    //     "maxTowZone": 99,
    //     
    //     "fee": "00"
    // },
    



    ///////////////////////////////Ex. 2/////////////////////////////////
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": 1,
        "maxTowZone": 1,
        
        "fee": "10"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": 2,
        "maxTowZone": 2,
        
        "fee": "10"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": 3,
        "maxTowZone": 3,
        
        "fee": "10"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": 4,
        "maxTowZone": 4,
        
        "fee": "20"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": 5,
        "maxTowZone": 5,
        
        "fee": "20"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": 6,
        "maxTowZone": 6,
        
        "fee": "15"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": 7,
        "maxTowZone": 7,
        
        "fee": "10"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": 8,
        "maxTowZone": 20,
        
        "fee": "5"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": 21,
        "maxTowZone": 99,
        
        "fee": "20"
    },
    {
        "tripType": "DELIVERY",
        "towType": "Standard",
        "minTowZone": 1,
        "maxTowZone": 10,
        
        "fee": "10"
    },
    {
        "tripType": "DELIVERY",
        "towType": "Standard",
        "minTowZone": 11,
        "maxTowZone": 40,
        
        "fee": "20"
    },
    {
        "tripType": "DELIVERY",
        "towType": "Standard",
        "minTowZone": 41,
        "maxTowZone": 99,
        
        "fee": "30"
    },
    {
        "tripType": "XYZ",
        "towType": "Standard",
        "minTowZone": 1,
        "maxTowZone": 99,
        
        "fee": "5"
    },

    ///////////////////////////////Ex. 3/////////////////////////////////
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 1,
    //     "maxTowZone": 1,
    //     
    //     "fee": "10"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 2,
    //     "maxTowZone": 2,
    //     
    //     "fee": "10"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 3,
    //     "maxTowZone": 3,
    //     
    //     "fee": "10"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 4,
    //     "maxTowZone": 4,
    //     
    //     "fee": "20"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 5,
    //     "maxTowZone": 5,
    //     
    //     "fee": "20"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 6,
    //     "maxTowZone": 6,
    //     
    //     "fee": "15"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 7,
    //     "maxTowZone": 7,
    //     
    //     "fee": "10"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": 8,
    //     "maxTowZone": 99,
    //     
    //     "fee": "5"
    // },
]

export const leftService1 = [
    {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "1",
      "maxTowZone": "1",
      
      "fee": "25"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "2",
      "maxTowZone": "2",
      
      "fee": "30"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "3",
      "maxTowZone": "3",
      
      "fee": "35"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "4",
      "maxTowZone": "4",
      
      "fee": "40"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "5",
      "maxTowZone": "5",
      
      "fee": "45"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "6",
      "maxTowZone": "6",
      
      "fee": "50"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "7",
      "maxTowZone": "7",
      
      "fee": "55"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "8",
      "maxTowZone": "8",
      
      "fee": "60"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "9",
      "maxTowZone": "9",
      
      "fee": "65"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "10",
      "maxTowZone": "10",
      
      "fee": "70"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "11",
      "maxTowZone": "11",
      
      "fee": "75"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "12",
      "maxTowZone": "12",
      
      "fee": "80"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "13",
      "maxTowZone": "13",
      
      "fee": "85"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "14",
      "maxTowZone": "14",
      
      "fee": "90"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "15",
      "maxTowZone": "15",
      
      "fee": "100"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "16",
      "maxTowZone": "99",
      
      "fee": "0.01"
    },
    {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "1",
      "maxTowZone": "1",
      
      "fee": "25"
    },
    {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "2",
      "maxTowZone": "2",
      
      "fee": "30"
    },
    {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "3",
      "maxTowZone": "3",
      
      "fee": "35"
    },
    {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "4",
      "maxTowZone": "4",
      
      "fee": "40"
    },
    {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "5",
      "maxTowZone": "5",
      
      "fee": "45"
    },
    {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "6",
      "maxTowZone": "6",
      
      "fee": "50"
    },
    {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "7",
      "maxTowZone": "7",
      
      "fee": "55"
    },
    {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "8",
      "maxTowZone": "8",
      
      "fee": "60"
    },
    {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "9",
      "maxTowZone": "9",
      
      "fee": "65"
    },
    {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "10",
      "maxTowZone": "10",
      
      "fee": "70"
    },
    {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "11",
      "maxTowZone": "11",
      
      "fee": "75"
    },
    {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "12",
      "maxTowZone": "12",
      
      "fee": "80"
    },
    {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "13",
      "maxTowZone": "13",
      
      "fee": "85"
    },
    {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "14",
      "maxTowZone": "14",
      
      "fee": "90"
    },
    {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "15",
      "maxTowZone": "15",
      
      "fee": "100"
    },
    {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "16",
      "maxTowZone": "99",
      
      "fee": "0.01"
    }
]

export const leftService2 = [
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "1",
        "maxTowZone": "1",
        
        "fee": "5"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "2",
        "maxTowZone": "2",
        
        "fee": "20"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "3",
        "maxTowZone": "3",
        
        "fee": "10"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "4",
        "maxTowZone": "4",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "5",
        "maxTowZone": "5",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "6",
        "maxTowZone": "6",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "7",
        "maxTowZone": "7",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "8",
        "maxTowZone": "8",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "9",
        "maxTowZone": "9",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "10",
        "maxTowZone": "10",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "11",
        "maxTowZone": "11",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "12",
        "maxTowZone": "12",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "13",
        "maxTowZone": "13",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "14",
        "maxTowZone": "14",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "15",
        "maxTowZone": "15",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "16",
        "maxTowZone": "16",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "17",
        "maxTowZone": "17",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "18",
        "maxTowZone": "18",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "19",
        "maxTowZone": "19",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "20",
        "maxTowZone": "20",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "21",
        "maxTowZone": "21",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "22",
        "maxTowZone": "22",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "23",
        "maxTowZone": "23",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "24",
        "maxTowZone": "24",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "25",
        "maxTowZone": "25",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "26",
        "maxTowZone": "26",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "27",
        "maxTowZone": "27",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "28",
        "maxTowZone": "28",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "29",
        "maxTowZone": "29",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "30",
        "maxTowZone": "30",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "31",
        "maxTowZone": "31",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "32",
        "maxTowZone": "32",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "33",
        "maxTowZone": "33",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "34",
        "maxTowZone": "34",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "35",
        "maxTowZone": "35",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "36",
        "maxTowZone": "36",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "37",
        "maxTowZone": "37",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "38",
        "maxTowZone": "38",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "39",
        "maxTowZone": "39",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "40",
        "maxTowZone": "40",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "41",
        "maxTowZone": "41",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "42",
        "maxTowZone": "42",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "43",
        "maxTowZone": "43",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "44",
        "maxTowZone": "44",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "45",
        "maxTowZone": "45",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "46",
        "maxTowZone": "46",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "47",
        "maxTowZone": "47",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "48",
        "maxTowZone": "48",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "49",
        "maxTowZone": "49",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "50",
        "maxTowZone": "50",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "51",
        "maxTowZone": "51",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "52",
        "maxTowZone": "52",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "53",
        "maxTowZone": "53",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "54",
        "maxTowZone": "54",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "55",
        "maxTowZone": "55",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "56",
        "maxTowZone": "56",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "57",
        "maxTowZone": "57",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "58",
        "maxTowZone": "58",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "59",
        "maxTowZone": "59",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "60",
        "maxTowZone": "60",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "61",
        "maxTowZone": "61",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "62",
        "maxTowZone": "62",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "63",
        "maxTowZone": "63",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "64",
        "maxTowZone": "64",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "65",
        "maxTowZone": "65",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "66",
        "maxTowZone": "66",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "67",
        "maxTowZone": "67",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "68",
        "maxTowZone": "68",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "69",
        "maxTowZone": "69",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "70",
        "maxTowZone": "70",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "71",
        "maxTowZone": "71",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "72",
        "maxTowZone": "72",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "73",
        "maxTowZone": "73",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "74",
        "maxTowZone": "74",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "75",
        "maxTowZone": "75",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "76",
        "maxTowZone": "76",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "77",
        "maxTowZone": "77",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "78",
        "maxTowZone": "78",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "79",
        "maxTowZone": "79",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "80",
        "maxTowZone": "80",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "81",
        "maxTowZone": "81",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "82",
        "maxTowZone": "82",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "83",
        "maxTowZone": "83",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "84",
        "maxTowZone": "84",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "85",
        "maxTowZone": "85",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "86",
        "maxTowZone": "86",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "87",
        "maxTowZone": "87",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "88",
        "maxTowZone": "88",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "89",
        "maxTowZone": "89",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "90",
        "maxTowZone": "90",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "91",
        "maxTowZone": "91",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "92",
        "maxTowZone": "92",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "93",
        "maxTowZone": "93",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "94",
        "maxTowZone": "94",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "95",
        "maxTowZone": "95",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "96",
        "maxTowZone": "96",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "97",
        "maxTowZone": "97",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "98",
        "maxTowZone": "98",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "99",
        "maxTowZone": "99",
        
        "fee": "0"
    }
]

export const rightService22 = [
    {
      "tripType": "DELIVERY",
      "towType": "Heavy",
      "minTowZone": "1",
      "maxTowZone": "99",
      
      "fee": "25"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "1",
      "maxTowZone": "50",
      
      "fee": "30"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard",
      "minTowZone": "51",
      "maxTowZone": "99",
      
      "fee": "35"
    },
    {
      "tripType": "PICKUP",
      "towType": "Heavy",
      "minTowZone": "1",
      "maxTowZone": "99",
      
      "fee": "40"
    },
]

export const rightService2 = [
    {
        "tripType": "DELIVERY",
        "towType": "Heavy",
        "minTowZone": "1",
        "maxTowZone": "99",
        
        "fee": "25"
      },
    {
        "tripType": "DELIVERY",
        "towType": "Standard",
        "minTowZone": "1",
        "maxTowZone": "15",
        
        "fee": "1"
    },
    {
        "tripType": "DELIVERY",
        "towType": "Standard",
        "minTowZone": "16",
        "maxTowZone": "99",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Heavy",
        "minTowZone": "1",
        "maxTowZone": "99",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "1",
        "maxTowZone": "10",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "11",
        "maxTowZone": "50",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "51",
        "maxTowZone": "90",
        
        "fee": "0"
    },
    {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "91",
        "maxTowZone": "99",
        
        "fee": "0"
    },
]


///this examples are from first PPT
export const leftService3 = [
    ///////////////////ex 1 , 2 for ALL /////////////////////////////////
    // {
    //   "tripType": "PICKUP",
    //   "towType": "ALL",
    //   "minTowZone": "1",
    //   "maxTowZone": "10",
      
    //   "fee": "5"
    // },
    // {
    //   "tripType": "PICKUP",
    //   "towType": "ALL",
    //   "minTowZone": "11",
    //   "maxTowZone": "20",
      
    //   "fee": "30"
    // },
    // {
    //   "tripType": "PICKUP",
    //   "towType": "ALL",
    //   "minTowZone": "21",
    //   "maxTowZone": "99",
      
    //   "fee": "35"
    // },
    ///////////////////////////////ex 3, 4, 5 for ALL//////////////////////////////////////////////
    {
        "tripType": "ALL",
        "towType": "Standard",
        "minTowZone": "1",
        "maxTowZone": "10",
        
        "fee": "5"
      },
      {
        "tripType": "ALL",
        "towType": "Standard",
        "minTowZone": "11",
        "maxTowZone": "20",
        
        "fee": "30"
      },
      {
        "tripType": "ALL",
        "towType": "Standard",
        "minTowZone": "21",
        "maxTowZone": "99",
        
        "fee": "35"
      },
      {
        "tripType": "ALL",
        "towType": "Heavy",
        "minTowZone": "1",
        "maxTowZone": "99",
        
        "fee": "35"
      },
]

export const rightService3 = [

    ///////////////////ex 1 for ALL /////////////////////////////////
    // {
    //     "tripType": "ALL",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "10",
        
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "ALL",
    //     "towType": "Standard",
    //     "minTowZone": "11",
    //     "maxTowZone": "20",
        
    //     "fee": "30"
    //   },
    //   {
    //     "tripType": "ALL",
    //     "towType": "Standard",
    //     "minTowZone": "21",
    //     "maxTowZone": "99",
        
    //     "fee": "35"
    //   },

    ///////////////////ex 2, 3, 4 for ALL /////////////////////////////////

    // {
    //     "tripType": "DELIVERY",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "15",
        
    //     "fee": "1"
    // },
    // {
    //     "tripType": "DELIVERY",
    //     "towType": "Standard",
    //     "minTowZone": "16",
    //     "maxTowZone": "99",
        
    //     "fee": "0"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Heavy",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
        
    //     "fee": "0"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "10",
        
    //     "fee": "0"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": "11",
    //     "maxTowZone": "50",
        
    //     "fee": "0"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": "51",
    //     "maxTowZone": "90",
        
    //     "fee": "0"
    // },
    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": "91",
    //     "maxTowZone": "99",
        
    //     "fee": "0"
    // },
    //////////////////////////////Ex. 5,6 for ALL //////////////////
    {
        "tripType": "PICKUP",
        "towType": "ALL",
        "minTowZone": "1",
        "maxTowZone": "10",
        
        "fee": "10"
      },
      {
        "tripType": "PICKUP",
        "towType": "ALL",
        "minTowZone": "11",
        "maxTowZone": "20",
        
        "fee": "30"
      },
      {
        "tripType": "PICKUP",
        "towType": "ALL",
        "minTowZone": "21",
        "maxTowZone": "99",
        
        "fee": "35"
      },
      {
        "tripType": "DELIVERY",
        "towType": "ALL",
        "minTowZone": "1",
        "maxTowZone": "99",
        
        "fee": "35"
      },
]


export const leftService4 = [
    // {
    //   "tripType": "ALL",
    //   "towType": "ALL",
    //   "minTowZone": "1",
    //   "maxTowZone": "99",
    //   "fee": "5"
    // },
    ///////////////////ex  2 for ALL /////////////////////////////////
    // {
    //   "tripType": "PICKUP",
    //   "towType": "ALL",
    //   "minTowZone": "1",
    //   "maxTowZone": "10",
    //   "fee": "5"
    // },
    // {
    //   "tripType": "PICKUP",
    //   "towType": "ALL",
    //   "minTowZone": "11",
    //   "maxTowZone": "20",
    //   "fee": "30"
    // },
    // {
    //   "tripType": "PICKUP",
    //   "towType": "ALL",
    //   "minTowZone": "21",
    //   "maxTowZone": "99",
    //   "fee": "35"
    // },

    {
        "tripType": "ALL",
        "towType": "Standard",
        "minTowZone": "1",
        "maxTowZone": "10",
        "fee": "10"
      },
      {
        "tripType": "ALL",
        "towType": "Standard",
        "minTowZone": "11",
        "maxTowZone": "20",
        "fee": "30"
      },
      {
        "tripType": "ALL",
        "towType": "Standard",
        "minTowZone": "21",
        "maxTowZone": "99",
        "fee": "35"
      },

    // {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "10",
    //     "fee": "5"
    //   },
    //   {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": "11",
    //     "maxTowZone": "20",
    //     "fee": "35"
    //   },
    //   {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": "21",
    //     "maxTowZone": "99",
    //     "fee": "30"
    //   },

    //   {
    //     "tripType": "ALL",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "abc",
    //     "towType": "ALL",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "DELIVERY",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "ALL",
    //     "towType": "Heavy",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },
]

export const  rightService4 = [
    {
        "tripType": "ALL",
        "towType": "ALL",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "10"
    },
    /////////////////ex 2 for ALL /////////////////////////////////
    // {
    //     "tripType": "ALL",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "10",
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "ALL",
    //     "towType": "Standard",
    //     "minTowZone": "11",
    //     "maxTowZone": "20",
    //     "fee": "20"
    //   },
    //   {
    //     "tripType": "ALL",
    //     "towType": "Standard",
    //     "minTowZone": "21",
    //     "maxTowZone": "99",
    //     "fee": "30"
    //   },
      


      // {
      //   "tripType": "PICKUP",
      //   "towType": "ALL",
      //   "minTowZone": "1",
      //   "maxTowZone": "10",
      //   "fee": "10"
      // },
      // {
      //   "tripType": "PICKUP",
      //   "towType": "ALL",
      //   "minTowZone": "11",
      //   "maxTowZone": "20",
      //   "fee": "20"
      // },
      // {
      //   "tripType": "PICKUP",
      //   "towType": "ALL",
      //   "minTowZone": "21",
      //   "maxTowZone": "99",
      //   "fee": "30"
      // },

    //   {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "10",
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": "11",
    //     "maxTowZone": "20",
    //     "fee": "20"
    //   },
    //   {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": "21",
    //     "maxTowZone": "99",
    //     "fee": "30"
    //   },


    //   {
    //     "tripType": "DELIVERY",
    //     "towType": "Heavy",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },

    //   {
    //     "tripType": "abc",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "DELIVERY",
    //     "towType": "ALL",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "ALL",
    //     "towType": "Heavy",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },

    // {
    //     "tripType": "DELIVERY",
    //     "towType": "Heavy",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "DELIVERY",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },

    //   {
    //     "tripType": "DELIVERY",
    //     "towType": "Long Haul",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "DELIVERY",
    //     "towType": "Medium",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },

    //  {
    //     "tripType": "PICKUP",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "PICKUP",
    //     "towType": "Heavy",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "20"
    //   },
    //     {
    //     "tripType": "PICKUP",
    //     "towType": "Long Haul",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "PICKUP",
    //     "towType": "Medium",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },
      
    //  {
    //     "tripType": "abc",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "abc",
    //     "towType": "Heavy",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "20"
    //   },
    //     {
    //     "tripType": "abc",
    //     "towType": "Long Haul",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "abc",
    //     "towType": "Medium",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "ALL",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "10",
    //     "fee": "5"
    //   },
    //   {
    //     "tripType": "ALL",
    //     "towType": "Standard",
    //     "minTowZone": "11",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "ALL",
    //     "towType": "Medium",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "15"
    //   },
]

export const leftService5 = [
    ///////////////////////////// Ex.1
    // {
    //     "tripType": "DELIVERY",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    // },
    {
      "tripType": "ALL",
      "towType": "ALL",
      "minTowZone": "1",
      "maxTowZone": "99",
      "fee": "5"
    },


    ///////////////////////////// Ex.2
    //   {
    //     "tripType": "ALL",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "10",
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "ALL",
    //     "towType": "Standard",
    //     "minTowZone": "11",
    //     "maxTowZone": "99",
    //     "fee": "20"
    //   },
    //   {
    //     "tripType": "ALL",
    //     "towType": "Medium",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "30"
    //   },
    //   {
    //     "tripType": "DELIVERY",
    //     "towType": "Heavy",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },


    ///////////////////////////// Ex.3
    //   {
    //     "tripType": "DELIVERY",
    //     "towType": "Heavy",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "5"
    //   },
    //   {
    //     "tripType": "DELIVERY",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },

    //   {
    //     "tripType": "DELIVERY",
    //     "towType": "Long Haul",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "15"
    //   },
    //   {
    //     "tripType": "DELIVERY",
    //     "towType": "Medium",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "25"
    //   },
    //   {
    //     "tripType": "abc",
    //     "towType": "Heavy",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "5"
    //   },
    //  {
    //     "tripType": "abc",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },

    //     {
    //     "tripType": "abc",
    //     "towType": "Long Haul",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "15"
    //   },
    //   {
    //     "tripType": "abc",
    //     "towType": "Medium",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "25"
    //   },
    //   {
    //     "tripType": "ALL",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "10",
    //     "fee": "5"
    //   },
    //   {
    //     "tripType": "ALL",
    //     "towType": "Standard",
    //     "minTowZone": "11",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "ALL",
    //     "towType": "Medium",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "15"
    //   },
]

export const  rightService5 = [

    /////////////////////////// Ex.1
    {
        "tripType": "DELIVERY",
        "towType": "Heavy",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "5"
      },
      {
        "tripType": "DELIVERY",
        "towType": "Standard",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "10"
      },

      {
        "tripType": "DELIVERY",
        "towType": "Long Haul",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "15"
      },
      {
        "tripType": "DELIVERY",
        "towType": "Medium",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "20"
      },
      {
        "tripType": "PICKUP",
        "towType": "Heavy",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "5"
      },
     {
        "tripType": "PICKUP",
        "towType": "Standard",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "10"
      },      
      {
        "tripType": "abc",
        "towType": "Heavy",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "5"
      },
      {
        "tripType": "abc",
        "towType": "Standard",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "10"
      },

      {
        "tripType": "abc",
        "towType": "Long Haul",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "15"
      },
      {
        "tripType": "abc",
        "towType": "Medium",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "20"
      },
      {
        "tripType": "ALL",
        "towType": "Standard",
        "minTowZone": "1",
        "maxTowZone": "10",
        "fee": "5"
      },
      {
        "tripType": "ALL",
        "towType": "Standard",
        "minTowZone": "11",
        "maxTowZone": "99",
        "fee": "10"
      },
      {
        "tripType": "ALL",
        "towType": "Medium",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "15"
      },

    ///////////////////////////// Ex.2
    //   {
    //     "tripType": "DELIVERY",
    //     "towType": "Heavy",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "5"
    //   },
    //   {
    //     "tripType": "DELIVERY",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },

    //   {
    //     "tripType": "DELIVERY",
    //     "towType": "Long Haul",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "15"
    //   },
    //   {
    //     "tripType": "DELIVERY",
    //     "towType": "Medium",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "25"
    //   },
    //   {
    //     "tripType": "abc",
    //     "towType": "Heavy",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "5"
    //   },
    //  {
    //     "tripType": "abc",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },

    //     {
    //     "tripType": "abc",
    //     "towType": "Long Haul",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "15"
    //   },
    //   {
    //     "tripType": "abc",
    //     "towType": "Medium",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "25"
    //   },
    //   {
    //     "tripType": "ALL",
    //     "towType": "Standard",
    //     "minTowZone": "1",
    //     "maxTowZone": "10",
    //     "fee": "5"
    //   },
    //   {
    //     "tripType": "ALL",
    //     "towType": "Standard",
    //     "minTowZone": "11",
    //     "maxTowZone": "99",
    //     "fee": "10"
    //   },
    //   {
    //     "tripType": "ALL",
    //     "towType": "Medium",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "15"
    //   },

    /////////////////////////// Ex.3
    // {
    //   "tripType": "ALL",
    //   "towType": "ALL",
    //   "minTowZone": "1",
    //   "maxTowZone": "99",
    //   "fee": "5"
    // },
]


export const leftService6 = [
    ///////////////////////////// Ex.1
    // {
    //     "tripType": "ALL",
    //     "towType": "ALL",
    //     "minTowZone": "1",
    //     "maxTowZone": "99",
    //     "fee": "5"
    // },
    {
        "tripType": "ALL",
        "towType": "Standard",
        "minTowZone": "1",
        "maxTowZone": "10",
        "fee": "10"
      },
      {
        "tripType": "ALL",
        "towType": "Standard",
        "minTowZone": "11",
        "maxTowZone": "99",
        "fee": "20"
      },
      {
        "tripType": "ALL",
        "towType": "Medium",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "30"
      },
      {
        "tripType": "DELIVERY",
        "towType": "Heavy",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "10"
      },
]


export const rightService6 = [
    ///////////////////////////// Ex.1
    {
        "tripType": "DELIVERY",
        "towType": "Heavy",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "5"
      },
      {
        "tripType": "DELIVERY",
        "towType": "Standard",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "10"
      },

      {
        "tripType": "DELIVERY",
        "towType": "Long Haul",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "15"
      },
      {
        "tripType": "DELIVERY",
        "towType": "Medium",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "25"
      },
      {
        "tripType": "abc",
        "towType": "Heavy",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "5"
      },
     {
        "tripType": "abc",
        "towType": "Standard",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "10"
      },

        {
        "tripType": "abc",
        "towType": "Long Haul",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "15"
      },
      {
        "tripType": "abc",
        "towType": "Medium",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "25"
      },
      {
        "tripType": "ALL",
        "towType": "Standard",
        "minTowZone": "1",
        "maxTowZone": "10",
        "fee": "5"
      },
      {
        "tripType": "ALL",
        "towType": "Standard",
        "minTowZone": "11",
        "maxTowZone": "99",
        "fee": "10"
      },
      {
        "tripType": "ALL",
        "towType": "Medium",
        "minTowZone": "1",
        "maxTowZone": "99",
        "fee": "15"
      },

]

export const leftService = [
  {
      "tripType": "PICKUP",
      "towType": "Heavy",
      "minTowZone": "1",
      "maxTowZone": "99",
      "fee": "5"
    },
    {
      "tripType": "PICKUP",
      "towType": "Medium",
      "minTowZone": "1",
      "maxTowZone": "99",
      "fee": "35"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard,Medium",
      "minTowZone": "1",
      "maxTowZone": "30",
      "fee": "30"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard,Medium",
      "minTowZone": "31",
      "maxTowZone": "60",
      "fee": "35"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard,Medium",
      "minTowZone": "61",
      "maxTowZone": "90",
      
      "fee": "35"
    },
    {
      "tripType": "PICKUP",
      "towType": "Standard,Medium",
      "minTowZone": "91",
      "maxTowZone": "99",
      "fee": "35"
    },
    {
      "tripType": "ALL",
      "towType": "ALL",
      "minTowZone": "1",
      "maxTowZone": "10",
      "fee": "35"
    },
    {
      "tripType": "ALL",
      "towType": "ALL",
      "minTowZone": "11",
      "maxTowZone": "50",
      "fee": "35"
    },
    {
      "tripType": "ALL",
      "towType": "ALL",
      "minTowZone": "51",
      "maxTowZone": "99",
      "fee": "35"
    },
]

export const rightService = [
  ///////////////////////////// Ex.1
  {
      "tripType": "DELIVERY",
      "towType": "Heavy",
      "minTowZone": "1",
      "maxTowZone": "99",
      "fee": "5"
    },
    {
      "tripType": "DELIVERY",
      "towType": "Standard",
      "minTowZone": "1",
      "maxTowZone": "99",
      "fee": "10"
    },

    {
      "tripType": "DELIVERY",
      "towType": "Long Haul",
      "minTowZone": "1",
      "maxTowZone": "99",
      "fee": "15"
    },
    {
      "tripType": "DELIVERY",
      "towType": "Medium",
      "minTowZone": "1",
      "maxTowZone": "99",
      "fee": "25"
    },
    {
      "tripType": "abc",
      "towType": "Heavy",
      "minTowZone": "1",
      "maxTowZone": "99",
      "fee": "5"
    },
   {
      "tripType": "abc",
      "towType": "Standard",
      "minTowZone": "1",
      "maxTowZone": "99",
      "fee": "10"
    },

      {
      "tripType": "abc",
      "towType": "Long Haul",
      "minTowZone": "1",
      "maxTowZone": "99",
      "fee": "15"
    },
    {
      "tripType": "abc",
      "towType": "Medium",
      "minTowZone": "1",
      "maxTowZone": "99",
      "fee": "25"
    },
    {
      "tripType": "ALL",
      "towType": "Standard",
      "minTowZone": "1",
      "maxTowZone": "10",
      "fee": "5"
    },
    {
      "tripType": "ALL",
      "towType": "Standard",
      "minTowZone": "11",
      "maxTowZone": "99",
      "fee": "10"
    },
    {
      "tripType": "ALL",
      "towType": "Medium",
      "minTowZone": "1",
      "maxTowZone": "99",
      "fee": "15"
    },

]