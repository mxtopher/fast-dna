import * as React from "react";
import { TabsSlot } from "@microsoft/fast-components-react-base";
import { Carousel, CarouselProps } from "./index";
import schema from "./carousel.schema.json";
import carouselItemSchema from "./carousel-item.schema.json";
import Documentation from "./.tmp/documentation";
import { ComponentFactoryExample } from "@microsoft/fast-development-site-react";

export default {
    name: "Carousel",
    component: Carousel,
    schema: schema as any,
    documentation: <Documentation />,
    detailData: {
        id: "Carousel",
        label: "A set of example text content",
        children: [
            {
                id: carouselItemSchema.id,
                props: {
                    id: "1",
                    slot: TabsSlot.tabItem,
                    children: "Carousel Item 1",
                },
            },
            {
                id: carouselItemSchema.id,
                props: {
                    id: "2",
                    slot: TabsSlot.tabItem,
                    children: "Carousel Item 2",
                },
            },
        ],
    },
    data: [
        {
            id: "Carousel",
            label: "A set of example text content",
            children: [
                {
                    id: carouselItemSchema.id,
                    props: {
                        id: "1",
                        slot: TabsSlot.tabItem,
                        children: "Carousel Item 1",
                    },
                },
            ],
        },
    ],
} as ComponentFactoryExample<CarouselProps>;
