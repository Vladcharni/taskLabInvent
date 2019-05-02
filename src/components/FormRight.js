import React from 'react';
import refresh from '../img/refresh_icon.svg';

export class FormRight extends React.Component{
  constructor(props){
    super(props);

    this.onChange = this.onChange.bind(this);
    this.invisibleFormRight = this.invisibleFormRight.bind(this);
    this.visibleFormRight = this.visibleFormRight.bind(this);
  }

  onChange(e){
    this.props.onChange(e);
  }

  invisibleFormRight(){

    this.enablewifi.checked = false;
    this.wifiNetworkName.disabled = true;

    this.enableWifiSecurity.checked = false;
    this.enableWifiSecurity.disabled = true;
    this.inputSecurityKey.disabled = true;

    this.visibleRadioIpAddressWifiUse.checked = false;
    this.visibleRadioIpAddressWifiDefault.checked = false;
    this.visibleRadioIpAddressWifiUse.disabled = true;
    this.visibleRadioIpAddressWifiDefault.disabled = true;
    this.inputTextIpAddress.disabled = true;
    this.inputTextSubnetMask.disabled = true;
    this.inputTextDefaultGateaway.disabled = true;

    this.visibleRadioDNSServerDefault.checked = false;
    this.visibleRadioDNSServerUse.checked = false;
    this.visibleRadioDNSServerDefault.disabled = true;
    this.visibleRadioDNSServerUse.disabled = true;
    this.inputPreferredDNSServer.disabled = true;
    this.inputAlternativeDNSServer.disabled = true;

  }

  visibleFormRight(){

    this.enablewifi.checked = true;
    this.wifiNetworkName.disabled = false;

    this.enableWifiSecurity.disabled = false;

    this.visibleRadioIpAddressWifiUse.disabled = false;
    this.visibleRadioIpAddressWifiDefault.disabled = false;

    this.visibleRadioDNSServerDefault.disabled = false;
    this.visibleRadioDNSServerUse.disabled = false;
//_____________________________________________

    if(this.props.initInput.settings.enableSecurity.checkboxEnableSecurity){
      this.enableWifiSecurity.checked = true;

      this.inputSecurityKey.disabled = false;
    } else {
      this.enableWifiSecurity = false;
      this.inputSecurityKey.disabled = true;
    }

    if(this.props.initInput.settings.wifiIpAddress.default){
      this.visibleRadioIpAddressWifiDefault.checked = true;

      this.inputTextIpAddress.disabled = true;
      this.inputTextSubnetMask.disabled = true;
      this.inputTextDefaultGateaway.disabled = true;
    } else {
      this.visibleRadioIpAddressWifiUse.checked = true;

      this.inputTextIpAddress.disabled = false;
      this.inputTextSubnetMask.disabled = false;
      this.inputTextDefaultGateaway.disabled = false;
    }

    if(this.props.initInput.settings.wifiDNSServer.default){
      this.visibleRadioDNSServerDefault.checked = true;

      this.inputPreferredDNSServer.disabled = true;
      this.inputAlternativeDNSServer.disabled = true;
    } else {
      this.visibleRadioDNSServerUse.checked = true;

      this.inputPreferredDNSServer.disabled = false;
      this.inputAlternativeDNSServer.disabled = false;
    }

    if(this.props.initInput.settings.networkName){
      if(this.props.initInput.settings.networkName == 'networkname_0'){
        this.wifiNetworkName.value = '';
        return;
      }
      this.wifiNetworkName.value = this.props.initInput.settings.networkName;
    }
  }

  componentDidUpdate(){
    if(this.props.initInput.enablewifi){
      this.visibleFormRight();
    } else {
      this.invisibleFormRight();
      return;
    }
  }

  render(){
    return (
      <div className="col-sm-6 text-left border">
        <div className="title">Wireless Settings</div>

        <div className="custom-control custom-checkbox mb-3">
          <input type="checkbox" className="custom-control-input" id="enablewifi" ref={el => this.enablewifi = el} onClick={this.onChange}/>
          <label className="custom-control-label" for="enablewifi">Enable Wifi:</label>
        </div>

        <div className="text-right form-group">
          <label>Wireless Network Name: <span>*</span></label>
          <select className="custom-select col-5 ml-3 mr-3" id="networkname" value={this.props.initInput.settings.networkName} ref={el => this.wifiNetworkName = el} onChange={this.onChange} required disabled>
            <option id="networkname_0" value="">Please select</option>
            {
              this.props.listWirelessNetwork.map((item,index) =>{
                let indexName = "networkname_" + (index + 1);
                return <option key={indexName} id={indexName} value={indexName.name}>{item.name}</option>
              })
            }
          </select>
          <img src={refresh} className="refresh" onClick={this.props.onLoadWirelessNetwork}/>
        </div>


        <div className="custom-control custom-checkbox mb-3">
          <input type="checkbox" className="custom-control-input"  id="enableWifiSecurity" ref={el => this.enableWifiSecurity = el} onChange={this.onChange}/>
          <label className="custom-control-label" for="enableWifiSecurity">Enable Wireless Security:</label>
        </div>
        <div className="col-12 text-right m-2">
          <label className="mr-3">Security Key: <span>*</span></label>
          <input type="text" className="form-control col-5" id="securitykey" id="securityKey" value={this.props.initInput.settings.enableSecurity.inputSecurityKey} ref={el => this.inputSecurityKey = el} onChange={this.onChange} required disabled/>
        </div>


        <div>
          <div className="custom-control custom-radio">
            <input type="radio" id="ipaddresswifi1" name="ipaddresswifi" className="custom-control-input" ref={el => this.visibleRadioIpAddressWifiDefault = el} onChange={this.onChange} />
            <label className="custom-control-label" for="ipaddresswifi1">Obtain DNS server address automatically</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="ipaddresswifi2" name="ipaddresswifi" className="custom-control-input" ref={el => this.visibleRadioIpAddressWifiUse = el} onChange={this.onChange}  />
            <label className="custom-control-label" for="ipaddresswifi2">Use the following IP address:</label>
          </div>

          <div className="">
            <div className="col-12 text-right m-2">
              <label className="mr-3">IP address: <span>*</span></label>
              <input type="text" className="form-control col-5" id="ipSetting1" value={this.props.initInput.settings.wifiIpAddress.settingsIpAddress.ipaddress} ref={el => this.inputTextIpAddress = el} onChange={this.onChange} required disabled/>
            </div>
            <div className="col-12 text-right m-2">
              <label className="mr-3">Subnet Mask: <span>*</span></label>
              <input type="text" className="form-control col-5" id="ipSetting2" value={this.props.initInput.settings.wifiIpAddress.settingsIpAddress.subnetMask} ref={el => this.inputTextSubnetMask = el} onChange={this.onChange} required disabled/>
            </div>
            <div className="col-12 text-right m-2">
              <label className="mr-3">Default Gateway: </label>
              <input type="text" className="form-control col-5" id="ipSetting3" value={this.props.initInput.settings.wifiIpAddress.settingsIpAddress.defaultGateway} ref={el => this.inputTextDefaultGateaway = el} onChange={this.onChange}  disabled/>
            </div>
          </div>
        </div>

        <div >
          <div className="custom-control custom-radio">
            <input type="radio" id="servedswifi1" name="servedswifi" className="custom-control-input" ref={el => this.visibleRadioDNSServerDefault = el} onChange={this.onChange} />
            <label className="custom-control-label" for="servedswifi1">Obtain DNS server address automatically</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="servedswifi2" name="servedswifi" className="custom-control-input" ref={el => this.visibleRadioDNSServerUse = el} onChange={this.onChange} />
            <label className="custom-control-label" for="servedswifi2">Use the following DS server address:</label>
          </div>

          <div className="">
            <div className="col-12 text-right m-2">
              <label className="mr-3">Preferred DNS server: <span>*</span></label>
              <input type="text" className="form-control col-5" id="serverDNSSetting1" value={this.props.initInput.settings.wifiDNSServer.settingsDNS.prefferredDNS} ref={el => this.inputPreferredDNSServer = el} onChange={this.onChange} required disabled/>
            </div>
            <div className="col-12 text-right m-2">
              <label className="mr-3">Alternative DNS server: </label>
              <input type="text" className="form-control col-5" id="serverDNSSetting2" value={this.props.initInput.settings.wifiDNSServer.settingsDNS.alternativedDNS} ref={el => this.inputAlternativeDNSServer = el} onChange={this.onChange} disabled/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
