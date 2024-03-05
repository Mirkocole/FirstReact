import React from "react";

function Table(props) {
    const {data} = props;

    console.log(data)
    return (
        <>
            <table className="table  shadow table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>

                        {
                            Object.keys(data[0]).map(ele =>{
                                return (<th scope="col">{ele.toUpperCase()}</th>);
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(ele =>{
                           return( 
                           <tr key={ele.question}>
                                <td>{data.indexOf(ele)+1}</td>
                                <td>{ele.question}</td>
                                <td>{ele.answer}</td>
                            </tr>);
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Table;