import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;

  background-color: ${colors.black};
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
a {
  font-family: "Barlow Condensed", sans-serif;
  color: ${colors.white};
  font-weight: 400;
}

a {
  text-decoration: none;
}

h1 {
  font-style: normal;
  font-weight: 300;
  font-size: 96px;
  line-height: 112px;

  letter-spacing: -1.5px;
}

h2 {
  font-style: normal;
  font-weight: 300;
  font-size: 60px;
  line-height: 72px;

  letter-spacing: -0.5px;
}

h3 {
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
}

h4 {
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 36px;
}

h5 {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;

  letter-spacing: 0.18px;
}

h6 {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  letter-spacing: 0.15px;
}

//subtitle 1 {
// font-style: normal;
// font-weight: normal;
// font-size: 16px;
// line-height: 24px;

// letter-spacing: 0.15px;
//}

//subtitle 2 {
// font-style: normal;
// font-weight: 500;
// font-size: 14px;
// line-height: 24px;

// letter-spacing: 0.1px;
//}

//body 1 {
// font-style: normal;
// font-weight: normal;
// font-size: 16px;
// line-height: 24px;

// letter-spacing: 0.5px;
// }

//body 2 {
// font-style: normal;
// font-weight: normal;
// font-size: 14px;
// line-height: 20px;

// letter-spacing: 0.25px;
// }

//button {
// font-style: normal;
// font-weight: 500;
// font-size: 14px;
// line-height: 16px;

// letter-spacing: 1.25px;
// text-transform: uppercase;
// }

//caption {
// font-style: normal;
// font-weight: normal;
// font-size: 12px;
// line-height: 16px;

// letter-spacing: 0.4px;
// }

//overline {
// font-style: normal;
// font-weight: 500;
// font-size: 10px;
// line-height: 16px;

// letter-spacing: 1.5px;
// text-transform: uppercase;
// }

@media screen and (max-width: 960px) {
  h1 {
    font-size: 64px;
  }

  h2 {
    font-size: 48px;
  }
}

`;
