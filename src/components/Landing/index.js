import React from 'react';
import './landing.css';

const Landing = () => (
  <div className="landing">

    <div class="component">
    <div className="hello-message">Bienvenue dans notre Bibliotheque ! Bonne lecture et bonne journée !</div>

				<ul class="align">

					<li>
						<figure class='book'>


							<ul class='hardcover_front'>
								<li>
									<div class="coverDesign custom">
										<span class="ribbon">FUN</span>
										<h1>Custom</h1>
										<p>Book Cover</p>
									</div>
								</li>
								<li></li>
							</ul>


							<ul class='page'>
								<li></li>
								<li>
									<a class="btn" href="/home">Voir les livres</a>
								</li>
								<li></li>
								<li></li>
								<li></li>
							</ul>


							<ul class='hardcover_back'>
								<li></li>
								<li></li>
							</ul>
							<ul class='book_spine'>
								<li></li>
								<li></li>
							</ul>

						</figure>
					</li>
				</ul>
			</div>


  </div>
);

export default Landing;
