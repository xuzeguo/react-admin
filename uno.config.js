import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()], // 兼容tailwind全套快捷类
  // 自定义快捷合并类（shortcuts，你想要的一键组合）
  shortcuts: {
    "flex-center": "flex items-center justify-center",
    "flex-between": "flex items-center justify-between",
    card: "bg-white rounded-lg p-4 shadow",
  },
});
