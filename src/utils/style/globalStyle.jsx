import { createGlobalStyle } from 'styled-components'

function GlobalStyle() {
  const StyledGlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

    :root {
        --primary-color: #FF6060;
    }

    * {
        font-family: 'Montserrat', sans-serif;
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