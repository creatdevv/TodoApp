const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
}); 
 
// 누군가가 /pet 으로 방문을 하면...
// pet관련된 안내문을 띄워주자
// 서버로 get 요청 만들기(아래 형식처럼!)

app.get('/pet', function(요청, 응답) {
    응답.send('펫 용품을 쇼핑 할 수 있는 페이지입니다.')
});

app.get('/beauty', function(요청, 응답) {
    응답.send('뷰티용품을 쇼핑 할 수 있는 페이지입니다.')
});
 
app.get('/', function(요청, 응답) {
    응답.sendFile(__dirname + '/index.html')
});
 