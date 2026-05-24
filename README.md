# HICC感恩节H5营销活动

一个精美的感恩节主题H5营销页面，展示HICC宠物口腔护理产品。

[![Deploy to GitHub Pages](https://github.com/shang1112/HICCthanksgiving/actions/workflows/deploy.yml/badge.svg)](https://github.com/shang1112/HICCthanksgiving/actions/workflows/deploy.yml)

## 🎯 快速链接

- **在线预览**: [https://shang1112.github.io/HICCthanksgiving/](https://shang1112.github.io/HICCthanksgiving/)
- **GitHub仓库**: [shang1112/HICCthanksgiving](https://github.com/shang1112/HICCthanksgiving)

## 🎨 项目特性

- **响应式设计** - 完美适配各种设备 (移动端、平板、桌面)
- **丝滑动画** - 使用Framer Motion实现专业级动画效果
- **光滑滚动** - 集成Lenis库，提供流畅的滚动体验
- **现代UI** - 采用Tailwind CSS实现高质量设计
- **品牌一致** - 紫色(#6F56D9)和金色(#E6A04B)的经典配色
- **自动化部署** - GitHub Actions自动构建和部署

## 📦 页面内容

1. **导航栏** - 固定顶部导航，品牌标识和菜单
2. **英雄区** - 震撼的感恩节主视觉，动画枫叶和CTA按钮
3. **促销区** - 15% 折扣信息和产品配图
4. **角色区** - Hibi 和 Choo 两个品牌角色介绍
5. **产品区** - 4个核心产品展示
6. **情感区** - 品牌故事讲述
7. **社群区** - UGC分享和品牌互动
8. **最后CTA** - 最终行动号召

## 🚀 快速开始

### 本地开发

```bash
# 克隆项目
git clone https://github.com/shang1112/HICCthanksgiving.git
cd HICCthanksgiving

# 安装依赖
npm install

# 本地开发
npm run dev

# 打开浏览器访问 http://localhost:3000
```

### 生产构建

```bash
# 构建项目
npm run build

# 预览构建结果
npm run preview
```

## 🛠 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| React | 18.2.0 | UI框架 |
| Vite | 4.4.0 | 现代化打包工具 |
| Tailwind CSS | 3.3.0 | 样式框架 |
| Framer Motion | 10.16.4 | 动画库 |
| Lenis | 1.0.42 | 平滑滚动库 |

## 🔄 自动化工作流

本项目配置了GitHub Actions自动化部署：

### 1. GitHub Pages自动部署
- **触发条件**: `push` 到 `main` 分支
- **构建**: Node.js 18 + npm
- **部署**: 自动部署到GitHub Pages
- **访问地址**: `https://shang1112.github.io/HICCthanksgiving/`

### 2. Vercel部署 (可选)
需要配置以下Secrets:
- `VERCEL_TOKEN` - Vercel API Token
- `VERCEL_ORG_ID` - Vercel Organization ID
- `VERCEL_PROJECT_ID` - Vercel Project ID

### 3. 构建测试
- **触发条件**: `push` 或 `pull_request`
- **检查**: 代码构建是否成功
- **产物**: 生成dist文件夹

## 📁 项目结构

```
HICCthanksgiving/
├── .github/
│   └── workflows/
│       ├── deploy.yml      # GitHub Pages部署
│       ├── vercel.yml      # Vercel部署
│       └── build.yml       # 构建测试
├── src/
│   ├── App.jsx             # 主组件
│   ├── main.jsx            # 入口文件
│   └── index.css           # 全局样式
├── index.html              # HTML模板
├── vite.config.js          # Vite配置
├── tailwind.config.js      # Tailwind配置
├── postcss.config.js       # PostCSS配置
├── package.json            # 项目依赖
└── README.md               # 项目文档
```

## 🎨 颜色系统

| 颜色 | HEX值 | 用途 |
|------|-------|------|
| 主色 | #6F56D9 | 品牌紫色 |
| 辅助色 | #E6A04B | 金色强调 |
| 背景 | #F6EFE7 | 奶油色背景 |
| 文字 | #3E2F56 | 深紫色文字 |

## 📱 浏览器兼容

| 浏览器 | 版本 |
|--------|------|
| Chrome | 最新 |
| Firefox | 最新 |
| Safari | 最新 |
| Edge | 最新 |

## 🔐 环境变量

如需使用Vercel部署，请在GitHub仓库设置中添加以下Secrets:

```
VERCEL_TOKEN=xxxxxxxxxxxx
VERCEL_ORG_ID=xxxxxxxxxxxx
VERCEL_PROJECT_ID=xxxxxxxxxxxx
```

## 📊 部署状态

- ✅ GitHub Pages: 自动部署
- ✅ 构建测试: 自动检查
- ⏳ Vercel: 等待配置

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📄 许可证

MIT License - 详见LICENSE文件

## 📞 联系方式

如有问题或建议，请通过以下方式联系：
- GitHub Issues: [创建Issue](https://github.com/shang1112/HICCthanksgiving/issues)
- Email: yitong.shang@ucdenver.edu

---

**Made with ❤️ for HICC Pet**

*感恩每个毛茸茸的家族成员！* 🐶🐱
