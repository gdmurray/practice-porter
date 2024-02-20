import { Image } from "@chakra-ui/react";
import { graphql } from "gatsby";

export const Asset = ({ props, contentProps }) => {
    if (props.file.contentType.startsWith("video")) {
        return (
            <video autoPlay muted height={480} loop>
                <source src={props.file.url} type={props.file.contentType} />
            </video>
        );
    }

    if (props.file.contentType.startsWith("image")) {
        return (
            <Image alt={props.title} src={props.file.url} {...contentProps} />
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
