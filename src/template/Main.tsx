import './style.css'
import Header from '../component/Header/Header.jsx'
import SideBar from '../component/SideBar/SideBar.jsx'
import GenericForm from '../component/Form/Form.jsx'
import  Router  from '../component/Router/Router.jsx'
import { Affix, Button} from 'antd';
function Main() {
    
  
    return (
      <div className="all-content">
       <Header></Header>
       <div className="mid-content">
       <SideBar></SideBar>
       <div className='container-box'>
       <div className='wrap-box'>
       <Router></Router>
       </div>
       </div>
       
       </div>
      </div>
    )
  }

  export default Main;