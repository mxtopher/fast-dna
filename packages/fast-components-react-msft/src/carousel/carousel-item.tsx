import * as React from "react";
import { get } from "lodash-es";
import Foundation, { HandledProps } from "@microsoft/fast-components-foundation-react";
import {
    CarouselItemHandledProps,
    CarouselItemUnhandledProps,
} from "./carousel-item.props";
import { Tab, TabItem, TabPanel, TabsSlot } from "@microsoft/fast-components-react-base";

class CarouselItem extends Foundation<
    CarouselItemHandledProps,
    CarouselItemUnhandledProps,
    {}
> {
    public static displayName: string = "CarouselItem";

    protected handledProps: HandledProps<CarouselItemHandledProps> = {
        id: void 0,
        managedClasses: void 0,
        active: void 0,
    };

    /**
     * Renders the component
     */
    public render(): JSX.Element {
        return (
            <TabItem
                slot={TabsSlot.tabItem}
                id={this.props.id}
                {...this.unhandledProps()}
            >
                <Tab
                    slot={TabsSlot.tab}
                    active={this.props.active}
                    className={this.generateTabClassNames()}
                />
                <TabPanel
                    slot={TabsSlot.tabPanel}
                    active={this.props.active}
                    className={this.generateTabPanelClassNames()}
                >
                    {this.props.children}
                </TabPanel>
            </TabItem>
        );
    }

    /**
     * Generates tab class names based on props
     */
    protected generateTabClassNames(): string {
        const className: string = "managedClasses.carouselItem_sequenceIndicator";
        return this.props.active
            ? super.generateClassNames(
                  `${get(this.props, className)} ${get(
                      this.props,
                      "managedClasses.carouselItem_sequenceIndicator__active"
                  )}`
              )
            : super.generateClassNames(get(this.props, className));
    }

    /**
     * Generates tab panel class names based on props
     */
    protected generateTabPanelClassNames(): string {
        const className: string = "managedClasses.carouselItem_content";
        return this.props.active
            ? super.generateClassNames(get(this.props, className))
            : super.generateClassNames(
                  `${get(this.props, className)} ${get(
                      this.props,
                      "managedClasses.carouselItem_content__hidden"
                  )}`
              );
    }
}

export default CarouselItem;
export * from "./carousel-item.props";
