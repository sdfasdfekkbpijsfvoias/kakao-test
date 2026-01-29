app.post('/skill', (req, res) => {
  // 카카오가 보내주는 데이터에서 '어떤 블록에서 왔는지' 이름을 읽습니다.
  const blockName = req.body.intent.name;
  let message = "무엇을 도와드릴까요?";

  // 사장님이 요청하신 시나리오별 분기 처리
  if (blockName === "시나리오1") {
    message = "어서오세요";
  } else if (blockName === "시나리오2") {
    message = "반가워요";
  }

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
