import React, { useState, useEffect } from 'react';
import './LoginStyle.css';
import axios from 'axios';

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  
  const getData = async () => {
		try {
			// loading 상태를 true로 변경하여, 현재 loading 중임을 표시
			setLoading(true);
      
      let body = {
        id,
        pw
    }
      const response = await axios.post('http://localhost:8000/user/login', body)
      if (response.status === 200) {
        setLoginSuccess(true);
        localStorage.setItem('token', response.data.result.AccessToken);
        console.log('Login successful:',  response);
      }
		} catch (error) {
      if (error.response) {
        const errorCode = error.response.status;

        switch (errorCode) {
          case 400:
            alert('body값이 비어있음');
            break;
          case 401:
            alert('존재하지 않는 id');
            break;
          case 402:
            alert('비밀번호 틀림');
            break;
          default:
            alert('로그인에 실패했습니다.');
        }
      } else {
        console.error('Login failed:', error);
        alert('로그인에 실패했습니다.');
      }

		} finally {
			// 성공, 실패에 상관없이 요청이 종료됐으므로 loading 상태를 다시 false로 변경
			setTimeout(() => setLoading(false), 1500);
		}
}

const handleIdChange = (e) => {
  setId(e.target.value);
};

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
};

const handleSubmit = async () => {
  if (!id || !pw) {
    alert('아이디와 비밀번호를 입력하세요.');
    return;
  }
  await getData();
  //토큰가져오기
  
  const token = localStorage.getItem('token'); 
  const headers = { Authorization: token };
  axios.get('http://localhost:8000/user/payload', { headers })
  .then((response)=>{
    console.log("get 성공: ", response.data);
    localStorage.setItem('id',response.data.result.id)
}).catch((error)=>{
    console.log(error);
})
};


  useEffect(() => {
  }, []);

  return (
    <div>
      <div>
        <h2>아이디와 비밀번호를 입력해주세요</h2>
        <form>
          <p>
            <label >아이디</label>
            <br />
            <input type="text"
            value={id}
            onChange={handleIdChange}/>
            <br />
          </p>
          <p>
            <label>비밀번호</label>
            <br />
            <input type="password" placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={pw}
            onChange={handlePasswordChange}/>
          </p>
          <br />
          <button type="button" onClick={handleSubmit}>
            확인
          </button>
        </form>
        {loading && <div>로딩중...</div>}
        {loginSuccess && <div>로그인 성공!</div>}
      </div>
    </div>
  );
}
