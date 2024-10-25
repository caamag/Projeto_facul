import * as Css from './style';

interface ResponseMessageProps {
    status: 'alert' | 'error' | 'success';
    message: string;
}

const ResponseMessage: React.FC<ResponseMessageProps> = ({ status, message }) => {
    return (
        <Css.ResponseContainer status={status}>
            {message}
        </Css.ResponseContainer>
    )
}

export default ResponseMessage;