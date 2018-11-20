import * as React from "react";
import { Omit, Subtract } from "utility-types";
import { TabItemUnhandledProps } from "@microsoft/fast-components-react-base";
import {
    CarouselItemClassNameContract,
    ManagedClasses,
} from "@microsoft/fast-components-class-name-contracts-msft";

export interface CarouselItemManagedClasses
    extends ManagedClasses<CarouselItemClassNameContract> {}
export interface CarouselItemHandledProps {
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
export interface CarouselItemUnhandledProps extends TabItemUnhandledProps {}
export type CarouselItemProps = CarouselItemHandledProps & CarouselItemUnhandledProps;
