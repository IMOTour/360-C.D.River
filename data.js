var APP_DATA = {
  "scenes": [
    {
      "id": "0-main-door",
      "name": "Main door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.4132320674370504,
        "pitch": -0.044552582117566075,
        "fov": 1.3391146997799313
      },
      "linkHotspots": [
        {
          "yaw": 2.738414802275095,
          "pitch": 0.1461038948605946,
          "rotation": 2.356194490192345,
          "target": "8-side-view"
        },
        {
          "yaw": -2.3811617958398514,
          "pitch": -0.10829849308225015,
          "rotation": 0,
          "target": "1-sittingdinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sittingdinning",
      "name": "Sitting/Dinning",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.3990035244218433,
        "pitch": 0.2736247455965035,
        "fov": 1.3953913312833486
      },
      "linkHotspots": [
        {
          "yaw": 1.6526657662706885,
          "pitch": 0.5480418409926706,
          "rotation": 13.351768777756625,
          "target": "0-main-door"
        },
        {
          "yaw": -3.0542093198622577,
          "pitch": 0.15409701662273712,
          "rotation": 3.9269908169872414,
          "target": "5-kitchen"
        },
        {
          "yaw": -2.6536417184881103,
          "pitch": 0.014749104055811202,
          "rotation": 5.497787143782138,
          "target": "6-balcony"
        },
        {
          "yaw": 0.6974192182500527,
          "pitch": 0.053182859278983585,
          "rotation": 0.7853981633974483,
          "target": "2-bedroom-1"
        },
        {
          "yaw": 0.47411453607555387,
          "pitch": -0.02216660131491821,
          "rotation": 4.71238898038469,
          "target": "3-wc"
        },
        {
          "yaw": -0.17344349805899562,
          "pitch": -0.04867587106035742,
          "rotation": 4.71238898038469,
          "target": "4-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.38474028942015437,
        "pitch": 0.5616773233837336,
        "fov": 1.3953913312833486
      },
      "linkHotspots": [
        {
          "yaw": -0.517828022010864,
          "pitch": 0.45480734435034087,
          "rotation": 3.141592653589793,
          "target": "1-sittingdinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wc",
      "name": "WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.7533930745096633,
        "pitch": 0.4016423347315907,
        "fov": 1.3953913312833486
      },
      "linkHotspots": [
        {
          "yaw": -1.1192628854561022,
          "pitch": 0.7069029407382423,
          "rotation": 0,
          "target": "1-sittingdinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.0297608935712015,
        "pitch": 0.25302093494694944,
        "fov": 1.3953913312833486
      },
      "linkHotspots": [
        {
          "yaw": 0.3122412156928558,
          "pitch": 0.11519093082315024,
          "rotation": 4.71238898038469,
          "target": "1-sittingdinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.29632767163963436,
        "pitch": 0.21640639352833446,
        "fov": 1.3953913312833486
      },
      "linkHotspots": [
        {
          "yaw": -1.6283705922128267,
          "pitch": 0.4582277092561373,
          "rotation": 3.141592653589793,
          "target": "1-sittingdinning"
        },
        {
          "yaw": 2.305091705864066,
          "pitch": 0.014084895002188347,
          "rotation": 4.71238898038469,
          "target": "6-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.7085331481072874,
        "pitch": 0.15760004301353625,
        "fov": 1.3953913312833486
      },
      "linkHotspots": [
        {
          "yaw": 3.107716656441255,
          "pitch": 0.6476649243954569,
          "rotation": 3.141592653589793,
          "target": "8-side-view"
        },
        {
          "yaw": 0.16666418341041656,
          "pitch": 0.5462884195495672,
          "rotation": 2.356194490192345,
          "target": "5-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-basement",
      "name": "Basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.7796369717087526,
        "pitch": 0.3255734343540748,
        "fov": 1.3953913312833486
      },
      "linkHotspots": [
        {
          "yaw": -0.2889803758876255,
          "pitch": -0.03966736369978108,
          "rotation": 0.7853981633974483,
          "target": "8-side-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-side-view",
      "name": "Side view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.22917901679542219,
        "pitch": -0.11052604604224925,
        "fov": 1.3953913312833486
      },
      "linkHotspots": [
        {
          "yaw": 0.7119947948417664,
          "pitch": 0.04495593999329017,
          "rotation": 3.141592653589793,
          "target": "0-main-door"
        },
        {
          "yaw": 0.08313604179107692,
          "pitch": 0.04286659306344731,
          "rotation": 0,
          "target": "7-basement"
        },
        {
          "yaw": -0.44085804461201406,
          "pitch": -0.45085153365322306,
          "rotation": 2.356194490192345,
          "target": "6-balcony"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
