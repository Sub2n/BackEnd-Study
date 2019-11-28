# BackEnd-Study

Node.js 공부

## 1. 인프런 Node.js 웹개발로 알아보는 백엔드 자바스크립트의 이해

### 19.10.01 (화)

**1. nodeJS + Express 웹서버 설정**

- Node 프로젝트 생성

- get 요청에 대한 html 파일 응답 처리
- \_\_dirname 사용
- static directory 설정

### 19.10.02 (수)

**2. Request,Response 처리 기본**

- POST 요청 처리
- Express의 View engine으로 ejs 템플릿 사용해서 render해서 응답함
- Ajax 요청에 대한 처리 !

### 19.10.04 (금)

**3. Database 연동 기본**

- MySQL 설치
- MySQL 데이터베이스 생성, 테이블 생성
- Node와 MySQL 연동
- MySQL에 쿼리로 검색해서 결과를 클라이언트에 전송

> MySQL의 PATH 설정을 해주고 나니 nodemon이 찾을 수 없는 명령어가 되어버리는 오류가 있었다. 해결하지 못함...

### 19.10.07 (월)

**4. Router 개선 - 모듈화**

- Routing을 모듈화해서 분리
- Express의 Router 사용

### 19.10.13 (일)

**5. DB에 데이터 추가 : Create User**

- /join으로의 get과 post 요청에 대한 응답 처리
- 사용자의 입력 정보로 DB에 INSERT query 작성
- 복잡한 query문을 set을 이용하여 간략히 작성

### 19.10.15 (화)

**6. passport 기반 인증 로직 구현 (1)**

- passport 환경 구축
- middleware, strategy 설정

### 19.10.20 (일)

**6. passport 기반 인증 로직 구현 (2)**

- passport 기반 router 설정
- /join으로 post routing 처리 (post 요청시 passport 모듈의 local-join이라는 local-strategy로 인증하도록 함)

### 19.10.25 (금)

**6. passport 기반 인증 로직 구현 (3)**

- local-strategy 콜백 완성
- DB에 사용자가 입력한 이메일이 존재하는지 여부 확인하고 성공/실패시 메시지 전달
- 메시지 전달에 flash 사용


