# ReactJS_Album_Front_End
## Issues
- `Spring Data JPA`를 통해 받아온 `JSON` 데이터를 ReactJS에서 적용을 시킵니다.
- `Dropzone`을 활용해서 ReactJS에서 파일 업로딩을 진행하는 연습을 합니다.
- 추후에 받은 사진 목록들에 대해서 WebSocket을 이용해서 비동기적인 데이터를 실시간으로 받아올 수 있는 기능을 보장할 수 있게 연습을 진행합니다.
## NPM Libraries
소스 코드를 실행하기 전에 NPM에 아래와 같은 라이브러리들이 있는지 확인을 하고 `npm build`를 진행하시길 바랍니다.
- `react`  `react-dom`  `react-scripts` - React Application 생성 및 Component 이용.
- `react-router-dom` - React Router를 DOM을 이용해서 적용하기 위해 이용.
- `react-redux`  `redux`  `redux-promise` - React에서 Redux를 적용하기 위해 이용.
- `redux-form` - Redux를 기반으로 input form에서 데이터를 state 변동을 적용하기 위해 이용.
- `axios` - AJAX를 기반으로 비동기 통신을 적용하기 위해 이용.
- `react-dropzone` - ReactJS에서 파일 업로드를 진행할 수 있도록 도와 주는 Form.
## Screenshot
- 업로딩을 진행할 그림 파일들에 대해서 선택을 하고 사진 추가하기 버튼 위에 드래그를 합니다. 

![reactjs_album_example01](/public/img/reactjs_album_example01.png "reactjs_album_example01")

- 드래그를 진행하고 난 후에 사진 목록들이 정상적으로 올라간 것을 확인할 수 있습니다.

![reactjs_album_example02](/public/img/reactjs_album_example02.png "reactjs_album_example02")

- 방금 올린 짱구랑 흰둥이 사진이 정상적으로 올라갔음을 확인할 수 있습니다.

![reactjs_album_example03](/public/img/reactjs_album_example03.png "reactjs_album_example03")

- Spring Boot Server 측에서는 짱구랑 흰둥이 사진들에 대해서는 아래와 같이 비동기적으로 Executor를 이용해서 각각 처리를 해 줍니다.

```
2018-05-07 16:15:51.887  INFO 13652 --- [ploadExecutor-2] net.kang.service.PhotoService            : Finding Album By Id : 5
2018-05-07 16:15:51.887  INFO 13652 --- [ploadExecutor-1] net.kang.service.PhotoService            : Finding Album By Id : 5
2018-05-07 16:15:51.960  INFO 13652 --- [ploadExecutor-2] net.kang.service.PhotoService            : Uploading Photo : shinchan.png
2018-05-07 16:15:51.967  INFO 13652 --- [ploadExecutor-1] net.kang.service.PhotoService            : Uploading Photo : shiro.jpg
2018-05-07 16:15:52.023  INFO 13652 --- [ploadExecutor-1] net.kang.service.PhotoService            : Uploading Photo is Successed!!! : shiro.jpg
2018-05-07 16:15:52.072  INFO 13652 --- [ploadExecutor-2] net.kang.service.PhotoService            : Uploading Photo is Successed!!! : shinchan.png
```

- 짱구랑 흰둥이 사진을 올리고 난 뒤에 실행 결과는 아래와 같습니다.

![reactjs_album_example04](/public/img/reactjs_album_example04.png "reactjs_album_example04")

- 각 사진에 대한 정보를 열람하고 싶은 경우 보라색 버튼인 자세히 버튼을 이용해서 참고하시면 됩니다.

![reactjs_album_example05](/public/img/reactjs_album_example05.png "reactjs_album_example05")

- 이제 사진을 추가 했으니 삭제하는 기능에 대해서 작동을 합니다. 각 사진에 있는 파란 버튼 선택하기를 클릭하면 삭제를 원하는 사진에 포함을 시킵니다.
- 반대로 노란 버튼인 취소하기 버튼을 클릭하면 삭제를 원하는 사진 목록에 배제됩니다.

![reactjs_album_example06](/public/img/reactjs_album_example06.png "reactjs_album_example06")

- 그리고 파일 선택 삭제 버튼을 누르면 전체 삭제가 진행됩니다.

![reactjs_album_example07](/public/img/reactjs_album_example07.png "reactjs_album_example07")

- 삭제를 원하는 사진 목록에 대해서 선택을 하면 아래와 같이 Executor를 통해 비동기적으로 진행이 됩니다.
```
2018-05-07 16:21:46.259  INFO 13652 --- [eleteExecutor-1] net.kang.service.PhotoService            : Delete By Select Indexes : [48, 53]
2018-05-07 16:21:46.290  INFO 13652 --- [eleteExecutor-1] net.kang.service.PhotoService            : Delete By Select Indexes Complete : [48, 53]
```

- 과학 사진 내부에서 탄수화물 구조와 유전 법칙 사진을 삭제하면 아래와 같이 지구의 구조만 남게 됩니다.

![reactjs_album_example08](/public/img/reactjs_album_example08.png "reactjs_album_example08")

## Server Side References
- Client Side는 `Spring Boot`를 기반으로 작성을 하였으며, 아래 `README.md`를 참고하시면 됩니다.
- [Spring Boot Server 참조하기](https://github.com/tails5555/ReactJS_Album_Back_End)
## Author
- [강인성](https://github.com/tails5555)