import React, { Component } from 'react';

class Warrior extends Component {

constructor(props) {
    super(props);
    this.state = {
        className: "Warrior",
        utility: ["Taunt", "Battle Shout"]
      };
  }
    render() {
        return (
            <div>
                {this.state.className}
            </div>
        );
    }
}

export default Warrior;
