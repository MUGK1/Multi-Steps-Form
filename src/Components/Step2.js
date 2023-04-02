import * as React from "react";
import Data from "../Data/steps";
import Plan from "./planContainer";
import arcadeIcon from "../images/icon-arcade.svg";
import advancedIcon from "../images/icon-advanced.svg";
import proIcon from "../images/icon-pro.svg";
import YearMonthSwitch from "./Switch";
import finalData from "../Data/finalData";

function SecondStep(props) {
    const [data, setData] = React.useState(Data.Step2);
    const [isYearly, setIsYearly] = React.useState(false);

    function CheckPrice() {
        if (isYearly) {
            return (
                <div className="plansContainer">
                    <Plan
                        icon={arcadeIcon}
                        plan="Arcade"
                        price={data.Arcade.priceYearly}
                        mORy="yr"
                        status={data.Arcade.Status}
                        setStatus={setData}
                    />
                    <Plan
                        icon={advancedIcon}
                        plan="Advanced"
                        price={data.Advanced.priceYearly}
                        mORy="yr"
                        status={data.Advanced.Status}
                        setStatus={setData}
                    />
                    <Plan
                        icon={proIcon}
                        plan="Pro"
                        price={data.Pro.priceYearly}
                        mORy="yr"
                        status={data.Pro.Status}
                        setStatus={setData}
                    />
                </div>
            );
        } else {
            return (
                <div className="plansContainer">
                    <Plan
                        icon={arcadeIcon}
                        plan="Arcade"
                        price={data.Arcade.priceMonthly}
                        mORy="mo"
                        status={data.Arcade.Status}
                        setStatus={setData}
                    />
                    <Plan
                        icon={advancedIcon}
                        plan="Advanced"
                        price={data.Advanced.priceMonthly}
                        mORy="mo"
                        status={data.Advanced.Status}
                        setStatus={setData}
                    />
                    <Plan
                        icon={proIcon}
                        plan="Pro"
                        price={data.Pro.priceMonthly}
                        mORy="mo"
                        status={data.Pro.Status}
                        setStatus={setData}
                    />
                </div>
            );
        }
    }

    if (props.knowTheStep === 2) {
        if (isYearly) {
            finalData.step2.isYearly = !finalData.step2.isYearly;
            finalData.step2.isMonthly = !finalData.step2.isMonthly;

        }

        if (finalData.step2.isYearly) {
            finalData.step2.finalPrice = data.Arcade.Status ? data.Arcade.priceYearly : data.Advanced.Status ? data.Advanced.priceYearly : data.Pro.priceYearly;
        } else {
            finalData.step2.finalPrice = data.Arcade.Status ? data.Arcade.priceMonthly : data.Advanced.Status ? data.Advanced.priceMonthly : data.Pro.priceMonthly;
        }

        if (finalData.step2.finalPrice === 9 || finalData.step2.finalPrice === 90) {
            finalData.step2.finalPlan = "Arcade";
        } else if (finalData.step2.finalPrice === 12 || finalData.step2.finalPrice === 120) {
            finalData.step2.finalPlan = "Advanced";
        } else {
            finalData.step2.finalPlan = "Pro";
        }

    }

    return (
        <section className="stepsContainer">
            <h1 className="stepsContainer__header">Select your plan</h1>
            <p className="stepsContainer__sub">
                You have the option of monthly or yearly billing.
            </p>
            {CheckPrice()}
            <YearMonthSwitch
                setBilling={setIsYearly}
                billing={isYearly}
            />
        </section>
    );
}

export default SecondStep;
