const Data = {
    Step1: {
        name: "",
        email: "",
        phoneNumber: "",
        nameError: "",
        emailError: "",
        numberError: "",
    },

    Step2: {
        Arcade: {
            Status: false,
            priceMonthly: 9,
            priceYearly: 90,
            icon: "arcadeIcon",
        },
        Advanced: {
            Status: false,
            priceMonthly: 12,
            priceYearly: 120,
            icon: "advancedIcon",
        },
        Pro: {
            Status: false,
            priceMonthly: 15,
            priceYearly: 150,
            icon: "proIcon",
        },
    },

    Step3: {
        onlineService: {
            Status: false,
            priceMonthly: 1,
            priceYearly: 10,
        },
        largerStorage: {
            Status: false,
            priceMonthly: 2,
            priceYearly: 20,
        },
        customizableProfile: {
            Status: false,
            priceMonthly: 2,
            priceYearly: 20,
        },
    },
};

export default Data;
