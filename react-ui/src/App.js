import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input : "",
      outputView :"",
      outputStyles:"",

    };
  }
  handleOnClick = () => {
      var userInput  = JSON.stringify(this.state.input)
      var myRegexp = /{{(.*?)}}/g;
      var getPlaceMeBackHere = /(PlaceMeBackHere)/g
      var matches = userInput.match(myRegexp)

      var placeHoldView = userInput.replace(myRegexp, 'PlaceMeBackHere')
      var matchIndex = []
      var styleObject = ""

      // var match = getPlaceMeBackHere.exec(placeHoldView)
      // while ( match != null) {
      //     matchIndex.push(match.index)
      // }


      for (var key in matches) {
          placeHoldView = placeHoldView.replace(/(PlaceMeBackHere)/, '{container' + key + '}')
      }


      //placeHold = placeHold.replace(/(PlaceMeBackHere)/, 'Vikram2')
      console.log("================REPLACED VIEW===============")
      console.log("======>", placeHoldView)
      console.log("================INDEXES FOUND==========")
      console.log("matchIndex", matchIndex)
      console.log("================GENERATED OBJECTS====================")
      for (var key in matches) {
          //placeHold = placeHold.replace(/(PlaceMeBackHere)/, 'Vikram2')
          //console.log("matchIndex", matchIndex[key])
          var eachStyleObject = matches[key].replace(/\\r\\n/g, '').replace(/[ \t]/g, '').replace(/{{/g, '').replace(/}}/g, '')
              //console.log(parseStyleObject)
              var eachStyle = 'container' + key + ":" + '{' +eachStyleObject +'}'
              //debugger
              styleObject = styleObject + (styleObject.length ? "," : "") + eachStyle
          //styleObject.push(eachStyle)
      }

      console.log("Wrap Up", styleObject)

    this.setState({
      outputView:placeHoldView,
      outputStyles:styleObject
    })
  }

  render() {
    console.log(this.state.input)
    return (
      <div className="App" style={{flex:1,}}>
          <div style={{alignItems:'center',justifyContent:'center',backgroundColor:'peachpuff',flexDirection:'row'}}>
            <input value= {this.state.input} style={{height:'500px',width:'500px',alignItems:'center',justifyContent:'center',backgroundColor:'#eeeeee'}} onChange ={(e)=>{this.setState({input:e.target.value.replace(/  +/g,"")})}}/>
            <button style={{margin:50}} onClick = {()=>{this.handleOnClick()}}>Convert</button>
            <input value= {this.state.outputView}  style={{height:'500px',width:'500px',alignItems:'center',justifyContent:'center',backgroundColor:'#eeeeee'}}/>
            <input value= {this.state.outputStyles}  style={{height:'500px',width:'500px',alignItems:'center',justifyContent:'center',backgroundColor:'#eeeeee'}}/>
          </div>
      </div>
    );
  }
}

export default App;
