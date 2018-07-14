import React, { Component } from 'react';
import propTypes from 'prop-types';
import {Text, NewCharWrapper, BottomBar, NextButton, 
  NameBar, LevelCheckBox, Dropdown, ClassButton, ClassButtonContainer, RCWrapper, IncDecButton, ClassButtonWrapper, MagicItemMenuContainer} from '../styles/NewChar.style';
import Select from "react-select";
import {groupedOptions} from '../data/races-sublist';
import classes from '../data/classes-list';

import { connect } from 'react-redux';
import { changeLevel, changeName,changeForm, selectButton, decClassLevel,incClassLevel} from '../actions/formActions';
import { addMagicItem, resetMagicItems, setTP, setBarValue} from '../actions/magicItemActions';

import { newCharGroup, tier1_4 } from '../data/magic-items-list';

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
    this.props.resetMagicItems();
    this.props.changeLevel(event.target.value);
    this.props.setTP({})
    this.props.setBarValue(null);

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


    
    if(operator === -1)
      this.props.decClassLevel(this.props.classLevel,classIndex);
    
    if (total < limit || limit === 1) {
      if (operator === 1)
        this.props.incClassLevel(this.props.classLevel, classIndex);
      if (operator === 0)
        this.props.selectButton(this.props.classLevel, classIndex);
    }
  }

  recordMagicItems(value,bar){
    this.props.addMagicItem(this.props.magicItemsOwned,value,bar);
    this.props.setTP(this.props.magicItemsOwned)
    if (bar === 0 )
      this.props.setBarValue(value)
  }

  render() {
    let formState = ""
    console.log(this.props.magicItemsOwned);

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
        <MagicItemMenuContainer>

          {this.props.level === 'e' || this.props.level === 'j' ? 
          (<Select isClearable maxMenuHeight={155} 
          styles ={Dropdown} 
          value = {this.props.bar1value}
          placeholder={'Invest your TP into...'} 
          options={this.props.level === 'e' && this.props.tp < 8 ? newCharGroup : tier1_4} 
          onChange={(value) => this.recordMagicItems(value,0)}/>) 
          : null}

          {(this.props.tp !== 8 || this.props.magicItemsOwned.length !== 1) && this.props.level === 'e' ? (
          <Select isClearable maxMenuHeight={155} 
          styles ={Dropdown} placeholder={'Invest your TP into...'} 
          options={tier1_4} onChange={(value) => this.recordMagicItems(value,1)}/>) : null}

        </MagicItemMenuContainer>
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
        <Text mt={'2.5%'}>Pick a class (or multiclass)</Text>
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
  tp:propTypes.number.isRequired,
  magicItemsOwned: propTypes.array.isRequired,
  bar1value: propTypes.string.isRequired
}

const mapStateToProps = state => ({
  level: state.info.level,
  name: state.info.name,
  form: state.form.form,
  classLevel: state.info.classLevel,
  tp: state.magicItems.tp,
  magicItemsOwned: state.magicItems.magicItemsOwned,
  bar1value: state.magicItems.bar1value
});

export default connect(mapStateToProps, {changeLevel,changeName,changeForm,selectButton,
  decClassLevel,incClassLevel,addMagicItem,resetMagicItems, setTP, setBarValue})(NewChar);

