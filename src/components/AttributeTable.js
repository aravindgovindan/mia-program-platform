import React, { useState, useReducer, useMemo } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import Icon from "./Icon";
import sample from '../data/sample-table.json';
import Dropdown from "./Dropdown";

const defaultData = sample
const columnHelper = createColumnHelper()


function AttributeTable() {

  const [data, setData] = useState(() => [...defaultData]);
  const [sorting, setSorting] = useState([]);
  const [currentPage, setCurrentPage] = useState('1');
  const rerender = useReducer(() => ({}), {})[1]

  const viewEditAttribute = (id) => {
    window.alert(`View/Edit clicked on '${id}'`);
  }

  const changePage = (pageNum) => {
    table.setPageIndex(+pageNum - 1)
  }
  const goNextPage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    table.nextPage();
    setCurrentPage(`${+currentPage + 1}`)
  }
  const goPreviousPage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    table.previousPage();
    setCurrentPage(`${+currentPage - 1}`)
  }

  const columns = useMemo(
    () => [
      columnHelper.display({
        id: 'serialNumber',
        cell: info => <div className="tc ">{info.row.index + 1}</div>,
      }),
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
        cell: info => <ViewEditButton id={info.row.getVisibleCells()[1].getValue()} onClickViewEdit={viewEditAttribute} />,
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
    <div className="pa2">

      <div className="pa2 flex items-center">
        <div
          className="pv1 f4 w2 flex items-center justify-center br-0 ba b--light-accent bw1 pointer"
          onClick={goPreviousPage}
        >
          <Icon icon='left' className='pv1' />
        </div>
        <Dropdown
          options={Array(table.getPageCount()).fill(0).map((_, index) => ({ id: `${index + 1}`, label: `Page ${index + 1}` }))}
          value={currentPage}
          onSelect={changePage}
        />
        <div
          className="pv1 f4 w2 flex items-center justify-center bl-0 ba b--light-accent bw1 pointer"
          onClick={goNextPage}
        >
          <Icon icon='right' className='pv1' />
        </div>
      </div>

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
      <div className="h4" />
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{table.getRowModel().rows.length} Rows</div>
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