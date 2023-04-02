import * as React from "react";
import Data from "../Data/steps";
import finalData from "../Data/finalData";

function FirstStep(props) {
    const [formData, setFormData] = React.useState(Data.Step1);

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
            };
        });
    }

    console.log(formData.name);

    function validation() {
        let nameError = "";
        let emailError = "";
        let numberError = "";
        if (formData.name.length === 0) {
            nameError = "Name is Required";
        }

        if (!formData.email.includes("@")) {
            emailError = "Email is not Correct";
        }
        if (formData.email.length === 0) {
            emailError = "Email is Required";
        }

        if (formData.phoneNumber.length !== 10) {
            numberError = "Phone Number must be 10 Digits";
        }
        if (formData.phoneNumber.length === 0) {
            numberError = "Phone Number is Required";
        }

        if (nameError || emailError || numberError) {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    nameError: nameError,
                    emailError: emailError,
                    numberError: numberError,
                };
            });
            props.isError(true);
        } else {
            nameError = "";
            emailError = "";
            numberError = "";
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    nameError: nameError,
                    emailError: emailError,
                    numberError: numberError,
                };
            });
            props.isError(false);
            props.setPass(prev => {
                return {
                    ...prev,
                    step1: true,
                };
            });
            finalData.step1.name = formData.name;
            finalData.step1.email = formData.email;
            finalData.step1.phoneNumber = formData.phoneNumber;
        }
    }

    if (props.isClicked) {
        setTimeout(() => {
            validation();
        }, 50);
    }

    function check(e) {
        if (e.target.name === "phoneNumber") {
            if (e.target.value === 10) {
                props.isError(false);
            }
        } else {
            props.isError(false);
        }
    }

    function groupFunctions(e) {
        handleChange(e);
        check(e);
    }

    return (
        <section className="stepsContainer">
            <h1 className="stepsContainer__header">Personal info</h1>
            <p className="stepsContainer__sub">
                please provide your name, email address, and phone number.
            </p>

            <form className="step1Form">
                <div>
                    <label htmlFor="name" className="step1Form__label">
                        Name
                    </label>
                    {formData.nameError ? (
                        <p htmlFor="name" className="step1Form__error">
                            {formData.nameError}
                        </p>
                    ) : null}

                    <input
                        type="text"
                        placeholder="Full Name"
                        onChange={groupFunctions}
                        id="name"
                        name="name"
                        value={formData.name}
                        className="step1Form__inputs"
                        style={formData.nameError ? { border: "1px solid red" } : {}}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="step1Form__label">
                        Email Address
                    </label>
                    {formData.emailError ? (
                        <p htmlFor="name" className="step1Form__error">
                            {formData.emailError}
                        </p>
                    ) : null}
                    <input
                        type="email"
                        placeholder="Your Email"
                        onChange={groupFunctions}
                        id="email"
                        name="email"
                        value={formData.email}
                        className="step1Form__inputs"
                        style={formData.nameError ? { border: "1px solid red" } : {}}
                    />
                </div>

                <div>
                    <label htmlFor="number" className="step1Form__label">
                        Phone Number
                    </label>
                    {formData.numberError ? (
                        <p htmlFor="name" className="step1Form__error">
                            {formData.numberError}
                        </p>
                    ) : null}
                    <input
                        type="number"
                        placeholder="Your Phone Number"
                        onChange={groupFunctions}
                        name="phoneNumber"
                        id="number"
                        value={formData.phoneNumber}
                        className="step1Form__inputs"
                        style={formData.nameError ? { border: "1px solid red" } : {}}
                    />
                </div>
            </form>
        </section>
    );
}

export default FirstStep;
