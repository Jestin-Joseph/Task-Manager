import React from 'react'
import Styles from './ElTable.module.scss'

function ElTable({
    columns,
    content,
    data,
    getRowId = (row) => row.id,
    components = {},
    onChange
}) {
    return (
        <div className={Styles.tableWrapper}>
            <table className={Styles.table}>
                <thead className={Styles.tableHeading}>
                    <tr>
                        {
                            columns?.map((col, index) => (
                                <th key={col.accessor || col.header}>
                                    {col.header}
                                </th>
                            ))
                        }

                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((row, index) => {
                            const rowId = getRowId(row);

                            return (
                                <tr key={row.id} >
                                    {
                                        columns?.map((col) => {
                                            const value = col.accessor ? row[col.accessor] : undefined

                                            const CellComp = components[col.accessor];

                                            return (
                                                <td key={`${rowId}-${col.accessor || col.header}`}>
                                                    {
                                                        CellComp ? (
                                                            <CellComp
                                                                value={value}
                                                                row={row}
                                                                onChange={onChange}
                                                            />
                                                        ) : (
                                                            // default rendering (with optional formatter)
                                                            col.format ? col.format(value, row) : String(value ?? '')
                                                        )

                                                    }
                                                </td>
                                            )
                                        })
                                    }

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className={Styles.functionContainer}>
                some
            </div>
        </div>
    )
}

export default ElTable