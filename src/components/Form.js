import React from 'react';
import refresh from '../img/refresh_icon.svg';

export class Form extends React.Component{
  render(){
    return (
      <div className="cont Form">
        <form className="was-validated">
            <div className="row">
              <div className="col-sm-6 text-left border">

                <div className="title">Ethernet Settings</div>
                <div>
                  <div className="custom-control custom-radio">
                    <input type="radio" id="ipadress1" name="ipadress" className="custom-control-input" checked/>
                    <label className="custom-control-label" for="ipadress1">Obtain DNS server address automatically</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input type="radio" id="ipadress2" name="ipadress" className="custom-control-input" />
                    <label className="custom-control-label" for="ipadress2">Use the following IP address:</label>
                  </div>

                  <div className="">
                    <div class="col-12 text-right m-2">
                      <label className="mr-3">IP address: </label>
                      <input type="text" className="form-control col-5" required disabled/>
                    </div>
                    <div class="col-12 text-right m-2">
                      <label className="mr-3">Subnet Mask: </label>
                      <input type="text" className="form-control col-5" required disabled/>
                    </div>
                    <div class="col-12 text-right m-2">
                      <label className="mr-3">Default Gateway: </label>
                      <input type="text" className="form-control col-5" required disabled/>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="custom-control custom-radio">
                    <input type="radio" id="serveds1" name="serveds" className="custom-control-input" checked/>
                    <label className="custom-control-label" for="serveds1">Obtain DNS server address automatically</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input type="radio" id="serveds2" name="serveds" className="custom-control-input"/>
                    <label className="custom-control-label" for="serveds2">Use the following DS server address:</label>
                  </div>

                  <div className="">
                    <div class="col-12 text-right m-2">
                      <label className="mr-3">Preferred DNS server: </label>
                      <input type="text" className="form-control col-5" required disabled/>
                    </div>
                    <div class="col-12 text-right m-2">
                      <label className="mr-3">Alternative DNS server: </label>
                      <input type="text" className="form-control col-5" required disabled/>
                    </div>
                  </div>
                </div>
              </div>



              <div className="col-sm-6 text-left border">
                <div className="title">Wireless Settings</div>

                <div className="custom-control custom-checkbox mb-3">
                  <input type="checkbox" className="custom-control-input" id="customControlValidation1" required/>
                  <label className="custom-control-label" for="customControlValidation1">Enable Wifi:</label>
                </div>

                <div className="text-right form-group">
                  <label>Wireless Network Name: </label>
                  <select className="custom-select col-5 ml-3 mr-3" placeholder="Please select" required disabled>
                    <option value="">Enter</option>
                    <option value="1">SSID 1</option>
                    <option value="2">SSID 2</option>
                    <option value="3">SSID 3</option>
                  </select>
                  <img src={refresh} className="refresh" disabled/>
                </div>


                <div className="custom-control custom-checkbox mb-3">
                  <input type="checkbox" className="custom-control-input" id="customControlValidation1" required disabled/>
                  <label className="custom-control-label" for="customControlValidation1">Enable Wireless Security:</label>
                  <div className="invalid-feedback">invalid</div>
                </div>

                <div className="col-12 text-right m-2">
                  <label className="mr-3">Security Key: </label>
                  <input type="text" className="form-control col-5" required disabled/>
                </div>


                <div>
                  <div className="custom-control custom-radio">
                    <input type="radio" id="ipadresswifi1" name="ipadresswifi" className="custom-control-input" checked disabled/>
                    <label className="custom-control-label" for="ipadresswifi1">Obtain DNS server address automatically</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input type="radio" id="ipadresswifi2" name="ipadresswifi" className="custom-control-input" disabled/>
                    <label className="custom-control-label" for="ipadresswifi2">Use the following IP address:</label>
                  </div>

                  <div className="">
                    <div class="col-12 text-right m-2">
                      <label className="mr-3">IP address: </label>
                      <input type="text" className="form-control col-5" required disabled/>
                    </div>
                    <div class="col-12 text-right m-2">
                      <label className="mr-3">Subnet Mask: </label>
                      <input type="text" className="form-control col-5" required disabled/>
                    </div>
                    <div class="col-12 text-right m-2">
                      <label className="mr-3">Default Gateway: </label>
                      <input type="text" className="form-control col-5" required disabled/>
                    </div>
                  </div>
                </div>

                <div >
                  <div className="custom-control custom-radio">
                    <input type="radio" id="servedswifi1" name="servedswifi" className="custom-control-input" checked disabled/>
                    <label className="custom-control-label" for="servedswifi1">Obtain DNS server address automatically</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input type="radio" id="servedswifi2" name="servedswifi" className="custom-control-input" disabled/>
                    <label className="custom-control-label" for="servedswifi2">Use the following DS server address:</label>
                  </div>

                  <div className="">
                    <div class="col-12 text-right m-2">
                      <label className="mr-3">Preferred DNS server: </label>
                      <input type="text" className="form-control col-5" required disabled/>
                    </div>
                    <div class="col-12 text-right m-2">
                      <label className="mr-3">Alternative DNS server: </label>
                      <input type="text" className="form-control col-5" required disabled/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <button type="button" class="btn btn-outline-primary btn-bottom">Save</button>
              <button type="button" class="btn btn-outline-primary btn-bottom">Cancel</button>
            </div>
        </form>
      </div>
    )
  }
}
