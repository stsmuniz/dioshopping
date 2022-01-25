import React from 'react';
import { Paper, Grid, Typography, Button, makeStyles} from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';
import './Card.css';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const Card = ({ product, children }) => {
    const cart = useSelector( state => state.cart.value )
    const dispatch = useDispatch();
    const classes = useStyles();
    const title = children.length > 50 ?
        children.substring(0, 50) + '...' :
        children

    return(
        <Grid item xs={4}>
            <Paper className={classes.paper}>
                <Grid container direction='column'>
                    <Grid item>
                    <img height="210px" src={product.image} alt={product.name_product}/>
                    <Typography variant="string" className="my-3 d-block">
                        {title}
                    </Typography>
                    <Typography variant="string" className='mb-4'>
                        R$ {product.price.toFixed(2)}
                    </Typography>
                    </Grid>
                
                <Button 
                    variant="contained"
                    color="primary"
                    onClick={()=>dispatch(cartActions.Add(cart, product))}
                >
                    Adicionar
                </Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Card;
