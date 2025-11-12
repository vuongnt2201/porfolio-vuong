# ⚔️ Portfolio - Vuong Nguyen | Game Developer ⚔️

Portfolio website phong cách **Dark Fantasy RPG / Rogue-like** được xây dựng bằng React và Vite. 

Thiết kế lấy cảm hứng từ các game nhập vai, dungeon crawler và rogue-like với aesthetic tối, huyền bí và đầy sức hút.

## 🎮 Tính năng

- ⚔️ **Dark Fantasy Theme** - Màu tối, góc cạnh, pixel-style borders
- ✨ **RPG-Inspired UI** - Skill trees, quest logs, XP bars
- 🎨 **Game Aesthetics** - Glowing effects, dungeon patterns, medieval fonts
- 📱 **Fully Responsive** - Tối ưu cho mọi thiết bị
- ⚡ **High Performance** - Vite build tool cho tốc độ tối đa
- 🎯 **Easy Customization** - Dễ dàng chỉnh sửa thông tin

## 📋 Yêu cầu

- Node.js 16+ 
- npm hoặc yarn

## 🛠️ Cài đặt

1. Clone repository:
```bash
git clone https://github.com/yourusername/porfolio-vuong.git
cd porfolio-vuong
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

Website sẽ chạy tại `http://localhost:5173`

## 🎨 Tùy chỉnh thông tin

Để thay đổi thông tin cá nhân, chỉnh sửa file `src/data/portfolioData.js`:

- **personalInfo**: Thông tin cá nhân (tên, email, bio, social links)
- **skills**: Các kỹ năng của bạn (hiển thị như skill tree RPG)
- **experience**: Kinh nghiệm làm việc (timeline với icons)
- **projects**: Các dự án đã thực hiện (quest cards)
- **education**: Học vấn

### 🎭 Tùy chỉnh Theme

Chỉnh sửa CSS variables trong `src/index.css`:

```css
:root {
  --primary-color: #8b5cf6;      /* Purple magic */
  --secondary-color: #d946ef;     /* Pink mystical */
  --accent-gold: #fbbf24;         /* Gold treasure */
  --accent-red: #ef4444;          /* Blood red */
  --bg-primary: #0f0f1e;          /* Dark dungeon */
  --bg-secondary: #1a1a2e;        /* Stone gray */
  /* ... more colors */
}
```

## 📦 Build

Build project cho production:

```bash
npm run build
```

Preview bản build:

```bash
npm run preview
```

## 🚀 Deploy lên GitHub Pages

### Bước 1: Cập nhật vite.config.js

Đảm bảo `base` trong `vite.config.js` khớp với tên repository của bạn:

```javascript
base: '/porfolio-vuong/',
```

### Bước 2: Tạo repository trên GitHub

1. Tạo repository mới trên GitHub với tên `porfolio-vuong`
2. Push code lên GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/porfolio-vuong.git
git push -u origin main
```

### Bước 3: Deploy

Chạy lệnh deploy:

```bash
npm run deploy
```

Lệnh này sẽ:
- Build project
- Tạo branch `gh-pages`
- Push build lên GitHub Pages

### Bước 4: Cấu hình GitHub Pages

1. Vào Settings của repository
2. Chọn Pages ở sidebar
3. Trong Source, chọn branch `gh-pages` và folder `/ (root)`
4. Click Save

Website của bạn sẽ có tại: `https://yourusername.github.io/porfolio-vuong/`

## 📂 Cấu trúc project

```
porfolio-vuong/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js  # Dữ liệu portfolio
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build cho production
- `npm run preview` - Preview bản build
- `npm run deploy` - Deploy lên GitHub Pages

## 🛠️ Technologies

- **React 18** - UI Library
- **Vite 5** - Lightning-fast build tool
- **React Icons** - Icon library
- **CSS3** - Advanced styling with clip-path, gradients, animations
- **Google Fonts** - Cinzel (medieval), Press Start 2P (pixel)
- **gh-pages** - GitHub Pages deployment

## 🎮 Design Features

### Visual Elements
- **Pixel-style corners** using CSS clip-path
- **Glowing effects** on text and buttons
- **Gradient borders** that shimmer
- **Dungeon grid pattern** backgrounds
- **Scanline effects** for retro feel
- **Floating particles** animation

### Components Style
- **Header**: Dark glass-morphism với sword icons
- **Hero**: Dungeon background, glowing avatar với animated border
- **Skills**: Skill tree cards với hover effects
- **Projects**: Quest cards với "QUEST" badges
- **Experience**: Timeline với animated icons
- **Contact**: RPG-style form với pixel borders
- **Footer**: Shimmer border effect

### Color Palette
- **Purple/Pink**: Magic & mystical powers
- **Gold**: Treasure & achievements  
- **Orange**: Torch fire & danger
- **Dark Blues**: Night & dungeon atmosphere

## 📝 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 👨‍💻 Author

**Vuong Nguyen**
- Email: vuongnt2201@gmail.com
- GitHub: [@yourusername](https://github.com/yourusername)

---

⭐ Nếu bạn thấy project hữu ích, hãy star repository nhé!

