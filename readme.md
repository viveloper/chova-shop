# 바닐라 자바스크립트 프로젝트 (Chova Shop)

> 이 프로젝트는 Brad Traversy의 MERN 스택 프로젝트 [ProShop eCommerce Platform](https://github.com/bradtraversy/proshop_mern)을 기반으로 구현.

## 프로젝트 설명

> 순수 자바스크립트만을 사용하여 리액트로 구현된 온라인 쇼핑몰 서비스의 프론트엔드를 재구현한다.

> 따라서 프레임워크와 라이브러리를 사용하지 않는다. (React, Vue, jQuery, Axios, lodash 등)

> 하지만 모던 자바스크립트 프레임워크가 지향하는 디자인 패턴을 따라 구현한다.

> React, React-Router 등의 기술 스택을 직접 구현하여 사용한다.

## 기술 요구사항

### 프론트엔드

- 순수 자바스크립트만 사용 (Vanilla JS)
- 단일 페이지 어플리케이션 (SPA)
- 컴포넌트 기반 구조 (Component)
- 데이터에 의존한 뷰의 렌더링 (Reactivity)
- URL에 의한 브라우저 라우팅 / 서버 라우팅 (Routing)
- 이미지 지연 로딩 (Lazy Loading)
- 페이지네이션 (Pagination)
- 로딩 / 에러 / 데이터 없음에 대한 UI 구현
- [ToDo] 글로벌 상태 관리 / FLUX Architecture (eg. Redux)
- [ToDo] 불필요한 API 요청은 중단 (Fetch Request Abort)
- [ToDo] 스크롤 데이터 요청 (Scroll Data Fetch)
- [ToDo] 디바운스 / 쓰로틀 (Debounce / Throttle)

### 백엔드

- Node.js (Express)
- MongoDB (Mongoose)
- REST API
- JWT Authentication

## Demo

데모 서비스 [바로가기](https://chovashop.herokuapp.com/)

## Features

- Full featured shopping cart
- Product reviews and ratings
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- Database seeder (products & users)

## Usage

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```

### Install Dependencies

```
npm install
```

### Run

```
npm run dev
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```

## License

The MIT License

Copyright (c) 2020 Traversy Media https://traversymedia.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
