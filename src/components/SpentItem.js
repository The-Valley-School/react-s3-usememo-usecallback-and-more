import React from "react";

const SpentItem = (props) => {
  console.log("Ejecutado render SpentItem: " + props.spent.name);

  return (
    <div key={props.spent.id}>
      <strong>{props.spent.name}</strong> - {props.spent.ammount} €
    </div>
  );
}

const propsAreEqual = (previousProps, currentProps) => {
  return previousProps.spent === currentProps.spent;
} 

const SpentItemMemo = React.memo(SpentItem, propsAreEqual);

export default SpentItemMemo;