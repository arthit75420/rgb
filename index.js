var express = require("express"); // เสมือน import package มาใช้งาน
var app = express(); // สร้าง Express Application ลองกด ctrl + คลิกเข้าไปดูในไส้ใน
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
const path = require('path');
// path สมมติที่เราตั้งขึ้นมาเองซึ่งไม่ได้เป็น path จริงๆตามโครงสร้าง folder แต่มันคือ path
// ที่เราใช้เรียกบน url เว็บไซต์นั่นเอง

//parameter req คือ header ของ client ที่ส่งเข้ามา ซึ่งอาจจะดู cookies, session ที่เข้ามาก็ได้
//parameter res คือ สิ่งที่ server Node เราจะตอบสนองข้อมูลกลับไปนั่นเอง
let r = 0,
    g = 127,
    b = 255;
app.get("/", (req, res) => {
    // server จะสามารถส่งทั้ง header ต่างๆหรือจะตัวหนังสือ json อะไรก็ได้กลับไป
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.get("/rgb", (req, res) => {
    // server จะสามารถส่งทั้ง header ต่างๆหรือจะตัวหนังสือ json อะไรก็ได้กลับไป
    res.send(r + "," + g + "," + b);
});
app.post("/set", (req, res) => {
    // server จะสามารถส่งทั้ง header ต่างๆหรือจะตัวหนังสือ json อะไรก็ได้กลับไป
    console.log(req.body);
    r = req.body.r;
    g = req.body.g;
    b = req.body.b;
    res.send(r + "," + g + "," + b);
});

// server จะรันที่ port 3000 หรือ port ใดๆก็ตามใจเราและ callback จะทำงานเมื่อ
app.listen(256, () => {
    console.log('Server Listen At 256')
});