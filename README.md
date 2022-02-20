# 개요

iVIHO 프로젝트(https://github.com/ggopyo/iVIHOAPP)를 소개하기 위해 React로 만든 프레젠테이션 입니다.

파워포인트에서 작성하기 보다는 프론트엔드 업무에 보다 익숙해지고 싶어 React로 구현하게 되었습니다.

React-Router v6와 CSS의 FlexBox를 이용하여 구현하였습니다.
public folder의 csv 폴더 내 각 csv파일에서 프레젠테이션 내용이 되는 텍스트와 image들의 경로가 들어있어
이를 메인페이지 진입 시에 async for loop와 fetch를 통해 하나의 배열에 보관합니다.

해당 배열은 React-Router가 folderArray에서 가져온 이름으로 path를 설정해주어 각 페이지 진입 시 
렌더가 되게 합니다.

![image](https://user-images.githubusercontent.com/34387356/154852375-b597a665-19d7-411b-9e95-8edb7718b948.png)
읽어 주셔서 감사합니다
