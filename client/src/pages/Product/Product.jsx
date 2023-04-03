import React from 'react';
import './Product.css';
import { Row, Col, Container, Image, Button } from 'react-bootstrap';
import { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import toast, { Toaster } from 'react-hot-toast';

const Product = () => {

  const [selectedImg, setSelectedImg] = useState('img');
  const [quantity, setQuantity] = useState(1);
  const productId = parseInt(useParams().id);
  const dispatch = useDispatch();
  const notify = () => toast.success(`${data.attributes.title} Added to Cart`);

  const { data, loading } = useFetch(
    `/products/${productId}?populate=*`
  );

  if (loading) {
    return <p>Loading...</p>
  }

  console.log(data);

  return (
    <>
      <Container className='product my-5 text-center'>
        <Row>
          <Col className='left-images' xl={6}>
            <Col className='images'>
              <Image src={process.env.REACT_APP_UPLOAD_URL + data.attributes.img.data.attributes.url} onClick={(e) => setSelectedImg('img')} />
              <Image src={process.env.REACT_APP_UPLOAD_URL + data.attributes.img2.data.attributes.url} onClick={(e) => setSelectedImg('img2')} />
            </Col>
            <Col className='firstImage'>
              <Image src={process.env.REACT_APP_UPLOAD_URL + data.attributes[selectedImg].data.attributes.url} />
            </Col>
          </Col>
          <Col className='right' xl={6}>
            <h1>{data.attributes.title}</h1>
            <div className="prices">
              <span className='oldPrice'>${data.attributes.oldPrice}</span>
              <span className='newPrice'>${data.attributes.price}</span>
            </div>
            <p>{data.attributes.description}</p>
            <div className="quantity">
              <Button onClick={(e) => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</Button>
              {quantity}
              <Button onClick={(e) => setQuantity((prev) => prev + 1)}>+</Button>
            </div>
            <Button className='add prime-custom' onClick={() => {
              dispatch(addToCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                price: data.attributes.price,
                img: data.attributes.img.data.attributes.url,
                quantity,
              }))
              notify();
            }}>
              <AddShoppingCartIcon /> ADD TO CART
            </Button>
          </Col>
        </Row>
      </Container>
      <FeaturedProducts type={'Featured'} />
    </>
  )
}

export default Product