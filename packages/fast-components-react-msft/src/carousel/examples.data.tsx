import * as React from "react";
import { Carousel, CarouselProps } from "./index";
import schema from "./carousel.schema.json";
//import Documentation from "./.tmp/documentation";
import { ComponentFactoryExample } from "@microsoft/fast-development-site-react";

const testString: string = "Call to action";
const testDestination: string = "https://www.microsoft.com/en-us/";

export default {
    name: "Carousel",
    component: Carousel,
    schema: schema as any,
    documentation: <Documentation />,
    detailData: {
        children: testString,
    },
    data: [
        {
            children: "Primary call to action",
            href: testDestination,
            "data-sketch-symbol": "Call to action - primary",
        } as any, // TODO https://github.com/Microsoft/TypeScript/issues/6579
        {
            children: "Lightweight call to action",
            href: testDestination,
            "data-sketch-symbol": "Call to action - lightweight",
        },
        {
            children: "Justified call to action",
            href: testDestination,
            "data-sketch-symbol": "Call to action - justified",
        },
    ],
} as ComponentFactoryExample<CarouselProps>;
