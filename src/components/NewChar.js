import React, { Component } from 'react';
import propTypes from 'prop-types';
import {Text, NewCharWrapper, BottomBar, NextButton, 
  NameBar, LevelCheckBox, Dropdown, ClassButton, ClassButtonContainer, RCWrapper, IncDecButton, ClassButtonWrapper} from '../styles/NewChar.style';
import Select from "react-select";
import {groupedOptions} from '../data/races-sublist';
import classes from '../data/classes-list';

import { connect } from 'react-redux';
import { changeLevel, changeName,changeForm} from '../actions/formActions';

const classButtons = []

Object.keys(classes).forEach(key =>
  {
    classButtons.push(classes[key])
  })


class NewChar extends Component {
  constructor(props) {
    super(props);
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    }
    
  handleChange(event) {
    this.props.changeName(event.target.value)
  }
    
  handleSubmit(event) {
    this.props.changeForm(this.props.form)

  }

  handleRadioChange(event){
    this.props.changeLevel(event.target.value);
  }

  render() {
    var formState = ""

    var classButtonsObject = classButtons.map((classItem, i) => {
      return (<ClassButtonWrapper>
              <IncDecButton>–</IncDecButton>
              <ClassButton key={i}>{classItem}</ClassButton>
              <IncDecButton>+</IncDecButton>
              </ClassButtonWrapper>)
    });

    switch(this.props.form){
      case 0: 
      formState = (<form>
        <NameBar placeholder= "Name" type="text" value={this.props.name} onChange={this.handleChange} />
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
        <BottomBar>
          <Text>Character Creation</Text>
          <NextButton onClick={this.handleSubmit}>Next</NextButton>
        </BottomBar>
      </form>)
      break;

      case 1:
      formState = (
      <RCWrapper>
        <Select styles ={Dropdown} placeholder={'Select a race...'} options={groupedOptions} />
        <Text mt={'2.5%'}>Pick a class (or multiple)</Text>
          <ClassButtonContainer>
          {classButtonsObject}
          </ClassButtonContainer>
        <BottomBar>
          <Text>Character Creation</Text>
          <NextButton onClick={this.handleSubmit}>Next</NextButton>
          
        </BottomBar>
      </RCWrapper>
      )
        break;
      default:
        break;
    }

    return (
      <NewCharWrapper>
      {formState}
      </NewCharWrapper>
    )
  }
}

NewChar.propTypes = {
  changeLevel: propTypes.func.isRequired,
  level: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  form: propTypes.number.isRequired
}

const mapStateToProps = state => ({
  level: state.info.level,
  name: state.info.name,
  form: state.form.form
});

export default connect(mapStateToProps, {changeLevel,changeName,changeForm})(NewChar);
