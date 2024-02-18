// eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
import React from "react";
import {
    ContentfulRichTextGatsbyReference,
    renderRichText,
    RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
// import { Options } from "@contentful/rich-text-html-renderer";
import {
    documentToReactComponents,
    Options,
    RenderNode,
} from "@contentful/rich-text-react-renderer";

import {
    Box,
    Text,
    Link,
    Heading,
    OrderedList,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react";

import * as Components from "./sections";

const defaultNodeRenderers: RenderNode = {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text mb={4}>{children}</Text>,
    [BLOCKS.HEADING_1]: (node, children) => (
        <Heading as="h1" size="xl" mb={4}>
            {children}
        </Heading>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
        <Heading as="h2" size="lg" mb={4}>
            {children}
        </Heading>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
        <Heading as="h3" size="md" mb={4}>
            {children}
        </Heading>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
        <Heading as="h4" size="sm" mb={4}>
            {children}
        </Heading>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
        <Heading as="h5" size="xs" mb={4}>
            {children}
        </Heading>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
        <Heading as="h6" mb={4}>
            {children}
        </Heading>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
        <UnorderedList mb={4}>{children}</UnorderedList>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
        <OrderedList mb={4}>{children}</OrderedList>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
    [BLOCKS.QUOTE]: (node, children) => (
        <Box
            as="blockquote"
            borderLeft="4px solid"
            borderColor="gray.200"
            pl={4}
            mb={4}
        >
            {children}
        </Box>
    ),

    [INLINES.HYPERLINK]: (node) => {
        const { uri } = node.data;
        return (
            <Link href={uri} color="blue.500" isExternal>
                {node.content[0].value}
            </Link>
        );
    },
};

export const RichText = (text: { raw: any; references: any[] }) => {
    console.log("Rich Text: ", text);
    const { raw, references } = text;
    const referenceMap = new Map();
    references?.forEach((elem) => {
        referenceMap.set(elem.contentful_id, elem);
    });

    if (Object.keys(text).length === 0) {
        return <>Empty Text.</>;
    }

    console.log(referenceMap);

    const options: Options = {
        renderMark: {
            [MARKS.BOLD]: (text) => <Text as="b">{text}</Text>,
            [MARKS.ITALIC]: (text) => <Text as="i">{text}</Text>,
            [MARKS.UNDERLINE]: (text) => <Text as="u">{text}</Text>,
        },
        renderNode: {
            ...defaultNodeRenderers,
            [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
                console.log("node...: ", node);
                const id = node.data.target.sys.id;
                if (referenceMap.has(id)) {
                    const data = referenceMap.get(id);
                    const { type: componentType } = data.internal;
                    const Component = Components[componentType] || (
                        <div>Not Found</div>
                    );
                    console.log(data);
                    if (children && children.length > 0) {
                        return <Component {...data}>{children}</Component>;
                    }
                    return <Component {...data} />;
                }
                return <>Node</>;
            },
        },
    };

    try {
        return documentToReactComponents(JSON.parse(raw), options);
    } catch (err) {
        console.error("Error Rendering Rich Text: ", err);
        return <></>;
    }
};
