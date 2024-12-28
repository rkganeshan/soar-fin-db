import { defaultFormValues } from "./formDefaults";
import { routerPath } from "./routerPaths";
import { scrollStyleClasses } from "./scrollStyleClasses";

// Default toast duration - 5000ms - 5seconds
const TOAST_DURATION = 5000;

// For masking the card number, this replace pattern to be used
const REPLACE_MASKED_PATTERN="$1 **** **** $4";

export { defaultFormValues, routerPath, scrollStyleClasses, TOAST_DURATION, REPLACE_MASKED_PATTERN };
