import React, { useState } from 'react';
import { clsx } from 'clsx';
import styles from "./LDTable.module.css";
import { Table } from 'antd';
export const LDTable = ({
  columns,
  data,
  className,
  pagination
}) => {
  return (
   <>
      <Table className={className} columns={columns} dataSource={data}
      pagination={pagination}
        scroll={{
          x: 'max-content',
        }}
      />
   </>
  );
};