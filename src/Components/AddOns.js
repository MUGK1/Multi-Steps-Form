import * as React from "react";
import iconCheckMark from "../images/icon-checkmark.svg";

function AddOns(props) {

    function handleCheckBox() {
        props.setStatus(prev => {
            return {
                ...prev,
                [props.name]: {
                    ...prev[props.name],
                    Status: !prev[props.name].Status,
                },
            };
        });
    }

    return (
        <section className="AddOnsContainer" onClick={handleCheckBox} style={props.Status ? {border: "1px solid hsl(243, 100%, 62%)"} : {}}>
            <div className="checkBox">
                {props.Status ? <img src={iconCheckMark} alt="checkMark" className="checkBox__mark"></img> : null}
            </div>

            <div className="addOnsInfo">
                <h3 className="addOnsInfo__titel"> {props.titel} </h3>
                <p className="addOnsInfo__subTitel"> {props.subTitel} </p>
            </div>

            <div className="addOnsPrice">
                <p className="addOnsPrice__price"> +${props.price}/{props.mOry} </p>
            </div>
        </section>
    )
}

export default AddOns;