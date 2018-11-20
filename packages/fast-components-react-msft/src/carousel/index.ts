import * as React from "react";
import { CarouselClassNameContract } from "@microsoft/fast-components-class-name-contracts-msft";
import manageJss, { ManagedJSSProps } from "@microsoft/fast-jss-manager-react";
import { CallToActionStyles, DesignSystem } from "@microsoft/fast-components-styles-msft";
import MSFTCarousel, {
    CarouselHandledProps as MSFTCarouselHandledProps,
    CarouselManagedClasses,
    CarouselProps as MSFTCarouselProps,
    CarouselUnhandledProps,
} from "./carousel";
import { Subtract } from "utility-types";

/*
 * The type returned by manageJss type is very complicated so we'll let the
 * compiler infer the type instead of re-declaring just for the package export
 */
/* tslint:disable-next-line:typedef */
const Carousel = manageJss(CallToActionStyles)(MSFTCarousel);
type Carousel = InstanceType<typeof Carousel>;

interface CarouselHandledProps {}
type CarouselProps = ManagedJSSProps<
    MSFTCarousel,
    CarouselClassNameContract,
    DesignSystem
>;

export {
    Carousel,
    CarouselProps,
    CarouselClassNameContract,
    CarouselHandledProps,
    CarouselUnhandledProps,
};
