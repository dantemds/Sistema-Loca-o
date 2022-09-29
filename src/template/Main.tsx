import './style.css'
import Header from '../component/Header/Header.jsx'
import SideBar from '../component/SideBar/SideBar.jsx'
import GenericForm from '../component/Form/Form.jsx'
import  Router  from '../component/Router/Router.jsx'
function Main() {
    
  
    return (
      <div className="all-content">
       <Header></Header>
       <div className="mid-content">
       <SideBar></SideBar>
       <Router></Router>
       </div>
       
      </div>
    )
  }

  export default Main;