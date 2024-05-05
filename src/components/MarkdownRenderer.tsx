import React, { useEffect, useState } from "react";
import { unified } from "unified";
import markdown from "remark-parse";
import html from "remark-html";
import styled from "@emotion/styled";

const StyledSpan = styled.span`
    //strong {
    //    color: #181716;
    //}
`;
export const MarkdownRenderer = ({
    markdownText,
}: {
    markdownText: string;
}) => {
    const [content, setContent] = useState("");

    useEffect(() => {
        unified()
            .use(markdown)
            .use(html)
            .process(markdownText)
            .then((file) => {
                setContent(file.toString());
            });
    }, [markdownText]);

    return <StyledSpan dangerouslySetInnerHTML={{ __html: content }} />;
};
