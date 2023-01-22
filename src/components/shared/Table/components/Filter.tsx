import React, { FC, ReactNode, useMemo } from "react";
// // import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
// import { Col, message, Row, Select as AntSelect, Space } from "antd";
// import { Key } from "antd/es/table/interface";

// // import { Button } from "components";
// import classes from "../Table.module.scss";
// // import { Select, Input } from "components/shared";
// // import { ReactComponent as JsonIcon } from "assets/svg/json.svg";
// // import { ReactComponent as XmlIcon } from "assets/svg/xml.svg";
// // import { ReactComponent as XlsIcon } from "assets/svg/xls.svg";
// // import { useFavoriteFileDownloadMutation } from "hooks/mutations";
// // import { useGetProfileQuery } from "../../../../hooks/queries";

// type Props = {
// 	address?: boolean;
// 	selectedRowKeys?: Key[];
// 	itemSelection?: { itemCount: string; onSelect: (value: string) => void };
// 	searchValue?: string;
// 	searchValueChange?: (value: string) => void;
// 	deleteHandler?: (value: Key[]) => void;
// 	formatButtons?: { id: number; label: string; icon: ReactNode }[];
// };

// const Filter: FC<Props> = ({ selectedRowKeys, formatButtons, itemSelection, searchValue, searchValueChange, deleteHandler }) => {
// 	const { t } = useTranslation();
// 	const { Option } = AntSelect;
// 	const userQuery = useGetProfileQuery();

// 	const fileDownloadMutation = useFavoriteFileDownloadMutation();

// 	const user = useMemo(() => userQuery.data?.data || {}, [userQuery.data]);

// 	const onDownload = (type: string) => {
// 		const mutationPromise = fileDownloadMutation.mutateAsync({ type });

// 		const hide = message.loading(t("Файл юкланмоқда"), 0);

// 		mutationPromise
// 			.then((response) => {
// 				const a = document.createElement("a");
// 				switch (type) {
// 					case "json": {
// 						a.href = URL.createObjectURL(
// 							new Blob([JSON.stringify(response.data, null, 2)], {
// 								type: `${type}/plain`
// 							})
// 						);
// 						break;
// 					}
// 					case "excel": {
// 						a.href = URL.createObjectURL(
// 							new Blob([response.data], {
// 								type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
// 							})
// 						);
// 						break;
// 					}
// 					case "xml": {
// 						const xmlText = "<sometag><someothertag></someothertag></sometag>";
// 						const link = (a.href = URL.createObjectURL(new Blob([xmlText], { type: "text/plain" })));
// 						//@ts-ignore
// 						a.setAttribute("href", window.URL.createObjectURL(link));
// 						break;
// 					}
// 					default: {
// 						a.href = URL.createObjectURL(new Blob([response.data], { type: "text/plain" }));
// 					}
// 				}
// 				// @ts-ignore
// 				let fileName = user["tin"] || "classifier";
// 				a.setAttribute("download", `${fileName}.${type === "excel" ? "xls" : type}`);
// 				document.body.appendChild(a);
// 				a.click();
// 				document.body.removeChild(a);
// 				hide();
// 				message.success(t("Файл юкланди"));
// 			})
// 			.catch(() => {
// 				hide();
// 				message.error(t("Файлни юклашда хатолик"));
// 			});
// 	};

// 	return (
// 		<div className={classes.filter}>
// 			<Row gutter={[0, 30]}>
// 				{selectedRowKeys && (
// 					<Col md={4} xs={12}>
// 						<Button
// 							size={"large"}
// 							disabled={selectedRowKeys?.length === 0}
// 							tab
// 							subtle
// 							onClick={() => selectedRowKeys && deleteHandler && deleteHandler(selectedRowKeys)}>
// 							{t("Удалить")}
// 						</Button>
// 					</Col>
// 				)}
// 				<Col md={selectedRowKeys ? 10 : 14} xs={24}>
// 					<Input
// 						isSearch
// 						searchType={"secondary"}
// 						onChange={(event) => searchValueChange && searchValueChange(event.target.value)}
// 						value={searchValue}
// 						size={"small"}
// 						placeholder={`${t("Найти по названию")}...`}
// 					/>
// 				</Col>
// 				<Col md={4} xs={12}>
// 					<div className={classes.buttons}>
// 						{formatButtons && (
// 							<Space size={20}>
// 								{formatButtons.map((item) => (
// 									<Link to={"#"} onClick={() => onDownload(item.label)}>
// 										{item.icon}
// 									</Link>
// 								))}
// 							</Space>
// 						)}
// 					</div>
// 				</Col>
// 				<Col md={6} xs={24}>
// 					<div className={classes.right}>
// 						<span className={"mr-10"}>{t("Записей на странице")}</span>
// 						<Select defaultValue={itemSelection?.itemCount} onSelect={(event: string) => itemSelection?.onSelect(event)}>
// 							<Option value={"5"}>5</Option>
// 							<Option value={"10"}>10</Option>
// 							<Option value={"20"}>20</Option>
// 							<Option value={"50"}>50</Option>
// 						</Select>
// 					</div>
// 				</Col>
// 			</Row>
// 		</div>
// 	);
// };

// export default Filter;
