import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

html{
  font-size: 10px;
}

body {
  font-size: 1.6rem;
  font-family: Lato;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.backgroundColor};
}

#root {
  color: ${props => props.theme.color};
  width: 75vw;
}

/* Media Queryes */

@media (min-width: 500px) and (max-width: 600px) {
  #root {
    width: 70vw;
    font-size: calc(1rem + 1vh);
  }
}
@media (min-width: 600px) and (max-width: 700px) {
  #root {
    width: 65vw;
    font-size: calc(1.2rem + 1vh);
  }
}
@media (min-width: 700px) and (max-width: 800px) {
  #root {
    width: 60vw;
    font-size: calc(1.4rem + 1vh);
  }
}
@media (min-width: 800px) and (max-width: 1200px) {
  #root {
    width: 45vw;
    font-size: 1.4em;
  }
}
@media (min-width: 1200px) {
  #root {
    width: 450px;
    font-size: 1.8rem;
  }
  .card {
    padding-top: 1em;
  }

  .card ul {
    height: 50vh;
  }
}
  `;

export const dark = {
  color: 'white',
  backgroundColor: 'black',
  differenceColor: '#f32222'
};

export const light = {
  color: 'black',
  backgroundColor: 'white',
  differenceColor: '#ec8b8b'
};
