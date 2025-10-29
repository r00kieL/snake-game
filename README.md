# 🐍🐍🐍 Snake Game 🐍🐍🐍
一个使用原生 JavaScript/Canvas 编写的贪吃蛇小游戏，可直接部署到 GitHub Pages 上运行。

## 功能亮点
- 方向键控制蛇的移动（含反向输入保护）
- 开始、暂停、重置按钮，提供更完整的游戏流程
- 记分板实时统计分数
- 暂停时叠加遮罩层，提示当前状态
- 自定义网格背景、蛇身和食物绘制逻辑

## 代码结构
```
├─index.html          # 页面骨架与 canvas 容器
├─index.js            # 入口文件，初始化事件与游戏逻辑
├─css/
│  ├─base.css         # 通用样式与布局
│  └─index.css        # 游戏页面样式
└─tools/
   ├─configs/         # 全局配置、蛇的初始参数
   ├─food/            # 食物生成与绘制
   ├─game/            # 游戏循环（开始/暂停/结束等）
   ├─predictions/     # 碰撞检测与预测逻辑
   ├─snake/           # 蛇的绘制、移动、成长
   ├─buttonControl.js # 按钮状态管理
   ├─drawGrid.js      # 背景网格绘制
   └─setupDirectionListener.js # 键盘输入监听
```

## 本地运行方式
1. 克隆或下载本仓库。
2. 直接在浏览器中打开 `index.html`，或使用任意静态服务器（例如 `npx serve .`、`python -m http.server`）访问根目录。
3. 按 `Start` 开始游戏，使用键盘方向键控制贪吃蛇。
