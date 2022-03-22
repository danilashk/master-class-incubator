import React from 'react';
import {Route} from "react-router-dom";
import FlexOrGrid from "./FlexOrGrid/FlexOrGrid";
import Tables from "./Tables/Tables";
import HTML from "./HTML/HTML";
import Selectors from "./Selectors/Selectors";
import Portals from "./Portals/Portals";

const ItemPage = () => {
    return (
        <>
            <Route exact path={"/FlexOrGrid"}>
                <FlexOrGrid/>
            </Route>
            <Route exact path={"/Tables"}>
                <Tables/>
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
        </>
    );
};

export default ItemPage;
