import styled from 'styled-components';
import { Center } from './center';

const StyledTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  
  & th,td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  & tr:nth-child(even) {
    background-color: #dddddd;
  }
`;
const NoDataMessage = styled.div`
    color: #00aeff;
`

function Table(props) {
    const data = props.data;
    const columns = props.columns;
    return (
        <StyledTable>
            {(data.length == 0) ? <Center> <NoDataMessage> {props.message} </NoDataMessage> </Center> : (
                <>
                    <thead>
                        <tr>
                            {
                                columns.map((column, index) => (
                                    <th key={`${index}`}>{column}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => (
                                <tr key={`${index}`}>
                                    {
                                        columns.map((column, index) => (
                                            <td key={`${index}`}>{item[column]}</td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </>
            )}

        </StyledTable>
    );
}

export default Table;



