import BordOneToneIcon from "../../BordOneToneIcon/BordOneToneIcon";
import BordButton from "../../BordButton/BordButton";
import { InudosModalContent } from "../BordModal.types";
import "../ModalContent.scss";

const ModalContent = ({
  CustomModalComponent,
  toCloseModal,
  customWidth = "",
  customHeight = "",
  leftAlignmentTitle,
  customHeaderClass,
  excludeHeader = false,
  title = "",
  subTitle = "",
  showButtonOne = false,
  showButtonTwo = false,
  sizeButtonOne = "w-180",
  sizeButtonTwo = "w-180",
  textButtonOne = "Button Text",
  textButtonTwo = "Button Text",
  modalSize = "md",
  onClickButtonTwo,
}: InudosModalContent) => {
  const defaultModalSize = "md";
  const onCloseModal = () => toCloseModal && toCloseModal();
  const sizeStyles = {
    width: customWidth,
    maxWidth: customWidth,
    height: customHeight,
  };
  return (
    <div
      className={`modalContent modalShow ${modalSize ?? defaultModalSize}`}
      style={sizeStyles}
    >
      {!excludeHeader && (
        <div
          className={`contentHeader ${customHeaderClass || ""} ${leftAlignmentTitle ? "leftAlignmentTitle" : ""} `}
        >
          <div
            className={`${leftAlignmentTitle ? "leftAlignmentTitle" : ""} text-center`}
          >
            <div className="title">{title ?? ""}</div>
            <div className="subTitle">{subTitle ?? ""}</div>
          </div>
        </div>
      )}
      <div
        className={` ${
          !excludeHeader ? "customModalContainer" : "withoutHeader"
        }`}
      >
        {CustomModalComponent}
      </div>
      <div className="buttonsContainer">
        {showButtonOne && (
          <BordButton
            customWidth={sizeButtonOne}
            modeButton="tertiary"
            label={textButtonOne}
          />
        )}
        {showButtonTwo && (
          <BordButton
            customWidth={sizeButtonTwo}
            label={textButtonTwo}
            onClick={onClickButtonTwo}
          />
        )}
      </div>
      {toCloseModal && (
        <div className="exitContentButton" onClick={onCloseModal}>
          <BordOneToneIcon variant="x" customWidth="1.8rem" />
        </div>
      )}
    </div>
  );
};

export default ModalContent;
