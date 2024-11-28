import React, { useState } from 'react';
import { clsx } from 'clsx';
import styles from "./LDTable.module.css";
import { Table } from 'antd';

export const LDTable = ({
  columns,
  data
}) => {
 
  return (
   <>
      <Table columns={columns} dataSource={data} scroll={{
        x: 'max-content',
      }}/>
   </>
  );
};