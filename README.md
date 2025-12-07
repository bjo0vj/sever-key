<<<<<<< HEAD
# HƯỚNG DẪN DEPLOY SERVER

## 📁 Files cần upload:
- `index.js`
- `package.json`

---

## 🅰️ RENDER.COM (Miễn phí)

### 1. Upload lên GitHub
```
1. Vào github.com/new → Tạo repo mới
2. Upload 2 file: index.js, package.json
```

### 2. Deploy trên Render
```
1. Vào render.com → Đăng ký (free)
2. Dashboard → New → Web Service
3. Connect GitHub repo
4. Cài đặt:
   - Name: fake-license
   - Runtime: Node
   - Build Command: (trống)
   - Start Command: node index.js
5. Chọn Free → Create

URL: https://fake-license-xxxx.onrender.com
```

---

## 🅱️ RAILWAY.APP (Miễn phí - $5 credit/tháng)

### 1. Deploy trực tiếp
```
1. Vào railway.app → Đăng ký
2. New Project → Deploy from GitHub
3. Chọn repo chứa code
4. Tự động deploy!

URL: https://xxx.up.railway.app
```

---

## 🅲️ HOST RIÊNG (VPS/Máy chủ của bạn)

### Yêu cầu:
- Node.js đã cài
- Có IP public hoặc domain

### Chạy server:
```bash
# Clone/upload files lên server
cd /path/to/server

# Cài pm2 để chạy 24/7
npm install -g pm2

# Chạy server
pm2 start index.js --name "license-server"

# Xem logs
pm2 logs license-server

# Dừng server
pm2 stop license-server
```

### Mở port (firewall):
```bash
# Ubuntu/Debian
sudo ufw allow 8888

# CentOS
sudo firewall-cmd --add-port=8888/tcp --permanent
sudo firewall-cmd --reload
```

### URL: `http://[IP-SERVER]:8888/project/login`

---

## ✅ TEST

Sau khi deploy, mở URL trong browser. Kết quả đúng:
```json
{"message":"Cannot GET /project/login","error":"Not Found","statusCode":404}
```
=======
>>>>>>> c5c0c8fb6aaf9c477ae90491ae86ba4e828970d3
# sever-key
