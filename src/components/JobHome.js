import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function JobHome() {
  return (
    <div>
      
      <div align='center ' >
      <div style={{backgroundColor:'gray'}}>
      <p >wedidsolutions@gmail.com</p>
            <h4>IF OPPURTUNITY DOESN'T KNOCK , BUILD A DOOR</h4>
            <p className='wedid'>WEDID</p>
           
      </div>
    
     <div  className='main-btn2 mt-5 ml-5 textAlign:center'>
   
        <h1 className='main-header1'>LOOKING FOR A BETTER OPPORTUNITY ? </h1>
        <p className='sub-heading'>Are you giving a service here ?are you want a job then click the button </p>   
        <Button className='clk-btn'><Link to='/postjob' style={{textDecoration:'None',color:'white '}}>Click here</Link></Button>
     </div>
     <div  className='main-btn2 mt-5 ml-5 textAlign:center'>
     <img className='pic1' src='https://5.imimg.com/data5/JG/BW/MY-64708915/jobs-in-greater-noida-1000x1000.jpg' alt='nothing inside' />
        <h1 className='main-header1'>SERVICE AT YOUR FINGER TIPS</h1>
        <p className='sub-heading'>Are you giving a service here ?are you want a job then click the button </p>   
        <Button className='clk-btn'><Link to='/joblook' style={{textDecoration:'None',color:'white '}}>Click here</Link></Button>
     </div>
     <h1 className='main-header1'>ARE YOU GIVING A RENT  </h1>
     <div  className='main-btn1 mt-5 ml-5 textAlign:center'>
     <img className='pic1' src='https://media.istockphoto.com/vectors/hand-giving-keys-ome-real-estate-property-purchase-rent-sale-buying-vector-id1192628618' alt='nothing inside'/>
        <h1 className='main-header1'>ARE YOU LOOKING FOR A RENT</h1>
        <p className='sub-heading'>Are you giving a service here ?are you want a job then click the button </p>   
        <Button className='clk-btn'><Link to='/postrent' style={{textDecoration:'None',color:'white '}}>Click here</Link></Button>
     </div>
     
     <div  className='main-btn2 mt-5 ml-5 textAlign:center'>
     <img className='pic1' src='https://media-exp1.licdn.com/dms/image/C4E12AQFVBCbzbVjy4w/article-cover_image-shrink_720_1280/0/1566212213357?e=1666828800&v=beta&t=0Z2L2Nj_sZszUnc2LJEtIblpzlGyOJ67gSXyG0TxFyc' alt='nothing inside' />
     <h1 className='main-header1'>ARE YOU LOOKING FOR A RENT</h1>
      
        <p className='sub-heading'>Are you giving a service here ?are you want a job then click the button </p>   
        <Button className='clk-btn'><Link to='/rentlook' style={{textDecoration:'None',color:'white '}}>Click here</Link></Button>
     </div>

    </div>
    </div>
  )
}

export default JobHome