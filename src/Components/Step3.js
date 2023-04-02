import * as React from "react";
import Data from "../Data/steps";
import AddOns from "./AddOns";
import finalData from "../Data/finalData";

function ThirdStep(props) {
    const [data, setData] = React.useState(Data.Step3);

    function CheckPrice() {
        if (finalData.step2.isYearly) {
            return (
                <div className="addOnsContainer">
                    <AddOns
                        titel="Online service"
                        name="onlineService"
                        subTitel="Access to multiplayer games"
                        price={data.onlineService.priceYearly}
                        mOry="yr"
                        setStatus={setData}
                        Status={data.onlineService.Status}
                    />
                    <AddOns
                        titel="Larger storage"
                        name="largerStorage"
                        subTitel="Extra 1TB of cloud storage"
                        price={data.largerStorage.priceYearly}
                        mOry="yr"
                        setStatus={setData}
                        Status={data.largerStorage.Status}
                    />
                    <AddOns
                        titel="Customizable Profile"
                        name="customizableProfile"
                        subTitel="Custom theme on your profile"
                        price={data.customizableProfile.priceYearly}
                        mOry="yr"
                        setStatus={setData}
                        Status={data.customizableProfile.Status}
                    />
                </div>
            );
        } else {
            return (
                <div className="addOnsContainer">
                    <AddOns
                        titel="Online service"
                        name="onlineService"
                        subTitel="Access to multiplayer games"
                        price={data.onlineService.priceMonthly}
                        mOry="mo"
                        setStatus={setData}
                        Status={data.onlineService.Status}
                    />
                    <AddOns
                        titel="Larger storage"
                        name="largerStorage"
                        subTitel="Extra 1TB of cloud storage"
                        price={data.largerStorage.priceMonthly}
                        mOry="mo"
                        setStatus={setData}
                        Status={data.largerStorage.Status}
                    />
                    <AddOns
                        titel="Customizable Profile"
                        name="customizableProfile"
                        subTitel="Custom theme on your profile"
                        price={data.customizableProfile.priceMonthly}
                        mOry="mo"
                        setStatus={setData}
                        Status={data.customizableProfile.Status}
                    />
                </div>
            );
        }
    }

    if (props.knowTheStep === 3) {
        finalData.step3.onlineService = data.onlineService.Status;
        finalData.step3.largerStorage = data.largerStorage.Status;
        finalData.step3.customizableProfile = data.customizableProfile.Status;

        const totalPrice = data;
        let finalPrice = 0;
        for (let i in totalPrice) {
            if (totalPrice[i].Status && finalData.step2.isYearly) {
                finalPrice += totalPrice[i].priceYearly;
            } else if (totalPrice[i].Status && !finalData.step2.isYearly){
                finalPrice += totalPrice[i].priceMonthly;
            }
        }
        finalData.step3.finalPriceForAddOns = finalPrice;

        console.log("Selected AddOns: ", finalData.step3);
        console.log("Final Price: ", finalData.step3.finalPriceForAddOns);
    }

    return (
        <section className="stepsContainer">
            <h1 className="stepsContainer__header">Pick add-ons</h1>
            <p className="stepsContainer__sub">
                Add-ons help enhance your gaming experience.
            </p>
            {CheckPrice()}
        </section>
    )
}

export default ThirdStep;