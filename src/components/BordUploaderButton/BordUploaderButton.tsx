import React, { ChangeEvent, FC } from "react";
import BordOneToneIcon from "../BordOneToneIcon/BordOneToneIcon";
import { IBordUploaderButton } from "./BordUploaderButton.types";

import "./BordUploaderButton.scss";

const BordUploaderButton: FC<IBordUploaderButton> = ({
  label,
  isFilled,
  bordUploaderButtonType,
  disabledBordUploaderButton,
  loading,
  errorText,
  emptyBordUploaderButtonTitle,
  emptyBordUploaderButtonSubtitle,
  defaultFile,
  handleChangeFile,
  handleDeleteFile,
  handleDownloadFile,
  customWidth,
  acceptFileExtension = ['.doc'] as ('.doc' | '.docx' | '.pdf' | '.png' | '.jpg' | '.jpeg' | '*')[],
}: IBordUploaderButton) => {
  const classnames = `bordUploaderButton ${customWidth || 'w-380'}`;
  const emptyBordUploaderButtonClass = disabledBordUploaderButton ? 'disabled' : bordUploaderButtonType || 'default';

  const errrorButton = bordUploaderButtonType === 'error';

  const disabledButton = emptyBordUploaderButtonClass === 'disabled' || disabledBordUploaderButton;

  const filledButton = isFilled && (defaultFile?.documentFile || defaultFile?.documentName || defaultFile?.url);

  const actionToChangeFile = (file: File) => {
    if (handleChangeFile) {
      handleChangeFile(file);
    }
  };

  const actionDeleteFile = () => {
    if (!disabledButton && handleDeleteFile) {
      handleDeleteFile();
    }
  };

  const actionDownloadFile = () => {
    if (!errrorButton && !disabledButton && defaultFile?.url && handleDownloadFile) {
      handleDownloadFile(defaultFile?.url);
    }
  };

  const handleEventFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0] as File;
    if (file) {
      actionToChangeFile(file);
    }
  };

  if (loading)
    return (
      <div className={classnames}>
        {label && <div className="labelBordUploaderButton animationLoader loaderTextClass" />}
        <div className="bordFilledUploaderButtonContainer">
          <div className="bordUploaderButtonSkeletonLoader animationLoader" />
        </div>
      </div>
    );

  return (
    <div className={classnames}>
      {label && <div className={`labelBordUploaderButton ${emptyBordUploaderButtonClass}`}>{label}</div>}
      {filledButton ? (
        <>
          <div
            className={`bordFilledUploaderButtonContainer stylesSharedBetweenStates ${emptyBordUploaderButtonClass}`}
          >
            <div className="buttonItemsContainer" onClick={() => actionDownloadFile()}>
              {!errrorButton && <BordOneToneIcon variant="download" standardSize={14} />}
              <div className="fileName">{defaultFile?.documentName || defaultFile.url}</div>
            </div>
            <div
              className="floatIconContainer"
              onClick={() => {
                actionDeleteFile();
              }}
            >
              <BordOneToneIcon variant="trash" standardSize={12} />
            </div>
          </div>
          {errrorButton && errorText && <div className="textError">{errorText}</div>}
        </>
      ) : (
        <div className={`bordUploaderButtonContainer stylesSharedBetweenStates ${emptyBordUploaderButtonClass}`}>
          <BordOneToneIcon variant="upload" standardSize={14} />
          <div className="infoDetailsContainer">
            <div className="title">
              <span className="highlightedTitle">Busca</span> o arrastra
              {` ${emptyBordUploaderButtonTitle || '[nombre]'}  `}
            </div>
            {emptyBordUploaderButtonSubtitle && (
              <div className="subtitle">
                {emptyBordUploaderButtonSubtitle || 'Formatos aceptados: [formato] Peso máximo: [peso]'}
              </div>
            )}
          </div>

          <input
            className={`hideSystemInput ${disabledButton ? 'disabledFileButton' : ''}`}
            type="file"
            disabled={disabledButton}
            onChange={event => {
              handleEventFile(event);
            }}
            accept={acceptFileExtension.join(',')}
          />
        </div>
      )}
    </div>
  );
};

export default BordUploaderButton;
