/** LIBRARY */
import { Colors } from "~/const/enum/colors";
import { ThemeType } from "~/const/enum/theme";
import { ThemeColorsType } from "~/const/types/colors";

const themeColors: ThemeColorsType = {
  [ThemeType.Light]: {
    background: Colors.snow,
    surface: Colors.white,
    primary: Colors.primary,
    secondary: Colors.secondary,
    onBackground: Colors.raisinBlack,
    onSurface: Colors.raisinBlack,
    placeholder: Colors.placeholderLight,
    onPlaceholder: Colors.dimGray,
    onPlaceholderInput: Colors.onPlaceholderInputLight,
    onPrimary: Colors.white,
    onSecondary: Colors.white,
    error: Colors.redOrange,
    onError: Colors.white,
    success: Colors.switchActive,
    onSuccess: Colors.white,
    warning: Colors.marigold,
    onWarning: Colors.white,
    border: Colors.lightGray,
    underline: Colors.link
  },
  [ThemeType.Dark]: {
    background: Colors.bgDark,
    surface: Colors.surfaceDark,
    primary: Colors.primary,
    secondary: Colors.secondary,
    onBackground: Colors.white,
    onSurface: Colors.white,
    placeholder: Colors.borderDark,
    onPlaceholder: Colors.ashGrey,
    onPlaceholderInput: Colors.onPlaceholderInputDark,
    onPrimary: Colors.white,
    onSecondary: Colors.white,
    error: Colors.redOrange,
    onError: Colors.white,
    success: Colors.switchActive,
    onSuccess: Colors.white,
    warning: Colors.marigold,
    onWarning: Colors.white,
    border: Colors.borderDark,
    underline: Colors.link
  },
};

export default themeColors;
