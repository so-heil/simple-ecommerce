import { LayoutProperties } from "./layout.properties";
import React, { PureComponent } from "react";
import { CgMenuLeft } from "react-icons/cg";
import Logo from "@components/logo/logo.component";
import { IoSearchOutline, IoBagOutline } from "react-icons/io5";

class Layout extends PureComponent<LayoutProperties, unknown> {
    public constructor(props: LayoutProperties) {
        super(props);
        this.state = {};
    }

    public render(): JSX.Element {
        return (
            <div className="px-10">
                <header className="flex items-center justify-between mt-8">
                    <div className="flex items-center">
                        <div className="bg-white p-2 mr-3 rounded-xl">
                            <CgMenuLeft className="text-2xl" />
                        </div>
                        <Logo />
                    </div>
                    <form className="bg-accent-dark flex items-center py-3 px-4 rounded-xl">
                        <IoSearchOutline className="text-gray-400 mr-3 text-lg" />
                        <input
                            className="bg-transparent text-white text-sm font-semibold w-80 outline-none"
                            type="text"
                            placeholder="Search"
                        />
                    </form>
                    <div className="bg-white p-2 rounded-xl">
                        <IoBagOutline className="text-2xl" />
                    </div>
                </header>
                <h1 className="text-white text-4xl mt-20 font-light">
                    <strong className="font-extrabold">Discover</strong> the
                    best
                </h1>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
