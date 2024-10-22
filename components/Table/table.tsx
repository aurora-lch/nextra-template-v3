import React from 'react';

import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableColumn,
  TableRow,
  getKeyValue
} from '@nextui-org/table';

interface Column {
  key: string;
  label: string;
}

export interface PropsType {
  columns: Column[];
  datas: any[];
}

export default function ({
  columns,
  datas
}: PropsType) {

  return (
    <Table aria-label='table'>
      <TableHeader columns={columns}>
        {(col) => <TableColumn key={col.key}>{col.label}</TableColumn>}
      </TableHeader>
      <TableBody items={datas}>
        {(item) => (
          <TableRow key={item.key}>
            {(colKey) => <TableCell key={colKey}>{getKeyValue(item, colKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
