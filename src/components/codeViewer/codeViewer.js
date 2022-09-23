import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {atomDark} from "react-syntax-highlighter/src/styles/prism";
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const ComponentSyntax = (props) => {
    const codeString = props.code;

    return (<SyntaxHighlighter
            showLineNumbers={true}
            wrapLines={true}
            language={props.language}
            style={atomDark}
            lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap' }}}
        >
            {codeString}
        </SyntaxHighlighter>);
};

export default ComponentSyntax;


