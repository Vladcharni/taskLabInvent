import React from 'react';

export class FormLeft extends React.Component{
  constructor(props){
    super(props);

    this.sendClickIpAddress = this.sendClickIpAddress.bind(this);
    this.sendClickDNSServer = this.sendClickDNSServer.bind(this);
  }

  sendClickIpAddress(e){
    this.props.onClickRadioUseIPAddress(e, this.inputTextIpAddress ,this.inputTextSubnetMask , this.inputTextDefaultGateaway)
  }

  sendClickDNSServer(e){
    this.props.onClickRadioDNSServer(e, this.inputPreferredDNSServer ,this.inputAlternativeDNSServer);
  }

  componentDidMount(){
    this.initRadio.checked = true;
    this.initRadioDSServer.checked = true;
  }

  render(){
    return (
      <div className="col-sm-6 text-left border">

        <div className="title">Ethernet Settings</div>
        <div>
          <div className="custom-control custom-radio">
            <input type="radio" id="ipadress1" name="ipadress" className="custom-control-input" ref={el => this.initRadio = el} onClick={this.sendClickIpAddress}/>
            <label className="custom-control-label" for="ipadress1">Obtain DNS server address automatically</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="ipadress2" name="ipadress" className="custom-control-input" onClick={this.sendClickIpAddress}/>
            <label className="custom-control-label" for="ipadress2">Use the following IP address:</label>
          </div>

          <div className="">
            <div className="col-12 text-right m-2">
              <label className="mr-3">IP address: </label>
              <input type="text" className="form-control col-5" ref={el => this.inputTextIpAddress = el} required disabled/>
            </div>
            <div className="col-12 text-right m-2">
              <label className="mr-3">Subnet Mask: </label>
              <input type="text" className="form-control col-5" ref={el => this.inputTextSubnetMask = el} required disabled/>
            </div>
            <div className="col-12 text-right m-2">
              <label className="mr-3">Default Gateway: </label>
              <input type="text" className="form-control col-5" ref={el => this.inputTextDefaultGateaway= el} required disabled/>
            </div>
          </div>
        </div>

        <div>
          <div className="custom-control custom-radio">
            <input type="radio" id="serveds1" name="serveds" className="custom-control-input" ref={el => this.initRadioDSServer = el} onClick={this.sendClickDNSServer}/>
            <label className="custom-control-label" for="serveds1">Obtain DNS server address automatically</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="serveds2" name="serveds" className="custom-control-input" onClick={this.sendClickDNSServer}/>
            <label className="custom-control-label" for="serveds2">Use the following DS server address:</label>
          </div>

          <div className="">
            <div className="col-12 text-right m-2">
              <label className="mr-3">Preferred DNS server: </label>
              <input type="text" className="form-control col-5" required ref={el => this.inputPreferredDNSServer = el} disabled/>
            </div>
            <div className="col-12 text-right m-2">
              <label className="mr-3">Alternative DNS server: </label>
              <input type="text" className="form-control col-5" required ref={el => this.inputAlternativeDNSServer = el} disabled/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
