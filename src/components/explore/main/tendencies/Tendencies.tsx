import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import './Tendencies.css'

function Tendencies () {
    return(
        <div>
            <Box className="tendenciesContainer">
                <Typography className="tipoDos">Deportes . Tendencias</Typography>
                <Typography className="tipoUno">SALVIO</Typography>
                <Typography className="tipoDos">3894 TWITS</Typography>
            </Box>
        </div>
    )
}

export default Tendencies