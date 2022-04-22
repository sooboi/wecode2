# Wecode git 시험

## git 명령어 3가지 이상 정리하기 !

- mkdir 이름 : 로컬 저장소 생성
- git pwd : 현재 위치 확인
- git cd : cd 뒤 위치로 이동
- git init : 초기화한다는 의미 이 로컬을 저장소로 사용함을 알린다
- git remote add origin : 원격 저장소의 주소를 로컬 저장소에 알린다
- git remote -v : 현재 로컬저장소가 알고 있는 원격 origin 저장소 확인
- git add . : 저장소의 모든 파일을 추가
- git commit -m : 추가한 파일 모두에게 커밋 메세지와 함께 커밋
- git push : 원격 저장소로 push 한다

## 작성한 JS 함수 미리보기

```js
const arr = [];

function test() {
  for (let i = 1; i < 51; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}
```

1부터 50까지의 짝수를 배열에 담아 return 합니다.
