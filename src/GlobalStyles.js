import styled, { createGlobalStyle } from "styled-components";

const tableDark = "#291925";
const tableMid = "#8a5a8a";
const tableLight = "#e3c5e3";
const GlobalStyle = createGlobalStyle`
#root {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  font-family: "Ubuntu", sans-serif;
  margin: 20px;
}

body {
  background-color: #0f070d;
  color: #e3c5e3;
  padding: 20px;
  margin: 0;
}

h1,
h2,
p,
ul,
li {
  font-family: sans-serif;
}
ul.header li {
  display: inline;
  list-style-type: none;
  margin: 0;
}
ul.header {
  background-color: #111;
  padding: 0;
}
ul.header li a {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  padding: 20px;
  display: inline-block;
}
.content {
  background-color: #fff;
  padding: 20px;
}
.content h2 {
  padding: 0;
  margin: 0;
}
.content li {
  margin-bottom: 10px;
}
.Calculator {
  display: flex;
  flex-direction: column;
  color: #0f070d;
}

section {
  background: rgb(250, 197, 205);
  color: #0f070d;
  padding: 10px;
  margin: 20px;
  line-height: 1.5em;
}

.Table table {
  background-color: #e3c5e3;
  color: #0f070d;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.Table th,
.Table td,
.Table tr {
  color: #0f070d;
  border: 2px solid #0f070d;
  padding: 5px;
}

footer {
  margin-top: auto;
  margin: 60px 20px 20px 20px;
  border-top: 0.5px solid #e3c5e3;
}

#title {
  text-align: center;
  font-family: arial, sans-serif;
}

#students {
  text-align: center;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border: 3px solid ${tableDark};
  width: 100%;
}

#students td,
#students th {
  border: 1px solid ${tableDark};
  padding: 8px;
}

#students tr:nth-child(even) {
  background-color: ${tableLight};
  color: ${tableDark};
}

#students tr:hover {
  background-color: ${tableMid};
}

#students th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: ${tableMid};
  color: ${tableDark};
}
`;

export default GlobalStyle;
