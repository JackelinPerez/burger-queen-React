import React from 'react';

function ListOption(props) {
return props.list.map((ele, index) => <option value={index} key={index}>{ele}</option>)
  }

export class Select extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: "0"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event)=>{
        this.setState(
            {value: event.target.value},
            ()=> console.log('cambio a: ' + this.state.value));
    }

    render (){
        return(
            <div>
                <select className="browser-default custom-select" value={this.state.value} onChange={this.handleChange}>
                <ListOption list={this.props.list}></ListOption>
                </select>
            </div>
        )
    }
}