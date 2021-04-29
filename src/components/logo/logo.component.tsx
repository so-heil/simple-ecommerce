import { LogoProperties } from "./logo.properties";
import React, { PureComponent } from "react";
import classNames from "classnames";
import { BiHomeSmile } from "react-icons/bi";

class Logo extends PureComponent<LogoProperties, unknown> {
    public constructor(props: LogoProperties) {
        super(props);
        this.state = {};
    }

    public render(): JSX.Element {
        const { className } = this.props;
        return (
            <div className="bg-white p-2 mr-3 rounded-xl flex items-center">
                <BiHomeSmile className="text-3xl mr-3" />
                <h1
                    className={classNames(
                        "text-lg font-extrabold text-black",
                        className,
                    )}
                >
                    Shopper
                </h1>
            </div>
        );
    }
}

export default Logo;
