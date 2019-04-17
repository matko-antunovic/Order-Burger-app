import React from "react";
import classes from "./BuildControls.css"
import BuildControl from "./BuildControl/BuildControl"
const controls = [
    { label: "Salad" ,type: "salad"},
    { label: "Bacon" ,type: "bacon"},
    { label: "Cheese" ,type: "cheese"},
    { label: "Meat" ,type: "meat"}

];
const buildControls = (props) => (
    <div className={classes.BuildControls}>
    <p><strong>Current Price:{props.price.toFixed(2)}</strong></p>
    {controls.map(control => (
    <BuildControl 
    disabled={props.disabled[control.type]}
    removed={()=>props.ingredientRemoved(control.type)}
    added={()=>props.ingredientAdded(control.type)}
    key={control.label}
    label={control.label}/>)
     )}
    <button 
    onClick={props.ordered}
    disabled={!props.purchasable}
    className= {classes.OrderButton}>
    ORDER NOW</button>
    </div>
);
export default buildControls;