const http = require('http');
const PORT = process.env.PORT || 5012;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') {
        res.statusCode = 200;
        res.end();
        return;
    }

    // POST /project/login - App gửi request này, trả về SUCCESS
    if (req.method === 'POST' && req.url === '/project/login') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log('=== NHẬN ĐƯỢC REQUEST ===');
            console.log('Method:', req.method);
            console.log('URL:', req.url);
            console.log('Headers:', JSON.stringify(req.headers, null, 2));
            console.log('Body:', body);
            console.log('=========================');

            // Parse body để lấy thông tin (không cần check đúng sai)
            let data = {};
            try {
                data = JSON.parse(body);
            } catch (e) {
                // Nếu không parse được, bỏ qua
            }

            console.log('Key nhận được:', data.key || 'không có');
            console.log('HWID nhận được:', data.hwid || 'không có');

            // LUÔN TRẢ VỀ SUCCESS - Bypass key check hoàn toàn
            const response = {
                // Boolean values
                login: true,
                success: true,
                error: false,
                valid: true,
                verified: true,
                authorized: true,
                active: true,
                expired: false,

                // String values (một số app check kiểu string)
                Login: "true",
                Success: "true",
                Error: "false",
                Valid: "true",

                // Status codes
                status: "OK",
                Status: "OK",
                result: "success",
                Result: "success",
                message: "Login successful",
                Message: "Login successful",
                code: 200,
                Code: 200,
                statusCode: 200,

                // User data
                hwid: data.hwid || "",
                key: data.key || "",

                // Thêm các field phổ biến khác
                data: {
                    login: true,
                    success: true,
                    valid: true
                },
                response: "success",
                isValid: true,
                isSuccess: true,
                isLogin: true
            };

            console.log('=== TRẢ VỀ RESPONSE ===');
            console.log(JSON.stringify(response, null, 2));
            console.log('========================');

            res.statusCode = 200;
            res.end(JSON.stringify(response));
        });
        return;
    }

    // GET /project/login - Giống hệt server gốc (để test)
    if (req.method === 'GET' && req.url === '/project/login') {
        res.statusCode = 404;
        res.end(JSON.stringify({
            message: "Cannot GET /project/login",
            error: "Not Found",
            statusCode: 404
        }));
        return;
    }

    // Các route khác
    res.statusCode = 404;
    res.end(JSON.stringify({
        message: `Cannot ${req.method} ${req.url}`,
        error: "Not Found",
        statusCode: 404
    }));
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
