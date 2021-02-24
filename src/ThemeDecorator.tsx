import {
  FluentProvider,
  teamsLightTheme,
  teamsDarkTheme,
  teamsHighContrastTheme,
  webLightTheme,
  webDarkTheme,
  webHighContrastTheme
} from "@fluentui/react-components";
// TODO: this should go from @fluentui/react-components
import { createDOMRenderer, makeStaticStyles } from "@fluentui/make-styles";
import * as React from "react";

const themes = {
  teamsLightTheme,
  teamsDarkTheme,
  teamsHighContrastTheme,

  webLightTheme,
  webDarkTheme,
  webHighContrastTheme
};

const useGlobalStyles = makeStaticStyles({
  body: {
    margin: 0
  }
});
const renderer = createDOMRenderer();

export const ThemeDecorator: React.FC<{ header: React.ReactNode }> = (
  props
) => {
  const [activeTheme, setActiveTheme] = React.useState(teamsLightTheme);

  useGlobalStyles({ renderer });

  return (
    <div
      style={{
        backgroundColor: activeTheme.alias.color.neutral.neutralBackground1,
        color: activeTheme.alias.color.neutral.neutralForeground1,
        padding: 10
      }}
    >
      {props.header}
      <hr />

      <p>Select a theme:</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gridGap: "5px"
        }}
      >
        {Object.keys(themes).map((themeName) => (
          <div key={themeName}>
            <input
              checked={activeTheme === themes[themeName]}
              id={themeName}
              onChange={(e) => setActiveTheme(themes[e.target.value])}
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
  );
};
