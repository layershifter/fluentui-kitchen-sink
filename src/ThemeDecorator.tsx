import {
  FluentProvider,
  makeStaticStyles,
  teamsLightTheme,
  teamsDarkTheme,
  teamsHighContrastTheme,
  Theme,
  webLightTheme,
  webDarkTheme,
  webHighContrastTheme
} from "@fluentui/react-components";
import * as React from "react";

const themes: Record<string, Theme> = {
  "Teams Light": teamsLightTheme,
  "Teams Dark": teamsDarkTheme,
  "Teams High Contrast": teamsHighContrastTheme,

  "Web Light": webLightTheme,
  "Web Dark": webDarkTheme,
  "Web High Contrast": webHighContrastTheme
};

const useGlobalStyles = makeStaticStyles({
  body: {
    margin: 0
  }
});

export const ThemeDecorator: React.FC<{ header: React.ReactNode }> = props => {
  const [activeTheme, setActiveTheme] = React.useState(teamsLightTheme);

  useGlobalStyles();

  return (
    <div
      style={{
        backgroundColor: activeTheme.alias.color.neutral.neutralBackground1,
        color: activeTheme.alias.color.neutral.neutralForeground1,
        fontFamily: activeTheme.global.type.fontFamilies.base,
        minHeight: "100vh"
      }}
    >
      <div style={{ padding: 10 }}>
        {props.header}
        <hr />

        <p>Select a theme:</p>
        <div
          style={{
            display: "grid",
            gridAutoColumns: "max-content",
            gridGap: "5px"
          }}
        >
          {Object.keys(themes).map((themeName, index, array) => (
            <div
              style={{
                display: "flex",
                gridRow: Math.floor((array.length + index) / 3)
              }}
              key={themeName}
            >
              <input
                checked={activeTheme === themes[themeName]}
                id={themeName}
                onChange={e => setActiveTheme(themes[e.target.value])}
                type="radio"
                value={themeName}
              />
              <label htmlFor={themeName}>{themeName}</label>
            </div>
          ))}
        </div>

        <hr />
        <FluentProvider theme={activeTheme}>{props.children}</FluentProvider>
      </div>
    </div>
  );
};
