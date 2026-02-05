import React from "react";
import { IprogressStepData } from "../BorderStepper.types";
import "../BordStepper.scss";

const ProgressBarSkeletonLoader = ({
  skeletonSteps,
  firstAndLastConectorWidth,
  intermediateStepsConectorWidth,
  heightStyles,
}: {
  skeletonSteps: IprogressStepData[];
  firstAndLastConectorWidth?: number;
  intermediateStepsConectorWidth?: number;
  heightStyles?: number;
}) => {
  const renderSkeletonStep = (skeletonStep: IprogressStepData, index: number) => {
    const isLastStep = index === skeletonSteps.length - 1;
    const widthStyles = skeletonStep.stepWidth ?? 30;
    const firstSkeletonLeftMargin =
      skeletonStep.order === 0 ? firstAndLastConectorWidth : undefined;

    return (
      <>
        <div
          key={`skeletonStep${skeletonStep.order}`}
          className="stepSkeleton animationLoader"
          style={{
            ...skeletonStep.customStepStyles,
            width: widthStyles,
            marginLeft: firstSkeletonLeftMargin,
            marginRight: intermediateStepsConectorWidth,
            height: heightStyles ?? 30,
          }}
        />
        {!isLastStep && (
          <div className="animationLoader skeletonConector"></div>
        )}
      </>
    );
  };

  return (
    <div className="bordProgressBarSkeletonLoader">
      {skeletonSteps.map(renderSkeletonStep)}
    </div>
  );
};

export default ProgressBarSkeletonLoader;
