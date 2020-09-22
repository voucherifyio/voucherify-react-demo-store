import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import PageMainCarousel from '../PageMainCarousel';
import isEmpty from '../../redux/utils';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DiscountModal from '../DiscountModal'

const PageMain = ({ campaigns }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
  };

  const handleModalData = (campData) => {
    setModalData(campData);
  };

  return (
    <>
      {!isEmpty(campaigns) ? (
        <>
          <PageMainCarousel
            handleToggleModal={handleToggleModal}
            handleModalData={handleModalData}
          />
          <DiscountModal
            toggleModal={toggleModal}
            handleToggleModal={handleToggleModal}
            modalData={modalData}
          />
        </>
      ) : (
        <div className="position-relative overflow-hidden  text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">Hot Beans</h1>
            <p className="lead font-weight-normal">Get your coffee. Now.</p>
            <Link to="/store">
              <Button variant="dark">Store</Button>
            </Link>
          </div>
          <div className="product-device box-shadow d-none d-md-block"></div>
          <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    campaigns: state.userReducer.campaigns,
  };
};

PageMain.propTypes = {
  campaigns: PropTypes.array,
};

export default connect(mapStateToProps)(PageMain);
