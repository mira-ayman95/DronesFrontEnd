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

        </StyledTable>
    );
}

export default Table;



