import React, { useState, useMemo, useEffect } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import Icon from "./Icon";

const columnHelper = createColumnHelper()
const sampleTitles = [
  "Whisk It Decodable Text (Take Home Book)",
  "But, the Nut! Decodable Text (Take Home Book)",
  "Stretch, Sprint, Kick, Win! Decodable Text (Take Home Book)",
  "A Hot Hot Place Decodable Text (Take Home Book)",
  "The Drill Truck Decodable Text (Take Home Book)",
  "The Box Decodable Text (Take Home Book)",
  "Get It Done Decodable Text (Take Home Book)",
  "Fuel to Fly: The Life of Katherine Cheung Decodable Text (Take Home Book)",
  "Look! It's Lisa! Decodable Text (Take Home Book)",
  "This Is My Bath Decodable Text (Take Home Book)",
  "Cat and Nat Decodable Text (Take Home Book)",
  "Hip Hop the Cat Decodable Text (Take Home Book)",
  "Mimic It Decodable Text (Take Home Book)",
  "Quack Quiz Decodable Text (Take Home Book)",
  "A Web Went Up Decodable Text (Take Home Book)",
  "My Skin's Got Skills Decodable Text (Take Home Book)]",
]

function ComponentTable({ compCodes }) {

  const viewEditAttribute = (id) => {
    window.alert(`View/Edit clicked on '${id}'`);
  }

  const makeData = () => {
    return compCodes.map((code, i) => ({
      compCode: code,
      title: sampleTitles[i % 16],
      type: "Take Home Book",
    }))
  }

  const [data, setData] = useState(makeData);
  const [sorting, setSorting] = useState([]);

  useEffect(
    () => setData(makeData),
    [compCodes]
  );

  const columns = useMemo(
    () => [
      columnHelper.display({
        id: 'selected',
        cell: info => <div className="tc"><input type="checkbox" /></div>,
      }),
      columnHelper.accessor('compCode', {
        header: 'Component Code',
        cell: info => info.getValue(),
        footer: info => info.column.id,
      }),
      columnHelper.accessor('title', {
        header: 'Component Title',
        cell: info => info.getValue(),
        footer: info => info.column.id,
      }),
      columnHelper.accessor('type', {
        header: () => 'Component Type',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
      }),
      columnHelper.display({
        id: 'actions',
        cell: info => <AssociateButton id={info.row.getVisibleCells()[1].getValue()} onClickViewEdit={viewEditAttribute} />,
        sortable: false,
      }),
    ], []
  )

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="pa2 f6">

      <table className="ba b--light-accent collapse">
        <thead>
          {table.getHeaderGroups().map(group => (
            <tr key={group.id}>
              {group.headers.map(header => (
                <th key={header.id} className="pa2 pv3 ba b--light-accent">
                  {header.isPlaceholder
                    ? null
                    : <div
                      {...{
                        className: `justify-between ${header.column.getCanSort() ? 'pointer flex' : 'dn '}`,
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <Icon icon='up' className='ml2 f7' />,
                        desc: <Icon icon='down' className='ml2 f7' />,
                      }[header.column.getIsSorted()] ?? <Icon icon='updown' className='ml2 f5' />}
                    </div>
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="pa2 pv3 ba b--light-accent">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}


function AssociateButton({ id, onClickViewEdit }) {

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onClickViewEdit(id);
  }

  return (
    <div
      className="bg-accent white pointer br1 ba0 pa2 f7"
      onClick={handleClick}
    >Associate</div>
  )
}


export default ComponentTable;