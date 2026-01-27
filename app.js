const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Koyeb 서버 생존 확인!'));

app.post('/skill', (req, res) => {
  const blockName = req.body.intent.name;
  let message = "서버 연결 성공! 현재 블록: " + blockName;

  if (blockName === "태그 달기") {
    message = "반가워요 사장님! '태그 달기' 연결 완료됐습니다. ✨";
  }

  res.json({
    "version": "2.0",
    "template": { "outputs": [{ "simpleText": { "text": message } }] }
  });
});

app.listen(process.env.PORT || 8080);
