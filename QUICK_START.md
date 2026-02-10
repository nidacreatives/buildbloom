# ⚡ QUICK START GUIDE - Build & Bloom Portfolio

## 🎯 Get Your Website Running in 5 Minutes!

### Step 1: Download & Extract
✅ Download the `build-and-bloom-portfolio` folder
✅ Extract it to your Desktop or any folder

### Step 2: Install Node.js (One-time setup)
1. Go to: https://nodejs.org/
2. Download the LTS version
3. Install it (just click Next → Next → Install)
4. Restart your computer

### Step 3: Open Terminal/Command Prompt

**Windows:**
- Press `Windows Key + R`
- Type `cmd`
- Press Enter

**Mac:**
- Press `Command + Space`
- Type `terminal`
- Press Enter

**Linux:**
- Press `Ctrl + Alt + T`

### Step 4: Navigate to Your Project

In the terminal, type:

**Windows:**
```bash
cd Desktop\build-and-bloom-portfolio
```

**Mac/Linux:**
```bash
cd ~/Desktop/build-and-bloom-portfolio
```

### Step 5: Install Everything

Copy and paste this command:
```bash
npm install
```

⏱️ Wait 2-5 minutes while it downloads everything...

### Step 6: Run Your Website!

Copy and paste this command:
```bash
npm run dev
```

### Step 7: View Your Website

1. Open your browser (Chrome, Firefox, Safari, Edge)
2. Go to: `http://localhost:3000`

🎉 **CONGRATULATIONS!** Your portfolio is now running!

---

## 🎨 Customization Checklist

Open the project in VS Code or any text editor, then:

### 1. Update Your Contact Info
📂 **File:** `components/Contact.tsx`

Find and replace:
- `nida93115@gmail.com` → Your email
- `+92 301 6172702` → Your phone number
- `Lahore, Pakistan` → Your location

### 2. Update Footer
📂 **File:** `components/Footer.tsx`

Same as above - update email, phone, location

### 3. Add Your Social Media Links
📂 **Files:** `components/Contact.tsx` & `components/Footer.tsx`

Find all `href="#"` and replace with your actual social media URLs:
- LinkedIn: `https://linkedin.com/in/yourprofile`
- GitHub: `https://github.com/yourusername`
- Twitter: `https://twitter.com/yourhandle`

### 4. Customize Courses (Optional)
📂 **File:** `components/Courses.tsx`

Edit the `courses` array to match your exact offerings

### 5. Customize Colors (Optional)
📂 **File:** `tailwind.config.ts`

Change the colors:
```typescript
colors: {
  primary: "#6366f1",    // Your main brand color
  secondary: "#8b5cf6",  // Your secondary color
  accent: "#ec4899",     // Your accent color
}
```

---

## 🚀 Deploy to Internet (Make it Live!)

### Option 1: Vercel (Easiest - Recommended)

1. Create account on https://github.com (if you don't have)

2. Open terminal in your project folder and run:
```bash
git init
git add .
git commit -m "My awesome portfolio"
```

3. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name: `build-and-bloom-portfolio`
   - Click "Create repository"

4. Link and push your code (replace YOUR_USERNAME):
```bash
git remote add origin https://github.com/YOUR_USERNAME/build-and-bloom-portfolio.git
git branch -M main
git push -u origin main
```

5. Go to https://vercel.com
6. Sign up with GitHub
7. Click "New Project"
8. Import your repository
9. Click "Deploy"

🎉 **Done!** Your site is live at: `your-site.vercel.app`

---

## 🐛 Common Problems & Solutions

### ❌ "npm is not recognized"
**Solution:** Install Node.js from https://nodejs.org/

### ❌ "Port 3000 is already in use"
**Solution:** Run this instead:
```bash
npm run dev -- -p 3001
```
Then visit: `http://localhost:3001`

### ❌ "Permission denied"
**Solution (Mac/Linux):** Add `sudo` before the command:
```bash
sudo npm install
```

### ❌ Files not updating
**Solution:** Stop the server (Ctrl+C) and restart:
```bash
npm run dev
```

---

## 📞 Need Help?

**Email:** nida93115@gmail.com
**WhatsApp:** +92 301 6172702

---

## ✅ Final Checklist Before Going Live

- [ ] Updated all contact information
- [ ] Added your social media links
- [ ] Customized courses to match your offerings
- [ ] Tested website on mobile and desktop
- [ ] All links work properly
- [ ] Contact form tested
- [ ] Deployed to Vercel/Netlify
- [ ] Custom domain added (optional)
- [ ] Shared on social media!

---

**🎯 Pro Tips:**

1. **Take Screenshots:** Test your site and take screenshots for social media
2. **Mobile First:** Always test on your phone
3. **Speed Test:** Use https://pagespeed.web.dev/ to check performance
4. **SEO:** Submit your site to Google Search Console
5. **Analytics:** Add Google Analytics to track visitors

---

**Congratulations on your stunning new portfolio! 🎉**

Now go out there and attract amazing clients and students!

Built with ❤️ by Build & Bloom
