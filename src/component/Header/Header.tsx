import { Button, PageHeader } from 'antd';
import './style.css'
import 'antd/dist/antd.css';
function Header() {

    return(
        <div className='header'>
             <PageHeader
            className="site-page-header "
            onBack={() => null}
            title="Sistema de locação"
        />

      </div>
    )
}
export default Header;