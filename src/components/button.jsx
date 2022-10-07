import styled from 'styled-components';

export const Button = styled.button`
    align-self: flex-end;
    width: ${props => props.width || '200px'};
    padding: 10px;
    background-color: #00aeff;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
    &:hover {
        cursor: pointer;
    }
`;