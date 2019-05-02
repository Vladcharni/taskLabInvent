import React from 'react';
import {FormLeft} from './FormLeft';
import {FormRight} from './FormRight';

export class Form extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      ethernet_settings:{
        ipAddress:{
          default: true,
          settingsIpAddress:{
            ipaddress: '',
            subnetMask: '',
            defaultGateway: ''
          }
        },
        serverDNS:{
          default: true,
          settingsDNS:{
            prefferredDNS: '',
            alternativedDNS: ''
          }
        }
      },
      wireless_settings:{
        enablewifi: false,
        settings:{
          networkName: '',
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
            default: true,
            settingsDNS:{
              prefferredDNS: '',
              alternativedDNS: ''
            }
          }
        }
      },
      listWirelessNetwork: []
    }
    this.onClickRadioUseIPAddress = this.onClickRadioUseIPAddress.bind(this);
    this.onClickRadioDNSServer = this.onClickRadioDNSServer.bind(this);
    this.onChangeEthernetSetting = this.onChangeEthernetSetting.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onChangeWirelessSetting = this.onChangeWirelessSetting.bind(this);

    this.onLoadWirelessNetwork = this.onLoadWirelessNetwork.bind(this);
  }

  onClickRadioUseIPAddress(e,input1,input2,input3,input4){

    let state_defaultDNS  = this.state.ethernet_settings.serverDNS.default;
    let state_prefferredDNS = this.state.ethernet_settings.serverDNS.settingsDNS.prefferredDNS;
    let state_alternativedDNS = this.state.ethernet_settings.serverDNS.settingsDNS.alternativedDNS;

    if(e == "default_false"){
      input1.disabled = false;
      input2.disabled = false;
      input3.disabled = false;
      return
    }
    if(e == "ipadress1"){
      input1.disabled = true;
      input2.disabled = true;
      input3.disabled = true;

      this.setState({
        ethernet_settings:{
          ipAddress:{
            default: true,
            settingsIpAddress:{
              ipaddress: '',
              subnetMask: '',
              defaultGateway: ''
            }
          },
          serverDNS:{
            default: state_defaultDNS,
            settingsDNS:{
              prefferredDNS: state_prefferredDNS,
              alternativedDNS: state_alternativedDNS
            }
          }
        }
      });

      return
    } else if(e == "ipadress2"){

      this.setState({
        ethernet_settings:{
          ipAddress:{
            default: false,
            settingsIpAddress:{
              ipaddress: '',
              subnetMask: '',
              defaultGateway: ''
            }
          },
          serverDNS:{
            default: state_defaultDNS,
            settingsDNS:{
              prefferredDNS: state_prefferredDNS,
              alternativedDNS: state_alternativedDNS
            }
          }
        }
      });

      input1.disabled = false;
      input2.disabled = false;
      input3.disabled = false;

    }
  }

  onClickRadioDNSServer(e,input1,input2){
    let state_defaultIPAddress = this.state.ethernet_settings.ipAddress.default;
    let state_IpAddress = this.state.ethernet_settings.ipAddress.settingsIpAddress.ipaddress;
    let state_SubnetMask = this.state.ethernet_settings.ipAddress.settingsIpAddress.subnetMask;
    let state_DefaultGateway = this.state.ethernet_settings.ipAddress.settingsIpAddress.defaultGateway;

    if(e == "default_false"){
      input1.disabled = false;
      input2.disabled = false;
      return
    }

    if(e == "serveds1"){
      this.setState({
        ethernet_settings:{
          ipAddress:{
            default: state_defaultIPAddress,
            settingsIpAddress:{
              ipaddress: state_IpAddress,
              subnetMask: state_SubnetMask,
              defaultGateway: state_DefaultGateway
            }
          },
          serverDNS:{
            default: true,
            settingsDNS:{
              prefferredDNS: '',
              alternativedDNS: ''
            }
          }
        }
      });

      input1.disabled = true;
      input2.disabled = true;
    } else {
      this.setState({
        ethernet_settings:{
          ipAddress:{
            default: state_defaultIPAddress,
            settingsIpAddress:{
              ipaddress: state_IpAddress,
              subnetMask: state_SubnetMask,
              defaultGateway: state_DefaultGateway
            }
          },
          serverDNS:{
            default: false,
            settingsDNS:{
              prefferredDNS: '',
              alternativedDNS: ''
            }
          }
        }
      });

      input1.disabled = false;
      input2.disabled = false;
    }
  }

  onChangeEthernetSetting(e,setting){
    let state_defaultIPAddress = this.state.ethernet_settings.ipAddress.default;
    let state_IpAddress = this.state.ethernet_settings.ipAddress.settingsIpAddress.ipaddress;
    let state_SubnetMask = this.state.ethernet_settings.ipAddress.settingsIpAddress.subnetMask;
    let state_DefaultGateway = this.state.ethernet_settings.ipAddress.settingsIpAddress.defaultGateway;

    let state_defaultDNS  = this.state.ethernet_settings.serverDNS.default;
    let state_prefferredDNS = this.state.ethernet_settings.serverDNS.settingsDNS.prefferredDNS;
    let state_alternativedDNS = this.state.ethernet_settings.serverDNS.settingsDNS.alternativedDNS;

    if(setting.slice(0,-1) == 'ipSetting'){
      if(setting == 'ipSetting1'){
        this.setState({
          ethernet_settings:{
            ipAddress:{
              default: state_defaultIPAddress,
              settingsIpAddress:{
                ipaddress: e.target.value,
                subnetMask: state_SubnetMask,
                defaultGateway: state_DefaultGateway
              }
            },
            serverDNS:{
              default: state_defaultDNS,
              settingsDNS:{
                prefferredDNS: state_prefferredDNS,
                alternativedDNS: state_alternativedDNS
              }
            }
          }
        })
      } else if(setting == 'ipSetting2'){
        this.setState({
          ethernet_settings:{
            ipAddress:{
              default: state_defaultIPAddress,
              settingsIpAddress:{
                ipaddress: state_IpAddress,
                subnetMask: e.target.value,
                defaultGateway: state_DefaultGateway
              }
            },
            serverDNS:{
              default: state_defaultDNS,
              settingsDNS:{
                prefferredDNS: state_prefferredDNS,
                alternativedDNS: state_alternativedDNS
              }
            }
          }
        })
      } else if(setting == 'ipSetting3'){
        this.setState({
          ethernet_settings:{
            ipAddress:{
              default: state_defaultIPAddress,
              settingsIpAddress:{
                ipaddress: state_IpAddress,
                subnetMask: state_SubnetMask,
                defaultGateway: e.target.value
              }
            },
            serverDNS:{
              default: state_defaultDNS,
              settingsDNS:{
                prefferredDNS: state_prefferredDNS,
                alternativedDNS: state_alternativedDNS
              }
            }
          }
        })
      }
    }

    if(setting.slice(0,-1) == 'serverDNSSetting'){
      if(setting == 'serverDNSSetting1'){
        this.setState({
          ethernet_settings:{
            ipAddress:{
              default: state_defaultIPAddress,
              settingsIpAddress:{
                ipaddress: state_IpAddress,
                subnetMask: state_SubnetMask,
                defaultGateway: state_DefaultGateway
              }
            },
            serverDNS:{
              default: state_defaultDNS,
              settingsDNS:{
                prefferredDNS: e.target.value,
                alternativedDNS: state_alternativedDNS
              }
            }
          }
        })
      } else if(setting == 'serverDNSSetting2'){
        this.setState({
          ethernet_settings:{
            ipAddress:{
              default: state_defaultIPAddress,
              settingsIpAddress:{
                ipaddress: state_IpAddress,
                subnetMask: state_SubnetMask,
                defaultGateway: state_DefaultGateway
              }
            },
            serverDNS:{
              default: state_defaultDNS,
              settingsDNS:{
                prefferredDNS: state_prefferredDNS,
                alternativedDNS: e.target.value
              }
            }
          }
        })
      }
    }
  }

  onChangeWirelessSetting(e){
    let state_enablewifi = this.state.wireless_settings.enablewifi;
    let state_checkboxEnableSecurity = this.state.wireless_settings.settings.enableSecurity.checkboxEnableSecurity;
    let state_defaultIPAddress = this.state.wireless_settings.settings.wifiIpAddress.default;
    let state_state_defaultDNS = this.state.wireless_settings.settings.wifiDNSServer.default;

    let state_networkName = this.state.wireless_settings.settings.networkName;
    let state_inputSecurityKey = this.state.wireless_settings.settings.enableSecurity.inputSecurityKey;
    let state_ipaddress = this.state.wireless_settings.settings.wifiIpAddress.settingsIpAddress.ipaddress;
    let state_subnetMask = this.state.wireless_settings.settings.wifiIpAddress.settingsIpAddress.subnetMask;
    let state_defaultGateway = this.state.wireless_settings.settings.wifiIpAddress.settingsIpAddress.defaultGateway;
    let state_prefferredDNS = this.state.wireless_settings.settings.wifiDNSServer.settingsDNS.prefferredDNS;
    let state_alternativedDNS = this.state.wireless_settings.settings.wifiDNSServer.settingsDNS.alternativedDNS;

    switch(e.target.id){
        case "enablewifi":
          let check = e.target.checked;
          console.log(check)
          this.setState({
            wireless_settings:{
              enablewifi: check,
              settings:{
                networkName: '',
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
                  default: true,
                  settingsDNS:{
                    prefferredDNS: '',
                    alternativedDNS: ''
                  }
                }
              }
            }
          })
          break;
        case "networkname":
          if(e.target.id == 'networkname' && e.target.value != ''){
            this.setState({
              wireless_settings:{
                enablewifi: state_enablewifi,
                settings:{
                  networkName: e.target.value,
                  enableSecurity:{
                    checkboxEnableSecurity: state_checkboxEnableSecurity,
                    inputSecurityKey: state_inputSecurityKey
                  },
                  wifiIpAddress:{
                    default: state_defaultIPAddress,
                    settingsIpAddress:{
                      ipaddress: state_ipaddress,
                      subnetMask: state_subnetMask,
                      defaultGateway: state_defaultGateway
                    }
                  },
                  wifiDNSServer:{
                    default: state_state_defaultDNS,
                    settingsDNS:{
                      prefferredDNS: state_prefferredDNS,
                      alternativedDNS: state_alternativedDNS
                    }
                  }
                }
              }
            })
          }
          break;
        case "enableWifiSecurity":
          let enableWifiSecurityCheck = e.target.checked;
          let enableWifiSecurityCheck_Input = enableWifiSecurityCheck ? state_inputSecurityKey : '';
          this.setState({
            wireless_settings:{
              enablewifi: state_enablewifi,
              settings:{
                networkName: state_networkName,
                enableSecurity:{
                  checkboxEnableSecurity: enableWifiSecurityCheck,
                  inputSecurityKey: enableWifiSecurityCheck_Input
                },
                wifiIpAddress:{
                  default: state_defaultIPAddress,
                  settingsIpAddress:{
                    ipaddress: state_ipaddress,
                    subnetMask: state_subnetMask,
                    defaultGateway: state_defaultGateway
                  }
                },
                wifiDNSServer:{
                  default: state_state_defaultDNS,
                  settingsDNS:{
                    prefferredDNS: state_prefferredDNS,
                    alternativedDNS: state_alternativedDNS
                  }
                }
              }
            }
          })
          break;
        case "securityKey":
          this.setState({
            wireless_settings:{
              enablewifi: state_enablewifi,
              settings:{
                networkName: state_networkName,
                enableSecurity:{
                  checkboxEnableSecurity: state_checkboxEnableSecurity,
                  inputSecurityKey: e.target.value
                },
                wifiIpAddress:{
                  default: state_defaultIPAddress,
                  settingsIpAddress:{
                    ipaddress: state_ipaddress,
                    subnetMask: state_subnetMask,
                    defaultGateway: state_defaultGateway
                  }
                },
                wifiDNSServer:{
                  default: state_state_defaultDNS,
                  settingsDNS:{
                    prefferredDNS: state_prefferredDNS,
                    alternativedDNS: state_alternativedDNS
                  }
                }
              }
            }
          })
          break;
        case "ipaddresswifi1":
          this.setState({
            wireless_settings:{
              enablewifi: state_enablewifi,
              settings:{
                networkName: state_networkName,
                enableSecurity:{
                  checkboxEnableSecurity: state_checkboxEnableSecurity,
                  inputSecurityKey: state_inputSecurityKey
                },
                wifiIpAddress:{
                  default: e.target.value,
                  settingsIpAddress:{
                    ipaddress: '',
                    subnetMask: '',
                    defaultGateway: ''
                  }
                },
                wifiDNSServer:{
                  default: state_state_defaultDNS,
                  settingsDNS:{
                    prefferredDNS: state_prefferredDNS,
                    alternativedDNS: state_alternativedDNS
                  }
                }
              }
            }
          })
          break;
        case "ipaddresswifi2":
          this.setState({
            wireless_settings:{
              enablewifi: state_enablewifi,
              settings:{
                networkName: state_networkName,
                enableSecurity:{
                  checkboxEnableSecurity: state_checkboxEnableSecurity,
                  inputSecurityKey: state_inputSecurityKey
                },
                wifiIpAddress:{
                  default: !e.target.value,
                  settingsIpAddress:{
                    ipaddress: state_ipaddress,
                    subnetMask: state_subnetMask,
                    defaultGateway: state_defaultGateway
                  }
                },
                wifiDNSServer:{
                  default: state_state_defaultDNS,
                  settingsDNS:{
                    prefferredDNS: state_prefferredDNS,
                    alternativedDNS: state_alternativedDNS
                  }
                }
              }
            }
          })
          break;
        case "ipSetting1":
          this.setState({
            wireless_settings:{
              enablewifi: state_enablewifi,
              settings:{
                networkName: state_networkName,
                enableSecurity:{
                  checkboxEnableSecurity: state_checkboxEnableSecurity,
                  inputSecurityKey: state_inputSecurityKey
                },
                wifiIpAddress:{
                  default: state_defaultIPAddress,
                  settingsIpAddress:{
                    ipaddress: e.target.value,
                    subnetMask: state_subnetMask,
                    defaultGateway: state_defaultGateway
                  }
                },
                wifiDNSServer:{
                  default: state_state_defaultDNS,
                  settingsDNS:{
                    prefferredDNS: state_prefferredDNS,
                    alternativedDNS: state_alternativedDNS
                  }
                }
              }
            }
          })
          break;
        case "ipSetting2":
          this.setState({
            wireless_settings:{
              enablewifi: state_enablewifi,
              settings:{
                networkName: state_networkName,
                enableSecurity:{
                  checkboxEnableSecurity: state_checkboxEnableSecurity,
                  inputSecurityKey: state_inputSecurityKey
                },
                wifiIpAddress:{
                  default: state_defaultIPAddress,
                  settingsIpAddress:{
                    ipaddress: state_ipaddress,
                    subnetMask: e.target.value,
                    defaultGateway: state_defaultGateway
                  }
                },
                wifiDNSServer:{
                  default: state_state_defaultDNS,
                  settingsDNS:{
                    prefferredDNS: state_prefferredDNS,
                    alternativedDNS: state_alternativedDNS
                  }
                }
              }
            }
          })
          break;
        case "ipSetting3":
          this.setState({
            wireless_settings:{
              enablewifi: state_enablewifi,
              settings:{
                networkName: state_networkName,
                enableSecurity:{
                  checkboxEnableSecurity: state_checkboxEnableSecurity,
                  inputSecurityKey: state_inputSecurityKey
                },
                wifiIpAddress:{
                  default: state_defaultIPAddress,
                  settingsIpAddress:{
                    ipaddress: state_ipaddress,
                    subnetMask: state_subnetMask,
                    defaultGateway: e.target.value
                  }
                },
                wifiDNSServer:{
                  default: state_state_defaultDNS,
                  settingsDNS:{
                    prefferredDNS: state_prefferredDNS,
                    alternativedDNS: state_alternativedDNS
                  }
                }
              }
            }
          })
          break;
        case "servedswifi1":
          this.setState({
            wireless_settings:{
              enablewifi: state_enablewifi,
              settings:{
                networkName: state_networkName,
                enableSecurity:{
                  checkboxEnableSecurity: state_checkboxEnableSecurity,
                  inputSecurityKey: state_inputSecurityKey
                },
                wifiIpAddress:{
                  default: state_defaultIPAddress,
                  settingsIpAddress:{
                    ipaddress: state_ipaddress,
                    subnetMask: state_subnetMask,
                    defaultGateway: state_defaultGateway
                  }
                },
                wifiDNSServer:{
                  default: e.target.checked,
                  settingsDNS:{
                    prefferredDNS: '',
                    alternativedDNS: ''
                  }
                }
              }
            }
          })
          break;
        case "servedswifi2":
          this.setState({
            wireless_settings:{
              enablewifi: state_enablewifi,
              settings:{
                networkName: state_networkName,
                enableSecurity:{
                  checkboxEnableSecurity: state_checkboxEnableSecurity,
                  inputSecurityKey: state_inputSecurityKey
                },
                wifiIpAddress:{
                  default: state_defaultIPAddress,
                  settingsIpAddress:{
                    ipaddress: state_ipaddress,
                    subnetMask: state_subnetMask,
                    defaultGateway: state_defaultGateway
                  }
                },
                wifiDNSServer:{
                  default: !e.target.checked,
                  settingsDNS:{
                    prefferredDNS: state_prefferredDNS,
                    alternativedDNS: state_alternativedDNS
                  }
                }
              }
            }
          })
          break;
        case "serverDNSSetting1":
          this.setState({
            wireless_settings:{
              enablewifi: state_enablewifi,
              settings:{
                networkName: state_networkName,
                enableSecurity:{
                  checkboxEnableSecurity: state_checkboxEnableSecurity,
                  inputSecurityKey: state_inputSecurityKey
                },
                wifiIpAddress:{
                  default: state_defaultIPAddress,
                  settingsIpAddress:{
                    ipaddress: state_ipaddress,
                    subnetMask: state_subnetMask,
                    defaultGateway: state_defaultGateway
                  }
                },
                wifiDNSServer:{
                  default: state_state_defaultDNS,
                  settingsDNS:{
                    prefferredDNS: e.target.value,
                    alternativedDNS: state_alternativedDNS
                  }
                }
              }
            }
          })
          break;
        case "serverDNSSetting2":
          this.setState({
            wireless_settings:{
              enablewifi: state_enablewifi,
              settings:{
                networkName: state_networkName,
                enableSecurity:{
                  checkboxEnableSecurity: state_checkboxEnableSecurity,
                  inputSecurityKey: state_inputSecurityKey
                },
                wifiIpAddress:{
                  default: state_defaultIPAddress,
                  settingsIpAddress:{
                    ipaddress: state_ipaddress,
                    subnetMask: state_subnetMask,
                    defaultGateway: state_defaultGateway
                  }
                },
                wifiDNSServer:{
                  default: state_state_defaultDNS,
                  settingsDNS:{
                    prefferredDNS: state_prefferredDNS,
                    alternativedDNS: e.target.value
                  }
                }
              }
            }
          })
          break;
        default:
          break;
      }
  }

  componentDidMount(){
    fetch("http://localhost:8080/getsettings").then(response => response.json())
    .then(jsonResponse => {
      this.setState({
        wireless_settings:{
          enablewifi: jsonResponse.wireless_settings.enablewifi,
          settings:{
            networkName: '',
            enableSecurity:{
              checkboxEnableSecurity: jsonResponse.wireless_settings.settings.enableSecurity.checkboxEnableSecurity,
              inputSecurityKey: jsonResponse.wireless_settings.settings.enableSecurity.inputSecurityKey
            },
            wifiIpAddress:{
              default: jsonResponse.wireless_settings.settings.wifiIpAddress.default || true,
              settingsIpAddress:{
                ipaddress: jsonResponse.wireless_settings.settings.wifiIpAddress.settingsIpAddress.ipaddress,
                subnetMask: jsonResponse.wireless_settings.settings.wifiIpAddress.settingsIpAddress.subnetMask,
                defaultGateway: jsonResponse.wireless_settings.settings.wifiIpAddress.settingsIpAddress.defaultGateway
              }
            },
            wifiDNSServer:{
              default: jsonResponse.wireless_settings.settings.wifiDNSServer.default || true,
              settingsDNS:{
                prefferredDNS: jsonResponse.wireless_settings.settings.wifiDNSServer.settingsDNS.prefferredDNS,
                alternativedDNS: jsonResponse.wireless_settings.settings.wifiDNSServer.settingsDNS.alternativedDNS
              }
            }
          }
        },
        ethernet_settings:{
          ipAddress:{
            default:  jsonResponse.ethernet_settings.ipAddress.default,
            settingsIpAddress:{
              ipaddress: jsonResponse.ethernet_settings.ipAddress.settingsIpAddress.ipaddress,
              subnetMask: jsonResponse.ethernet_settings.ipAddress.settingsIpAddress.subnetMask,
              defaultGateway: jsonResponse.ethernet_settings.ipAddress.settingsIpAddress.defaultGateway
            }
          },
          serverDNS:{
            default: jsonResponse.ethernet_settings.serverDNS.default,
            settingsDNS:{
              prefferredDNS:  jsonResponse.ethernet_settings.serverDNS.settingsDNS.prefferredDNS,
              alternativedDNS: jsonResponse.ethernet_settings.serverDNS.settingsDNS.alternativedDNS
            }
          }
        }
      })
      console.log(this.state);
    })
    .catch(err => console.log(err.message));
  }

  onLoadWirelessNetwork(e){
    fetch("http://localhost:8080?getlistwifi=list")
    .then(response => response.json())
    .then(jsonResponse => {
      this.setState({
        listWirelessNetwork: jsonResponse
      })
    })
  }

  onSave(){

    let send_TRUTH = true;

    if(!this.state.ethernet_settings.ipAddress.default){
      if(!this.state.ethernet_settings.ipAddress.settingsIpAddress.ipaddress){
        send_TRUTH = false;
      }
      if(!this.state.ethernet_settings.ipAddress.settingsIpAddress.subnetMask){
        send_TRUTH = false;
      }
    }

    if(!this.state.ethernet_settings.serverDNS.default){
      if(!this.state.ethernet_settings.serverDNS.settingsDNS.prefferredDNS){
        send_TRUTH = false;
      }
    }

    if(this.state.wireless_settings.enablewifi){
      if(!this.state.wireless_settings.settings.networkName){
        send_TRUTH = false;
      }

      if(this.state.wireless_settings.settings.enableSecurity.checkboxEnableSecurity && !this.state.wireless_settings.settings.enableSecurity.inputSecurityKey){
        send_TRUTH = false;
      }

      if(!this.state.wireless_settings.settings.wifiIpAddress.default){
        if(!this.state.wireless_settings.settings.wifiIpAddress.settingsIpAddress.ipaddress){
          send_TRUTH = false;
        }
        if(!this.state.wireless_settings.settings.wifiIpAddress.settingsIpAddress.subnetMask){
          send_TRUTH = false;
        }
      }

      if(!this.state.wireless_settings.settings.wifiDNSServer.default){
        if(!this.state.wireless_settings.settings.wifiDNSServer.settingsDNS.prefferredDNS){
          send_TRUTH = false;
        }
      }
    }

    if(!send_TRUTH){
      this.btnSendSave.style.border = "3px solid red";
      alert("Заполните поля со звездочкой");
    }

    let data = {
      ethernet_settings:{
        ipAddress:{
          default: this.state.ethernet_settings.ipAddress.default,
          settingsIpAddress:{
            ipaddress: this.state.ethernet_settings.ipAddress.settingsIpAddress.ipaddress,
            subnetMask: this.state.ethernet_settings.ipAddress.settingsIpAddress.subnetMask,
            defaultGateway: this.state.ethernet_settings.ipAddress.settingsIpAddress.defaultGateway
          }
        },
        serverDNS:{
          default: this.state.ethernet_settings.serverDNS.default,
          settingsDNS:{
            prefferredDNS: this.state.ethernet_settings.serverDNS.settingsDNS.prefferredDNS,
            alternativedDNS: this.state.ethernet_settings.serverDNS.settingsDNS.alternativedDNS
          }
        }
      },
      wireless_settings:{
        enablewifi: this.state.wireless_settings.enablewifi,
        settings:{
          networkName: this.state.wireless_settings.settings.networkName,
          enableSecurity:{
            checkboxEnableSecurity: this.state.wireless_settings.settings.enableSecurity.checkboxEnableSecurity,
            inputSecurityKey:  this.state.wireless_settings.settings.enableSecurity.inputSecurityKey
          },
          wifiIpAddress:{
            default: this.state.wireless_settings.settings.wifiIpAddress.default,
            settingsIpAddress:{
              ipaddress: this.state.wireless_settings.settings.wifiIpAddress.settingsIpAddress.ipaddress,
              subnetMask: this.state.wireless_settings.settings.wifiIpAddress.settingsIpAddress.subnetMask,
              defaultGateway: this.state.wireless_settings.settings.wifiIpAddress.settingsIpAddress.defaultGateway
            }
          },
          wifiDNSServer:{
            default: this.state.wireless_settings.settings.wifiDNSServer.default,
            settingsDNS:{
              prefferredDNS: this.state.wireless_settings.settings.wifiDNSServer.settingsDNS.prefferredDNS,
              alternativedDNS: this.state.wireless_settings.settings.wifiDNSServer.settingsDNS.alternativedDNS
            }
          }
        }
      }
    }

    if(send_TRUTH){
      this.btnSendSave.style.border = "1px solid blue";
      fetch('http://localhost:8080/add',{
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: "obj=" + JSON.stringify(data)
      })
      .then(function(response){
      })
    }
  }

  onCancel(){
    this.setState({
      ethernet_settings:{
        ipAddress:{
          default: true,
          settingsIpAddress:{
            ipaddress: '',
            subnetMask: '',
            defaultGateway: ''
          }
        },
        serverDNS:{
          default: true,
          settingsDNS:{
            prefferredDNS: '',
            alternativedDNS: ''
          }
        }
      },
      wireless_settings:{
        enablewifi: false,
        settings:{
          networkName: '',
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
            default: true,
            settingsDNS:{
              prefferredDNS: '',
              alternativedDNS: ''
            }
          }
        }
      }
    })
  }

  render(){
    return (
      <div className="cont Form">
        <form  className="">
            <div className="row">
              <FormLeft initInput={this.state.ethernet_settings} onChange={this.onChangeEthernetSetting} onClickRadioUseIPAddress={this.onClickRadioUseIPAddress} onClickRadioDNSServer={this.onClickRadioDNSServer}/>
              <FormRight initInput={this.state.wireless_settings}  onChange={this.onChangeWirelessSetting} onLoadWirelessNetwork={this.onLoadWirelessNetwork} listWirelessNetwork={this.state.listWirelessNetwork}/>
            </div>

            <div className="row">
              <button type="button" className="btn btn-outline-primary btn-bottom" ref={el => this.btnSendSave = el} onClick={this.onSave}>Save</button>
              <button type="button" className="btn btn-outline-primary btn-bottom" onClick={this.onCancel}>Cancel</button>
            </div>
        </form>
      </div>
    )
  }
}
