import fs from "fs";
import path from "path";

const components = [];

const dir = "../components/---complete-the-path";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

function createFile(name) {
  const filePath = path.join(dir, `${name}.tsx`);
  const content = `
import { ComponentProps } from "react";

const ${name}= (props: ComponentProps<"svg">) => {
    return (

    )
}

export default ${name};
  `;

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`--> ${name} was created successfully`);
}

components.forEach((name) => createFile(name));

console.log("**************** SUCCESS ****************");
