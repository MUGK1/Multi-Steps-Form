import * as React from "react";

////// This is the Plan component
////// This component is used in the SecondStep component
////// This component is used to display the plans
function Plan(props) {

    /// This is the function that handles the click event on the plan container
    /// This function is used to change the status of the plan container
    function handleBtn() {
        props.setStatus(prev => {
            return {
                Arcade: {
                    ...prev.Arcade,
                    Status: false,
                },
                Advanced: {
                    ...prev.Advanced,
                    Status: false,
                },
                Pro: {
                    ...prev.Pro,
                    Status: false,
                }
            };
        });

        props.setStatus(prev => {
            return {
                ...prev,
                [props.plan]: {
                    ...prev[props.plan],
                    Status: !prev[props.plan].Status,
                },
            };
        });
    }

    return (
        <div className={!props.status ? "planContainer" : "planContainer planContainer__active"} onClick={handleBtn}>
            <img src={props.icon} alt="icon-plan"></img>
            <div className="palnInfo">
                <h2 className="palnInfo__name">{props.plan}</h2>
                <p className="palnInfo__price">
                    ${props.price} /{props.mORy}
                </p>
            </div>
        </div>
    );
}

export default Plan;
