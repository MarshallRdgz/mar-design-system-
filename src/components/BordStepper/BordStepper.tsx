import React from "react";
import InProgressStepperIcon from "./components/InProgressStepperIcon";
import WaitingStepperIcon from "./components/WaitingStepperIcon";
import { SuccessStepperIcon } from "./components/SuccessStepperIcon";
import ProgressBarSkeletonLoader from "./components/ProgressBarSkeletonLoader";
import {
  IprogressStepData,
  RenderTypeStepProps,
  STEPPER_STATE,
} from "./BorderStepper.types";
import BordOneToneIcon from "../BordOneToneIcon/BordOneToneIcon";
import BordTooltip from "../BordTooltip/BordTooltip";

import "./BordStepper.scss";

/**
@property { IprogressStepData[] } steps - An array with the information for each step of the progress bar, including the folowing data: order (number), stepContent (JSX.Element), stepWidth (number), customStepStyles ({ [key: string]: string })
@property { number } currentStep -A number indicating the index of the step in the steps array that should be display as current
@property { number } firstAndLastConectorWidth - The width in pixels (only the number) for the first and last connector lines of the progress bar (the ones coneecting to the points)
@property { number } intermediateStepsConectorWidth - The width in pixels (only the number) for the connector lines connecting the different steps of the progress bar
@property { number } customHeight - The height of the boxes for the steps of the progress bar, ie the height of the component as a whole
@property { IprogressStepData[] } skeletonSteps - An array with the information for each of the skeleton steps. Can contain the same data as the steps property, but the most relevant  are the order and stepWidth, that should be equal to that of the steps in the steps property
 */

const BordStepper = ({
  steps,
  currentStep,
  firstAndLastConectorWidth,
  intermediateStepsConectorWidth,
  customHeight,
  customStepperClassname,
  skeletonSteps = [],
  loading,
  isStepContent = true,
}: {
  steps: IprogressStepData[];
  currentStep: number;
  firstAndLastConectorWidth?: number;
  intermediateStepsConectorWidth?: number;
  customHeight?: number;
  customWidth?: string;
  customStepperClassname?: string;
  skeletonSteps?: IprogressStepData[];
  loading?: boolean;
  isStepContent?: boolean;
}) => {
  const heightStyles = customHeight ?? undefined;

  const renderTypeStep = ({
    currentStep,
    step,
  }: RenderTypeStepProps): STEPPER_STATE => {
    if (currentStep === step) return STEPPER_STATE.inProgress;
    if (currentStep > step) return STEPPER_STATE.success;
    if (currentStep < step) return STEPPER_STATE.waiting;
    return STEPPER_STATE.inProgress;
  };

  if (loading)
    return (
      <ProgressBarSkeletonLoader
        skeletonSteps={skeletonSteps}
        firstAndLastConectorWidth={firstAndLastConectorWidth}
        intermediateStepsConectorWidth={intermediateStepsConectorWidth}
        heightStyles={heightStyles}
      />
    );

  return (
    <div className={`bordStepsProgressBar ${customStepperClassname ?? ""}`}>
      {steps.map(
        (
          {
            order = 0,
            customStepStyles,
            stepContent,
            title = "title",
            subTitle = "subTitle",
            isTooltipMessage = false,
            tooltipMessage = "message",
          },
          index
        ) => {
          const isLastStep = index === steps.length - 1;
          const stepCurrent = renderTypeStep({ currentStep, step: index });

          const renderConector = {
            [STEPPER_STATE.inProgress]: (
              <div className="inProgressConectorContainer">
                <div className="inProgressConectorFirst"></div>
                <div className="inProgressConectorSecond"></div>
              </div>
            ),
            [STEPPER_STATE.success]: <div className="successConector" />,
            [STEPPER_STATE.waiting]: <div className="waitingConector"></div>,
          };

          const renderIcon = {
            [STEPPER_STATE.inProgress]: <InProgressStepperIcon />,
            [STEPPER_STATE.success]: <SuccessStepperIcon />,
            [STEPPER_STATE.waiting]: <WaitingStepperIcon />,
          };

          const renderTooltip = isTooltipMessage ? (
            <BordTooltip message={tooltipMessage}>
              <BordOneToneIcon variant="info" customWidth="1.2rem" />
            </BordTooltip>
          ) : (
            <></>
          );
          const renderStepContent = isStepContent ? (
            (stepContent ?? <></>)
          ) : (
            <>
              <div className="titleStepper">{title}</div>
              <div className="subTitleContainer">
                <span className="subTitle">{subTitle}</span>
                {renderTooltip}
              </div>
            </>
          );

          return (
            <div
              key={`progressStep${order}`}
              className={`progressStep`}
              style={customStepStyles}
            >
              <div className="stepConectorAndStatusContainer">
                {renderIcon[stepCurrent]}
                {!isLastStep && (
                  <div className="min-w-190 w-full mb-3">
                    {renderConector[stepCurrent]}
                  </div>
                )}
              </div>
              <div className="titleAndSubtitleContainer">
                {renderStepContent}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default BordStepper;
