# 1. 노드 18 버전을 베이스로 사용합니다
FROM node:18

# 2. 서버 안의 작업 폴더를 만듭니다
WORKDIR /app

# 3. 설정 파일들을 먼저 복사합니다
COPY package*.json ./

# 4. 필요한 부품(express 등)을 설치합니다
RUN npm install

# 5. 나머지 소스 코드를 모두 복사합니다
COPY . .

# 6. 코예브에서 열어둔 8000번 포트를 사용합니다
EXPOSE 8000

# 7. 서버를 실행합니다
CMD ["node", "app.js"]
