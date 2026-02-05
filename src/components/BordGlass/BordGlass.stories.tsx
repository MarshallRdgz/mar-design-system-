import type { Meta, StoryObj } from "@storybook/react/*";
import BordGlass from "./BordGlass";
import glassImage from "../BordGlass/img/glassExample.webp";

const meta = {
  title: "BordGlass",
  component: BordGlass,
  args: {},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordGlass>;

export const Default: Story = {
  args: {
    customClassName: "w-500 h-500 bg-layout-level1-opacity",
  },
  decorators: [
    Story => (
      <div className="w-1000 h-500 relative flex justify-end items-end">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <img
          src={glassImage}
          alt="example-image"
          className="absolute"
          height={500}
        />
        <div className="pe-20 pb-3">{Story()}</div>
      </div>
    ),
  ],
};

export const Modal: Story = {
  args: {
    children: (
      <div className="w-300 h-300 rounded bg-layout-backgroud flex flex-col text-center">
        <span className="text-white mt-50">Activar empleado</span>
        <span className="text-bord-sm text-content-secondary">
          Estás a punto de reactivar nuevamente a este empleado
        </span>
      </div>
    ),
  },
  decorators: [
    Story => (
      <div className="flex w-full h-screen items-center justify-center">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <div className="bg-red-600 w-500 h-500"></div>
        {Story()}
      </div>
    ),
  ],
};
