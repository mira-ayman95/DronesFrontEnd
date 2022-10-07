import styled from 'styled-components';

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

function Table(props) {
    const data = props.data;
    const columns = props.columns || ["serialNum", "weight", "model"];
    return (
        <StyledTable>
            <tr>
                {
                    columns.map(column => (
                        <th>{column}</th>
                    ))
                }
            </tr>
            <tbody>
                {
                    data.map(item => (
                        <tr>
                            {
                                columns.map(column => (
                                    <td>{item[column]}</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>

        </StyledTable>
    );
}

export default Table;



