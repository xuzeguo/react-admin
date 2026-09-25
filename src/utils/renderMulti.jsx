/**
 * 批量渲染单个模块所有导出组件
 * @param {object} moduleExports import * as xxx 得到的导出对象
 * @param {string[]} exclude 排除组件名
 */
export function RenderMultiComp({ moduleExports, exclude = [] }) {
  const compList = Object.entries(moduleExports)
    .filter(([name, val]) => typeof val === "function")
    .filter(([name]) => !exclude.includes(name))
    .reverse();

  return (
    <>
      {compList.map(([name, Comp]) => (
        <Comp key={name} />
      ))}
    </>
  );
}
