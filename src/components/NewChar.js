import React, { Component } from 'react';
import propTypes from 'prop-types';
import {Text, NewCharWrapper, BottomBar, NextButton, 
  NameBar, LevelCheckBox, Dropdown, ClassButton, ClassButtonContainer, RCWrapper, IncDecButton, ClassButtonWrapper, MagicItemMenuContainer} from '../styles/NewChar.style';
import Select from "react-select";
import {groupedOptions} from '../data/races-sublist';

import { connect } from 'react-redux';
import { changeLevel, changeName,changeForm, checkForm } from '../actions/formActions';
import { selectButton, decClassLevel,incClassLevel, setRace } from '../actions/classRaceFormActions';
import { addMagicItem, resetMagicItems, setTP, setBarValue} from '../actions/magicItemActions';

import { newCharGroup, tier1_4 } from '../data/magic-items-list';

const classButtons = ["Artificer","Barbarian","Bard","Cleric","Fighter",
"Monk","Paladin","Ranger","Rev. Ranger","Rogue","Sorcerer","Warlock","Wizard"]

class NewChar extends Component {
  constructor(props) {
    super(props);
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.changeClassLevel = this.changeClassLevel.bind(this);
    this.recordMagicItems = this.recordMagicItems.bind(this);
    this.recordRace = this.recordRace.bind(this);
    }
    
  handleChange(event) {
    this.props.changeName(event.target.value)
  }

  calcLevels(levelArray) {
    var total = 0
    for (var i = 0; i <levelArray.length; i++){
      total += levelArray[i];
    }

    return total
  }
    
  handleSubmit() {
    if (this.props.form === 0 && (this.props.name === '' || this.props.level === 0 ||
        (this.props.tp === 0 && this.props.level !== 1))){
      this.props.checkForm(false);
    }
    else if (this.props.form === 1 && 
      (this.calcLevels(this.props.classLevel) !== this.props.level || this.props.race === '')) {
        this.props.checkForm(false);
      }
    else{
      this.props.checkForm(true);
      this.props.changeForm(this.props.form)
    }
  }

  handleRadioChange(event){
    this.props.resetMagicItems();
    this.props.changeLevel(parseInt(event.target.value, 10));
    this.props.setTP({})
    this.props.setBarValue(null);

  }

  changeClassLevel(classIndex,operator){
    var total = this.calcLevels(this.props.classLevel)
    var limit = this.props.level

    if(operator === -1)
      this.props.decClassLevel(this.props.classLevel,classIndex);

      //not game breaking but you can try to fix max level toggle class button
    
    if (total < limit || (this.props.classLevel[classIndex] === 1 && limit === 1)) {
      if (operator === 1)
        this.props.incClassLevel(this.props.classLevel, classIndex);
      if (operator === 0 )
        this.props.selectButton(this.props.classLevel, classIndex)
    }
  }

  recordMagicItems(value,bar){
    this.props.addMagicItem(this.props.magicItemsOwned,value,bar);
    this.props.setTP(this.props.magicItemsOwned)
    if (bar === 0 )
      this.props.setBarValue(value)
  }

  recordRace(value){
    this.props.setRace(value);
  }

  render() {
    let formState = ""

    let classButtonsObject = classButtons.map((classItem, i) => {
      return (<ClassButtonWrapper key={i}>
              <IncDecButton show={this.props.level !== 1 && this.props.classLevel[i]} onClick={() => this.changeClassLevel(i,-1)}>–</IncDecButton>
              <ClassButton selected={this.props.classLevel[i]} onClick={() => this.changeClassLevel(i,0)}>{classItem} {this.props.classLevel[i]}</ClassButton>
              <IncDecButton show={this.props.level !== 1 && this.props.classLevel[i]} onClick={() => this.changeClassLevel(i,1)}>+</IncDecButton>
              </ClassButtonWrapper>)
    });

    switch(this.props.form){
      case 0: 
      formState = (<form>
        <NameBar placeholder= "Name" type="text" value={this.props.name} onChange={this.handleChange} />
        {!this.props.isFormValid && this.props.name === "" ? <Text size= {'12px'} error >Please enter a name</Text> : null}
        <Text mt={'1.5%'}> And this character is...</Text>
        <LevelCheckBox onClick={this.handleRadioChange}>
        <input name="level" type="radio" id="level1" value='1'/>
        <label htmlFor="level1" >Level 1</label>
        <input name="level" type="radio" id="level2" value='3'/>
        <label style={{'color' : '#689EFF'}} htmlFor="level2" value='3' >@Journeyfriend (Level 3, 4TP)</label >
        <input name="level" type="radio" id="level3" color ="#000" value='5'/>
        <label style={{'color' : '#FFDD3F'}} htmlFor="level3">@Elite Noodle (Level 5, 8TP)</label >
        </LevelCheckBox> 
        {!this.props.isFormValid && this.props.level === 0 ? <Text size= {'12px'} error >Please pick your starting level</Text> : null} 
        <MagicItemMenuContainer>
          {this.props.level === 5 || this.props.level === 3 ? 
          (<Select isClearable maxMenuHeight={155} 
          styles ={Dropdown} 
          value = {this.props.bar1value}
          placeholder={'Invest your TP into...'} 
          options={this.props.level === 5 && this.props.tp < 8 ? newCharGroup : tier1_4} 
          onChange={(value) => this.recordMagicItems(value,0)}/>) 
          : null}

          {(this.props.tp !== 8 || this.props.magicItemsOwned.length !== 1) && this.props.level === 5 ? (
          <Select isClearable maxMenuHeight={155} 
          styles ={Dropdown} placeholder={'Invest your TP into...'} 
          options={tier1_4} onChange={(value) => this.recordMagicItems(value,1)}/>) : null}

        </MagicItemMenuContainer>
        {!this.props.isFormValid && 
          ((this.props.level === 5 && this.props.tp < 8) || 
          (this.props.level === 3 && this.props.tp < 4 )) ? <Text size= {'12px'} error >Please choose an item to invest TP in</Text> : null}
        <BottomBar>
          <Text>Character Creation</Text>
          <NextButton onClick={this.handleSubmit}>Next</NextButton>
        </BottomBar>
      </form>)
      break;

      case 1:
      formState = (
      <RCWrapper>
        <Select maxMenuHeight={155} styles ={Dropdown} placeholder={'Select a race...'} options={groupedOptions} onChange={value => this.recordRace(value)} />
        {!this.props.isFormValid && this.props.race === '' ? <Text size= {'12px'} error >Please pick your race</Text> : null} 
        <Text mt={'2.5%'}>Pick a class (or multiclass)</Text>
          <ClassButtonContainer>
          {classButtonsObject}
          </ClassButtonContainer>
          {(!this.props.isFormValid && (this.calcLevels(this.props.classLevel) !== this.props.level)) ? <Text size= {'12px'} error >Your levels don't add up</Text> : null} 
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
  isFormValid: propTypes.bool.isRequired,
  race: propTypes.object.isRequired
}

const mapStateToProps = state => ({
  level: state.info.level,
  name: state.info.name,
  form: state.form.form,
  classLevel: state.info.classLevel,
  tp: state.magicItems.tp,
  magicItemsOwned: state.magicItems.magicItemsOwned,
  bar1value: state.magicItems.bar1value,
  isFormValid: state.form.isFormValid,
  race: state.info.race
});

export default connect(mapStateToProps, {changeLevel,changeName,changeForm,selectButton,
  decClassLevel,incClassLevel,addMagicItem,resetMagicItems, setTP, setBarValue, 
  checkForm,setRace})(NewChar);

