
import React, { useState, useEffect } from 'react';
import {
    useParams, Link
} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { numberFormat } from '../../../common/numberFormat';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ModalImage from './modalImage/modalImage';
import Button from '@material-ui/core/Button';
import "./styles.scss";
import "./m-styles.scss";
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
        transform: 'translateZ(0)',
    },
    productRelated: {
        maxWidth: 250,
        margin: '0 auto',
        paddingBottom: 20,
        height: 350
    },
    nameDisplay: {
        padding: '0 20px 20px 20px'
    }
}));
export default function Sneaker() {

    const bold = { fontWeight: '500' };
    const light = { fontWeight: '300' };

    const classes = useStyles();
    const { alias } = useParams();

    const [urlImage, setUrlImage] = useState('');
    const [product, setProduct] = useState({});
    const [open, setOpen] = useState(false);
    const [dataRelated, setDataRelated] = useState([]);

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
                    setProduct(result[alias]);
                },
                (error) => {
                    console.log(error);
                }
            )

        fetch(`${process.env.REACT_APP_API_KEY}/get-product-related/${alias}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setDataRelated(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, []);

    const dataImage = product['dataImage'] || []
    const price = numberFormat(product.price || 0);
    return (
        <>
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

            <div id="pc-image" className={classes.root}>
                <GridList cellHeight={700} cols={6}>
                    {dataImage.map((item, index) => (
                        <GridListTile key={index}  cols={2} >
                            <img className="image-product" onClick={() => handleClickOpen(item.image)}
                                alt={index}
                                src={item.image} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            <div id="mobile-image">
                <GridList cellHeight={700} cols={1}>
                    {dataImage.map((item, index) => (
                        <GridListTile key={index} cols={1} >
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


            <div className="product-related-products-wrap">
                <div className="product-related-products">
                    <div className="banner">You May Also Like</div>
                    <Grid container spacing={5}>
                        {dataRelated ? dataRelated.map((item, index) => (
                            <Grid key={index} item xs>
                                <a style={{
                                    textDecoration: 'none',
                                    color: '#000'
                                    }
                                } href={`/sneakers/${item.alias}`}>
                                    <div className={`card card-lift--hover border-0 card-product ${classes.productRelated}`}>
                                        <img src={item.image} />
                                        <div className={classes.content}>
                                            <h4 className="display-4 mb-0 light">{item.nameTitle}</h4>
                                            <h4 className={`display-4 mb-0 ${classes.nameDisplay}`}>'{item.nameDisplay}'</h4>
                                        </div>
                                    </div>
                                </a>
                            </Grid>
                        )) : ''}
                    </Grid>
                </div>
            </div>
        </>
    );
}