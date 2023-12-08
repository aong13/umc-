import { useLocation, useParams } from 'react-router-dom'

export default function MovieDetail() {
		//url로 넘겨 받은 title
    const { title } = useParams(); 
		
		//네비게이트 훅을 통해 페이지 이동 시에 넘겨 받은 정보
		//이미지, 별점 등의 모든 정보들
    const { state } = useLocation();
    console.log(title);
    console.log(state);

    return (
        <div>
        <img style={{width:'350px'}} src={state.poster_path} alt="영화포스터" />
        <h2 style={{color:'black'}}>{title}</h2>
    </div>
         )
}

