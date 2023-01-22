import React, { FC } from "react";
// import { Table } from "antd";
import Table from "../../components/shared/Table";
import get from "lodash/get";
import type { ColumnsType } from "antd/es/table";
import "./SecondEmployee.style.scss";
import { useGetCollection } from "../../hooks/queries/general";
import { CatalogDTO } from "../../types/utils";
import useGetYarn from "../../hooks/queries/general/useGetYarns";

// interface DataType {
//   key?: React.Key;
//   name?: string;
//   age?: number;
//   address?: string;
//   title?: any;

// }
const columns: ColumnsType<CatalogDTO> = [
  {
    title: "Id",
    width: 150,
    dataIndex: "id",
    key: "name",
    render: (data, mock, i) => <div>{i + 1}</div>,
  },
  {
    title: "Turi",
    dataIndex: "created_at",
    key: "age",
    width: 80,
  },
  {
    title: "Color",
    dataIndex: "color",
    key: "address 1",
    ellipsis: true,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "address 2",
    ellipsis: true,
  },
  {
    title: "Weight",
    dataIndex: "weight",
    key: "address 3",
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

const SecondEmployee: FC = () => {
  const getYarn = useGetYarn();
  // const dataSource: CatalogDTO[] = get(getAllCollection, "data", [])

  const getCollection = useGetCollection();

  const dataSource = get(getYarn, "data.data", []);

  return (
    <div className="pt-20 pl-8 pr-8">
      <div>
        <Table columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
};

export default SecondEmployee;
