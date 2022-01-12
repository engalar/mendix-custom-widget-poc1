import { Component, ReactNode, createElement } from "react";
import { Poc1ContainerProps, Poc1PreviewProps } from "../typings/Poc1Props";

declare function require(name: string): string;

export class preview extends Component<Poc1PreviewProps> {
    render(): ReactNode {
        return <div>No preview available</div>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/Poc1.scss");
}
type VisibilityMap = {
    [P in keyof Poc1ContainerProps]: boolean;
};

export function getVisibleProperties(props: Poc1ContainerProps, visibilityMap: VisibilityMap): VisibilityMap {
    // visibilityMap.nodeConstraint = props.nodeDataSource === "xpath";
    // visibilityMap.nodeGetDataMicroflow = props.nodeDataSource === "microflow";
    // visibilityMap.nodeGetDataNanoflow = props.nodeDataSource === "nanoflow";
    console.log(props);

    return visibilityMap;
}
