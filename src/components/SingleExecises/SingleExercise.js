import React, { useState } from "react";
import {
  CodeWrapper,
  CodeGrid,
  CopyWrapper,
  CopyInfo,
  StyledCode,
  StyledButton,
  TextWrapper,
  Title,
  Text,
} from "./SingleExercise.styled";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactMarkdown from "react-markdown";
import raw from "rehype-raw";

const SingleExercise = ({ number, codes, description, name }) => {
  const [copied, setCopied] = useState(false);

  return (
    <>
      <TextWrapper>
        <Title name={name}>Zadanie {number}</Title>
        <Text>
          <ReactMarkdown rehypePlugins={[raw]} children={description} />
        </Text>
      </TextWrapper>
      <CodeWrapper>
        {codes.map((code, index) => (
          <CodeGrid key={index}>
            <span>({index + 1}) </span>
            <StyledCode>{code}</StyledCode>
          </CodeGrid>
        ))}
        <CopyWrapper>
          <CopyToClipboard
            text={codes.join("\n")}
            onCopy={() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            <StyledButton>Copy to clipboard!</StyledButton>
          </CopyToClipboard>
          {copied ? <CopyInfo>Copied!</CopyInfo> : null}
        </CopyWrapper>
      </CodeWrapper>
    </>
  );
};

export default SingleExercise;
