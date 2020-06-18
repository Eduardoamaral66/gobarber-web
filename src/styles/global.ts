import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312E38;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  img {
    object-fit: cover;
  }

body, input, button {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
}

h1,h2,h3,h4,h5,h6, strong {
  font-weight: 500;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

.fa-spin {
  animation: fa-spin 2s infinite linear;
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

`;
