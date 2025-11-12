# 🎨 Hướng dẫn Customization - Dark Fantasy Portfolio

## 🎭 Thay đổi Theme Colors

### 1. Primary Colors (Màu chính)

File: `src/index.css`

```css
:root {
  /* Màu ma thuật - Purple/Pink */
  --primary-color: #8b5cf6;      /* Màu magic chính */
  --secondary-color: #d946ef;     /* Màu phụ mystical */
  
  /* Màu accent */
  --accent-gold: #fbbf24;         /* Vàng kim - treasure */
  --accent-red: #ef4444;          /* Đỏ máu - danger */
  
  /* Background colors */
  --bg-primary: #0f0f1e;          /* Tối dungeon */
  --bg-secondary: #1a1a2e;        /* Xám đá */
  --bg-dark: #0a0a14;             /* Đen tuyệt đối */
  
  /* Text colors */
  --text-primary: #e5e7eb;        /* Text sáng */
  --text-secondary: #9ca3af;      /* Text mờ */
  --text-glow: #fde047;           /* Text phát sáng */
  
  /* UI Elements */
  --border-color: #4a4a6a;        /* Viền */
  --health-bar: #22c55e;          /* Thanh HP */
  --mana-bar: #3b82f6;            /* Thanh MP */
  --xp-bar: #fbbf24;              /* Thanh XP */
}
```

### 2. Alternative Color Schemes

#### 🔥 Fire & Blood Theme
```css
:root {
  --primary-color: #dc2626;       /* Red fire */
  --secondary-color: #f97316;     /* Orange flames */
  --accent-gold: #fbbf24;
  --text-glow: #fde047;
}
```

#### 🌊 Ice & Frost Theme
```css
:root {
  --primary-color: #06b6d4;       /* Cyan ice */
  --secondary-color: #3b82f6;     /* Blue frost */
  --accent-gold: #e0f2fe;         /* Ice white */
  --text-glow: #bae6fd;
}
```

#### ☠️ Death & Shadow Theme
```css
:root {
  --primary-color: #7c3aed;       /* Dark purple */
  --secondary-color: #4c1d95;     /* Deeper purple */
  --accent-gold: #a78bfa;         /* Light purple */
  --text-glow: #c4b5fd;
}
```

## 🖼️ Thay đổi Fonts

### Medieval/Fantasy Fonts

File: `src/index.css` - Thay đổi Google Fonts import:

```css
/* Option 1: More Gothic */
@import url('https://fonts.googleapis.com/css2?family=Uncial+Antiqua&family=Cinzel:wght@400;600;700&display=swap');

body {
  font-family: 'Uncial Antiqua', 'Cinzel', serif;
}

/* Option 2: More Pixel Art */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');

body {
  font-family: 'VT323', monospace;
}

h1, h2, h3 {
  font-family: 'Press Start 2P', cursive;
}

/* Option 3: More Modern Fantasy */
@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@400;600;700&family=Cinzel:wght@400;600;700&display=swap');

body {
  font-family: 'Spectral', serif;
}
```

## ✨ Thay đổi Animations

### 1. Tốc độ Animations

File: `src/index.css`, `src/components/*.css`

```css
/* Làm chậm animations */
@keyframes glow-pulse {
  /* Đổi từ 2s thành 4s */
  animation: glow-pulse 4s ease-in-out infinite;
}

/* Làm nhanh animations */
.skill-tag:hover {
  /* Đổi từ 0.3s thành 0.15s */
  transition: all 0.15s ease;
}
```

### 2. Tắt/Bật Particle Effects

File: `src/App.css`

```css
/* Tắt particle effects */
.App::before {
  display: none;
}

/* Hoặc giảm opacity */
.App::before {
  opacity: 0.3; /* Giảm từ 1 xuống */
}
```

## 🎮 Thay đổi UI Elements

### 1. Border Style - Từ Pixel sang Smooth

File: Các file `.css` trong `src/components/`

```css
/* Thay thế clip-path bằng border-radius */
.skill-category {
  /* Xóa hoặc comment clip-path */
  /* clip-path: polygon(...); */
  
  /* Thêm border-radius */
  border-radius: 15px;
}
```

### 2. Button Style

File: `src/components/Hero.css`, etc.

```css
.btn {
  /* Giữ góc cạnh */
  border-radius: 0;
  
  /* Hoặc bo tròn hơn */
  border-radius: 8px;
  
  /* Hoặc bo tròn hoàn toàn */
  border-radius: 30px;
}
```

### 3. Thay đổi Icons

File: `src/components/*.jsx`

```jsx
// Trong Hero.jsx
.btn-primary::before {
  content: '⚔ ';  // Thay bằng emoji khác
  // '🗡️ ' - Sword
  // '🛡️ ' - Shield  
  // '⚡ ' - Lightning
  // '🔥 ' - Fire
  // '❄️ ' - Ice
}
```

## 🖼️ Thêm Background Images

### 1. Hero Background

File: `src/components/Hero.css`

```css
.hero {
  background: 
    linear-gradient(180deg, rgba(15, 15, 30, 0.9) 0%, rgba(26, 26, 46, 0.95) 100%),
    url('/path/to/your/dungeon-image.jpg'); /* Thêm ảnh background */
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Parallax effect */
}
```

### 2. Section Backgrounds

```css
.projects {
  background: 
    linear-gradient(rgba(26, 26, 46, 0.9), rgba(26, 26, 46, 0.9)),
    url('/path/to/texture.png');
  background-size: cover;
}
```

## 📱 Mobile Responsiveness

File: Các file `.css`

```css
/* Điều chỉnh breakpoints */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem; /* Giảm từ 3.5rem */
  }
  
  .avatar-circle {
    width: 200px;    /* Giảm từ 300px */
    height: 200px;
  }
}

/* Thêm breakpoint mới */
@media (max-width: 480px) {
  /* Styles cho mobile nhỏ */
}
```

## 🎯 Performance Optimization

### 1. Giảm Animations trên Mobile

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

@media (max-width: 768px) {
  /* Tắt một số animations phức tạp */
  .avatar-circle::before {
    animation: none;
  }
  
  .App::before {
    display: none;
  }
}
```

### 2. Optimize Box Shadows

```css
/* Thay vì nhiều box-shadow */
.element {
  box-shadow: 
    0 0 40px rgba(139, 92, 246, 0.5),
    inset 0 0 30px rgba(139, 92, 246, 0.1);
}

/* Giảm xuống 1 shadow đơn giản */
.element {
  box-shadow: 0 5px 20px rgba(139, 92, 246, 0.3);
}
```

## 🎨 Custom Emoji Icons

Thay đổi emoji trong các file:

- `src/components/About.css` - `⚔️`, `📚`
- `src/components/Skills.css` - `⚡`, `▸`
- `src/components/Projects.css` - `🗡️`, `⚔️`
- `src/components/Hero.css` - `⚔`, `📜`
- `src/components/Contact.css` - `📧`

## 💡 Tips

1. **Test thường xuyên**: Chạy `npm run dev` để xem thay đổi real-time
2. **Backup**: Git commit trước khi thay đổi lớn
3. **Browser DevTools**: Sử dụng để test colors và sizes
4. **Consistency**: Giữ consistent theme across all sections
5. **Mobile-first**: Luôn test trên mobile sau khi thay đổi

## 📚 Resources

- [CSS Clip-path Maker](https://bennettfeely.com/clippy/)
- [Coolors.co](https://coolors.co/) - Color palette generator
- [Google Fonts](https://fonts.google.com/) - Free fonts
- [CSS Gradient](https://cssgradient.io/) - Gradient generator
- [Animista](https://animista.net/) - CSS animation library

Happy Customizing! ⚔️✨

