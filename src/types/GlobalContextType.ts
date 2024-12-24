export interface GlobalContextType {
  isFlyoutOpen: boolean;
  setFlyoutOpen: (open: boolean) => void;
  toggleFlyout: () => void;
}
