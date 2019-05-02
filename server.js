const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const mongoClient = new MongoClient('mongodb://localhost:27017',{userNewUrlParser : true});
const urlencodedParser = bodyParser.urlencoded({extended: false});
const cors = require('cors');

const PORT = process.env.port || 8080;

app.use(cors());

const listWirelessNetwork =  [{
    "favorite": true,
    "name": "atari98",
    "strength": 32,
    "security": ["psk"]
  },{
    "favorite": false,
    "name": "olson",
    "strength": 91,
    "security": ["psk"]
  },{
    "favorite": false,
    "name": "1990Wiley",
    "strength": 64,
    "security": ["psk", "wps"]
  },{
    "favorite": false,
    "name": "Guzman",
    "strength": 12,
    "security": ["wps"]
  },{
    "favorite": true,
    "name": "KPetersen86",
    "strength": 95,
    "security": ["wps"]
  },{
    "favorite": false,
    "name": "GillespIE",
    "strength": 84,
    "security": ["psk"]
  },{
    "favorite": false,
    "name": "patton",
    "strength": 40,
    "security": ["psk", "wps"]
  }];





// Получение последних настроек
app.get("/getsettings",(req,res,next)=>{
  mongoClient.connect((err,client)=>{
    if(err){
      res.send("Error connect db");
    }
    let collection = client.db("savedata").collection("saveform");

    collection.find().toArray((err, result)=>{
      if(err){
        res.send("Error find data in db");
      }
      let send_result = result[result.length-1];
      res.send(send_result);
    });
  });
});

//Имитация сетей
app.get("/",(req,res,next)=>{
  let sendlistWirelessNetwork = [];
  if(req.query.getlistwifi){
    for(let i = 0; i < 4; i++){
      sendlistWirelessNetwork.push(listWirelessNetwork[Math.floor(Math.random()*listWirelessNetwork.length)]);
    }

    sendlistWirelessNetwork.sort((a,b)=>{
      if(a.strength < b.strength) {return 1} else if(a.strength > b.strength) {return -1} else {return 0};
    })
    sendlistWirelessNetwork.sort((a,b)=>{
      if(a.favorite == false && b.favorite != false) {return 1} else if(a.favorite == b.favorite) {return 0};
    })
    res.send(sendlistWirelessNetwork)
  }
})

app.post("/add",urlencodedParser,(req,res,next)=>{
  mongoClient.connect((err, client)=>{
    if(err){
      res.send("Error connect db")
    }
    let collection = client.db("savedata").collection("saveform");
    let bodyObj = JSON.parse(req.body.obj);

    let data = {
      ethernet_settings:{
        ipAddress:{
          default: bodyObj.ethernet_settings.ipAddress.default,
          settingsIpAddress:{
            ipaddress: bodyObj.ethernet_settings.ipAddress.settingsIpAddress.ipaddress,
            subnetMask: bodyObj.ethernet_settings.ipAddress.settingsIpAddress.subnetMask,
            defaultGateway: bodyObj.ethernet_settings.ipAddress.settingsIpAddress.defaultGateway
          }
        },
        serverDNS:{
          default: bodyObj.ethernet_settings.serverDNS.default,
          settingsDNS:{
            prefferredDNS: bodyObj.ethernet_settings.serverDNS.settingsDNS.prefferredDNS,
            alternativedDNS: bodyObj.ethernet_settings.serverDNS.settingsDNS.alternativedDNS
          }
        }
      },
      wireless_settings:{
        enablewifi: bodyObj.wireless_settings.enablewifi,
        settings:{
          networkName: bodyObj.wireless_settings.settings.networkName,
          enableSecurity:{
            checkboxEnableSecurity: bodyObj.wireless_settings.settings.enableSecurity.checkboxEnableSecurity,
            inputSecurityKey: bodyObj.wireless_settings.settings.enableSecurity.inputSecurityKey
          },
          wifiIpAddress:{
            default: bodyObj.wireless_settings.settings.wifiIpAddress.default,
            settingsIpAddress:{
              ipaddress: bodyObj.wireless_settings.settings.wifiIpAddress.settingsIpAddress.ipaddress,
              subnetMask: bodyObj.wireless_settings.settings.wifiIpAddress.settingsIpAddress.subnetMask,
              defaultGateway: bodyObj.wireless_settings.settings.wifiIpAddress.settingsIpAddress.defaultGateway
            }
          },
          wifiDNSServer:{
            default: bodyObj.wireless_settings.settings.wifiDNSServer.default,
            settingsDNS:{
              prefferredDNS:  bodyObj.wireless_settings.settings.wifiDNSServer.settingsDNS.prefferredDNS,
              alternativedDNS:  bodyObj.wireless_settings.settings.wifiDNSServer.settingsDNS.alternativedDNS
            }
          }
        }
      }
    }

    console.log(data)
    collection.insert(data,(err,result)=>{
      if(err){
        res.send("Error insert");
      }
      res.send("ok");
    });
  })
})

app.listen(PORT, (err)=>{
  if(err){
    console.log("Error listen");
  }
  console.log(`Server ON. Port: ${PORT}`);
})
;
