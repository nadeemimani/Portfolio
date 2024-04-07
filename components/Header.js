import Link from 'next/link';

export default function Header({ name }) {
  return (
  <header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner">

		<!-- Nav -->
		
		<div class="nav-wrapper mixblendfg absolute" id="navoverlay">
			<button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
				<img class="icon-hamburger" src="images/icon-hamburger.svg" alt="" aria-hidden="true"></img>
				<img class="icon-close" src="images/icon-close.svg" alt="" aria-hidden="true"></img> 
			  <span class="visually-hidden">Menu</span>
			</button>
			<nav class="primary-navigation" id="primary-navigation">
				<ul aria-label="Primary" role="list" class="nav-list clear">
					<li class="design-nav-toggle list-flex clear" aria-controls="design-navigation">
						<div class="logoicon designlogo"></div>
						<p>Design</p>
					</li>
					<li class="marketing-nav-toggle list-flex clear" aria-controls="marketing-navigation" nohighlight>
						<div class="logoicon marketinglogo"></div>
						<p>Market</p>
					</li>
					<li class="development-nav-toggle list-flex clear" aria-controls="development-navigation" nohighlight>
						<div class="logoicon developmentlogo"></div>
						<p>Develop</p>
					</li>
					<li class="consulting-nav-toggle list-flex clear" aria-controls="consulting-navigation" nohighlight>
						<div class="logoicon consultinglogo"></div>
						<p>Consult</p>
					</li>
					<li class="portfolio-nav-toggle list-flex clear" aria-controls="portfolio-navigation" nohighlight>
						<div class="logoicon portfoliologo"></div>
						<p>Portfolio</p>
					</li>
					<li class="resume-nav-toggle list-flex clear" aria-controls="resume-navigation" nohighlight>
						<div class="logoicon resumelogo"></div>
						<p>Resume</p>
					</li>											
					<li>|</li>
					<li class="linkedin-nav-toggle list-flex">
						<a href="https://www.linkedin.com/in/nadeem-imani-688883130/" target="_blank">					
							<div class="logoicon linkedin"></div>
							<p>LinkedIn</p>
						</a>
					</li>
					<li>|</li>
					<li class="contact-nav-toggle list-flex">					
						<div class="logoicon contactlogo"></div>
						<p>Contact</p>
					</li>
				</ul>
			</nav>
		</div>
		
		<!-- background -->
    
		<!-- <div class="darkoverlay"></div> -->
		<div class="overlay z3 mixblendfg2" id="bgoverlay"></div>
		<div class="z5" id="">
			<img src="/images/background/L2Person.png"  class="background-image2 absolute" alt="">
		</div>
		<div class="z2" id="bgoverlay2">
			<img src="/images/background/L1Background.png"  class="js-fullheight background-image absolute" alt="">
		</div>
		<!-- Content -->

		<div class="container">

		<!-- Name Title -->
		
			<div class="about-title display-tc">
				<h1 class="mixblendfg z4 animate-box"  data-animate-effect="fadeIn">
					<span>Nadeem Imani</span>
				</h1>
				<h3 class="mixblendfg z6 animate-box"  data-animate-effect="fadeIn">
					<span>Over 15 years of professional experience working with virtually all types of industries and businesses. Always striving to be the best version of myself.</span>
				</h3>
			</div>

			<!-- Information -->

			<div id="information animate-box absolute" class="information" data-animate-effect="fadeIn">
				<div class="programs">
						<div class="program-header" aria-label="design">
							<div class="program-nav-wrapper" id="design-navigation" aria-expanded="true" >
								<!-- <nav class="z6a animate-box flexendrow absolute">
									<img class="galleryimage" src="/images/gallery/icons/UI/pngwing.com.png" alt="">
								</nav> -->
								<nav class="flexend z5 design-navigation mixblendfg animate-box containerbg" >
									<div class="services">
										<div class="gallerysection">
										<ul class="gallery box360 absolute gallery1">
											<li id="grid-1-2" class="card gallery-grid-1">
											</li>
											<li id="grid-2-2" class="card gallery-grid-2">
											</li>
											<li id="grid-3-2" class="card gallery-grid-3">
											</li>
											<li id="grid-4-2" class="card gallery-grid-4">
											</li>
											<li id="grid-5-2" class="card gallery-grid-5">
											</li>
											<li id="grid-6-2" class="card gallery-grid-6">
											</li>
											<li id="grid-7-2" class="card gallery-grid-7">
											</li>
											<li id="grid-8-2" class="card gallery-grid-8">
											</li>
											<li id="grid-9-2" class="card gallery-grid-9">
											</li>
											<li id="grid-10-2" class="card gallery-grid-10">
											</li>
											<li id="grid-11-2" class="card gallery-grid-11">
											</li>
											<li id="grid-12-2" class="card gallery-grid-12">
											</li>
											<li id="grid-13-2" class="card gallery-grid-13">
											</li>
											<li id="grid-14-2" class="card gallery-grid-14">
											</li>
											<li id="grid-15-2" class="card gallery-grid-15">
											</li>
										</ul>
										<ul class="gallery">
											<li id="grid-1" class="card gallery-grid-1">
												<a href="https://www.google.ca" target="_blank">
													<div class="card-image">
														<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
													</div>
													<div class="card-text">Loblaws</div>
												</a>
											</li>
											<li id="grid-2" class="card gallery-grid-2">
												<a href="https://www.google.ca" target="_blank">
													<div class="card-image">
														<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
													</div>
													<div class="card-text">Loblaws</div>
												</a>
											</li>
											<li id="grid-3" class="card gallery-grid-3">
												<a href="https://www.google.ca" target="_blank">
													<div class="card-image">
														<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
													</div>
													<div class="card-text">Loblaws</div>
												</a>
											</li>
											<li id="grid-4" class="card gallery-grid-4">
												<a href="https://www.google.ca" target="_blank">
													<div class="card-image">
														<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
													</div>
													<div class="card-text">Loblaws</div>
												</a>
											</li>
											<li id="grid-5" class="card gallery-grid-5">
												<a href="https://www.google.ca" target="_blank">
													<div class="card-image">
														<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
													</div>
													<div class="card-text">Loblaws</div>
												</a>
											</li>
											<li id="grid-6" class="card gallery-grid-6">
												<a href="https://www.google.ca" target="_blank">
													<div class="card-image">
														<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
													</div>
													<div class="card-text">Loblaws</div>
												</a>
											</li>
											<li id="grid-7" class="card gallery-grid-7">
												<a href="https://www.google.ca" target="_blank">
													<div class="card-image">
														<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
													</div>
													<div class="card-text">Loblaws</div>
												</a>
											</li>
											<li id="grid-8" class="card gallery-grid-8">
												<a href="https://www.google.ca" target="_blank">
													<div class="card-image">
														<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
													</div>
													<div class="card-text">Loblaws</div>
												</a>
											</li>
											<li id="grid-9" class="card gallery-grid-9">
												<a href="https://www.google.ca" target="_blank">
													<div class="card-image">
														<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
													</div>
													<div class="card-text">Loblaws</div>
												</a>
											</li>
											<li id="grid-10" class="card gallery-grid-10">
												<a href="https://www.google.ca" target="_blank">
													<div class="card-image">
														<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
													</div>
													<div class="card-text">Loblaws</div>
												</a>
											</li>
											<li id="grid-11" class="card gallery-grid-11">
												<a href="https://www.google.ca" target="_blank">
													<div class="card-image">
														<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
													</div>
													<div class="card-text">Loblaws</div>
												</a>
											</li>
											<li id="grid-12" class="card gallery-grid-12">
												<a href="https://www.google.ca" target="_blank">
													<div class="card-image">
														<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
													</div>
													<div class="card-text">Loblaws</div>
												</a>
											</li>
											<li id="grid-13" class="card gallery-grid-13">
												<a href="https://www.google.ca" target="_blank">
													<div class="card-image">
														<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
													</div>
													<div class="card-text">Loblaws</div>
												</a>
											</li>
											<li id="grid-14" class="card gallery-grid-14">
												<a href="https://www.google.ca" target="_blank">
													<div class="card-image">
														<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
													</div>
													<div class="card-text">Loblaws</div>
												</a>
											</li>
											<li id="grid-15" class="card gallery-grid-15">
												<a href="https://www.google.ca" target="_blank">
													<div class="card-image">
														<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
													</div>
													<div class="card-text">Loblaws</div>
												</a>
											</li>
										</ul>
										</div>
										<ul aria-label="Design" role="list" class="design-list clear listmargin">
										<li class="list-flex clear animate-box">					
											<div class="logoicon photoshop"></div>
											<p>Photoshop</p>
										</li>
										<li class="list-flex clear animate-box">					
											<div class="logoicon lightroom"></div>
											<p>Lightroom</p>
										</li>
										<li class="list-flex clear animate-box">					
											<div class="logoicon indesign"></div>
											<p>Indesign</p>
										</li>
										<li class="list-flex clear animate-box">					
											<div class="logoicon illustrator"></div>
											<p>Illustrator</p>
										</li>
										<li class="list-flex clear animate-box">					
											<div class="logoicon aftereffects"></div>
											<p>After Effects</p>
										</li>
										<li class="list-flex clear animate-box">					
											<div class="logoicon premierepro"></div>
											<p>Premiere Pro</p>
										</li>
										<li class="list-flex clear animate-box">					
											<div class="logoicon acrobat"></div>
											<p>Acrobat</p>
										</li>
										</ul>
									</div>
									<div class="servicesgallery"></div>
								</nav>

							</div>
						</div>
						<div class="program-header" aria-label="marketing">
							<div class="program-nav-wrapper">
								<nav class="marketing-navigation" id="marketing-navigation" aria-expanded="false" data-visible>
									<ul aria-label="Marketing" role="list" class="marketing-list clear listmargin">
										<li class="mixblendfg list-flex clear animate-box ">					
											<h2>Ex</h2>
											<p>Excel</p>
										</li>
										<li class="mixblendfg list-flex clear animate-box ">					
											<h2>Ms</h2>
											<p>Word</p>
										</li>
										<li class="mixblendfg list-flex clear animate-box ">					
											<h2>Ou</h2>
											<p>Outlook</p>
										</li>
										<li class="mixblendfg list-flex clear animate-box ">					
											<h2>G</h2>
											<p>Google</p>
										</li>
										<li class="mixblendfg list-flex clear animate-box ">					
											<h2>Fb</h2>
											<p>Facebook</p>
										</li>
									</ul>
									<ul class="z2 cards clear mixblendfg animate-box">
										<li class="card">
											<img class="card-image" src="/images/gallery/WavyMerch/logo.png" alt="">
											<div class="card-text">SEO</div>
										</li>
										<li class="card">
											<img class="card-image" src="" alt="">
											<div class="card-text">D2C</div>
										</li>
										<li class="card">
											<img class="card-image" src="" alt="">
											<div class="card-text">B2B</div>
										</li>
										<li class="card">
											<img class="card-image" src="" alt="">
											<div class="card-text">Social Media</div>
										</li>
									</ul>
								</nav>
							</div>
						</div>
						<div class="program-header" aria-label="development">
							<div class="program-nav-wrapper">
								<nav class="development-navigation" id="development-navigation" aria-expanded="false" data-visible>
									<ul aria-label="Development" role="list" class="development-list clear listmargin">
										<li class="mixblendfg list-flex clear animate-box ">					
											<h2>H</h2>
											<p>HTML</p>
										</li>
										<li class="mixblendfg list-flex clear animate-box ">					
											<h2>C</h2>
											<p>CSS</p>
										</li>
										<li class="mixblendfg list-flex clear animate-box ">					
											<h2>Js</h2>
											<p>Javascript</p>
										</li>
										<li class="mixblendfg list-flex clear animate-box ">					
											<h2>Sw</h2>
											<p>Swift</p>
										</li>
										<li class="mixblendfg list-flex clear animate-box ">					
											<h2>Vs</h2>
											<p>VS Code</p>
										</li>
										<li class="mixblendfg list-flex clear animate-box ">					
											<h2>Fg</h2>
											<p>Figma</p>
										</li>
									</ul>
									<ul class="z2 cards clear mixblendfg animate-box ">
										<li class="card">
											<img class="card-image" src="/images/gallery/WavyMerch/logo.png" alt="">
											<div class="card-text">E-Commerce</div>
										</li>
										<li class="card">
											<img class="card-image" src="" alt="">
											<div class="card-text">Websites</div>
										</li>
										<li class="card">
											<img class="card-image" src="" alt="">
											<div class="card-text">Web Apps</div>
										</li>
										<li class="card">
											<img class="card-image" src="" alt="">
											<div class="card-text">UX/UI</div>
										</li>
									</ul>
								</nav>
							</div>
						</div>
						<div class="program-header" aria-label="consulting">
						<div class="program-nav-wrapper">
							<nav class="consulting-navigation" id="consulting-navigation" aria-expanded="false" data-visible>
								<ul aria-label="Consulting" role="list" class="consulting-list clear listmargin">
									<li class="mixblendfg list-flex clear animate-box ">					
										<h2>D</h2>
										<p>Design</p>
									</li>
									<li class="mixblendfg list-flex clear animate-box ">					
										<h2>M</h2>
										<p>Marketing</p>
									</li>
									<li class="mixblendfg list-flex clear animate-box ">					
										<h2>D</h2>
										<p>Develop</p>
									</li>
								</ul>
								<ul class="z2 cards clear mixblendfg animate-box ">
									<li class="card">
										<img class="card-image" src="" alt="">
										<div class="card-text">Direction</div>
									</li>
									<li class="card">
										<img class="card-image" src="" alt="">
										<div class="card-text">Branding</div>
									</li>
									<li class="card">
										<img class="card-image" src="" alt="">
										<div class="card-text">Management</div>
									</li>
									<li class="card">
										<img class="card-image" src="" alt="">
										<div class="card-text">Auditing</div>
									</li>
								</ul>
							</nav>
						</div>
						</div>
				</div>

				<!-- ------ -->

				<div class="z6 mixblendfg portfolio portfolio-navigation animate-box containerbg" id="portfolio-navigation" aria-expanded="false" data-visible>
					<div class="galleryselect" >
						<div class="gallerysection">
							<ul class="gallery box360 absolute gallery1">
								<li id="grid-1-2" class="card gallery-grid-1">
								</li>
								<li id="grid-2-2" class="card gallery-grid-2">
								</li>
								<li id="grid-3-2" class="card gallery-grid-3">
								</li>
								<li id="grid-4-2" class="card gallery-grid-4">
								</li>
								<li id="grid-5-2" class="card gallery-grid-5">
								</li>
								<li id="grid-6-2" class="card gallery-grid-6">
								</li>
								<li id="grid-7-2" class="card gallery-grid-7">
								</li>
								<li id="grid-8-2" class="card gallery-grid-8">
								</li>
								<li id="grid-9-2" class="card gallery-grid-9">
								</li>
								<li id="grid-10-2" class="card gallery-grid-10">
								</li>
								<li id="grid-11-2" class="card gallery-grid-11">
								</li>
								<li id="grid-12-2" class="card gallery-grid-12">
								</li>
							</ul>
							<ul class="gallery ">
								<li id="grid-1" class="card gallery-grid-1">
									<a href="https://www.google.ca" target="_blank">
										<div class="card-image">
											<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
										</div>
										<div class="card-text">Loblaws</div>
									</a>
								</li>
								<li id="grid-2" class="card gallery-grid-2">
									<a href="https://www.google.ca" target="_blank">
										<div class="card-image">
											<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
										</div>
										<div class="card-text">Loblaws</div>
									</a>
								</li>
								<li id="grid-3" class="card gallery-grid-3">
									<a href="https://www.google.ca" target="_blank">
										<div class="card-image">
											<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
										</div>
										<div class="card-text">Loblaws</div>
									</a>
								</li>
								<li id="grid-4" class="card gallery-grid-4">
									<a href="https://www.google.ca" target="_blank">
										<div class="card-image">
											<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
										</div>
										<div class="card-text">Loblaws</div>
									</a>
								</li>
								<li id="grid-5" class="card gallery-grid-5">
									<a href="https://www.google.ca" target="_blank">
										<div class="card-image">
											<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
										</div>
										<div class="card-text">Loblaws</div>
									</a>
								</li>
								<li id="grid-6" class="card gallery-grid-6">
									<a href="https://www.google.ca" target="_blank">
										<div class="card-image">
											<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
										</div>
										<div class="card-text">Loblaws</div>
									</a>
								</li>
								<li id="grid-7" class="card gallery-grid-7">
									<a href="https://www.google.ca" target="_blank">
										<div class="card-image">
											<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
										</div>
										<div class="card-text">Loblaws</div>
									</a>
								</li>
								<li id="grid-8" class="card gallery-grid-8">
									<a href="https://www.google.ca" target="_blank">
										<div class="card-image">
											<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
										</div>
										<div class="card-text">Loblaws</div>
									</a>
								</li>
								<li id="grid-9" class="card gallery-grid-9">
									<a href="https://www.google.ca" target="_blank">
										<div class="card-image">
											<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
										</div>
										<div class="card-text">Loblaws</div>
									</a>
								</li>
								<li id="grid-10" class="card gallery-grid-10">
									<a href="https://www.google.ca" target="_blank">
										<div class="card-image">
											<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
										</div>
										<div class="card-text">Loblaws</div>
									</a>
								</li>
								<li id="grid-11" class="card gallery-grid-11">
									<a href="https://www.google.ca" target="_blank">
										<div class="card-image">
											<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
										</div>
										<div class="card-text">Loblaws</div>
									</a>
								</li>
								<li id="grid-12" class="card gallery-grid-12">
									<a href="https://www.google.ca" target="_blank">
										<div class="card-image">
											<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><style>.cls-1{fill:#fff;}</style></defs><path id="Logo" class="img" d="M932.2,124.71c-18.51,4.69-28.17,9.7-28.17,9.7,0,0-56.35,21.76-56.35,123.43,1.03,103.86,152.32,664.74,152.32,664.74,0,0-.12,2.95-.88,4.41-2.03,3.92-5.28,3.53-5.28,3.53H17.39s-14,1.07-15.85-2.64c-3.93-7.89,.88-26.45,.88-26.45l43.14-228.34s2.09-9.27,5.28-11.46c8.83-6.06,25.53-9.7,25.53-9.7,0,0,88.08-16.48,211.31-62.59,152.86-57.2,281.95-115.37,354.83-325.32,23.01-66.27,51-151.69,111.82-178.09,112.38-48.78,177.86,28.21,177.86,28.21,0,0,10.17,8.01,0,10.58ZM459.39,453.55s-71.52,62.82-164.65,102.27c-105.22,44.57-219.24,85.52-219.24,85.52,0,0-14.9,5.06-19.37,1.76-4.8-3.54-3.55-8.33,6.16-55.54,14.17-68.91,40.5-185.14,40.5-185.14,0,0,38.63-207.69,107.42-289.17,12.85-15.22,31.91-25.78,47.55-31.74,93.67-35.69,152.32,18.51,152.32,18.51,0,0,20.1,14.9,20.25,20.28,.12,4.37-18.49,7.93-18.49,7.93,0,0-60.77,14.02-58.11,98.74,2.35,75.04,60.75,141.94,60.75,141.94,0,0,12.87,15.21,28.18,29.09,28.21,25.59,35.19,26.42,36.1,32.62,.93,6.34-19.37,22.92-19.37,22.92Z"/></svg>
										</div>
										<div class="card-text">Loblaws</div>
									</a>
								</li>
							</ul>
						</div>
						<div class="gallery-info">
								<div>
								<div class="timeline-heading">
									<h3 class="timeline-title">Desktop Publishing</h3>
									<span class="company">Google - 2019 - Current</span>
								</div>
								<div class="timeline-body">
									<p>Far far away, behind the word mountains, far from the countries Vokaliand Consonantia, there live the blind texts.</p>
								</div>
								<div>
									<br>
									<ul>
										<li>Excel Presentations</li>
										<li>Infographics</li>
										<li>Excel Presentations</li>
										<li>Excel Presentations</li>
									</ul>
								</div>						
								</div>
						</div>
					</div>
					<div class="gallerydisplay">
						<div class="gallerydisplayimage">
							
						</div>	
					</div>
				</div>

				<!-- ------ -->

				<div class="flexend z6 mixblendfg resume-navigation animate-box containerbg" id="resume-navigation" aria-expanded="false" data-visible>
					<nav>
						<ul class="resume-title clear">
							<li>
								<h1>Core Competencies & Experience</h1>
							</li>
							<li>
								<p>Core Competencies & Experience</p>
							</li>
						</ul>
					</nav>
					<div class="comp-res">
						<div class="resume-box">
							<div class="resume box row" id="resume">
								<ul class="timeline">
										<li class="timeline-heading">
											<div><h3>Work Experience</h3></div>
										</li>
										<li class="timeline-inverted">
											<div class="timeline-badge"><i class="icon-suitcase"></i></div>
											<div class="timeline-panel">
												<div class="timeline-heading">
													<h3 class="timeline-title">Desktop Publishing</h3>
													<span class="company">Google - 2019 - Current</span>
												</div>
												<div class="timeline-body">
													<!-- <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> -->
												</div>
											</div>
										</li>
										<li class="timeline-inverted">
											<div class="timeline-badge"><i class="icon-suitcase"></i></div>
											<div class="timeline-panel">
												<div class="timeline-heading">
													<h3 class="timeline-title">Creative Director<br>& Designer</h3>
													<span class="company">Wavy Buds Cannabis- 2019 - Current</span>
												</div>
												<div class="timeline-body">
													<!-- <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> -->
												</div>
											</div>
										</li>
										<li class="timeline-inverted">
											<div class="timeline-badge"><i class="icon-suitcase"></i></div>
											<div class="timeline-panel">
												<div class="timeline-heading">
													<h3 class="timeline-title">E-Commerce Developer</h3>
													<span class="company">Surma Supermarket - 2021 - 2022</span>
												</div>
												<div class="timeline-body">
													<!-- <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> -->
												</div>
											</div>
										</li>
										<li class="timeline-inverted">
											<div class="timeline-badge"><i class="icon-suitcase"></i></div>
											<div class="timeline-panel">
												<div class="timeline-heading">
													<h3 class="timeline-title">Creative Director<br>& Product Designer</h3>
													<span class="company">Ranimart - 2019 - 2021</span>
												</div>
												<div class="timeline-body">
													<!-- <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> -->
												</div>
											</div>
										</li>
										<li class="timeline-inverted">
											<div class="timeline-badge"><i class="icon-suitcase"></i></div>
											<div class="timeline-panel">
												<div class="timeline-heading">
													<h3 class="timeline-title">Creative Director<br>& Product Designer</h3>
													<span class="company">Wavy Merch - 2016 - Current</span>
												</div>
												<div class="timeline-body">
													<!-- <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> -->
												</div>
											</div>
										</li>
										<li class="timeline-inverted">
											<div class="timeline-badge"><i class="icon-suitcase"></i></div>
											<div class="timeline-panel">
												<div class="timeline-heading">
													<h3 class="timeline-title">Freelance Designer</h3>
													<span class="company">2013 - 2019</span>
												</div>
												<div class="timeline-body">
													<!-- <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> -->
												</div>
											</div>
										</li>
										<li class="timeline-heading">
											<div><h3>Education</h3></div>
										</li>
										<br>
										<li class="timeline-inverted ">
											<div class="timeline-badge"><i class="icon-graduation-cap"></i></div>
											<div class="timeline-panel">
												<div class="timeline-heading">
													<h3 class="timeline-title">Bachelors Degree</h3>
													<span class="company">University of Toronto - 2014 - 2019<br>Computer Science</span>
												</div>
												<div class="timeline-body">
													<!-- <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> -->
												</div>
											</div>
										</li>
										<li class=" timeline-inverted">
											<div class="timeline-badge"><i class="icon-graduation-cap"></i></div>
											<div class="timeline-panel">
												<div class="timeline-heading">
													<h3 class="timeline-title">Specialist Highschool Major</h3>
													<span class="company">Marc Garneau Collegiate - 2008 - 2012<br>Desktop Publishing</span>
												</div>
												<div class="timeline-body">
													<!-- <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> -->
												</div>
											</div>
										</li>
										<br>
										<br>
										<br>

								</ul>
							</div>
							<div class="row timeline-info">
								<div>
								<div class="timeline-heading">
									<h3 class="timeline-title">Desktop Publishing</h3>
									<span class="company">Google - 2019 - Current</span>
								</div>
								<div class="timeline-body">
									<p>Far far away, behind the word mountains, far from the countries Vokaliand Consonantia, there live the blind texts.</p>
								</div>
								<div>
									<br>
									<ul>
										<li>Excel Presentations</li>
										<li>Infographics</li>
										<li>Excel Presentations</li>
										<li>Excel Presentations</li>
									</ul>
								</div>						
								</div>
							</div>
						</div>
						<div class="competencies box-h" id="competencies">
							<div id="fh5co-skills" class="animate-box" aria-label="Core Competencies">
								<div class="container block">										
									<div class="row comp-slide">
										<div class="comp-card">
												<div class="chart" data-percent="95"><span><strong>Digital<br>Design</strong>95%</span></div>
												<div class="progress-wrap">
													<h3><span class="name-left">Photoshop</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
													aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">CAD & 3DS Max</span><span class="value-right">90%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-2 progress-bar-striped active" role="progressbar"
													aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width:90%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Online Marketing</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
													aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Product Mockups</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-4 progress-bar-striped active" role="progressbar"
													aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
													</div>
													</div>
												</div>
										</div>
										<div class="comp-card">
												<div class="chart" data-percent="100"><span><strong>Print<br>Design</strong>100%</span></div>
												<div class="progress-wrap">
													<h3><span class="name-left">Illustrator</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-5 progress-bar-striped active" role="progressbar"
													aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Indesign</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-striped active" role="progressbar"
													aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Desktop Publishing</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
													aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Product Packaging</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
													aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
													</div>
													</div>
												</div>
										</div>
										<div class="comp-card">
												<div class="chart" data-percent="100"><span><strong>Photography</strong>100%</span></div>
												<div class="progress-wrap">
													<h3><span class="name-left">Lightroom</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
													aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Camera Optics</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-2 progress-bar-striped active" role="progressbar"
													aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Product Photography</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
													aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Portrait Photography</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-4 progress-bar-striped active" role="progressbar"
													aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
													</div>
													</div>
												</div>
										</div>
										<div class="comp-card">
												<div class="chart" data-percent="90"><span><strong>Videography</strong>90%</span></div>
												<div class="progress-wrap">
													<h3><span class="name-left">Premiere Pro</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-5 progress-bar-striped active" role="progressbar"
													aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">After Effects</span><span class="value-right">80%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-striped active" role="progressbar"
													aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Hardware Knowledge</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
													aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Cinematography (DOP)</span><span class="value-right">85%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
													aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width:85%">
													</div>
													</div>
												</div>
										</div>
										<div class="comp-card">
												<div class="chart" data-percent="90"><span><strong>Audio<br>Engineering</strong>90%</span></div>
												<div class="progress-wrap">
													<h3><span class="name-left">ProTools</span><span class="value-right">90%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
													aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width:90%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Tracking & Production</span><span class="value-right">90%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-2 progress-bar-striped active" role="progressbar"
													aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width:90%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Mixing & Mastering</span><span class="value-right">90%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
													aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width:90%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Vocal & Instrument</span><span class="value-right">90%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-4 progress-bar-striped active" role="progressbar"
													aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width:90%">
													</div>
													</div>
												</div>
										</div>
										<div class="comp-card">
												<div class="chart" data-percent="90"><span><strong>Web<br>Development</strong>90%</span></div>
												<div class="progress-wrap">
													<h3><span class="name-left">VS Code & Figma</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-5 progress-bar-striped active" role="progressbar"
													aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">HTML, CSS & Java</span><span class="value-right">90%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-striped active" role="progressbar"
													aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width:90%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Websites & E-Commerce</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
													aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width:85%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Web 3.0, VR & NFTs</span><span class="value-right">75%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
													aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:75%">
													</div>
													</div>
												</div>
										</div>
										<div class="comp-card">
												<div class="chart" data-percent="95"><span><strong>Marketing</strong>95%</span></div>
												<div class="progress-wrap">
													<h3><span class="name-left">Excel</span><span class="value-right">90%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
													aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width:90%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Copywriting</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-2 progress-bar-striped active" role="progressbar"
													aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width:100%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Content Creation</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
													aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Social Media</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-4 progress-bar-striped active" role="progressbar"
													aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
													</div>
													</div>
												</div>
										</div>
										<div class="comp-card">
												<div class="chart" data-percent="90"><span><strong>Consulting</strong>90%</span></div>
												<div class="progress-wrap">
													<h3><span class="name-left">Creative Direction</span><span class="value-right">95%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-5 progress-bar-striped active" role="progressbar"
													aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width:95%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Branding</span><span class="value-right">100%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-striped active" role="progressbar"
													aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Project Management</span><span class="value-right">90%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
													aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width:90%">
													</div>
													</div>
												</div>
												<div class="progress-wrap">
													<h3><span class="name-left">Creative Auditing</span><span class="value-right">90%</span></h3>
													<div class="progress">
													<div class="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
													aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width:90%">
													</div>
													</div>
												</div>
										</div>	
									</div>
								</div>
							</div>
						</div>
					</div>
					<nav class="resume-navigation-2" id="resume-navigation-2">
						<ul class="res-nav-list clear">
							<li>
								<a href="/images/Layer 685.jpg" download="">Download</a>
							</li>
						</ul>
					</nav>
					
				</div>
			</div>

			<!-- Footer -->

			<!-- <div id="fh5co-footer">
				<div class="z4 container">
					<div class="row">
						<div class="footerinline col-md-12">
							<p>&copy; 2022 All Rights Reserved. <br>Designed by <a href="http://nadeemimani.ca" target="_blank">Nadeem Imani</a></p>
						</div>
					</div>
				</div>
			</div>
		
			<div class="gototop js-top">
				<a href="#" class="js-gotop"><i class="icon-arrow-up22"></i></a>
			</div> -->

		</div>

		
	</header>
  );
}
