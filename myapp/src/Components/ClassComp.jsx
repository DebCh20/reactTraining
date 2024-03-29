import React, { Component } from "react";

export default class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      name: "Deb",
      place: "Bangalore",
    };
  }

  //   changePlace() {
  //     this.setState({ place: "Pune" });
  //   }

  componentDidMount(){
    console.log('component is mounted');
  }

  componentDidUpdate(){
    console.log('component is updated');
  }

  componentWillUnmount(){
    console.log('component is unmounted');
  }

  changePlace = () => {
    if(this.state.place == 'Bangalore')
    this.setState({ place: "Mumbai" });
    else
    this.setState({ place: "Bangalore" });
  };
  render() {
    console.log('component is rendering');
    return (
      <div>
        <h1>Class Component</h1>
        <h3>
          Hi I am {this.state.name} from {this.state.place}
        </h3>
        <button
          type="button"
          className="btn btn-success"
          //   onClick={this.changePlace.bind(this)}
          onClick={this.changePlace}
        >
          Change Place
        </button>
      </div>
    );
  }
}