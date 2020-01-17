
import React, { useState, useEffect } from 'react';
import {
    useParams
} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { numberFormat } from '../../../common/numberFormat';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ModalImage from './modalImage/modalImage';
import Button from '@material-ui/core/Button';
import "./styles.scss";
const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,

    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },

}));
export default function Sneaker() {

    const bold = { fontWeight: '500' };
    const light = { fontWeight: '300' };

    const classes = useStyles();
    const { alias } = useParams();

    const [urlImage, setUrlImage] = useState('');
    const [product, setProduct] = useState({});
    const [open, setOpen] = useState(false);

    const handleClickOpen = (image) => {
        setUrlImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_KEY}/get-product/${alias}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('result =>', result);
                    setProduct(result[alias]);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, []);

    const dataImage = product['dataImage'] || []
    const price = numberFormat(product.price || 0);
    return (
        <div>
            <Typography variant="h2" component="div" gutterBottom>
                <Box textAlign="center" component="p" m={1}>
                    <span style={bold}>{product.nameTitle} '{product.nameDisplay}'</span>
                </Box>
            </Typography>
            <Typography style={{
                marginBottom: 50
            }} variant="body1" component={'div'} gutterBottom>
                <Box textAlign="center" component={'p'} m={1}>
                    Condition: <span style={{ color: '#66bb6a' }}>New</span>
                    <span style={{ margin: '0px 10px' }}>|</span>
                    Price: <span style={{ color: '#66bb6a' }}>{price} VND</span>
                    <span style={{ margin: '0px 10px' }}>|</span>
                    <span style={{ color: '#66bb6a' }}>100% Authentic</span>
                    <span style={{ margin: '0px 10px' }}>|</span>
                    <Button 
                    onClick={() => {
                        window.open(product.urlShopee, '_blank');
                    }}
                    variant="contained" color="primary">
                        Mua ngay
                    </Button>
                </Box>
            </Typography>

            <div className={classes.root}>
                <GridList cellHeight={700} className={classes.gridList} cols={6}>
                    {dataImage.map((item, index) => (
                        <GridListTile key={index} className={classes.gridList} cols={item.col} >
                            <img className="image-product" onClick={() => handleClickOpen(item.image)}
                                alt={index}
                                src={item.image} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            <ModalImage
                urlImage={urlImage} open={open} setOpen={setOpen}
                handleClose={handleClose}
                productName={`${product.nameTitle} '${product.nameDisplay}'`}
            > </ModalImage>
            <div style={{
                marginTop: 50
            }} className="image-container">
                <Grid container spacing={5}>
                    <Grid item xs>
                        <Typography component="div">
                            <Box textAlign="center" m={1}><span style={bold}>
                                Brand:
                                </span> <span style={light}>
                                    {product.brand}
                                </span>
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography component="div">
                            <Box textAlign="center" m={1}><span style={bold}>
                                Colorway:
                                </span> <span style={light}>
                                    {product.colorway}
                                </span>
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography component="div">
                            <Box textAlign="center" m={1}><span style={bold}>
                                Release Date:
                                </span> <span style={light}>
                                    {product.releaseDate}
                                </span>
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </div>


            {/* <div className="product-related-products-wrap">
                <div className="product-related-products">
                    <div className="banner">You May Also Like</div>
                    <Grid container spacing={5}>
                        <Grid item xs>
                            <Card>
                                <CardMedia
                                    className={classes.media}
                                    image="https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Yecheil-Product.jpg"
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Adidas Yeezy Boost 350 V2 Yecheil
                                </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs>
                            <Card>
                                <CardMedia
                                    className={classes.media}
                                    image="https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Yecheil-Product.jpg"
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Adidas Yeezy Boost 350 V2 Yecheil
                                </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs>
                            <Card>
                                <CardMedia
                                    className={classes.media}
                                    image="https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Yecheil-Product.jpg"
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Adidas Yeezy Boost 350 V2 Yecheil
                                </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs>
                            <Card>
                                <CardMedia
                                    className={classes.media}
                                    image="https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Yecheil-Product.jpg"
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Adidas Yeezy Boost 350 V2 Yecheil
                                </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs>
                            <Card>
                                <CardMedia
                                    className={classes.media}
                                    image="https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Yecheil-Product.jpg"
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Adidas Yeezy Boost 350 V2 Yecheil
                                </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div> */}
        </div>
    );
}