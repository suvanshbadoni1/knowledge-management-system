import React, { Component,useState} from 'react';
import organogram190320 from '../images/organogram190320.jpg'
import vision from '../images/vision_and_mission.jpg'
import Box from '@material-ui/core/Box';
import {Accordion,Card,Button,Col,Image,Jumbotron} from 'react-bootstrap';
import glance from '../images/profile250321.jpg';
import aboutus from '../images/about-me-1.gif'
  function About() {
    const stylehead={alignItems:'center',textAlign:'center' , fontFamily:'bolder',fontWeight:'bold',fontSize:'2rem'}
    const styleh1 = {textAlign:'center', fontWeight:'bold', fontSize:'20px',textDecoration:'none',color:'black'}
    const styleh2 = {textAlign:'center',fontSize:'20px',fontFamily:'bolder'    ,fontWeight:'bold',alignItems:'center' }
    const styleh3={fontWeight:'bold', fontSize:18 ,alignItems:'center',textAlign:'center',paddingTop:20}
    const stylepara={paddingLeft:'30px', paddingRight:'30px'}
    const stylebox={ width: '8rem', height: '5rem', borderRadius:'2rem',paddingTop:'10px', position: 'center',
    fontSize:18 , fontStyle:'bolder',    fontFamily:'bolder',    backgroundColor:'#a6edab',     cursor:'pointer' }
    const boh= {textAlign:'center' ,fontSize:12}
    const vi=<div style={{paddingLeft:'30px', paddingRight:'30px'}}>
       <div style={stylehead}>Vision</div>
<div style={stylepara}><p>To be global leader in integrated energy business through sustainable growth, knowledge excellence and exemplary governance practices.</p></div>
<div style={styleh1}>Mission <br/>World Class</div> 
<div>
   <li> Dedicated to excellence by leveraging competitive advantages in R&D and technology with involved people.
    </li><li>Imbibe high standards of business ethics and organizational values.
    </li><li>Abiding commitment to safety, health and environment to enrich quality of community life.
    </li><li>Foster a culture of trust, openness and mutual concern to make working a stimulating and challenging experience for our people.
    </li><li>Strive for customer delight through quality products and services.
    </li>
<div style={styleh3}>Integrated In Energy Business</div>

    <li>Focus on domestic and international oil and gas exploration and production business opportunities.
    </li><li>Provide value linkages in other sectors of energy business.
    </li><li>Create growth opportunities and maximize shareholder value.
    </li>
    <div style={styleh3}>
Dominant Indian Leadership
</div>
    <li>Retain dominant position in Indian petroleum sector and enhance India's energy availability.</li>
</div>
    </div>


    const aboutourstory=<div>
<div style={stylehead}>
Our Growth Story 
</div>
<p dir="ltr">ONGC was set up under the visionary leadership of Pandit Jawahar Lal Nehru. Pandit Nehru reposed faith in Shri Keshav Dev Malviya who laid the foundation of ONGC in the form of Oil and Gas division, under Geological Survey of India, in 1955. A few months later, it was converted into an Oil and Natural Gas Directorate. The Directorate was converted into Commission and christened Oil &amp; Natural Gas Commission on 14th August 1956.</p>

<p dir="ltr">"Not only had India..set up her own machinery for oil exploration and exploitation... an efficient oil commission had been built where a large number of bright young men and women had been trained and they were doing good work" said Pandit JawaharLal Nehru, India's first Prime Minister to Lord Mountbatten, on ONGC in 1959.</p>

<p dir="ltr">In 1994, Oil and Natural Gas Commission was converted in to a Corporation, and in 1997 it was recognized as one of the Navratnas by the Government of India. Subsequently, it has been conferred with Maharatna status in the year 2010.</p>

<p dir="ltr">In its 60 years of illustrious journey, ONGC has crossed many a milestone to realize the energy aspirations of India. The journey of ONGC, over these years, has been a tale of conviction, courage and commitment. ONGCs’ superlative efforts have resulted in converting earlier frontier areas into new hydrocarbon provinces. From a modest beginning, ONGC has grown to be one of the largest E&amp;P companies in the world in terms of reserves and production.</p>

<p dir="ltr"><strong>The Company’s Evolution can be summarized as under:</strong></p>

<ul class="list-unstyled story-list">
	<li>1955 – Inception</li>
	<li>1958 – First Oil in Cambay</li>
	<li>1960 – Oil&nbsp; gas discovery in Gujarat</li>
	<li>1963 – Oil in Assam</li>
	<li>1965 – Concept of ONGC Videsh Operations</li>
	<li>1970 – first Offshore well</li>
	<li>1974 – Mumbai High discovered</li>
	<li>1976 – Bassein Gas field of Mumbai High</li>
	<li>1984 – GAIL formed out of ONGC</li>
	<li>1993 – ONGC a limited company</li>
	<li>1993 – Govt of India divest 2% share</li>
	<li>1994 – 2% share to employees</li>
	<li>1999 – Equity swap ONGC, IOC, GAIL</li>
	<li>2003 – Acquired Mangalore Refineries Petrochemicals Ltd from Birla Group</li>
	<li>2003 – Ist equity Oil &amp; gas from Sudan / Vietnam</li>
	<li>2004 – Govt of India divests 10%</li>
	<li>2006 – Diversification – ONGC Petro additives Ltd and ONGC Mangalore Petro Ltd</li>
	<li>2007 – ONGC Energy Centre formed</li>
	<li>2010 – Coal Bed Methane Production</li>
	<li>2013 – Oil at Kazakhstan/Mozambique</li>
	<li>2014 – Top Energy Company of India; 5<sup>th</sup>&nbsp;in Asia, 21<sup>st</sup>&nbsp;globally: Platts</li>
	<li>2015 – ONGC Energy Center receives US Patent</li>
	<li>2016 – Forbes Global: ONGC 3<sup>rd</sup>&nbsp;largest in India</li>
	<li>2018 – 51.11% stake in Hindustan Petroleum Corporation Limited</li>
	<li>2019 – Invests Rs 83,000 crore in 25 projects; oil &amp; gas gain over 180 MT</li>
	<li>2019 – Bengal Basin discovered</li>
	<li>2020 – ONGC bags 7 Blocks in Bid Round IV of OALP</li>
	<li>2020 – Bengal Basin dedicated to nation</li>
</ul>

<p dir="ltr">With more than 50 years of Exploration ONGC had discovered 6 of the 7 Producing basins of India. These Oil Producing Basins are;</p>

<ul class="list-unstyled story-list">
	<li>1958 – Cambay, Gujarat</li>
	<li>1967 – Rajasthan</li>
	<li>1973 – Assam</li>
	<li>1974 – Mumbai Offshore</li>
	<li>1980 – Krishna Godavari Basin</li>
	<li>1985 – Cauvery Basin</li>
	<li>2019 – Bengal Basin</li>
</ul>

<p dir="ltr">ONGC as an integrated Oil &amp; Gas Corporate has developed in-house capability in all aspects of exploration and production business i.e., Acquisition, Processing &amp; Interpretation (API) of Seismic data, drilling, work-over and well stimulation operations, engineering &amp; construction, production, processing, refining, transportation, marketing, applied R&amp;D and training, etc.</p>

    </div>




    const re=<div style={{paddingLeft:'30px', paddingRight:'30px'}}>
                                <div>
                                <div style={styleh1}>
                                    ONGC at a Glance</div>
                                    </div>
                            <div style={styleh2}>
                                Maharatna ONGC’s Corporate Profile - The Largest Energy Company in India
                                </div>
                                <div style={styleh3}>
                                ONGC Represents India's Energy Security Through its Pioneering Efforts.
                                    </div>
                                    <div style={stylepara}>
                                    Maharatna ONGC is the largest crude oil and natural gas Company in India, contributing around 71 per cent to Indian domestic production. Crude oil is the raw material used by downstream companies like IOC, BPCL, HPCL and MRPL (Last two are subsidiaries of ONGC) to produce petroleum products like Petrol, Diesel, Kerosene, Naphtha, and Cooking Gas LPG. ONGC: Committed towards India's Energy Security
                                    ONGC has a unique distinction of being a company with in-house service capabilities in all areas of Exploration and Production of oil & gas and related oil-field services. Winner of the Best Employer award, this public sector enterprise has a dedicated team of around 28,500 professionals who toil round the clock in challenging locations.
                                    ONGC Videsh Limited, a Miniratna Schedule “A” Central Public Sector Enterprise (CPSE) of the Government of India under the administrative control of the Ministry of Petroleum & Natural Gas, is the wholly owned subsidiary and overseas arm of Oil and Natural Gas Corporation Limited (ONGC), the flagship national oil company (NOC) of India. The primary business of ONGC Videsh is to prospect for oil and gas acreages outside India, including exploration, development and production of oil and gas. ONGC Videsh owns Participating Interests in 35 oil and gas assets in 15 countries and produced about 30.3% of oil and 23.7% of oil and natural gas of India’s domestic production in 2019-20. In terms of reserves and production, ONGC Videsh is the second largest petroleum company of India, next only to its parent ONGC.
                                    ONGC subsidiary Mangalore Refinery and Petrochemicals Limited (MRPL) is a schedule ‘A’ Miniratna, Central Public Sector Enterprise (CPSE) under the Ministry of Petroleum & Natural Gas. The 15.0MMTPA (Million Metric Ton per annum) Refinery has got a versatile design with complex secondary processing units and a high flexibility to process Crudes of various API, delivering a variety of quality products. MRPL, with its parent company Oil and Natural Gas Corporation Limited (ONGC), owns and operates ONGC Mangalore Petrochemicals Limited (OMPL), a petrochemical unit capable of producing 0.905 MMTPA of Para Xylene and 0.273 MMTPA of Benzene.
                                    ONGC subsidiary HPCL is a Maharatna CPSE. HPCL has the second largest share of product pipelines in India with a pipeline network of more than 3370 kms for transportation of petroleum products and a vast marketing network consisting of 14 Zonal offices in major cities and 133 Regional Offices facilitated by a Supply & Distribution infrastructure comprising Terminals, Pipeline networks, Aviation Service Stations, LPG Bottling Plants, Inland Relay Depots & Retail Outlets, Lube and LPG Distributorships. Consistent excellent performance has been made possible by highly motivated workforce of over 9,500 employees working all over India at its various refining and marketing locations.
                                        </div>
                                        
                                        <div style={styleh3}>
                                        ONGC is one of India's Most Valuable Corporations
                                        </div>
                                        <div style={stylepara}>
                                        The market cap of ONGC is one of the best among PSUs in India. ONGC is the biggest wealth creator in the country.
                                        </div> 
                                        <div style={styleh3}>      
                                            ONGC Represents India's Energy Security through its Pioneering Efforts  
                                            </div>
                                            <div>


ONGC is the only fully–integrated oil and gas company in India, operating along the entire hydrocarbon value chain. It has single-handedly scripted India's hydrocarbon saga.
<br></br>
Top Energy Company

    <li>ONGC has discovered 7 out of the 8 oil and gas producing basins in India.</li>
    <li>This largest energy company in India has established 8.98 billion tonnes of in-place hydrocarbon reserves. It has to its credit more than 570 discoveries of oil and gas with Ultimate Reserves of 3.13 Billion Metric tonnes (BMT) of Oil Plus Oil Equivalent Gas (O+OEG) from domestic acreages.
    </li><li>It has cumulatively produced 1042 Million Metric Tonnes (MMT) of crude and 715 Billion Cubic Meters (BCM) of Natural Gas.
    </li><li>ONGC's wholly-owned subsidiary ONGC Videsh Ltd. (OVL) is the biggest Indian multinational, with 37 Oil & Gas assets in 17 countries.
    </li><li>ONGC produces over 1.26 million barrels of oil equivalent per day, contributing around 71% of India's domestic production. Of this, over 76% of crude oil produced is Light & Sweet.
    </li><li>The Company holds the largest share of hydrocarbon acreages in India (61% in PEL Areas & 81% in ML Areas).
    </li><li>ONGC possesses about 15% of the total Indian refining capacity.
    </li><li>This E&P Company has a well-integrated Hydrocarbon Value Chain structure with interests in LNG and product transportation business as well. ONGC has got 12.5% take in Petronet LNG.
    </li><li>A unique organization in world to have all operative offshore and onshore installations (555) accredited with globally recognized certifications.
    </li><li>All crudes are sweet and most (76%) are light, with sulphur percentage ranging from 0.02-0.10, API gravity range 26°- 46° and hence attract a premium in the market.
    </li><li> ONGCs performance in OALP Bid rounds: Wins two Blocks in Round 1, one Block in Round 2, seven Blocks in Round 3 and seven Blocks in Round 4.
    </li><li>Total blocks awarded to ONGC and Consortium under NELP was 130 Blocks; 116 ONGC operated and 14 as Consortium/Joint Ventures.
</li>
    <div style={styleh3}>
    Frontiers of Technology
    </div>
    <div style={stylepara}>
<li>State-of-the-art seismic data acquisition, processing and interpretation facilities
</li><li>Uses one of the Top Ten Virtual Reality Interpretation facilities in the world
</li><li>Alliances with Transocean, Schlumberger, Halliburton, Baker Hughes, IPR, Petrobras, Norsk, ENI and Shell
</li><li>One of the biggest ERP implementations in the Asia
</li><li>Eyeing Complete paperless office by 2030
    </li>
    </div>
    <div style={styleh3}>Energy Strategy 2040
    </div>
    <div style={stylepara}>
<li>2x Oil & Gas Production
</li><li>3x Revenue distributed across E&P, refining & Marketing and other business
</li><li>4x PAT with 10% contribution from non-Oil & Gas business
    </li><li>One of the biggest ERP implementations in the Asia
</li><li>5-6x Market Capitalization current levels
    </li>
    </div>
    <div style={styleh3}>Best in Class Infrastructure and Facilities 
    </div>
    <div style={stylepara}>
<li>This public sector enterprise operates with 14 seismic crews, manages 262 onshore production installations, 268 offshore installations, 69 drilling (plus 37 hired) and 54 work-over rigs (plus 25 hired), owns and operates more than 25,500 kilometers of pipeline in India, including 4,500 kilometers of sub-sea pipelines.
</li><li>ONGC has adopted Best-in-class business practices for modernization, expansion and integration of all Infocom system
    </li>
    </div>
    <div style={styleh3}>
    Corporate Governance 
    </div>
    <div>
    ONGC has taken structured initiatives towards Corporate Governance and its practices which evolve around multi-layered checks and balances to ensure transparency. Apart from the mandatory measures required to be implemented as a part of Corporate Governance, ONGC has gone the extra mile in this regard and has implemented the Whistle Blower Policy, Annual Report on working of the Audit & Ethics Committee, MCA Voluntary Guidelines on Corporate Governance, Enterprise-wide Risk Management (ERM) framework.
    </div>
    <div style={styleh3}>
    Health, Safety & Environment 
    </div>
<div>


ONGC has implemented globally recognized QHSE management systems conforming to requirements of ISO 9001, OHSAS 18001 and ISO 14001 at ONGC facilities and certified by reputed certification agencies at all its operational units. Corporate guidelines on incident reporting, investigation and monitoring of recommendations has been developed and implemented for maintaining uniformity throughout the organization in line with international practice.
<br></br>
Corporate Disaster Management Plan and guidelines have been developed for uniform disaster management all across ONGC. ONGC has also developed Occupational Health physical fitness criteria for employees deployed for offshore operations. Occupational Health module has now been populated on SAP system.
</div>
<div style={styleh3}>
Human Resources
</div>
<div>
This largest energy company has vast pool of skilled and talented professionals – the most valuable asset for the company. ONGCians dedicate themselves for the excellent performance of the company. ONGC extends several welfare benefits to the employees and their families by way of comprehensive medical care, education, housing and social security. The present workforce of the Energy Maharatna comprises of around 28,500 dedicated professionals.
</div>


                                            </div>
                            </div>;
        const stylcard={borderRadius:'3rem'}
        return (

            <div style={{paddingLeft:'5%',paddingRight:'5%'}}>
               <div style={{paddingTop:'10px',
                position: 'center',
                textAlign:'center',
                fontStyle:'bolder',
                fontFamily:'bolder'
                }}>
                  <img src={aboutus} height='200rem'/>
                   </div>
               
                <Accordion>
  <Card style={stylcard}>
    <Card.Header style={styleh1}>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <Box style={styleh1}>ONGC At a Glance   </Box>     
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0" >
      <Card.Body>
        <Col style={{alignContent:'center',textAlign:'center'}}>
        <Image src={glance} alt='Glance' height={220} width={520} rounded/>
        </Col>
        <Col style={{textAlign:'center'}}>
        {re}
        </Col></Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card style={stylcard}>
    <Card.Header style={styleh1}>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      <Box style={styleh1}>ONGC Group of Companies</Box> 
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <Col xs={6} md={4}>
      <Image src={organogram190320} alt='ONGC Group of Companies'
       height={420} width={620} rounded/>
    </Col>
           </Card.Body>
    </Accordion.Collapse>
  </Card>


  <Card style={stylcard}>
    <Card.Header style={styleh1}>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
      <Box style={styleh1}>Vision and Mission</Box> 
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body  style={{textAlign:'center'}}>
      <Col xs={6} md={4} style={{alignContent:'center',textAlign:'center'}}>
      <Image src={vision} alt='ONGC Group of Companies' height={420} width={1100} rounded/>
    </Col>
    <Col>
    <div>{vi}</div>
    </Col>
           </Card.Body>
    </Accordion.Collapse>
  </Card>


  <Card  style={stylcard}>
    <Card.Header style={styleh1}>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
      <Box style={styleh1}>Our Growth Story   </Box> 
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
    
    <Col>
    <div>{aboutourstory}</div>
    </Col>
           </Card.Body>
    </Accordion.Collapse>
  </Card>
  




  

                    </Accordion>
            </div>
        );
    }


export default About;


