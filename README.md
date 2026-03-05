# Frontend Demo

一个使用 React + Vite + TypeScript 构建的前端演示项目。

## 项目介绍

这是一个展示现代前端开发最佳实践的演示项目，包含以下功能：

- 首页：Hero 区域和核心特性展示
- 关于页：项目介绍和技术栈展示
- 联系页：完整的表单功能

## 技术栈

- **React** - 前端框架
- **Vite** - 构建工具
- **TypeScript** - 类型安全
- **CSS3** - 样式设计

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 项目结构

```
frontend-demo/
├── public/          # 静态资源
├── src/
│   ├── components/   # 组件目录
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx       # 主应用组件
│   ├── App.css       # 全局样式
│   └── main.tsx      # 入口文件
├── index.html       # HTML 模板
├── package.json     # 项目配置
└── tsconfig.json    # TypeScript 配置
```

## 在线预览

访问 GitHub Pages 部署版本：
https://zhefuz.github.io/frontend-demo

## 特性

- 响应式设计，适配移动端和桌面端
- 现代化 UI 设计
- 完整的页面导航
- 表单验证功能
- 类型安全的代码

## 许可证

MIT
