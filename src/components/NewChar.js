import React, { Component } from 'react';
import propTypes from 'prop-types';
import {Text, NewCharWrapper, BottomBar, NextButton, 
  NameBar, LevelCheckBox, Dropdown, ClassButton, ClassButtonContainer, RCWrapper, IncDecButton, ClassButtonWrapper} from '../styles/NewChar.style';
import Select from "react-select";
import {groupedOptions} from '../data/races-sublist';
import classes from '../data/classes-list';

import { connect } from 'react-redux';
import { changeLevel, changeName,changeForm, selectButton, decClassLevel,incClassLevel,incTP} from '../actions/formActions';
import { newCharGroup } from '../data/magic-items-list';

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
    this.changeClassLevel = this.changeClassLevel.bind(this);
    this.recordMagicItems = this.recordMagicItems.bind(this);
    }
    
  handleChange(event) {
    this.props.changeName(event.target.value)
  }
    
  handleSubmit() {
    this.props.changeForm(this.props.form)
  }

  handleRadioChange(event){
    this.props.changeLevel(event.target.value);
  }

  changeClassLevel(classIndex,operator){
    var total = 0
    var limit = 0
    for (var i = 0; i <this.props.classLevel.length; i++){
      total += this.props.classLevel[i];
    }
    if (this.props.level === '1')
      limit = 1
    else if (this.props.level ==='j')
      limit = 3
    else if (this.props.level === 'e')
      limit = 5

     if (operator === 0)
      this.props.selectButton(this.props.classLevel, classIndex);
    
    if(operator === -1)
      this.props.decClassLevel(this.props.classLevel,classIndex);
    
    if (total < limit || limit === 1) {
      if (operator === 1)
        this.props.incClassLevel(this.props.classLevel, classIndex);
    }
  }

  recordMagicItems(value){
    if (value !== null)
      this.props.incTP(this.props.tp,value.tp);
  }

  render() {
    let formState = ""
    let classLevelArray = this.props.classLevel
    console.log(classLevelArray);

    let classButtonsObject = classButtons.map((classItem, i) => {
      return (<ClassButtonWrapper key={i}>
              <IncDecButton show={this.props.level !== '1' && this.props.classLevel[i]} onClick={() => this.changeClassLevel(i,-1)}>–</IncDecButton>
              <ClassButton selected={this.props.classLevel[i]} onClick={() => this.changeClassLevel(i,0)}>{classItem} {this.props.classLevel[i]}</ClassButton>
              <IncDecButton show={this.props.level !== '1'&& this.props.classLevel[i]} onClick={() => this.changeClassLevel(i,1)}>+</IncDecButton>
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
        <input onClick={this.handleRadioChange} name="level" type="radio" id="level2" value="j"/>
        <label style={{'color' : '#689EFF'}} htmlFor="level2" value="j">@Journeyfriend (Level 3)</label >
        <input onClick={this.handleRadioChange} name="level" type="radio" id="level3" color ="#000" value="e"/>
        <label style={{'color' : '#FFDD3F'}} htmlFor="level3">@Elite Noodle (Level 5)</label >
        </LevelCheckBox> 
        <Select isClearable maxMenuHeight={155} styles ={Dropdown} placeholder={'Invest your TP into...'} options={newCharGroup} onChange={this.recordMagicItems}/>
        <BottomBar>
          <Text>Character Creation</Text>
          <NextButton onClick={this.handleSubmit}>Next</NextButton>
        </BottomBar>
      </form>)
      break;

      case 1:
      formState = (
      <RCWrapper>
        <Select maxMenuHeight={155} styles ={Dropdown} placeholder={'Select a race...'} options={groupedOptions}  />
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
  form: propTypes.number.isRequired,
  classLevel: propTypes.array.isRequired,
  tp:propTypes.number.isRequired
}

const mapStateToProps = state => ({
  level: state.info.level,
  name: state.info.name,
  form: state.form.form,
  classLevel: state.info.classLevel,
  tp: state.info.tp
});

export default connect(mapStateToProps, {changeLevel,changeName,changeForm,selectButton,decClassLevel,incClassLevel,incTP})(NewChar);
