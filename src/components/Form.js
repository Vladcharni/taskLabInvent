import React from 'react';
import {FormLeft} from './FormLeft';
import {FormRight} from './FormRight';

export class Form extends React.Component{
  constructor(props){
    super(props);

    this.onClickRadioUseIPAddress = this.onClickRadioUseIPAddress.bind(this);
    this.onClickRadioDNSServer = this.onClickRadioDNSServer.bind(this);
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

  

  render(){
    return (
      <div className="cont Form">
        <form className="">
            <div className="row">
              <FormLeft onClickRadioUseIPAddress={this.onClickRadioUseIPAddress} onClickRadioDNSServer={this.onClickRadioDNSServer}/>
              <FormRight />
            </div>

            <div className="row">
              <button type="button" className="btn btn-outline-primary btn-bottom">Save</button>
              <button type="button" className="btn btn-outline-primary btn-bottom">Cancel</button>
            </div>
        </form>
      </div>
    )
  }
}
