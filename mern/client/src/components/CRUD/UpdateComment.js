import React from 'react'

const RecordCode = () => {
    return (
        <div>
            <>
                <Typography variant='h5'>
                    Site Visitors
                </Typography>
                <Table stickyHeader>
                    <TableHead id='Name'>
                        <TableRow>
                            {this.recordList()}
                        </TableRow>
                    </TableHead>
                </Table>

            </>
            <h3>Record List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{this.recordList()}</tbody>
            </table>
        </div>
    );
};

export default RecordCode
