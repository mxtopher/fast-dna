import * as React from "react";
import { Omit, Subtract } from "utility-types";
import { TabsUnhandledProps } from "@microsoft/fast-components-react-base";
import {
    CarouselClassNameContract,
    ManagedClasses,
} from "@microsoft/fast-components-class-name-contracts-msft";

export interface CarouselManagedClasses
    extends ManagedClasses<CarouselClassNameContract> {}
export interface CarouselHandledProps {
    /**
     * The unique id for the tab item
     */
    id: string;
    /**
     * The tab-panel active state
     */
    active?: boolean;
}

/* tslint:disable-next-line:no-empty-interface */
export interface CarouselUnhandledProps extends TabsUnhandledProps {}
export type CarouselProps = CarouselHandledProps & CarouselUnhandledProps;
