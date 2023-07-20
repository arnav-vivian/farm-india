import React from 'react';
import RoundChart from '../components/RoundChart';
import ResponsiveTable from '../components/ResponsiveTable';
import WeatherComponent from '../components/WeatherComponent';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';

const ProfilePage = () => {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <h2 className="text-center p-1">
        <i>My Profile</i>
      </h2>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCard className="col-mb-2">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle  mx-auto d-block"
                    style={{ width: '150px' }}
                    fluid
                  />
                </MDBCard>
                <MDBCard className="col-mh-2">
                  <p className="text-muted mb-1">Mohan Yadav</p>
                  <p className="text-muted mb-1">Age: 37</p>
                  <p className="text-muted mb-1">Samastipur, Bihar</p>
                </MDBCard>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <WeatherComponent />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <ResponsiveTable />
              </MDBCardBody>
            </MDBCard>
            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <RoundChart />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <h5>
                      <i>ML Crop Recommendation Model coming soon</i>
                    </h5>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default ProfilePage;
