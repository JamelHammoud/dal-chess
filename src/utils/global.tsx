import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
    font-size: 1rem;
    margin: 0;
    font-family: ${({ theme }) => theme.fontFamily1};
    overscroll-behavior-y: none;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, p, ul, li {
    margin: 0;
  }

  label {
    cursor: auto;
  }

  input, button, select, textarea {
    -webkit-appearance: none;
    outline: none;
    font-family: ${({ theme }) => theme.fontFamily1};
    margin: 0;
    padding: 0;
    font-size: 1rem;
    border: 0;
  }

  input::placeholder {
    color: ${({ theme }) => theme.gray500};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: inherit;
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.amber050} inset;
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.amber050} inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  input:-webkit-autofill::first-line {
    font-family: ${({ theme }) => theme.fontFamily1};
    font-size: 1rem !important;
    color: ${({ theme }) => theme.gray700};
  }

  button:hover {
    cursor: pointer;
  }

  .width-controller {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .no-deco {
    text-decoration: none;
    color: inherit;
  }

`
