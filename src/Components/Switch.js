import * as React from "react";

////// This is the Switch component
////// This component is used in the SecondStep component
////// This component is used to switch between monthly and yearly billing
function YearMonthSwitch(props) {

    //textYearly: color: hsl(231, 11%, 63%);
    //textMonthly: color: hsl(213, 96%, 18%);
    function handleSwitch() {
        props.setBilling(prev => !prev);
    }

    function changeColorStyle() {
        if (props.billing) {
            return {
                color: "hsl(213, 96%, 18%)",
            };
        } else {
            return {
                color: "hsl(231, 11%, 63%)",
            };
        }
    }

    function changeColorStyle2() {
        if (!props.billing) {
            return {
                color: "hsl(213, 96%, 18%)",
            };
        } else {
            return {
                color: "hsl(231, 11%, 63%)",
            };
        }
    }

    return (
        <div className="switchContainer">
            <section>
                <p className="switchContainer__switch__text__monthly" style={changeColorStyle2()}>
                    Monthly
                </p>
                <span className="switchContainer__switch" onClick={handleSwitch}>
                    <span
                        className={props.billing ? "switchContainer__switch__circle switchContainer__switch__circle--left" : "switchContainer__switch__circle"}></span>
                </span>
                <p className="switchContainer__switch__text__yearly" style={changeColorStyle()}>
                    Yearly
                </p>
            </section>
        </div>
    );
}

export default YearMonthSwitch;