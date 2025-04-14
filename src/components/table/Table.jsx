
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from '@tanstack/react-table';
import { Pagination } from "./Pagination";
import table from "./Table.module.css";
import { useTheme } from "../styling/ThemeContext";
import { Loader } from "../styling/Loader";

export default function Table({ columns, data, loading, onPaginationChange, onSortingChange, pagination, rowCount, sorting
}) {

  const tableLib = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    manualSorting: true,
    onPaginationChange,
    onSortingChange,
    state: { pagination, sorting },
    rowCount,
  });
  const theme = useTheme();


  return (
    <div>
      <table className={table.tableWrapper}>
        <thead className={table.theadWrapper} style={theme.h5}>
          {tableLib.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  {...(header.column.getCanSort() ? { onClick: header.column.getToggleSortingHandler() } : {})}
                  style={{ ...theme.h5, ...theme.normal }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}

                  {header.column.getIsSorted() === "asc" ? (
                    <span> 🔼</span>
                  ) : header.column.getIsSorted() === "desc" ? (
                    <span> 🔽</span>
                  ) : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody
          className={table.tbodyWrapper}
          style={{ ...theme.h4, ...theme.greyColor }}
        >
          {loading ? (
            <tr>
              <td colspan="100%">
                <Loader />
              </td>
            </tr>
          ) : (
            tableLib.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Pagination tableLib={tableLib} sizes={[5, 10, 20]} />
    </div>
  );
}