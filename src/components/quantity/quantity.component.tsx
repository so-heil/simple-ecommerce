import { QuantityProperties } from "./quantity.properties";
import React, { PureComponent } from "react";
import classNames from "classnames";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

class Quantity extends PureComponent<QuantityProperties, unknown> {
    private btnClassname: string;

    public constructor(props: QuantityProperties) {
        super(props);
        this.btnClassname = classNames(
            "flex justify-center items-center",
            this.props.className,
        );
    }

    public render(): JSX.Element {
        const { onChange, onZero, value } = this.props;
        return (
            <div className="text-black flex">
                <button
                    className={classNames(this.btnClassname, "rounded-l-xl")}
                    onClick={() =>
                        value === 1 ? onZero() : onChange(value - 1)
                    }
                >
                    {value === 1 ? <AiOutlineClose /> : <AiOutlineMinus />}
                </button>

                <span className={classNames(this.btnClassname, "font-bold")}>
                    {this.props.value}
                </span>
                <button
                    className={classNames(this.btnClassname, "rounded-r-xl")}
                    onClick={() => onChange(value + 1)}
                >
                    <AiOutlinePlus />
                </button>
            </div>
        );
    }
}

export default Quantity;
