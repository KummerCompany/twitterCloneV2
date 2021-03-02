import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import './tendenciesWithImg.css'

function TendenciesWithImg () {
    return(
        <div className="tendenciesWithImgContainer">
            <Box >
                <Typography className="tipoDos">Deportes . Tendencias</Typography>
                <Typography className="tipoUno">SALVIO</Typography>
                <Typography className="tipoDos">3894 TWITS</Typography>
            </Box>
            <Box className="imageContainer">
                <img src="https://bucket1.glanacion.com/anexos/fotos/62/3641462w380.jpg" alt=""/>
            </Box>
        </div>
    )
}

export default TendenciesWithImg