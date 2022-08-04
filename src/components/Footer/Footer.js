import React, { useContext } from 'react';
import './Footer.css';
import FooterDatas from '../../FooterData';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function Footer() {
    const footerData = useContext(FooterDatas)
    console.log(footerData.shop_and_learn);
    const classes = useStyles();

    return (
        <footer>
            <div className='wrapper_footer' >
                {
                    footerData.footer_item.map((footer_item) =>
                        <ul className='footer_collection_item' key={footer_item.id}>
                            <li className="footer_collection_link">{footer_item.item}</li>
                        </ul>
                    )
                }
            </div>
            <hr />
            <div className="wrapper_footer wrapper_footer_link ">
                <div className="footer_link_tr">
                    {
                        footerData.shop_and_learn.map((shop_and_learn) =>
                            <table key={shop_and_learn.id} className="footer_table" >
                                <thead  >
                                    <tr className='footer_link_title' style={{ color: "#1d1d1f" }} >
                                        <td>
                                            {shop_and_learn.title_link}
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to="/" className='footer_link' >
                                                {shop_and_learn.link}
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    }
                </div>
                <div className="footer_link_tr">
                    {
                        footerData.services.map((services) =>
                            <table key={services.id} className="footer_table" >
                                <thead  >
                                    <tr className='footer_link_title' style={{ color: "#1d1d1f" }} >
                                        <td>
                                            {services.title_link}
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to="/" className='footer_link' >
                                                {services.link}
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    }
                    {
                        footerData.account.map((account) =>
                            <table key={account.id} className="footer_table" >
                                <thead >
                                    <tr className='footer_link_title' style={{ color: "#1d1d1f" }} >
                                        <td>
                                            {account.title_link}
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to="/" className='footer_link' >
                                                {account.link}
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    }
                </div>
                <div className="footer_link_tr">
                    {
                        footerData.apple_store.map((apple_store) =>
                            <table key={apple_store.id} className="footer_table" >
                                <thead  >
                                    <tr className='footer_link_title' style={{ color: "#1d1d1f" }} >
                                        <td>
                                            {apple_store.title_link}
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to="/" className='footer_link' >
                                                {apple_store.link}
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    }
                </div>
                <div className="footer_link_tr">
                    {
                        footerData.for_business.map((for_business) =>
                            <table key={for_business.id} className="footer_table" >
                                <thead >
                                    <tr className='footer_link_title' style={{ color: "#1d1d1f" }} >
                                        <td>
                                            {for_business.title_link}
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to="/" className='footer_link' >
                                                {for_business.link}
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    }
                    {
                        footerData.for_education.map((for_education) =>
                            <table key={for_education.id} className="footer_table" >
                                <thead >
                                    <tr className='footer_link_title' style={{ color: "#1d1d1f" }} >
                                        <td>
                                            {for_education.title_link}
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to="/" className='footer_link' >
                                                {for_education.link}
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    }
                    {
                        footerData.for_healthcare.map((for_healthcare) =>
                            <table key={for_healthcare.id} className="footer_table" >
                                <thead  >
                                    <tr className='footer_link_title' style={{ color: "#1d1d1f" }} >
                                        <td>
                                            {for_healthcare.title_link}
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to="/" className='footer_link' >
                                                {for_healthcare.link}
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    }
                    {
                        footerData.for_government.map((for_government) =>
                            <table key={for_government.id} className="footer_table" >
                                <thead  >
                                    <tr className='footer_link_title' style={{ color: "#1d1d1f" }} >
                                        <td>
                                            {for_government.title_link}
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to="/" className='footer_link' >
                                                {for_government.link}
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    }


                </div>
                <div className="footer_link_tr">
                    {
                        footerData.apple_values.map((apple_values) =>
                            <table key={apple_values.id} className="footer_table" >
                                <thead  >
                                    <tr className='footer_link_title' style={{ color: "#1d1d1f" }} >
                                        <td>
                                            {apple_values.title_link}
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to="/" className='footer_link' >
                                                {apple_values.link}
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    }
                    {
                        footerData.about_apple.map((about_apple) =>
                            <table key={about_apple.id} className="footer_table" >
                                <thead  >
                                    <tr className='footer_link_title' style={{ color: "#1d1d1f" }} >
                                        <td>
                                            {about_apple.title_link}
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to="/" className='footer_link' >
                                                {about_apple.link}
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    }

                </div>
            </div>
            {/* Accordion */}
            <div className="footer_accordion">
                <div className={classes.root}>

                    <Accordion style={{ backgroundColor: "#f5f5f7", boxShadow: "none", borderBottom: "#6e6e73" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}><b style={{ color: "#1d1d1f" , fontSize: "12px" }} >Shop and Learn</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='accard' >
                                {
                                    footerData.shop_and_learn.map((el, index) =>
                                        <React.Fragment key={index} >
                                            <Link to={"/"} className='accardion_links' > {el.link} </Link>
                                        </React.Fragment>
                                    )
                                }
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ backgroundColor: "#f5f5f7", boxShadow: "none", borderBottom: "#6e6e73" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontSize: "12px !important" }}
                        >
                            <Typography className={classes.heading}><b style={{ color: "#1d1d1f" , fontSize: "12px" }} >Services</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='accard' >
                                {
                                    footerData.services.map((el, index) =>
                                        <React.Fragment key={index} >
                                            <Link to={"/"} className='accardion_links' > {el.link} </Link>
                                        </React.Fragment>
                                    )
                                }
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ backgroundColor: "#f5f5f7", boxShadow: "none", borderBottom: "#6e6e73" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontSize: "12px !important" }}
                        >
                            <Typography className={classes.heading}><b style={{ color: "#1d1d1f" , fontSize: "12px" }} >Account</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='accard' >
                                {
                                    footerData.account.map((el, index) =>
                                        <React.Fragment key={index} >
                                            <Link to={"/"} className='accardion_links' > {el.link} </Link>
                                        </React.Fragment>
                                    )
                                }
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ backgroundColor: "#f5f5f7", boxShadow: "none", borderBottom: "#6e6e73" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontSize: "12px !important" }}
                        >
                            <Typography className={classes.heading}><b style={{ color: "#1d1d1f" , fontSize: "12px" }} >Apple Store</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='accard' >
                                {
                                    footerData.apple_store.map((el, index) =>
                                        <React.Fragment key={index} >
                                            <Link to={"/"} className='accardion_links' > {el.link} </Link>
                                        </React.Fragment>
                                    )
                                }
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ backgroundColor: "#f5f5f7", boxShadow: "none", borderBottom: "#6e6e73" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontSize: "12px !important" }}
                        >
                            <Typography className={classes.heading}><b style={{ color: "#1d1d1f" , fontSize: "12px" }} >For Business</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='accard' >
                                {
                                    footerData.for_business.map((el, index) =>
                                        <React.Fragment key={index} >
                                            <Link to={"/"} className='accardion_links' > {el.link} </Link>
                                        </React.Fragment>
                                    )
                                }
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ backgroundColor: "#f5f5f7", boxShadow: "none", borderBottom: "#6e6e73" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontSize: "12px !important" }}
                        >
                            <Typography className={classes.heading}><b style={{ color: "#1d1d1f" , fontSize: "12px" }} >For Education</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='accard' >
                                {
                                    footerData.for_education.map((el, index) =>
                                        <React.Fragment key={index} >
                                            <Link to={"/"} className='accardion_links' > {el.link} </Link>
                                        </React.Fragment>
                                    )
                                }
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ backgroundColor: "#f5f5f7", boxShadow: "none", borderBottom: "#6e6e73" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontSize: "12px !important" }}
                        >
                            <Typography className={classes.heading}><b style={{ color: "#1d1d1f" , fontSize: "12px" }} >For Healthcare</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='accard' >
                                {
                                    footerData.for_healthcare.map((el, index) =>
                                        <React.Fragment key={index} >
                                            <Link to={"/"} className='accardion_links' > {el.link} </Link>
                                        </React.Fragment>
                                    )
                                }
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ backgroundColor: "#f5f5f7", boxShadow: "none", borderBottom: "#6e6e73" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontSize: "12px !important" }}
                        >
                            <Typography className={classes.heading}><b style={{ color: "#1d1d1f" , fontSize: "12px" }} >For Healthcare</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='accard' >
                                {
                                    footerData.for_healthcare.map((el, index) =>
                                        <React.Fragment key={index} >
                                            <Link to={"/"} className='accardion_links' > {el.link} </Link>
                                        </React.Fragment>
                                    )
                                }
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ backgroundColor: "#f5f5f7", boxShadow: "none", borderBottom: "#6e6e73" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontSize: "12px !important" }}
                        >
                            <Typography className={classes.heading}><b style={{ color: "#1d1d1f" , fontSize: "12px" }} >For Government</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='accard' >
                                {
                                    footerData.for_government.map((el, index) =>
                                        <React.Fragment key={index} >
                                            <Link to={"/"} className='accardion_links' > {el.link} </Link>
                                        </React.Fragment>
                                    )
                                }
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ backgroundColor: "#f5f5f7", boxShadow: "none", borderBottom: "#6e6e73" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontSize: "12px !important" }}
                        >
                            <Typography className={classes.heading}><b style={{ color: "#1d1d1f" , fontSize: "12px" }} >Apple Values</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='accard' >
                                {
                                    footerData.apple_values.map((el, index) =>
                                        <React.Fragment key={index} >
                                            <Link to={"/"} className='accardion_links' > {el.link} </Link>
                                        </React.Fragment>
                                    )
                                }
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ backgroundColor: "#f5f5f7", boxShadow: "none", borderBottom: "#6e6e73" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ fontSize: "12px !important" }}
                        >
                            <Typography className={classes.heading}><b style={{ color: "#1d1d1f" , fontSize: "12px" }} >About Apple</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='accard' >
                                {
                                    footerData.about_apple.map((el, index) =>
                                        <React.Fragment key={index} >
                                            <Link to={"/"} className='accardion_links' > {el.link} </Link>
                                        </React.Fragment>
                                    )
                                }
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
            </div>
            <div className="wrapper_footer wrapper_footer_link "></div>
            <div className="wrapper_footer wrapper_footer_bottom">
                <p>More ways to shop: <Link to="/" className='footer_link_text_bottom'  >Find an Apple Store</Link>  or <Link to="/" className='footer_link_text_bottom' >other retailer</Link> near you. Or call 1-800-MY-APPLE.</p>
                <hr />
                <div className="wrapper_footer_bottom_child">
                    <div className=" footer_bottom_child">
                        <p>Copyright © 2022 Apple Inc. All rights reserved.</p>
                        <ul className='footer_collection_item footer_collection_item_bottom' >
                            <li > <Link to="/" className='footer_link' >Privacy Policy </Link></li> |
                            <li ><Link to="/" className='footer_link' >Terms of Use</Link></li> |
                            <li ><Link to="/" className='footer_link' >Sales and Refunds</Link>  </li> |
                            <li ><Link to="/" className='footer_link' > Legal</Link></li>  |
                            <li ><Link to="/" className='footer_link' > Site Map</Link> </li>
                        </ul>
                    </div>
                    <Link to="/www" className='footer_link footer_link_right  ' >United States</Link>
                </div>
                {/* <div className="finish"></div> */}
            </div>
        </footer>
    )
}

export default Footer