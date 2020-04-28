import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./customTemplate";

export const registry: TemplateRegistry<any> = {
  COC: templates
  // red: [
  //   {
  //     id: "custom-red",
  //     label: "Red Custom Template",
  //     template: styled(CustomTemplate)`
  //       color: red;
  //     `
  //   }
  // ]
};
