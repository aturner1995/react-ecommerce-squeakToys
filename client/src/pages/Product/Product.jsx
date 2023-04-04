import React from 'react';
import './Product.css';
import { Row, Col, Container, Image, Button } from 'react-bootstrap';
import { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import toast from 'react-hot-toast';

const Product = () => {

  const [selectedImg, setSelectedImg] = useState('img');
  const [quantity, setQuantity] = useState(1);
  const productId = (useParams().id);
  const dispatch = useDispatch();
  const notify = () => toast.success(`${data.name} Added to Cart`);

  const { data, loading } = useFetch(
    `/api/products/${productId}`
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
              <Image src={data.img} onClick={(e) => setSelectedImg('img')} />
              <Image src={data.img2} onClick={(e) => setSelectedImg('img2')} />
            </Col>
            <Col className='firstImage'>
              <Image src={data[selectedImg]} />
            </Col>
          </Col>
          <Col className='right' xl={6}>
            <h1>{data.name}</h1>
            <div className="prices">
              <span className='oldPrice'>${data.oldPrice}</span>
              <span className='newPrice'>${data.price}</span>
            </div>
            <p>{data.description}</p>
            <div className="quantity">
              <Button onClick={(e) => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</Button>
              {quantity}
              <Button onClick={(e) => setQuantity((prev) => prev + 1)}>+</Button>
            </div>
            <Button className='add prime-custom' onClick={() => {
              dispatch(addToCart({
                id: data._id,
                title: data.name,
                desc: data.description,
                price: data.price,
                img: data.img,
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