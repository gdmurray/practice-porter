import { Image } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";

export const Asset = ({
    props,
    contentProps,
}: {
    props: Queries.AssetComponentFragment;
    contentProps: React.ComponentProps<typeof Image>;
}) => {
    if (props.file?.contentType?.startsWith("video")) {
        return (
            <video autoPlay muted height={480} loop>
                <source
                    src={props.file?.url ?? ""}
                    type={props.file.contentType}
                />
            </video>
        );
    }

    if (props.file?.contentType?.startsWith("image")) {
        return (
            <Image
                alt={props.title ?? "Image"}
                src={props.file.url ?? ""}
                {...contentProps}
            />
        );
    }
};

export const query = graphql`
    fragment AssetComponent on ContentfulAsset {
        title
        file {
            contentType
            fileName
            url
            details {
                size
                image {
                    width
                    height
                }
            }
        }
        description
    }
`;
