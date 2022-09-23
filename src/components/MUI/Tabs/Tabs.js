import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {styled} from "@mui/material";
import ComponentSyntax from "../../codeViewer/codeViewer";
import MuiAccordion from "@mui/material/Accordion";

function TabPanel(props) {
    const { children, value, index, ...other } = props;


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs(props) {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const StyledTabPanel = styled(TabPanel)(
        {
            background: 'rgb(29 31 33)',
            '& .MuiBox-root': {
                padding: '3px'
            },
        },
    );

    const StyledTabs = styled((props) => (
        <AppBar position="static"
                {...props}
        />
    ))({
        '&.MuiPaper-root': {
            backgroundColor: 'rgb(37 40 42)'
        },
    });
    return (
        <Box sx={{ bgcolor: 'rgb(29 31 33)', width: '100%' }}>
            <StyledTabs position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor='primary'
                    textColor='inherit'
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="HTML" {...a11yProps(0)} />
                    <Tab label="CSS" {...a11yProps(1)} />
                </Tabs>
            </StyledTabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <StyledTabPanel value={value} index={0} dir={theme.direction}>
                    <ComponentSyntax code={props.jsxCode} language={props.jsxLanguage}/>
                </StyledTabPanel>
                <StyledTabPanel value={value} index={1} dir={theme.direction}>
                    <ComponentSyntax code={props.cssCode} language={props.cssLanguage}/>
                </StyledTabPanel>
            </SwipeableViews>
        </Box>
    );
}
