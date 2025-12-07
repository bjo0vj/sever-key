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

            // Trả về response thành công
            res.statusCode = 200;
            res.end(JSON.stringify({
                success: true,
                message: "License valid",
                status: "active",
                result: "OK"
            }));
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
