import { createGlobalStyle } from 'styled-components'

function GlobalStyle() {
  const StyledGlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #FF6060;
    }

    * {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-weight: 500;
    }
 
    main {
        margin: 0 auto; 
        max-width:1240px;
        padding:45px 100px;
        padding-bottom:0;
    }

    body{
        margin:0;
    }
`
    return <StyledGlobalStyle/>
}

export default GlobalStyle