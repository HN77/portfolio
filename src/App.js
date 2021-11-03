import { ThemeProvider } from 'styled-components';
import { lightMode } from './components/Themes/Themes';
import { Route, Switch } from 'react-router';
import GlobalStyle from './globalStyle';

// Components
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Works from './components/Works/Works';
import Blog from './components/Blog/Blog';
import Skills from './components/Skills/Skills';

function App() {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={lightMode}>
                <Switch>
                    <Route path="/" exact component={Welcome} />
                    <Route path="/a-propos" component={About} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/competances" exact component={Skills} />
                    <Route path="/projets" component={Works} />
                </Switch>
            </ThemeProvider>
        </>
    );
}

export default App;
