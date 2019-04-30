import React from 'react';
import refresh from '../img/refresh_icon.svg';

export class FormRight extends React.Component{
  constructor(props){
    super(props);

    this.onActiveSettingWifi = this.onActiveSettingWifi.bind(this);
    this.enableSecurityKey = this.enableSecurityKey.bind(this);
    this.onClickIpAddress = this.onClickIpAddress.bind(this);
    this.onClickActiveDNSServer = this.onClickActiveDNSServer.bind(this);
  }

  onActiveSettingWifi(e){
    if(e.target.checked){
      this.wifiNetworkName.disabled = false;
      this.enableWifiSecurity.disabled = false;

      this.visibleRadioIpAddressWifiDefault.disabled = false;
      this.visibleRadioIpAddressWifiUse.disabled = false;
      this.visibleRadioIpAddressWifiDefault.checked = true;

      this.visibleRadioDNSServerDefault.disabled = false;
      this.visibleRadioDNSServerUse.disabled = false;
      this.visibleRadioDNSServerDefault.checked = true;

    } else{
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
    if(e.target.checked){
      this.inputSecurityKey.disabled = false;
    } else{
      this.inputSecurityKey.value = '';
      this.inputSecurityKey.disabled = true;
    }
  }

  onClickIpAddress(e){
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

  componentDidMount(){
    this.enableWifiSecurity.disabled = true;
    this.visibleRadioIpAddressWifiDefault.disabled = true;
    this.visibleRadioIpAddressWifiUse.disabled = true;
    this.visibleRadioDNSServerDefault.disabled = true;
    this.visibleRadioDNSServerUse.disabled = true;
  }

  render(){
    return (
      <div className="col-sm-6 text-left border">
        <div className="title">Wireless Settings</div>

        <div className="custom-control custom-checkbox mb-3">
          <input type="checkbox" className="custom-control-input" id="customControlValidation1" onClick={this.onActiveSettingWifi}/>
          <label className="custom-control-label" for="customControlValidation1">Enable Wifi:</label>
        </div>

        <div className="text-right form-group">
          <label>Wireless Network Name: <span>*</span></label>
          <select className="custom-select col-5 ml-3 mr-3" placeholder="Please select" ref={el => this.wifiNetworkName = el} required disabled>
            <option value="">Please select</option>
            <option value="1">SSID 1</option>
            <option value="2">SSID 2</option>
            <option value="3">SSID 3</option>
          </select>
          <img src={refresh} className="refresh" disabled/>
        </div>


        <div className="custom-control custom-checkbox mb-3">
          <input type="checkbox" className="custom-control-input" id="customControlValidation2" ref={el => this.enableWifiSecurity = el} onClick={this.enableSecurityKey}/>
          <label className="custom-control-label" for="customControlValidation2">Enable Wireless Security:</label>
          <div className="invalid-feedback">invalid</div>
        </div>
        <div className="col-12 text-right m-2">
          <label className="mr-3">Security Key: <span>*</span></label>
          <input type="text" className="form-control col-5" ref={el => this.inputSecurityKey = el} required disabled/>
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
              <input type="text" className="form-control col-5" ref={el => this.inputTextIpAddress = el} required disabled/>
            </div>
            <div className="col-12 text-right m-2">
              <label className="mr-3">Subnet Mask: <span>*</span></label>
              <input type="text" className="form-control col-5" ref={el => this.inputTextSubnetMask = el} required disabled/>
            </div>
            <div className="col-12 text-right m-2">
              <label className="mr-3">Default Gateway: </label>
              <input type="text" className="form-control col-5" ref={el => this.inputTextDefaultGateaway = el} required disabled/>
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
              <input type="text" className="form-control col-5" ref={el => this.inputPreferredDNSServer = el} disabled/>
            </div>
            <div className="col-12 text-right m-2">
              <label className="mr-3">Alternative DNS server: </label>
              <input type="text" className="form-control col-5" ref={el => this.inputAlternativeDNSServer = el} disabled/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
