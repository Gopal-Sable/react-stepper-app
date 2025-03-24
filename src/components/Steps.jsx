import React from "react";

export const Steps = ({ stepsData, currStep }) => {
    const progressBarWidth = {
        width:
            currStep !== stepsData.length
                ? (currStep / (stepsData.length - 1)) * 100 + "%"
                : ((currStep - 1) / (stepsData.length - 1)) * 100 + "%",
    };
    return (
        <div className="step-Container">
            {stepsData.map((step, i) => {
                return (
                    <div key={step.name} className="step">
                        <h4
                            className={
                                currStep === i
                                    ? "active"
                                    : "" + i < currStep
                                    ? "completed"
                                    : ""
                            }
                        >
                            {i < currStep ? "✓" : i + 1}
                        </h4>
                        <p>{step.name}</p>
                    </div>
                );
            })}
            <div className="progress-container">
                <div className="progress-bar" style={progressBarWidth}></div>
            </div>
        </div>
    );
};
