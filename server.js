const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const mongoClient = new MongoClient('mongodb://localhost:27017',{userNewUrlParser : true});
const urlencodedParser = bodyParser.urlencoded({extended: false});
const cors = require('cors');

const PORT = process.env.port || 8080;

app.use(cors());

// Получение последних настроек
app.get("/getsettings",(req,res,next)=>{
  mongoClient.connect((err,client)=>{
    if(err){
      res.send("Error connect db");
    }

    let collection = client.db("savedata").collection("saveform");

    collection.findOne((err, result)=>{
      if(err){
        res.send("Error find data in db");
      }
      res.send(result);
    });
  });
});


app.post("/add",urlencodedParser,(req,res,next)=>{
  let data = {
    ethernet_settings:{
      ipAddress:{
        default: false,
        settingsIpAddress:{
          ipaddress: 'ipaddress',
          subnetMask: 'subnetMask',
          defaultGateway: 'defaultGateway'
        }
      },
      serverDNS:{
        default: false,
        settingsDNS:{
          prefferredDNS: 'prefferredDNS',
          alternativedDNS: ''
        }
      }
    },
    wireless_settings:{
      enablewifi: false,
      settings:{
        networkName: 'networkName',
        enableSecurity:{
          checkboxEnableSecurity: false,
          inputSecurityKey: ''
        },
        wifiIpAddress:{
          default: true,
          settingsIpAddress:{
            ipaddress: '',
            subnetMask: '',
            defaultGateway: ''
          }
        },
        wifiDNSServer:{
          default: false,
          settingsDNS:{
            prefferredDNS: 'prefferredDNS',
            alternativedDNS: 'alternativedDNS'
          }
        }
      }
    }
  }

  let collection = client.db("savedata").collection("saveform");

  collection.insert(data,(err,result)=>{
    if(err){
      res.send("Error insert");
    }
    res.send("zbs");
  });
})

app.listen(PORT, (err)=>{
  if(err){
    console.log("Error listen");
  }
  console.log(`Server ON. Port: ${PORT}`);
})
;
