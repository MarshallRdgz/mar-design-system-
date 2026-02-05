import { IprogressStepData } from "./BorderStepper.types";
import "./BordStepper.scss";
/**
@property { IprogressStepData[] } steps - An array with the information for each step of the progress bar, including the folowing data: order (number), stepContent (JSX.Element), stepWidth (number), customStepStyles ({ [key: string]: string })
@property { number } currentStep -A number indicating the index of the step in the steps array that should be display as current
@property { number } firstAndLastConectorWidth - The width in pixels (only the number) for the first and last connector lines of the progress bar (the ones coneecting to the points)
@property { number } intermediateStepsConectorWidth - The width in pixels (only the number) for the connector lines connecting the different steps of the progress bar
@property { number } customHeight - The height of the boxes for the steps of the progress bar, ie the height of the component as a whole
@property { IprogressStepData[] } skeletonSteps - An array with the information for each of the skeleton steps. Can contain the same data as the steps property, but the most relevant  are the order and stepWidth, that should be equal to that of the steps in the steps property
 */
declare const BordStepper: ({ steps, currentStep, firstAndLastConectorWidth, intermediateStepsConectorWidth, customHeight, customStepperClassname, skeletonSteps, loading, isStepContent, }: {
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
}) => import("react/jsx-runtime").JSX.Element;
export default BordStepper;
