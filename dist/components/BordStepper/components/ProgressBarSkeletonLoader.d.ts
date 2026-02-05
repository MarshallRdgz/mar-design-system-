import { IprogressStepData } from "../BorderStepper.types";
import "../BordStepper.scss";
declare const ProgressBarSkeletonLoader: ({ skeletonSteps, firstAndLastConectorWidth, intermediateStepsConectorWidth, heightStyles, }: {
    skeletonSteps: IprogressStepData[];
    firstAndLastConectorWidth?: number;
    intermediateStepsConectorWidth?: number;
    heightStyles?: number;
}) => import("react/jsx-runtime").JSX.Element;
export default ProgressBarSkeletonLoader;
