import React, { useState, useRef, useEffect } from 'react';
import { PrimaryLinkCss } from '../../../layout/index.css';

import {
	JoinUsSecondSectionWrapperCss,
	InfoBlockCss,
	BlocksCss,
	InfoBlockHeaderCss,
	InfoBlockTitleCss,
	InfoBlockContentCss,
	IconCss
} from './index.css';



const InfoBlock = (props) => {
	const [ show, setShow ] = useState(false);
	const childElement = useRef(null);
	const headerElement = useRef(null);
	const listElement = useRef(null);
	const expSpeed = 500;
	useEffect(() => {
		if (props.opened !== props.id && show) {
			setShow(false);
			animate(linear,drawBack,expSpeed);

		}
	});

	function linear(timeFraction) {
		return 1 - Math.sin(Math.acos(timeFraction));
	  }

	function animate(timing, draw, duration) {

		let start = performance.now();
	  
		requestAnimationFrame(function animate(time) {
		
		  let timeFraction = (time - start) / duration;
		  if (timeFraction > 1) timeFraction = 1;

		  
	  
		
		  let progress = timing(timeFraction);
	  
		  draw(progress); 
	  
		  if (timeFraction < 1) {
			requestAnimationFrame(animate);
		  }
	  
		});
	  }

	  var prev_height = childElement.current&&childElement.current.scrollHeight;
	  function drawBack(progress) {
		var diff = prev_height - (1-progress)*childElement.current.scrollHeight;
		
		listElement.current.style.height = (1-progress)*childElement.current.scrollHeight + 'px';
		prev_height =  (1-progress)*childElement.current.scrollHeight;

		if(props.opened > props.id)window.scrollBy({ top: -(diff-0.605), left: 0 });
	  }

	  function draw(progress) {
		listElement.current.style.height = (progress)*childElement.current.scrollHeight + 'px';
	
	  }

	const clickHandle = () => {

		if (props.opened === props.id) {
			
			if(show==true){
				animate(linear,drawBack,expSpeed);
				setShow(false);	
			}else{
				animate(linear,draw,expSpeed);
				setShow(true);	
			}
	

		} else {
			
			animate(linear,draw,expSpeed);
			props.setOpened(props.id);
			setShow(true);

		}
	};

	return (
		<InfoBlockCss>
			<InfoBlockHeaderCss ref={headerElement}>
				<IconCss show={show} onClick={clickHandle} />
				<InfoBlockTitleCss>
					<h3 onClick={clickHandle}>{props.title}</h3>
					<p>{props.subtitle}</p>
				</InfoBlockTitleCss>
			</InfoBlockHeaderCss>
			<InfoBlockContentCss show={show} ref={listElement} childrenHeight={childElement.current && childElement.current.scrollHeight}>
				<div ref={childElement}>{props.children}</div>
			</InfoBlockContentCss>
		</InfoBlockCss>
	);
};

const JoinUsSecondSection = () => {
	const [ opened, setOpened ] = useState(0);

	useEffect(() => {
		
		console.log(window.innerHeight);
	  });

	

	return (
		<JoinUsSecondSectionWrapperCss>
			<h4>| Openings &lt;</h4>

			<BlocksCss>
				<InfoBlock
					title="Backend Developer"
					subtitle="HTML CSS JavaScript jQuery PHP CodeIgniter MySQL"
					setOpened={setOpened}
					opened={opened}
					id={1}
				>
					<h4>| Qualifications and Skills &lt;</h4>
					<ul>
						<li>Have a good understanding of HTML / CSS;</li>
						<li>Know a bit of JavaScript (and jQuery);</li>
						<li>PHP - Must be very comfortable with it and have strong knowledge of this language;</li>
						<li>Know at least one PHP MVC Framework;</li>
						<li>
							Ideally, this framework is Laravel (a big plus, two pluses actually, we really need a
							Laravel guy), or Symfony (just a small plus);
						</li>
						<li>
							Other frameworks like CakePHP, Zend, CodeIgniter are ok (but we’ll need to train you in
							Laravel most likely);
						</li>
						<li>Have knowledge of SQL, specifically MySQL or PostgreSQL;</li>
						<li>Have experience with Version Control (Git);</li>
						<li>
							Have some experience with Bash and Unix environments (generally we use Ubuntu 16.04 or
							later).
						</li>
					</ul>
					<h4>| Responsibilities &lt;</h4>
					<ul>
						<li>Good knowledge of English language, as we are an international team;</li>
						<li>Supporting and troubleshooting existing client websites;</li>
						<li>Preparing technical documentation and test plans;</li>
						<li>Understanding the importance of maintainable code and coding standards;</li>
						<li>Ability to be a team player and work independently too;</li>
						<li>Willingness to learn and self-improve through feedback;</li>
						<li>Strong ability to communicate via visual and verbal media;</li>
						<li>Excellent time management skills;</li>
						<li>Drive to produce excellent and creative work;</li>
						<li>A can-do attitude towards work and a strong work ethic.</li>
					</ul>
					<p>
						If needed, our team can provide further training to extend your skills and the knowledge of
						mentioned technologies.
					</p>
					<h4>| Benefits &lt;</h4>
					<ul>
						<li>Remote Working</li>
						<li>Excellent Learning Opportunities</li>
						<li>Killer Letter of Recommendation</li>
						<li>Blessings and Goodwill</li>
						<li>Resume Tailoring (Only for Interns)</li>
						<li>Further Career Guidance</li>
						<li>Super Informal Dress Code </li>
					</ul>

					<PrimaryLinkCss>Apply now</PrimaryLinkCss>
				</InfoBlock>

				<InfoBlock
					title="Front-End Developer"
					subtitle="HTML CSS JavaScript jQuery PHP CodeIgniter MySQL"
					setOpened={setOpened}
					opened={opened}
					id={2}
				>
					<h4>| Qualifications and Skills &lt;</h4>
					<ul>
						<li>Have a good understanding of HTML / CSS;</li>
						<li>Know a bit of JavaScript (and jQuery);</li>
						<li>PHP - Must be very comfortable with it and have strong knowledge of this language;</li>
						<li>Know at least one PHP MVC Framework;</li>
						<li>
							Ideally, this framework is Laravel (a big plus, two pluses actually, we really need a
							Laravel guy), or Symfony (just a small plus);
						</li>
						<li>
							Other frameworks like CakePHP, Zend, CodeIgniter are ok (but we’ll need to train you in
							Laravel most likely);
						</li>
						<li>Have knowledge of SQL, specifically MySQL or PostgreSQL;</li>
						<li>Have experience with Version Control (Git);</li>
						<li>
							Have some experience with Bash and Unix environments (generally we use Ubuntu 16.04 or
							later).
						</li>
					</ul>
					<h4>| Responsibilities &lt;</h4>
					<ul>
						<li>Good knowledge of English language, as we are an international team;</li>
						<li>Supporting and troubleshooting existing client websites;</li>
						<li>Preparing technical documentation and test plans;</li>
						<li>Understanding the importance of maintainable code and coding standards;</li>
						<li>Ability to be a team player and work independently too;</li>
						<li>Willingness to learn and self-improve through feedback;</li>
						<li>Strong ability to communicate via visual and verbal media;</li>
						<li>Excellent time management skills;</li>
						<li>Drive to produce excellent and creative work;</li>
						<li>A can-do attitude towards work and a strong work ethic.</li>
					</ul>
					<p>
						If needed, our team can provide further training to extend your skills and the knowledge of
						mentioned technologies.
					</p>
					<h4>| Benefits &lt;</h4>
					<ul>
						<li>Remote Working</li>
						<li>Excellent Learning Opportunities</li>
						<li>Killer Letter of Recommendation</li>
						<li>Blessings and Goodwill</li>
						<li>Resume Tailoring (Only for Interns)</li>
						<li>Further Career Guidance</li>
						<li>Super Informal Dress Code </li>
					</ul>

					<PrimaryLinkCss>Apply now</PrimaryLinkCss>
				</InfoBlock>

				<InfoBlock
					title="Research and Development Engineer"
					subtitle="HTML CSS JavaScript jQuery PHP CodeIgniter MySQL"
					id={3}
					setOpened={setOpened}
					opened={opened}
				>
					<h4>| Qualifications and Skills &lt;</h4>
					<ul>
						<li>Have a good understanding of HTML / CSS;</li>
						<li>Know a bit of JavaScript (and jQuery);</li>
						<li>PHP - Must be very comfortable with it and have strong knowledge of this language;</li>
						<li>Know at least one PHP MVC Framework;</li>
						<li>
							Ideally, this framework is Laravel (a big plus, two pluses actually, we really need a
							Laravel guy), or Symfony (just a small plus);
						</li>
						<li>
							Other frameworks like CakePHP, Zend, CodeIgniter are ok (but we’ll need to train you in
							Laravel most likely);
						</li>
						<li>Have knowledge of SQL, specifically MySQL or PostgreSQL;</li>
						<li>Have experience with Version Control (Git);</li>
						<li>
							Have some experience with Bash and Unix environments (generally we use Ubuntu 16.04 or
							later).
						</li>
					</ul>
					<h4>| Responsibilities &lt;</h4>
					<ul>
						<li>Good knowledge of English language, as we are an international team;</li>
						<li>Supporting and troubleshooting existing client websites;</li>
						<li>Preparing technical documentation and test plans;</li>
						<li>Understanding the importance of maintainable code and coding standards;</li>
						<li>Ability to be a team player and work independently too;</li>
						<li>Willingness to learn and self-improve through feedback;</li>
						<li>Strong ability to communicate via visual and verbal media;</li>
						<li>Excellent time management skills;</li>
						<li>Drive to produce excellent and creative work;</li>
						<li>A can-do attitude towards work and a strong work ethic.</li>
					</ul>
					<p>
						If needed, our team can provide further training to extend your skills and the knowledge of
						mentioned technologies.
					</p>
					<h4>| Benefits &lt;</h4>
					<ul>
						<li>Remote Working</li>
						<li>Excellent Learning Opportunities</li>
						<li>Killer Letter of Recommendation</li>
						<li>Blessings and Goodwill</li>
						<li>Resume Tailoring (Only for Interns)</li>
						<li>Further Career Guidance</li>
						<li>Super Informal Dress Code </li>
					</ul>

					<PrimaryLinkCss>Apply now</PrimaryLinkCss>
				</InfoBlock>
			</BlocksCss>
		</JoinUsSecondSectionWrapperCss>
	);
};

export default JoinUsSecondSection;
