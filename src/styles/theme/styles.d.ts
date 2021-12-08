import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      // Brand-colors
      blueNormal: string;
      blueDark: string;
      blueLight: string;

      // Neutral-colors
      blackNormal: string;
      blackDark: string;
      blackLight: string;

      whiteNormal: string;
      whiteDark: string;
      whiteLight: string;

      // Gray Scale
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      gray7: string;
    };

    typograph: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      p: string;
    };

    spacing: {
      gap1: string;
      gap2: string;
      gap3: string;
      gap4: string;
      gap5: string;
      gap6: string;
      gap7: string;
      gap8: string;
      gap9: string;
    };
  }
}
