export { TryUseState } from "./Base";
import * as BaseExports from "./Base";
import { RenderMultiComp } from "@/utils/renderMulti";

export default function Index() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <h1 className="col-span-2 text-2xl font-bold">base api</h1>
      <RenderMultiComp moduleExports={BaseExports} exclude={["default"]} />
    </div>
  );
}
