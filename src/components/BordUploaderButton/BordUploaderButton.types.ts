import { TformComponentsStandardSizes } from "../../types/global.types";

export interface IDocumentDetail {
  documentName: string;
  documentFile?: File;
  url?: string;
}
export interface IBordUploaderButton {
  label?: string;
  isFilled?: boolean;
  bordUploaderButtonType?: 'error' | 'default' | 'disabled';
  disabledBordUploaderButton?: boolean;
  loading?: boolean;
  errorText?: string;
  emptyBordUploaderButtonTitle?: string;
  emptyBordUploaderButtonSubtitle?: string;
  defaultFile: IDocumentDetail;
  handleChangeFile?: (file: File) => void;
  handleDeleteFile?: () => void;
  handleDownloadFile?: (url: string) => void;
  customWidth?: TformComponentsStandardSizes;
  acceptFileExtension?: Array<'.doc' | '.docx' | '.pdf' | '.png' | '.jpg' | '.jpeg' | '*'>;
}
