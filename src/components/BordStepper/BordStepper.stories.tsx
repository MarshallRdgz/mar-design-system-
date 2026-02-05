import React from "react";
import type { Meta, StoryObj } from "@storybook/react/*";
import { fn } from "@storybook/test";
import BordStepper from "./BordStepper";

const meta = {
  title: "BordStepper",
  component: BordStepper,
  args: {
    onClick: fn(),
    isOpen: true,
    isSelected: false,
    disabled: false,
    buttonText: "Órdenes",
    buttonIcon: "shoppingCartCheck2",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentStep: 0,
    steps: [
      {
        order: 0,
        title: "PASO 1",
        subTitle: "Label",
      },
    ],
    skeletonSteps: [
      {
        order: 0,
        title: "PASO 1",
        subTitle: "Label",
      },
    ],
    loading: false,
    isStepContent: false,
  },
};

export const RealCase: Story = {
  args: {
    currentStep: 1,
    steps: [
      {
        order: 0,
        stepWidth: 83,
        title: "PASO 1",
        subTitle: "Selecciona herramientas",
      },
      {
        order: 1,

        stepWidth: 75,
        title: "PASO 2",
        subTitle: "Agrega información",
      },
      {
        order: 2,
        stepWidth: 75,
        title: "PASO 3",
        subTitle: "Carga herramientas",
      },
    ],
    skeletonSteps: [
      {
        order: 0,
        title: "PASO 1",
        subTitle: "Selecciona herramientas",
      },
      {
        order: 1,
        title: "PASO 2",
        subTitle: "Agrega información",
      },
      {
        order: 2,
        title: "PASO 3",
        subTitle: "Carga herramientas",
      },
    ],
    loading: false,
    isStepContent: false,
  },
};

export const withTooltip: Story = {
  args: {
    currentStep: 0,
    steps: [
      {
        order: 0,
        title: "PASO 1",
        subTitle: "Selecciona herramientas",
        isTooltipMessage: true,
        tooltipMessage: "Selecciona herramientas para poder continuar",
      },
      {
        order: 1,
        title: "PASO 2",
        subTitle: "Agrega información",
        isTooltipMessage: true,
        tooltipMessage: "Agrega información para poder continuar",
      },
    ],
    skeletonSteps: [],
    loading: false,
    isStepContent: false,
  },
};

export const customStepContent: Story = {
  args: {
    currentStep: 0,
    steps: [
      {
        order: 0,
        stepContent: <div>Puedes colocar todo el JSX que quieras.</div>,
      },
    ],
    skeletonSteps: [],
    loading: false,
    isStepContent: true,
  },
};

export const Skeleton: Story = {
  args: {
    currentStep: 0,
    steps: [
      {
        order: 0,
        title: "Paso 1",
        subTitle: "Skeleton 1",
      },
      {
        order: 1,
        title: "Paso 1",
        subTitle: "Skeleton 1",
      },
      {
        order: 2,
        title: "Paso 1",
        subTitle: "Skeleton 1",
      },
    ],
    skeletonSteps: [
      {
        order: 0,
        title: "Paso 1",
        subTitle: "Skeleton 1",
      },
      {
        order: 1,
        title: "Paso 1",
        subTitle: "Skeleton 1",
      },
      {
        order: 2,
        title: "Paso 1",
        subTitle: "Skeleton 1",
      },
    ],
    loading: true,
    isStepContent: false,
  },
};
