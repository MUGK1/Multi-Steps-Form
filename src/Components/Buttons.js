import * as React from "react";
import Data from "../Data/steps";

function Button(props) {
    const handleSteps = () => {
        props.setThisStep(prev => {
            let stepNumber = prev.stepNumber;
            if (props.pass.step1) {
                stepNumber += 1;
            }
            return {
                stepNumber: stepNumber,
                isClicked: true,
            };
        });

        setTimeout(() => {
            props.setThisStep(prev => {
                return {
                    ...prev,
                    isClicked: false,
                };
            });
        }, 50);

        console.log(Data.Step1);
    };

    function handleBackBtn() {
        props.setThisStep(prev => {
            return {
                ...prev,
                stepNumber: prev.stepNumber - 1,
            };
        });
    }

    return (
        <div className="btnsContainer">
            <div className="backBtnContainer">
                {props.knowTheStep.stepNumber >= 2 && (
                    <button onClick={handleBackBtn} className="backBtn">
                        Go Back
                    </button>
                )}
            </div>

            {!props.error ? (
                <button onClick={handleSteps} className="btnActive">
                    Next Step
                </button>
            ) : (
                <button onClick={handleSteps} className="btnNotActive">
                    Next Step
                </button>
            )}
        </div>
    );
}

export default Button;
