import './App.css';
import StartPage from "../pages/StartPage/StartPage";
import {BrowserRouter as Router, Route, Switch, Link, useLocation} from "react-router-dom";
import React from "react";
import FlexOrGrid from "../pages/ItemPage/FlexOrGrid/FlexOrGrid";
import HTML from "../pages/ItemPage/HTML/HTML";
import Selectors from "../pages/ItemPage/Selectors/Selectors";
import Portals from "../pages/ItemPage/Portals/Portals";
import Components from "../pages/ItemPage/Components/Components";




function App() {

    return (
        <Router>
            <div className="App">
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <StartPage/>
                        </Route>

                                <Route exact path={"/FlexOrGrid"}>
                                    <FlexOrGrid/>
                                </Route>
                                <Route exact path={"/Components"}>
                                    <Components/>
                                </Route>
                                <Route exact path={"/HTML"}>
                                    <HTML/>
                                </Route>
                                <Route exact path={"/Selectors"}>
                                    <Selectors/>
                                </Route>
                                <Route exact path={"/Portals"}>
                                    <Portals/>
                                </Route>
                        {/*<ItemPage/>*/}


                        <Route path="*">
                            <div role={'status'} style={{color: 'white'}}>Страница не найдена</div>
                            <Link to='/'>Back to Main Page</Link>
                        </Route>

                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
