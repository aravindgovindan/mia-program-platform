import React, { useState, useReducer, useMemo } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import Icon from "./Icon";
import sample from '../data/sample-table.json';

const defaultData = sample
const columnHelper = createColumnHelper()


function AttributeTable() {

  const [data, setData] = useState(() => [...defaultData]);
  const [sorting, setSorting] = useState([]);
  const rerender = useReducer(() => ({}), {})[1]

  const viewEditAttribute = (id) => {
    window.alert(`View/Edit clicked on '${id}'`);
  }

  const columns = useMemo(
    () => [
      columnHelper.accessor('Entity', {
        header: 'Entity',
        cell: info => info.getValue(),
        footer: info => info.column.id,
      }),
      columnHelper.accessor('Attribute Name', {
        id: 'attributeName',
        cell: info => info.getValue(),
        header: () => <span>Attribute Name</span>,
        footer: info => info.column.id,
      }),
      columnHelper.accessor('Description', {
        header: () => 'Description',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
      }),
      columnHelper.accessor('Date Created', {
        header: () => 'Date Created',
        footer: info => info.column.id,
      }),
      columnHelper.accessor('Date Updated', {
        header: 'Date Updated',
        footer: info => info.column.id,
      }),
      columnHelper.display({
        id: 'actions',
        cell: info => <ViewEditButton id={info.row.getVisibleCells()[1].getValue()} onClickViewEdit={viewEditAttribute}/>,
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
    })

  return (
    <div className="pa2">
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
                <td key={cell.id} className="pa2 pv4 ba b--light-accent">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
      <div className="h4" />
      <button onClick={() => rerender()} className="ba p2">Rerender</button>
    </div>
  )
}


function ViewEditButton({ id, onClickViewEdit }) {

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onClickViewEdit(id);
  }

  return (
    <div
      className="bg-accent white pointer br1 ba0 pa2 f7"
      onClick={handleClick}
    >View/Edit</div>
  )
}


export default AttributeTable;