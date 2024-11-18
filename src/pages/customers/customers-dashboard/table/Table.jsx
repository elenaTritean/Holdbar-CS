import React from 'react'
import {useTable} from "react-table"

import table from "./Table.module.css"
import { useTheme } from "../../../../components/styling/ThemeContext"

export default function Table({data, columns}) {
  
  
  const theme = useTheme();


  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable ({columns, data});

  
  return (
    <div>
      <table {...getTableProps()} className={table.tableWrapper} >
        <thead className={table.theadWrapper} style={theme.h5}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} style={{...theme.h5,...theme.normal}}>
                  {column.render("Header")}
                </th>
                ))} 
            </tr>
           )
           )}
        </thead>

        <tbody {...getTableBodyProps()}  className={table.tbodyWrapper} style={{...theme.h4, ...theme.normal}}>
           {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) =>(
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
           ))}
              </tr>
            )
           })}
        </tbody>
      </table>
    </div>
  )
}
