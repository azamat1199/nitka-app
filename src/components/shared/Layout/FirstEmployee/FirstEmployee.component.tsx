import React, { FC } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import get from "lodash/get";

import "./FirstEmployee.style.scss";
import { useGetCollection } from "../../../../hooks/queries/general";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Id",
    dataIndex: "id",
    key: "name",
    render: (data, mock, i) => <div>{i + 1}</div>,
    width: 150,
  },
  {
    title: "color",
    dataIndex: "created_at",
    key: "age",
    width: 80,
  },
  {
    title: "Address",
    dataIndex: "color",
    key: "address 1",
    ellipsis: true,
  },
  {
    title: "Long Column Long Column Long Column",
    dataIndex: "created_at",
    key: "address 2",
    ellipsis: true,
  },
  {
    title: "Long Column Long Column",
    dataIndex: "gsm",
    key: "address 3",
    ellipsis: true,
  },
  {
    title: "Long Column",
    dataIndex: "machine_number",
    key: "address 4",
    ellipsis: true,
  },
  {
    title: "Long Column",
    dataIndex: "type",
    key: "address 4",
    ellipsis: true,
  },
  {
    title: "Long Column",
    dataIndex: "weight",
    key: "address 4",
    ellipsis: true,
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 2 Lake Park, London No. 2 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const FirstEmployee: FC = () => {
  const getCollection = useGetCollection();

  const dataSource = get(getCollection, "data.data", []);

  return (
    <div className="pt-20 pl-8 pr-8">
      <div>
        <Table columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
};

export default FirstEmployee;
