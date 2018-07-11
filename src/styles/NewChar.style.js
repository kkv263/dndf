import styled from 'styled-components';


export const NewCharWrapper = styled.div`
position:relative;
text-align:center;
max-width:800px;
min-width:500px;
height:400px;
box-shadow: 0 2px 4px #000;
border-radius: 8px;
border: 1px solid #979797;
`

export const Text = styled.p`
font-family: 'Roboto Mono', monospace;
font-size: ${props => props.size};
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
margin-top: 5%;
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

export const NextButton = styled.input`
position: absolute;
right: 1%;
width:100px;
height:40px;
font-family: 'Roboto Mono', monospace;
background-color:#efefef;
border:1px solid black;
border-radius:8px;
`