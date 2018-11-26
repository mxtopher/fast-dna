import * as React from "react";
import {
    CarouselClassNameContract,
    CarouselItemClassNameContract,
} from "@microsoft/fast-components-class-name-contracts-msft";
import manageJss, { ManagedJSSProps } from "@microsoft/fast-jss-manager-react";
import { ButtonStyles, DesignSystem } from "@microsoft/fast-components-styles-msft";
import MSFTCarousel, {
    CarouselHandledProps as MSFTCarouselHandledProps,
    CarouselManagedClasses,
    CarouselProps as MSFTCarouselProps,
    CarouselUnhandledProps,
} from "./carousel";
import MSFTCarouselItem, {
    CarouselItemHandledProps as MSFTCarouselItemHandledProps,
    CarouselItemManagedClasses,
    CarouselItemProps as MSFTCarouselItemProps,
    CarouselItemUnhandledProps,
} from "./carousel-item";
import { Subtract } from "utility-types";

/*
 * The type returned by manageJss type is very complicated so we'll let the
 * compiler infer the type instead of re-declaring just for the package export
 */
/* tslint:disable-next-line:typedef */
const Carousel = manageJss(ButtonStyles)(MSFTCarousel);
type Carousel = InstanceType<typeof Carousel>;

interface CarouselHandledProps
    extends Subtract<MSFTCarouselHandledProps, CarouselManagedClasses> {}
type CarouselProps = ManagedJSSProps<
    MSFTCarouselProps,
    CarouselClassNameContract,
    DesignSystem
>;

/* tslint:disable-next-line:typedef */
const CarouselItem = manageJss(ButtonStyles)(MSFTCarouselItem);
type CarouselItem = InstanceType<typeof CarouselItem>;

interface CarouselItemHandledProps
    extends Subtract<MSFTCarouselItemHandledProps, CarouselItemManagedClasses> {}
type CarouselItemProps = ManagedJSSProps<
    MSFTCarouselItemProps,
    CarouselItemClassNameContract,
    DesignSystem
>;

export {
    Carousel,
    CarouselProps,
    CarouselClassNameContract,
    CarouselHandledProps,
    CarouselUnhandledProps,
    CarouselItem,
    CarouselItemProps,
    CarouselItemClassNameContract,
    CarouselItemHandledProps,
    CarouselItemUnhandledProps,
};
