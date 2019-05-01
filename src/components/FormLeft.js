import React from 'react';

export class FormLeft extends React.Component{
  constructor(props){
    super(props);

    this.sendClickIpAddress = this.sendClickIpAddress.bind(this);
    this.sendClickDNSServer = this.sendClickDNSServer.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  sendClickIpAddress(e){
    if(e == "default_false"){
      this.props.onClickRadioUseIPAddress(e, this.inputTextIpAddress ,this.inputTextSubnetMask , this.inputTextDefaultGateaway)
    } else {
      this.props.onClickRadioUseIPAddress(e, this.inputTextIpAddress ,this.inputTextSubnetMask , this.inputTextDefaultGateaway)
    }
  }

  sendClickDNSServer(e){
    if(e == "default_false"){
      this.props.onClickRadioDNSServer(e, this.inputPreferredDNSServer ,this.inputAlternativeDNSServer);
    } else {
      this.props.onClickRadioDNSServer(e, this.inputPreferredDNSServer ,this.inputAlternativeDNSServer);
    }
  }

  onChange(e){
    console.log(e.target.id.slice(0,-1))
    if(e.target.id.slice(0,-1) == 'ipSetting'){
      this.props.onChange(e, e.target.id);
    } else if(e.target.id.slice(0,-1) == 'serverDNSSetting'){
      this.props.onChange(e, e.target.id);
    }
  }

  componentDidUpdate(){
    if(this.props.initInput.ipAddress.default){
      this.initRadio1.checked = true;
    } else {
      this.initRadio2.checked = true;
      this.sendClickIpAddress("default_false");
    }

    if(this.props.initInput.serverDNS.default){
      this.initRadioDSServer1.checked = true;
    } else {
      this.initRadioDSServer2.checked = true;
      this.sendClickDNSServer("default_false");
    }
  }

  render(){
    return (
      <div className="col-sm-6 text-left border">

        <div className="title">Ethernet Settings</div>
        <div>
          <div className="custom-control custom-radio">
            <input type="radio" id="ipadress1" name="ipadress" className="custom-control-input" ref={el => this.initRadio1 = el} onClick={this.sendClickIpAddress}/>
            <label className="custom-control-label" for="ipadress1">Obtain DNS server address automatically</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="ipadress2" name="ipadress" className="custom-control-input" ref={el => this.initRadio2 = el} onClick={this.sendClickIpAddress}/>
            <label className="custom-control-label" for="ipadress2">Use the following IP address:</label>
          </div>

          <div className="">
            <div className="col-12 text-right m-2">
              <label className="mr-3">IP address: <span>*</span></label>
              <input type="text" className="form-control col-5" id="ipSetting1" value={this.props.initInput.ipAddress.settingsIpAddress.ipaddress} ref={el => this.inputTextIpAddress = el} onChange={this.onChange} disabled/>
            </div>
            <div className="col-12 text-right m-2">
              <label className="mr-3">Subnet Mask: <span>*</span></label>
              <input type="text" className="form-control col-5" id="ipSetting2" value={this.props.initInput.ipAddress.settingsIpAddress.subnetMask} ref={el => this.inputTextSubnetMask = el} onChange={this.onChange} disabled/>
            </div>
            <div className="col-12 text-right m-2">
              <label className="mr-3">Default Gateway: </label>
              <input type="text" className="form-control col-5" id="ipSetting3" value={this.props.initInput.ipAddress.settingsIpAddress.defaultGateway} ref={el => this.inputTextDefaultGateaway= el} onChange={this.onChange} disabled/>
            </div>
          </div>
        </div>

        <div>
          <div className="custom-control custom-radio">
            <input type="radio" id="serveds1" name="serveds" className="custom-control-input" ref={el => this.initRadioDSServer1 = el} onClick={this.sendClickDNSServer}/>
            <label className="custom-control-label" for="serveds1">Obtain DNS server address automatically</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="serveds2" name="serveds" className="custom-control-input" ref={el => this.initRadioDSServer2 = el} onClick={this.sendClickDNSServer}/>
            <label className="custom-control-label" for="serveds2">Use the following DS server address:</label>
          </div>

          <div className="">
            <div className="col-12 text-right m-2">
              <label className="mr-3">Preferred DNS server: <span>*</span></label>
              <input type="text" className="form-control col-5" id="serverDNSSetting1" value={this.props.initInput.serverDNS.settingsDNS.prefferredDNS} ref={el => this.inputPreferredDNSServer = el} onChange={this.onChange} disabled />
            </div>
            <div className="col-12 text-right m-2">
              <label className="mr-3">Alternative DNS server: </label>
              <input type="text" className="form-control col-5" id="serverDNSSetting2" value={this.props.initInput.serverDNS.settingsDNS.alternativedDNS} ref={el => this.inputAlternativeDNSServer = el} onChange={this.onChange} disabled/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
