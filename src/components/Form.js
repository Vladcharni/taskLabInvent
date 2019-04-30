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
      }
    }

    this.onClickRadioUseIPAddress = this.onClickRadioUseIPAddress.bind(this);
    this.onClickRadioDNSServer = this.onClickRadioDNSServer.bind(this);
    this.onChangeEthernetSetting = this.onChangeEthernetSetting.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onClickRadioUseIPAddress(e,input1,input2,input3){
    if(e.target.checked && e.target.id == "ipadress2"){
      input1.disabled = false;
      input2.disabled = false;
      input3.disabled = false;

    } else {
      input1.disabled = true;
      input2.disabled = true;
      input3.disabled = true;

      input1.value = '';
      input2.value = '';
      input3.value = '';
    }
  }

  onClickRadioDNSServer(e,input1,input2){
    if(e.target.checked && e.target.id == "serveds2"){
      input1.disabled = false;
      input2.disabled = false;
    } else {
      input1.disabled = true;
      input2.disabled = true;

      input1.value = '';
      input2.value = '';
    }
  }

  onChangeEthernetSetting(e,setting){
    let state_IpAddress = this.state.ethernet_settings.ipAddress.settingsIpAddress.ipaddress;
    let state_SubnetMask = this.state.ethernet_settings.ipAddress.settingsIpAddress.subnetMask;
    let state_DefaultGateway = this.state.ethernet_settings.ipAddress.settingsIpAddress.defaultGateway;

    let state_prefferredDNS = this.state.ethernet_settings.serverDNS.settingsDNS.prefferredDNS;
    let state_alternativedDNS = this.state.ethernet_settings.serverDNS.settingsDNS.alternativedDNS;

    if(setting.slice(0,-1) == 'ipSetting'){
      if(setting == 'ipSetting1'){
        this.setState({
          ethernet_settings:{
            ipAddress:{
              default: false,
              settingsIpAddress:{
                ipaddress: e.target.value,
                subnetMask: state_SubnetMask,
                defaultGateway: state_DefaultGateway
              }
            },
            serverDNS:{
              default: false,
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
              default: false,
              settingsIpAddress:{
                ipaddress: state_IpAddress,
                subnetMask: e.target.value,
                defaultGateway: state_DefaultGateway
              }
            },
            serverDNS:{
              default: false,
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
              default: false,
              settingsIpAddress:{
                ipaddress: state_IpAddress,
                subnetMask: state_SubnetMask,
                defaultGateway: e.target.value
              }
            },
            serverDNS:{
              default: false,
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
              default: false,
              settingsIpAddress:{
                ipaddress: state_IpAddress,
                subnetMask: state_SubnetMask,
                defaultGateway: state_DefaultGateway
              }
            },
            serverDNS:{
              default: false,
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
              default: false,
              settingsIpAddress:{
                ipaddress: state_IpAddress,
                subnetMask: state_SubnetMask,
                defaultGateway: state_DefaultGateway
              }
            },
            serverDNS:{
              default: false,
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

  componentDidUpdate(){
    console.log(this.state);
  }

  onSave(){
    console.log(this.state)
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
        <form className="">
            <div className="row">
              <FormLeft initInput={this.state.ethernet_settings} onChange={this.onChangeEthernetSetting} onClickRadioUseIPAddress={this.onClickRadioUseIPAddress} onClickRadioDNSServer={this.onClickRadioDNSServer}/>
              <FormRight />
            </div>

            <div className="row">
              <button type="button" className="btn btn-outline-primary btn-bottom" onClick={this.onSave}>Save</button>
              <button type="button" className="btn btn-outline-primary btn-bottom" onClick={this.onCancel}>Cancel</button>
            </div>
        </form>
      </div>
    )
  }
}
