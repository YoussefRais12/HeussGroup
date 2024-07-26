import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";

export default function Contact() {
    const [formData,
        setFormData] = useState({fname: '', email: '', subject: '', message: ''});

    const [responseMessage,
        setResponseMessage] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await axios.post('https://api.render.com/deploy/srv-cqg46ftds78s73c8jqqg?key=fV3KKZzM0zo', formData);
            setResponseMessage('Email sent successfully!');
        } catch (error) {
            setResponseMessage('Error sending email.');
        }
    };

    return (
        <Wrapper id="contact">
            <div className="lightBg">
                <div className="container">
                    <HeaderInfo>
                        <h1 className="font40 extraBold">Let's get in touch</h1>
                        <p className="font13">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut
                            <br/>
                            labore et dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                    </HeaderInfo>
                    <div
                        className="row"
                        style={{
                        paddingBottom: "30px"
                    }}>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <Form onSubmit={handleSubmit}>
                                <label className="font13">First name:</label>
                                <input
                                    type="text"
                                    id="fname"
                                    name="fname"
                                    className="font20 extraBold"
                                    value={formData.fname}
                                    onChange={handleChange}/>
                                <label className="font13">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="font20 extraBold"
                                    value={formData.email}
                                    onChange={handleChange}/>
                                <label className="font13">Subject:</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="font20 extraBold"
                                    value={formData.subject}
                                    onChange={handleChange}/>
                                <label className="font13">Message:</label>
                                <textarea
                                    rows="4"
                                    cols="50"
                                    id="message"
                                    name="message"
                                    className="font20 extraBold"
                                    value={formData.message}
                                    onChange={handleChange}/>
                                <SumbitWrapper className="flex">
                                    <ButtonInput
                                        type="submit"
                                        value="Send Message"
                                        className="pointer animate radius8"
                                        style={{
                                        maxWidth: "220px"
                                    }}/>
                                </SumbitWrapper>
                            </Form>
                            {responseMessage && <p>{responseMessage}</p>}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
                            <div
                                style={{
                                width: "50%"
                            }}
                                className="flexNullCenter flexColumn">
                                <ContactImgBox>
                                    <a href="mailto:heussgmbh@gmail.com">
                                        <img src={ContactImg1} alt="office" className="radius6"/>
                                    </a>
                                </ContactImgBox>

                                <ContactImgBox>
                                    <a
                                        href="https://www.instagram.com/heuss.group/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <img src={ContactImg2} alt="office" className="radius6"/>
                                    </a>
                                </ContactImgBox>
                            </div>
                            <div
                                style={{
                                width: "50%"
                            }}>
                                <div
                                    style={{
                                    marginTop: "100px"
                                }}>
                                    <a
                                        href="https://www.tiktok.com/@heuss.bros"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <img src={ContactImg3} alt="office" className="radius6"/>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section `
  width: 100%;
`;
const HeaderInfo = styled.div `
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form `
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input `
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div `
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div `
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
