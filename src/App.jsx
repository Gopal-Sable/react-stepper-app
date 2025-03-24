import "./App.css";
import { Steps } from "./components/Steps";
import { useState } from "react";

const stepsData = [
    { name: "Contact details", description: "Add contact details" },
    { name: "Shipping Address", description: "Add shipping address" },
    { name: "Payment", description: "Complete payment" },
    { name: "Delivered", description: "Ready to Delivered" },
];
function App() {
    const [step, setStep] = useState(0);
    const nextClick = () => {
        if (step < stepsData.length) {
            setStep((prevStep) => prevStep + 1);
        }
    };
    const prevClick = () => {
        if (step > 0) {
            setStep((prevStep) => prevStep - 1);
        }
    };
    return (
        <>
            <div className="container">
                <Steps stepsData={stepsData} currStep={step} />
                <div>
                    <h1>
                        {step === stepsData.length
                            ? "Delivered"
                            : stepsData[step].description}
                    </h1>
                </div>
                <div className="btn-container">
                    <button onClick={prevClick} disabled={step === 0}>
                        Go back
                    </button>
                    <button
                        onClick={nextClick}
                        disabled={step === stepsData.length}
                    >
                        {step === stepsData.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
