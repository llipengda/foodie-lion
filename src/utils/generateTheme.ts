import { ThemeConfig, theme } from 'antd'
import {
  primaryColor,
  darkThemeHeaderColor,
  lightThemeHeaderColor,
  darkThemeFooterColor,
  lightThemeFooterColor,
  darkThemeBodyColor,
  lightThemeBodyColor
} from '../common/constants'

export default function generateTheme(isDark: boolean): ThemeConfig {
  return {
    token: {
      colorPrimary: primaryColor
    },
    components: {
      Layout: {
        headerBg: isDark ? darkThemeHeaderColor : lightThemeHeaderColor,
        footerBg: isDark ? darkThemeFooterColor : lightThemeFooterColor,
        bodyBg: isDark ? darkThemeBodyColor : lightThemeBodyColor
      }
    },
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
  }
}
