import React, { FC, ReactNode } from "react";
import { Table as AntTable, TableProps } from "antd";
// import { useTranslation } from "react-i18next";

import classes from "./Table.module.scss";
// import Filter from "./components/Filter";
import { Key } from "antd/es/table/interface";

type Props = TableProps<any> & {
  bordered?: boolean;
  download?: boolean;
  filter?: boolean;
  address?: boolean;
  paginationVisible?: boolean;
  paginationPosition?:
    | "topLeft"
    | "topCenter"
    | "topRight"
    | "bottomLeft"
    | "bottomCenter"
    | "bottomRight";
  itemSelection?: { itemCount: string; onSelect: (value: string) => void };
  searchValue?: string;
  searchValueChange?: (value: string) => void;
  deleteHandler?: (value: Key[]) => void;
  formatButtons?: { id: number; label: string; icon: ReactNode }[];
};

const Table: FC<Props> = ({
  filter,
  paginationPosition,
  bordered = true,
  paginationVisible = true,
  download = true,
  address,
  itemSelection,
  searchValue,
  searchValueChange,
  deleteHandler,
  formatButtons,
  ...props
}) => {
  // const { t } = useTranslation();

  const fileTypes = [
    { id: 1, value: "pdf", label: "PDF" },
    { id: 2, value: "doc", label: "DOC" },
    { id: 3, value: "xls", label: "XLS" },
  ];

  return (
    <div className={classes.table}>
      {/* {filter && (
				<Filter
					address={address}
					selectedRowKeys={props.rowSelection?.selectedRowKeys}
					itemSelection={itemSelection}
					searchValue={searchValue}
					searchValueChange={searchValueChange}
					deleteHandler={deleteHandler}
					formatButtons={formatButtons}
				/>
			)} */}
      <AntTable
        {...props}
        bordered={bordered}
        pagination={
          paginationVisible && {
            ...props.pagination,
            position: [paginationPosition || "bottomLeft"],
            showSizeChanger: false,
            itemRender: (
              current: number,
              type: string,
              originalElement: any
            ) => {
              if (type === "prev") {
                return <span>{"Предыдущая"}</span>;
              }
              if (type === "next") {
                return <span>{"Следующая"}</span>;
              }
              return originalElement;
            },
          }
        }
      />
      {/* {download && props.dataSource && <DownloadFile fileTypes={fileTypes} />} */}
    </div>
  );
};

export default Table;
