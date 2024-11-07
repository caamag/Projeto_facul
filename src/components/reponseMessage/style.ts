import styled from "styled-components";

interface ResponseContainerProps {
    status: 'alert' | 'error' | 'success';
}

const borderColor: Record<ResponseContainerProps['status'], string> = {
    alert: 'yellow',
    error: 'red',
    success: 'green',
};

export const ResponseContainer = styled.div<ResponseContainerProps>`
    position: fixed;
    top: 30px;
    left: 0px;
    right: 0px;
    margin: auto;
    background-color: white;
    z-index: 5;
    font-size: 14px;
    box-shadow: 0px 0px 5px 2px rgb(220,220,220);

    width: 350px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 6px solid ${({ status }) => borderColor[status] || 'gray'};
`;