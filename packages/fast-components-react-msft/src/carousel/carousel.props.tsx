import * as React from "react";
import { Subtract } from "utility-types";
import {
    TabsHandledProps,
    TabsManagedClasses,
    TabsUnhandledProps,
} from "@microsoft/fast-components-react-base";
import {
    TabsClassNameContract,
    ManagedClasses,
} from "@microsoft/fast-components-class-name-contracts-base";

export interface CarouselManagedClasses extends ManagedClasses<TabsClassNameContract> {}
export interface CarouselHandledProps
    extends CarouselManagedClasses,
        Subtract<TabsHandledProps, TabsManagedClasses> {
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
