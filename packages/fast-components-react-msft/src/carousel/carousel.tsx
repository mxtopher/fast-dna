import * as React from "react";
import { get } from "lodash-es";
import Foundation, { HandledProps } from "@microsoft/fast-components-foundation-react";
import { CarouselHandledProps, CarouselUnhandledProps } from "./carousel.props";
import { Tabs } from "@microsoft/fast-components-react-base";

class Carousel extends Foundation<CarouselHandledProps, CarouselUnhandledProps, {}> {
    public static displayName: string = "Carousel";

    protected handledProps: HandledProps<CarouselHandledProps> = {
        id: void 0,
        label: void 0,
    };

    /**
     * Renders the component
     */
    public render(): JSX.Element {
        return (
            <Tabs
                label={this.props.label}
                className={this.generateClassNames()}
                {...this.unhandledProps()}
            >
                {this.props.children}
            </Tabs>
        );
    }

    /**
     * Generates class names based on props
     */
    protected generateClassNames(): string {
        return super.generateClassNames(get(this.props, "managedClasses.carousel"));
    }
}

export default Carousel;
export * from "./carousel.props";
