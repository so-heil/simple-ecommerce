import { LogoProperties } from "./logo.properties";
import React, { PureComponent } from "react";
import classNames from "classnames";

class Logo extends PureComponent<LogoProperties, unknown> {
    public constructor(props: LogoProperties) {
        super(props);
        this.state = {};
    }

    public render(): JSX.Element {
        const { className } = this.props;
        return (
            <h1
                className={classNames(
                    "text-lg font-extrabold text-white",
                    className,
                )}
            >
                Homeme
            </h1>
        );
    }
}

export default Logo;
