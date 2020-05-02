import svgr from "@svgr/core";
import { promises as fs } from "fs";
import * as junk from "junk";
import template from "./template";

const srcDir = "./src";
const inputPath = "./svg";
const outputPath = "icons";

const resetSrcDir = async () => {
  try {
    await fs.rmdir(`${srcDir}`, { recursive: true });
    await fs.mkdir(`${srcDir}`);
    await fs.mkdir(`${srcDir}/icons`);
  } catch (error) {
    throw new Error(error);
  }
};

const createComponentName = (fileName: string) => {
  return fileName
    .replace(".svg", "")
    .split("-")
    .map((n) => n.charAt(0).toUpperCase() + n.substring(1))
    .join("");
};

const genNamedComponentFromBuffer = async (
  componentName: string,
  svgCode: Buffer
): Promise<string> => {
  try {
    return await svgr(
      svgCode,
      {
        template,
        svgo: true,
        svgProps: { ref: "{ref}", width: "{size}", height: "{size}" },
        svgoConfig: {
          plugins: {
            removeViewBox: false,
          },
        },
        plugins: [
          "@svgr/plugin-svgo",
          "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],
      },
      {
        componentName: componentName,
      }
    );
  } catch (error) {
    throw new Error(error);
  }
};

(async () => {
  await resetSrcDir();

  const fileList = (
    await fs.readdir(`./node_modules/css.gg/icons/svg/`)
  ).filter(junk.not);
  for (let file of fileList) {
    const componentName = createComponentName(file);
    const data = await fs.readFile(`${inputPath}/${file}`);
    const jsx = await genNamedComponentFromBuffer(componentName, data);
    await fs.writeFile(`${srcDir}/${outputPath}/${componentName}.tsx`, jsx);

    const exportStr = `export { default as ${componentName} } from './${outputPath}/${componentName}';\n`;
    await fs.writeFile(`${srcDir}/index.ts`, exportStr, { flag: "a" });
  }
})();
