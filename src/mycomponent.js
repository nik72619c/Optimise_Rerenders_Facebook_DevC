import React from "react";

export default class Mycomponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      prop1: {
        val1: 1,
        val2: {
          val3: 3
        }
      }
    };
    this.renderAgain = this.renderAgain.bind(this);
  }
  // shouldComponentUpdate(nextProps, nextState){
  // // if(nextState.prop1 !=this.state.prop1){
  // //   return true;
  // // }

  // // if(nextState.prop2!=this.state.prop2){
  // //    return true;
  // // }

  // // else return false;
  // return true;
  // }

  renderAgain() {
    this.state.prop1.val2.val3 += 2;
    this.setState({
      prop1: this.state.prop1
    });
    console.log("val is", this.state.prop1.val2.val3);
  }

  render() {
    console.log("re-render...");
    return (
      <>
        <button onClick={this.renderAgain}>click to re-render</button>
      </>
    );
  }
}
