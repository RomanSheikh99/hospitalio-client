import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Card from '../../Sheared/Card/Card';
import Footer from '../../Sheared/Footer/Footer';
import NavBar from '../../Sheared/NavBar/NavBar';

const MyCard = () => {
    const [card, setCard] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/card/${user.email}`)
            .then(res => res.json())
            .then(data => setCard(data))    
    }, [isDeleted]);
    
    let totalCost = 0;
    card.map(data => totalCost = totalCost + parseFloat(data.serviceCost))
    let discount = totalCost >= 25 ? (totalCost / 100) * 20 : 0;
    let costAfterDiscount = totalCost - discount;

    const handleDelete = id => {
        const handleConfirm = window.confirm('Are you sure to delete');
        if (handleConfirm) {
          fetch(`http://localhost:5000/deleteCard/${id}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json',
            },
          })
            .then(res => res.json())
            .then(result => {
              if (result.deletedCount) {
                  setIsDeleted(true);
                  alert('Deleted Service')
              } else {
                setIsDeleted(false);
              }
            });
        }
      };


    const addOrder = () => {
        alert('Payment System Comming Soon');
    }

    return (
        <div>
            <NavBar></NavBar>
            <div
                style={{ background: '#12C1AD' }}
                className="fw-bold py-4  text-white">
                <Container>
                    <h2>My Card</h2>
                </Container>
            </div>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className="container">
                            {
                                card.map(data => <Card
                                    key={data._id}
                                    card={data}
                                    handleDelete={handleDelete}
                                >
                                </Card>)
                            }
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div
                            style={{}}
                            className="border border-dark border-3 rounded-3 p-3"
                        >
                            <h4>Total Cost</h4>
                            <h3> $ {totalCost.toFixed(2)} </h3>
                            <h4>Discount</h4>
                            <h3> $ {discount.toFixed(2)} </h3>
                            <h4>Cost After Discount</h4>
                            <h3> $ {costAfterDiscount.toFixed(2)} </h3>
                            <Button
                                onClick={() => addOrder()}
                                style={{ background: '#12C1AD', outline: 'none', color: '#fff' }}
                                className="rounded-pill border-0 px-4 w-100"
                            >
                                Pay Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyCard;