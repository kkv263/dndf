import React, { Component } from 'react';
import propTypes from 'prop-types';
import Select from 'react-select';
import races from '../data/races-sublist';
import { Text, NewCharWrapper, BottomBar, NextButton, NameBar, LevelCheckBox } from '../styles/NewChar.style';

import { connect } from 'react-redux';
import { changeLevel, changeName} from '../actions/formActions';


const racesOptions = []

Object.keys(races).forEach(key =>
{
  racesOptions.push ({value: key, label:races[key]})
})

class NewChar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', checked: ''};
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    }
    
  handleChange(event) {
    this.props.changeName(event.target.value)
  }
    
  handleSubmit(event) {
    alert('A name was submitted: ' + this.props.value);
    event.preventDefault();
  }

  handleRadioChange(event){
    this.props.changeLevel(event.target.value);
  }

  render() {
    return (
      <NewCharWrapper>
        <form onSubmit ={this.handleSubmit}>
        <NameBar placeholder= "Name" type="text" value={this.state.name} onChange={this.handleChange} />
        <LevelCheckBox>
          <Text> And this character is...</Text>
          <input onClick={this.handleRadioChange} name="level" type="radio" id="level1" value="1"/>
          <label  htmlFor="level1" >Level 1</label>
          <br/>
          <input onClick={this.handleRadioChange} name="level" type="radio" id="level2" value="j"/>
          <label style={{'color' : '#689EFF'}} htmlFor="level2" value="j">@Journeyfriend (Level 3)</label >
          <br/>
          <input onClick={this.handleRadioChange} name="level" type="radio" id="level3" color ="#000" value="e"/>
          <label style={{'color' : '#FFDD3F'}} htmlFor="level3">@Elite Noodle (Level 5)</label >
        </LevelCheckBox> 
        {/* <Select options={racesOptions} /> */}
        <BottomBar>
          <Text>Character Creation</Text>
          <NextButton type="submit" value="Next" />
        </BottomBar>
        </form>
      </NewCharWrapper>
    )
  }
}

NewChar.propTypes = {
  changeLevel: propTypes.func.isRequired,
  level: propTypes.string.isRequired,
  name: propTypes.string.isRequired
}

const mapStateToProps = state => ({
  level: state.radio.level,
  name: state.name.name
});

export default connect(mapStateToProps, {changeLevel,changeName})(NewChar);