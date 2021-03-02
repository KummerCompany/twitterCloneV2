import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './ExploreBar.css'

function ExploreBar () {
    return(
        <div >
            <AppBar className="bar">
                <Toolbar className="toolbar">
                    <Button className="button">Para Ti</Button>
                    <Button className="button">COVID-19</Button>
                    <Button className="button">TENDENCIAS</Button>
                    <Button className="button">NOTICIAS</Button>
                    <Button className="button">DEPORTES</Button>
                    <Button className="button">ENTRETENIMIENTO</Button>
                </Toolbar>
            </AppBar >
        </div>
    )
}

export default ExploreBar