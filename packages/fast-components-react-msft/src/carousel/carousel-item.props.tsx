import * as React from "react";
import {
    CarouselItemClassNameContract,
    ManagedClasses,
} from "@microsoft/fast-components-class-name-contracts-msft";
// import { TabsSlot } from "./tabs";

export interface CarouselItemManagedClasses
    extends ManagedClasses<CarouselItemClassNameContract> {}
export interface CarouselItemUnhandledProps
    extends React.AllHTMLAttributes<HTMLElement> {}
export interface CarouselItemHandledProps extends CarouselItemManagedClasses {
    /**
     * The unique id for the carousel item
     */
    id: string;

    /**
     * The unique label for the carousel item
     */
    label?: string;

    /**
     * The tab content
     */
    children?: React.ReactNode;
}

export type CarouselItemProps = CarouselItemHandledProps & CarouselItemUnhandledProps;
