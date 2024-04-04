import React from 'react';

const History = () => {
    return (
        <>
            <div className="employee-background">
                <div>
                    <h2>Your History</h2>
                    <div className= "employee-history">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Time In</th>
                                <th>Time Out</th>
                                <th>Files</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Jhasmin Fulache</td>
                            <td>7:05 am</td>
                            <td>5:00 pm</td>
                            <td>http.web/com</td>
                            </tr>
                            <tr>
                            <td>Jhasmin Fulache</td>
                            <td>7:05 am</td>
                            <td>5:00 pm</td>
                            <td>http.web/com</td>
                            </tr>
                        </tbody>
                    </table>
                <h2 style={{color: 'blue' }}>Dito papasok yung mga data</h2>
                </div>
            </div>
            </div>
        </>
    );
};

export default History;
