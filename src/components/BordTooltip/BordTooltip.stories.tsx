import type { Meta, StoryObj } from "@storybook/react/*";
import BordTooltip from "./BordTooltip";
import { fn } from "@storybook/test";

const meta = {
  title: "BordTooltip",
  component: BordTooltip,
  args: {
    message: "Label",
    position: "bottom",
    ctaType: "oneCta",
    children: <span className="text-white">LABEL</span>,
  },
  decorators: [
    (Story) => (
      <div className="flex w-screen h-screen items-center justify-center">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        {Story()}
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordTooltip>;

export const Default: Story = {
  args: {
    message: "Tooltip sin acciones",
    position: "right",
    ctaType: "noCta",
    ctaLabel: "Más info",
    ctaAction: fn(),
    ctaButtonOneAction: fn(),
    ctaButtonTwoAction: fn(),
  },
};

export const OneActionButton: Story = {
  args: {
    message: "Tooltip con una CTA",
    position: "bottom",
    ctaType: "oneCta",
    ctaLabel: "Más info",
    ctaAction: fn(),
    ctaButtonOneAction: fn(),
    ctaButtonTwoAction: fn(),
  },
};

export const TwoActionButton: Story = {
  args: {
    message: "Tooltip con una CTA",
    position: "bottom",
    ctaType: "twoCta",
    ctaLabel: "Más info",
    ctaAction: fn(),
    ctaButtonOneAction: fn(),
    ctaButtonTwoAction: fn(),
  },
};

export const BigText: Story = {
  args: {
    message:
      "La programación es el proceso de crear un conjunto de instrucciones que le dicen a una computadora como realizar algún tipo de tarea. Pero no solo la acción de escribir un código para que la computadora o el software lo ejecute.La programación es el proceso de crear un conjunto de instrucciones que le dicen a una computadora como realizar algún tipo de tarea. Pero no solo la acción de escribir un código para que la computadora o el software lo ejecute.La programación es el proceso de crear un conjunto de instrucciones que le dicen a una computadora como realizar algún tipo de tarea. Pero no solo la acción de escribir un código para que la computadora o el software lo ejecute.",
    position: "left",
    ctaType: "oneCta",
    ctaLabel: "Dirigete al mejor sitio del mundo",
    ctaAction: fn(),
    children: <span className="text-white">¿Qué es la programación?</span>,
  },
};

export const LitleText: Story = {
  args: {
    message: "Inventario",
    position: "top",
    ctaType: "twoCta",
    ctaAction: fn(),
    ctaButtonOneAction: fn(),
    ctaButtonTwoAction: fn(),
    ctaButtonOneLabel: "Ir",
    ctaButtonTwoLabel: "Venir",
    children: <span className="text-white">Modulo de inventario</span>,
  },
};
