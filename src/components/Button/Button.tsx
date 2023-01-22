import React, { FC, ReactElement } from "react";
import { Button as AntButton, ButtonProps } from "antd";
import cn from "classnames";

import "./Button.scss";

type AntButtonProps = ButtonProps & {
	subtle?: boolean;
	tab?: boolean;
	icon?: ReactElement | boolean;
	className?: string;
};

const Button: FC<AntButtonProps> = ({ type, shape, children, subtle, tab, icon, className, ...props }) => {
	const classNames = cn("button", subtle && "subtle", tab && "tab", className && className);
	return (
		<AntButton type={type} shape={shape} className={classNames} {...props} icon={icon && <div className={"anticon"}>{icon}</div>}>
			{children}
		</AntButton>
	);
};

export default Button;
