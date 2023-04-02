import * as React from "react";
import "../sass/style.scss";
import leftSideVector from "../images/bg-sidebar-desktop.svg";
import FirstStep from "../Components/Step1";
import SecondStep from "../Components/Step2";
import Button from "../Components/Buttons";
import ThirdStep from "../Components/Step3";

const StaticPage = () => {
    const [Checker, setChecker] = React.useState({
        stepNumber: 1,
        isClicked: false,
    });
    const [isError, setIsError] = React.useState(false);
    const [stepPass, setStepPass] = React.useState({
        step1: false,
        step2: false,
        step3: false,
        step4: false,
    });

    function showRightStep() {
        if (Checker.stepNumber === 1) {
            return (
                <FirstStep
                    isError={setIsError}
                    isClicked={Checker.isClicked}
                    setPass={setStepPass}
                />
            );
        } else if (Checker.stepNumber === 2) {
            return <SecondStep
                knowTheStep={Checker.stepNumber}
                isClicked={Checker.isClicked}
            />;
        } else if (Checker.stepNumber === 3) {
            return <ThirdStep
                knowTheStep={Checker.stepNumber}
                isClicked={Checker.isClicked}
            />;
        }
    }

    console.log(Checker);
    console.log(stepPass.step1);
    return (
        <main className="mainContainer">
            <div className="leftSide">
                <img src={leftSideVector} className="leftSide__img" alt="Vector"/>
                <ul className="steps">
                    <li className="stepGroup">
                        <p className="stepGroup__number">1</p>
                        <div className="stepGroup__titel">
                            <p>Step 1</p>
                            <h1>your info</h1>
                        </div>
                    </li>

                    <li className="stepGroup">
                        <p className="stepGroup__number">2</p>
                        <div className="stepGroup__titel">
                            <p>Step 2</p>
                            <h1>select plan</h1>
                        </div>
                    </li>

                    <li className="stepGroup">
                        <p className="stepGroup__number">3</p>
                        <div className="stepGroup__titel">
                            <p>Step 3</p>
                            <h1>add-ons</h1>
                        </div>
                    </li>

                    <li className="stepGroup">
                        <p className="stepGroup__number">4</p>
                        <div className="stepGroup__titel">
                            <p>Step 4</p>
                            <h1>summary</h1>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="rightSide">
                <section className="rightSectionHight">
                    {showRightStep()}
                </section>
                <Button
                    setThisStep={setChecker}
                    error={isError}
                    knowTheStep={Checker}
                    pass={stepPass}
                />
            </div>
        </main>
    );
};

export default StaticPage;

export const Head = () => <title>Steps Page</title>;
