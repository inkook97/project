import './App.css';
import Naverimg from './images/naver.png'

function App() {
    return (
        <div>
            <div className='naverimg'>naverimg</div><br /><br />

            {/* app파일 옆에 images폴더에 간단하게 이미지 불러오기 */}
            <img src={Naverimg} /><br /><br />

            {/* app파일 옆에 images폴더에 이미지 불러오기 */}
            <img src={require('./images/naver.png')} /> <br /><br />

            {/* public내에 폴더에 이미지 <br/><br/> */}
            <img src='/img/daum.png' />
        </div>
    );
};