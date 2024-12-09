import React, { useState } from 'react';
import { clsx } from 'clsx';
import styles from "./LDTable.module.css";
import { Table } from 'antd';
export const LDTable = ({
  columns,
  data,
  className
}) => {
  return (
   <>
      <Table className={className} columns={columns} dataSource={data}
        scroll={{
          x: 'max-content',
        }}
      />
   </>
  );
};