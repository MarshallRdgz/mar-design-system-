import type { Meta, StoryObj } from "@storybook/react/*";
import ModalContent from "./components/ModalContent";
import BordModal from "./BordModal";

const meta = {
  title: "BordModal",
  component: ModalContent,
  args: {},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof ModalContent>;

export const Default: Story = {
  args: {
    title: "title",
    subTitle: "subTitle",
    showButtonOne: true,
    showButtonTwo: true,
    toCloseModal: () => {},
  },
  decorators: [Story => <BordModal modalContent={Story()} />],
};

export const Sm: Story = {
  args: {
    modalSize: "sm",
    title: "title",
    subTitle: "subTitle",
    showButtonOne: true,
    showButtonTwo: true,
    toCloseModal: () => {},
  },
  decorators: [Story => <BordModal modalContent={Story()} />],
};

export const Md: Story = {
  args: {
    modalSize: "md",
    title: "title",
    subTitle: "subTitle",
    showButtonOne: true,
    showButtonTwo: true,
    toCloseModal: () => {},
  },
  decorators: [Story => <BordModal modalContent={Story()} />],
};

export const Lg: Story = {
  args: {
    modalSize: "lg",
    title: "title",
    subTitle: "subTitle",
    showButtonOne: true,
    showButtonTwo: true,
    toCloseModal: () => {},
  },
  decorators: [Story => <BordModal modalContent={Story()} />],
};

export const SingleCTA: Story = {
  args: {
    showButtonOne: false,
    title: "title",
    subTitle: "subTitle",
    showButtonTwo: true,
  },
  decorators: [Story => <BordModal modalContent={Story()} />],
};

export const RealCase: Story = {
  args: {
    title: "Activar empleado",
    subTitle: "Estás a punto de reactivar nuevamente a este empleado",
    CustomModalComponent: (
      <div className="text-white text-center">
        <div>
          Podrás gestionar nuevamente a este empleado una vez lo actives
        </div>
        <div>¿Seguro que deseas reactivar al empleado?</div>
      </div>
    ),
    textButtonOne: "Mantener desactivo",
    textButtonTwo: "Sí, reactivar empleado",
    showButtonOne: true,
    showButtonTwo: true,
    toCloseModal: () => {},
    modalSize: "sm",
  },
  decorators: [Story => <BordModal modalContent={Story()} />],
};

export const closesOutsideDisable: Story = {
  args: {
    modalSize: "lg",
    title: "title",
    subTitle: "subTitle",
    showButtonOne: true,
    showButtonTwo: true,
    toCloseModal: () => {},
  },
  decorators: [
    Story => <BordModal modalContent={Story()} closesOnClickOutside={false} />,
  ],
};

export const ScrollModal: Story = {
  args: {
    title: "Activar empleado",
    subTitle: "Estás a punto de reactivar nuevamente a este empleado",
    CustomModalComponent: (
      <div className="text-white text-center">
        <div>
          Un campo Texto largo puede ser útil para almacenar grandes cantidades
          de información, como notas, comentarios y descripciones. El tipo de
          datos Texto largo almacena hasta 65.536 caracteres alfanuméricos y
          admite formato de texto enriquecido, como diferentes colores, fuentes
          y resaltado.Un campo Texto largo puede ser útil para almacenar grandes
          cantidades de información, como notas, comentarios y descripciones. El
          tipo de datos Texto largo almacena hasta 65.536 caracteres
          alfanuméricos y admite formato de texto enriquecido, como diferentes
          colores, fuentes y resaltado.Un campo Texto largo puede ser útil para
          almacenar grandes cantidades de información, como notas, comentarios y
          descripciones. El tipo de datos Texto largo almacena hasta 65.536
          caracteres alfanuméricos y admite formato de texto enriquecido, como
          diferentes colores, fuentes y resaltado.Un campo Texto largo puede ser
          útil para almacenar grandes cantidades de información, como notas,
          comentarios y descripciones. El tipo de datos Texto largo almacena
          hasta 65.536 caracteres alfanuméricos y admite formato de texto
          enriquecido, como diferentes colores, fuentes y resaltado.
          Un campo Texto largo puede ser útil para almacenar grandes cantidades
          de información, como notas, comentarios y descripciones. El tipo de
          datos Texto largo almacena hasta 65.536 caracteres alfanuméricos y
          admite formato de texto enriquecido, como diferentes colores, fuentes
          y resaltado.Un campo Texto largo puede ser útil para almacenar grandes
          cantidades de información, como notas, comentarios y descripciones. El
          tipo de datos Texto largo almacena hasta 65.536 caracteres
          alfanuméricos y admite formato de texto enriquecido, como diferentes
          colores, fuentes y resaltado.Un campo Texto largo puede ser útil para
          almacenar grandes cantidades de información, como notas, comentarios y
          descripciones. El tipo de datos Texto largo almacena hasta 65.536
          caracteres alfanuméricos y admite formato de texto enriquecido, como
          diferentes colores, fuentes y resaltado.Un campo Texto largo puede ser
          útil para almacenar grandes cantidades de información, como notas,
          comentarios y descripciones. El tipo de datos Texto largo almacena
          hasta 65.536 caracteres alfanuméricos y admite formato de texto
          enriquecido, como diferentes colores, fuentes y resaltado.
        </div>
      </div>
    ),
    textButtonOne: "Mantener desactivo",
    textButtonTwo: "Sí, reactivar empleado",
    showButtonOne: true,
    showButtonTwo: true,
    toCloseModal: () => {},
    modalSize: "sm",
  },
  decorators: [Story => <BordModal modalContent={Story()} />],
};
