import type { Meta, StoryObj } from "@storybook/react/*";
import BordScrollBar from "./BordScrollBar";

const meta = {
  title: "BordScrollBar",
  component: BordScrollBar,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof BordScrollBar>;

export const Default: Story = {
  args: {},
};

export const BigContainer: Story = {
  args: {},
  decorators: [
    Story => (
      <div className="flex w-screen h-screen items-center justify-center">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        {Story()}
      </div>
    ),
  ],
};

export const horizontalScroll: Story = {
  args: {},
  decorators: [
    () => (
      <div className="flex w-screen h-screen items-center justify-center">
        <div className="w-300 h-200 text-nowrap overflow-auto bg-white-400">
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
          BordScrollBar, BordScrollBar, BordScrollBar, BordScrollBar,
        </div>
      </div>
    ),
  ],
};
