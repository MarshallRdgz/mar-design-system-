import * as JSX from "react";
export declare enum STEPPER_STATE {
    inProgress = "inProgress",
    waiting = "waiting",
    success = "success"
}
export interface RenderTypeStepProps {
    currentStep: number;
    step: number;
}
export interface IprogressStepData {
    order: number;
    stepContent?: JSX.ReactElement;
    stepWidth?: number;
    customStepStyles?: {
        [key: string]: string;
    };
    title?: string;
    subTitle?: string;
    customConectorWidth?: string;
    isTooltipMessage?: boolean;
    tooltipMessage?: string;
}
