import { css } from "@emotion/core";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { PrintWatermark } from "../../core/PrintWatermark";
import { CustomTemplateCertificate } from "../sample";

// const style = css`
//   position: relative;
//   pre {
//     background-color: lightgray;
//   }
// `;

const containerStyle = css`
  background-color: #324353;
  color: #ffffff;
  padding: 15px;
  margin: auto;
  width: 80%;
  text-align: center;
`;

export const CustomTemplate: FunctionComponent<TemplateProps<CustomTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <PrintWatermark />
      <h1>{document.name}</h1>
      <div>awarded to</div>
      <h2>{document.recipient.name}</h2>
    </div>
    // <div css={style} className={className} id="custom-template">
    //   <PrintWatermark />
    //   <h1>{document?.foo?.title ?? "Default title"}</h1>
    //   <pre>{JSON.stringify(document, null, 2)}</pre>
    // </div>
  );
};
