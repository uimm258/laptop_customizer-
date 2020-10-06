import React from 'react';
import Options from './Options';
import Total from './Total';



export default function Cart(props){
  return(
    <section>
      <Options state={props.state} />
      <Total cartContents={props.state} />
    </section>
  )
}