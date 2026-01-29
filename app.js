const express = require('express'); // 이게 빠지면 app is not defined 에러가 납니다
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('서버가 정상적으로 살아있습니다! 😎'));

app.post('/skill', (req, res) => {
  // 카카오에서 보낸 블록(의도) 이름을 읽어옵니다
  const blockName = req.body.intent.name;
  let message = "무엇을 도와드릴까요?";

  // 사장님이 요청하신 시나리오별 답변 분기
  if (blockName === "시나리오1") {
    message = "어서오세요";
  } else if (blockName === "시나리오2") {
    message = "반가워요";
  }

  // 카카오톡 규격에 맞는 최종 응답 데이터
  res.json({
    "version": "2.0",
    "template": {
      "outputs": [{
        "simpleText": {
          "text": message
        }
      }]
    }
  });
});

// 코예브 설정 화면에서 확인했던 8000번 포트를 사용합니다
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
