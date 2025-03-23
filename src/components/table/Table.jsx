import React from 'react'
import {useTable} from "react-table"
import table from "./Table.module.css"
import { useTheme } from "../styling/ThemeContext"

export default function Table({data, columns}) {
  
  
  const theme = useTheme();
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable ({columns, data});
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  
  return (
    <div>
      <table {...getTableProps()} className={table.tableWrapper} >
        <thead className={table.theadWrapper} style={theme.h5}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps)} style={{...theme.h5,...theme.normal}} onClick={column.initialSortOrder}>
                  {column.render("Header")}
                  <button
                    
                  />
                </th>
                ))} 
            </tr>

           )
           )}
        </thead>

        <tbody {...getTableBodyProps()} className={table.tbodyWrapper} style={{ ...theme.h4, ...theme.greyColor }}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} >
                {row.cells.map((cell) => {
                  return (
                    <td data-label={cell.column.id} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>)})}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
