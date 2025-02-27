import * as React from "react";
import { Style } from '@react-pdf/types';
export interface TableBorder {
    includeTopBorder?: boolean;
    includeRightBorder?: boolean;
    includeBottomBorder?: boolean;
    includeLeftBorder?: boolean;
}
export interface TableCellProps extends TableBorder {
    weighting?: number;
    style?: Style | Style[];
    textAlign?: "left" | "center" | "right";
    isHeader?: boolean;
    fontSize?: number | string;
    children?: React.ReactNode;
    wrap?: boolean;
}
export declare class TableCell extends React.PureComponent<TableCellProps> {
    render(): React.JSX.Element;
}
