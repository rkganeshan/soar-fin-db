import { ToastType } from "./enums";

export interface ToastProps {
  message: string;
  subMessage?: string;
  onClose?: () => void;
  type: ToastType;
}
