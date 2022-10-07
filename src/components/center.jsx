import styled from "styled-components";

export const Center = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.backgroundColor || 'white'};
    padding: 100px 100px;
`;