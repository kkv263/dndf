import styled from 'styled-components';

export const NewCharWrapper = styled.div`
position:relative;
text-align:center;
max-width:800px;
min-width:500px;
height:450px;
box-shadow: 0 2px 4px #000;
border-radius: 8px;
border: 1px solid #979797;
margin: auto;
margin-top: 5%;
`

export const Text = styled.p`
font-family: 'Roboto Mono', monospace;
font-size: ${props => props.size};
margin-top: ${props => props.mt};
color: ${props => props.error ? 'red' : 'black'};
`

export const BottomBar = styled.div`
position: absolute;
display:flex;
flex-direction:column;
justify-content:center;
bottom:0;
width:100%;
height:15%;
background-color:#fede62;
border-radius: 0px 0px 8px 8px;
`

export const NameBar = styled.input`
margin-top: 5%;
font-family: 'Roboto Mono', monospace;
width: 80%;
border-radius:8px;
height:40px;
text-indent: 1%;
::placeholder {
    opacity:0.5;
}
`

export const LevelCheckBox = styled.div`
margin-top: 3.5%;
& > input[type="radio"] {
    display:none;
}

& > label {
  display:inline-block;
  margin-top:1%;
  width:auto;
  padding: 4px 11px;
  font-size: 16px;
  cursor: pointer;
}
& > input[type="radio"]:checked + label {
  border: 1px solid ${props => props.color};
  border-radius:8px;
  box-shadow: 0 0px 1px #979797;
}
`

export const NextButton = styled.div`
position: absolute;
cursor:pointer;
right: 1%;
width:100px;
height:40px;
font-family: 'Roboto Mono', monospace;
background-color:#efefef;
border:1px solid black;
border-radius:8px;
`

export const RCWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

export const ClassButtonContainer = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
width: 500px;
margin-top:2.5%;
`

export const ClassButtonWrapper = styled.div`
display:flex;
margin-top:2%;
justify-content:center;
`

export const IncDecButton = styled.div`
width:20px;
height:20px;
background-color:#fede62;
border-radius:8px;
visibility: ${props => props.show ? 'visible' : 'hidden'}
cursor:pointer;
  &:hover{
  background-color:#333333;
  color:white;
  }
`

export const ClassButton = styled.div`
  margin-left:1%;
  margin-right:1%;
  border: 1px solid #333333;
  border-radius:8px; 
  color: ${props => props.selected? 'white' : '#333333'};
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  width: 115px;
  border-radius:8px; 
  background-color: ${props => props.selected? '#333333' : 'white'};
  cursor:pointer;
  &:hover{
    background-color: ${props => props.selected? '#333333' : '#979797'};
    color:white;
  }
`

export const MagicItemMenuContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;

`
export const Dropdown = {
  control: (base,state) => ({
    ...base,
    outline: 0,
    marginTop: '5%',
    border: '1px solid #333333',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #333333'
    }
  }),
  option: (base, state) => ({
    ...base,
    isFocused: 'red',
    fontFamily:'Roboto Mono',
    borderBottom: '1px dotted black',
    padding: 5,
    color: state.isFocused ? 'white' : 'black',
    backgroundColor:state.isFocused ? '#333333' : 'white',
  }),
  container: (base,state) => ({
    ...base,
    width:'500px',
    borderColor: state.isFocused ? 'red' : 'black', 
  }),
  menu: (base) => ({
    ...base,
    width: '500px',
  }),
  placeholder: (base) => ({
    ...base,
    fontFamily:'Roboto Mono',
    opacity:'0.5'
  }),
};