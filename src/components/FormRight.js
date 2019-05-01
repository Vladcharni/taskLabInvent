import React from 'react';
import refresh from '../img/refresh_icon.svg';

export class FormRight extends React.Component{
  constructor(props){
    super(props);

    this.onActiveSettingWifi = this.onActiveSettingWifi.bind(this);
    this.enableSecurityKey = this.enableSecurityKey.bind(this);
    this.onClickIpAddress = this.onClickIpAddress.bind(this);
    this.onClickActiveDNSServer = this.onClickActiveDNSServer.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onActiveSettingWifi(e){
    if(e == 'active_wifi'){
      this.enablewifi.checked = true;
      if(this.enablewifi.checked){
        this.wifiNetworkName.disabled = false;
        this.enableWifiSecurity.disabled = false;

        this.visibleRadioIpAddressWifiDefault.disabled = false;
        this.visibleRadioIpAddressWifiUse.disabled = false;
        this.visibleRadioIpAddressWifiDefault.checked = true;

        this.visibleRadioDNSServerDefault.disabled = false;
        this.visibleRadioDNSServerUse.disabled = false;
        this.visibleRadioDNSServerDefault.checked = true;
      }
      return
    } else if(e == "default_wifi"){
        this.enablewifi.checked = false;

        this.enableWifiSecurity.checked = false;

        this.visibleRadioIpAddressWifiDefault.checked = false;
        this.visibleRadioIpAddressWifiUse.checked = false;

        this.visibleRadioDNSServerDefault.checked = false;
        this.visibleRadioDNSServerUse.checked = false;

        return
    }

    if(e.target.checked){
      this.props.onUpdateState("enablewifi_active");

      this.wifiNetworkName.disabled = false;
      this.enableWifiSecurity.disabled = false;

      this.visibleRadioIpAddressWifiDefault.disabled = false;
      this.visibleRadioIpAddressWifiUse.disabled = false;
      this.visibleRadioIpAddressWifiDefault.checked = true;

      this.visibleRadioDNSServerDefault.disabled = false;
      this.visibleRadioDNSServerUse.disabled = false;
      this.visibleRadioDNSServerDefault.checked = true;

    } else{
      this.props.onUpdateState("enablewifi_neactive");

      this.wifiNetworkName.disabled = true;
      this.enableWifiSecurity.disabled = true;

      this.visibleRadioIpAddressWifiDefault.disabled = true;
      this.visibleRadioIpAddressWifiUse.disabled = true;
      this.visibleRadioIpAddressWifiDefault.checked = false;
      this.visibleRadioIpAddressWifiUse.checked = false;

      this.inputSecurityKey.value = '';
      this.enableWifiSecurity.checked = false;

      this.visibleRadioDNSServerDefault.disabled = true;
      this.visibleRadioDNSServerUse.disabled = true;
      this.visibleRadioDNSServerDefault.checked = false;
      this.visibleRadioDNSServerUse.checked = false;

      this.inputTextIpAddress.value = '';
      this.inputTextSubnetMask.value = '';
      this.inputTextDefaultGateaway.value = '';

      this.inputPreferredDNSServer.value = '';
      this.inputAlternativeDNSServer.value = '';
    }
  }

  enableSecurityKey(e){
    if(e == 'active_security'){
      this.enableWifiSecurity.checked = true;
      if(this.enableWifiSecurity.checked){
        this.inputSecurityKey.disabled = false;
      }
      return
    }
    if(e.target.checked){
      this.inputSecurityKey.disabled = false;
    } else{
      this.inputSecurityKey.value = '';
      this.inputSecurityKey.disabled = true;
    }
  }

  onClickIpAddress(e){
    if(e == 'active_wifiIpAddress'){
      this.visibleRadioIpAddressWifiUse.checked = true;
      if(this.visibleRadioIpAddressWifiUse.checked){
        this.inputTextIpAddress.disabled = false;
        this.inputTextSubnetMask.disabled = false;
        this.inputTextDefaultGateaway.disabled = false;
      }
      return
    }
    if(e.target.checked && e.target.id == 'ipaddresswifi2'){
      this.inputTextIpAddress.disabled = false;
      this.inputTextSubnetMask.disabled = false;
      this.inputTextDefaultGateaway.disabled = false;
    } else {
      this.inputTextIpAddress.disabled = true;
      this.inputTextSubnetMask.disabled = true;
      this.inputTextDefaultGateaway.disabled = true;

      this.inputTextIpAddress.value = '';
      this.inputTextSubnetMask.value = '';
      this.inputTextDefaultGateaway.value = '';
    }
  }

  onClickActiveDNSServer(e){
    if(e == 'active_wifiDNSServer'){
      this.visibleRadioDNSServerUse.checked = true;
      if(this.visibleRadioDNSServerUse.checked){
        this.inputPreferredDNSServer.disabled = false;
        this.inputAlternativeDNSServer.disabled = false;
      }
      return
    }
    if(e.target.checked && e.target.id == 'servedswifi2'){
      this.inputPreferredDNSServer.disabled = false;
      this.inputAlternativeDNSServer.disabled = false;
    } else {
      this.inputPreferredDNSServer.disabled = true;
      this.inputAlternativeDNSServer.disabled = true;

      this.inputPreferredDNSServer.value = '';
      this.inputAlternativeDNSServer.value = '';
    }
  }

  onChange(e){
    this.props.onChange(e);
  }

  componentDidMount(){
    let listRefsFormRight = {
      formRightwifiNetworkName: this.wifiNetworkName,
      formRightinputSecurityKey:this.inputSecurityKey,
      formRightinputTextIpAddress:this.inputTextIpAddress,
      formRightinputTextSubnetMask:this.inputTextSubnetMask,
      formRightinputTextDefaultGateaway:this.inputTextDefaultGateaway,
      formRightinputPreferredDNSServer:this.inputPreferredDNSServer,
      formRightinputAlternativeDNSServer:this.inputAlternativeDNSServer
    }
    this.props.onLoadRefsFormRight(listRefsFormRight);

    this.enableWifiSecurity.disabled = true;
    this.visibleRadioIpAddressWifiDefault.disabled = true;
    this.visibleRadioIpAddressWifiUse.disabled = true;
    this.visibleRadioDNSServerDefault.disabled = true;
    this.visibleRadioDNSServerUse.disabled = true;

    if(this.props.initInput.enablewifi){
      console.log("LOL");
      this.onActiveSettingWifi("active_wifi");
    } else {
      this.onActiveSettingWifi("default_wifi");
    }

    if(this.props.initInput.settings.enableSecurity.checkboxEnableSecurity){
      this.enableSecurityKey("active_security");
    }

    if(!this.props.initInput.settings.wifiIpAddress.default){
      this.onClickIpAddress("active_wifiIpAddress");
    }

    if(!this.props.initInput.settings.wifiDNSServer.default){
      this.onClickActiveDNSServer("active_wifiDNSServer");
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

    if(!this.props.initInput.enablewifi){
      console.log("goose");
    }
  }

  render(){
    return (
      <div className="col-sm-6 text-left border">
        <div className="title">Wireless Settings</div>

        <div className="custom-control custom-checkbox mb-3">
          <input type="checkbox" className="custom-control-input" id="customControlValidation1" ref={el => this.enablewifi = el} onClick={this.onActiveSettingWifi}/>
          <label className="custom-control-label" for="customControlValidation1">Enable Wifi:</label>
        </div>

        <div className="text-right form-group">
          <label>Wireless Network Name: <span>*</span></label>
          <select className="custom-select col-5 ml-3 mr-3" id="networkname" value={this.props.initInput.settings.networkName} ref={el => this.wifiNetworkName = el} onChange={this.onChange} required disabled>
            <option id="networkname_0" value="">Please select</option>
            <option id="networkname_1" value="networkname_1">SSID 1</option>
            <option id="networkname_2" value="networkname_2">SSID 2</option>
            <option id="networkname_3" value="networkname_3">SSID 3</option>
          </select>
          <img src={refresh} className="refresh" disabled/>
        </div>


        <div className="custom-control custom-checkbox mb-3">
          <input type="checkbox" className="custom-control-input" id="customControlValidation2"  ref={el => this.enableWifiSecurity = el} onClick={this.enableSecurityKey}/>
          <label className="custom-control-label" for="customControlValidation2">Enable Wireless Security:</label>
          <div className="invalid-feedback">invalid</div>
        </div>
        <div className="col-12 text-right m-2">
          <label className="mr-3">Security Key: <span>*</span></label>
          <input type="text" className="form-control col-5" id="securitykey" value={this.props.initInput.settings.enableSecurity.inputSecurityKey} ref={el => this.inputSecurityKey = el} onChange={this.onChange} disabled/>
        </div>


        <div>
          <div className="custom-control custom-radio">
            <input type="radio" id="ipaddresswifi1" name="ipaddresswifi" className="custom-control-input" ref={el => this.visibleRadioIpAddressWifiDefault = el} onClick={this.onClickIpAddress} />
            <label className="custom-control-label" for="ipaddresswifi1">Obtain DNS server address automatically</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="ipaddresswifi2" name="ipaddresswifi" className="custom-control-input" ref={el => this.visibleRadioIpAddressWifiUse = el} onClick={this.onClickIpAddress}  />
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
              <input type="text" className="form-control col-5" id="ipSetting3" value={this.props.initInput.settings.wifiIpAddress.settingsIpAddress.defaultGateway} ref={el => this.inputTextDefaultGateaway = el} onChange={this.onChange} required disabled/>
            </div>
          </div>
        </div>

        <div >
          <div className="custom-control custom-radio">
            <input type="radio" id="servedswifi1" name="servedswifi" className="custom-control-input" ref={el => this.visibleRadioDNSServerDefault = el} onClick={this.onClickActiveDNSServer} />
            <label className="custom-control-label" for="servedswifi1">Obtain DNS server address automatically</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="servedswifi2" name="servedswifi" className="custom-control-input" ref={el => this.visibleRadioDNSServerUse = el} onClick={this.onClickActiveDNSServer} />
            <label className="custom-control-label" for="servedswifi2">Use the following DS server address:</label>
          </div>

          <div className="">
            <div className="col-12 text-right m-2">
              <label className="mr-3">Preferred DNS server: <span>*</span></label>
              <input type="text" className="form-control col-5" id="serverDNSSetting1" value={this.props.initInput.settings.wifiDNSServer.settingsDNS.prefferredDNS} ref={el => this.inputPreferredDNSServer = el} onChange={this.onChange} disabled/>
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
