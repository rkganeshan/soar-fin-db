export interface GlobalContextType {
  isFlyoutOpen: boolean;
  currentUserUpdatedImg: string | null;
  setFlyoutOpen: (open: boolean) => void;
  toggleFlyout: () => void;
  setCurrentUserUpdatedImg: (arg: string | null) => void;
}
