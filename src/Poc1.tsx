import { createElement, useState } from "react";

import { Poc1ContainerProps } from "../typings/Poc1Props";

import "./ui/Poc1.scss";

import { Observer } from "mobx-react";
import { Store } from "./store";
import { Poc1Component } from "./components/Poc1Component";

export default function Poc1(props: Poc1ContainerProps) {
    console.log(props);

    const [store] = useState(new Store());

    return <Observer>{() => <Poc1Component store={store} />}</Observer>;
}
