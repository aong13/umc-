import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate('/login');
  };

  return (
    <div style={{ paddingInline: '50px' }}>
      <button
        style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '5px',
          width: '80px',
          color: 'black'
        }}
        onClick={onClickBtn}
      >
        로그인
      </button>
    </div>
  );
}

export default LoginButton;
