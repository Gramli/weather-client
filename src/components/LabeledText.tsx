export interface LabeledTextProps {
    title: string;
    value: string;
};

const LabeledText: React.FC<LabeledTextProps> = (props) => {
    return (<div>
    <label>{`${props.title}: `}</label>
    <label>{props.value}</label>
    </div>);
}

export default LabeledText;