import React from "react";
import { graphql } from "gatsby";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Flex,
    Heading,
} from "@chakra-ui/react";
import { RichText } from "@/components/RichText";

type CollapsibleSectionProps = Queries.CollapsibleSectionComponentFragment;

export default function CollapsibleSection(props: CollapsibleSectionProps) {
    const accordionProps = props.defaultExpanded ? { defaultIndex: [0] } : {};
    return (
        <Flex maxW={"5xl"} w={"full"} alignSelf={"center"} gap={8}>
            <Accordion {...accordionProps} w={"full"} allowToggle={true}>
                <AccordionItem border={"none"}>
                    <AccordionButton py={4} justifyContent={"space-between"}>
                        <Heading as={"h3"} fontSize={24}>
                            {props.title}
                        </Heading>
                        <AccordionIcon color={"brand.darkerMuted"} />
                    </AccordionButton>
                    <AccordionPanel py={4}>
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/* @ts-ignore */}
                        <RichText {...props.content} />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>
    );
}

export const query = graphql`
    fragment CollapsibleSectionComponent on ContentfulComponentCollapsibleSection {
        id
        title
        __typename
        defaultExpanded
        content {
            raw
            references {
                ...FeatureBlockComponent
                contentful_id
                internal {
                    type
                }
            }
        }
    }
`;
