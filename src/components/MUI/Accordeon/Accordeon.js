import * as React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import styles from './Accordeon.module.scss'
import FullWidthTabs from "../Tabs/Tabs";
import ComponentSyntax from "../../codeViewer/codeViewer";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgb(255,255,255)'
            : 'rgb(23, 26, 30)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));
const StyledAccordion = styled(Accordion)(({theme}) => ({
    border: '1px solid #282b2ed6',
    background: 'rgb(26 29 33)',
}));
const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '9px',
    background: 'rgb(26 29 33)',
}));

export default function CustomizedAccordions(props) {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <StyledAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>{props.title} {props.selector}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={styles.code}>
                        {props.description}
                    </div>
                    <div className={styles.result}><FullWidthTabs jsxCode={props.jsxCode}
                                                                  jsxLanguage={props.jsxLanguage}
                                                                  cssCode={props.cssCode}
                                                                  cssLanguage={props.cssLanguage}/>
                    </div>
                    <div className={styles.description}><span className={styles.resultText}>Result:</span> {props.result}</div>
                </AccordionDetails>
            </StyledAccordion>
        </div>
    );
}
