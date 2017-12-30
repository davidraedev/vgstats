import React from "react"

require( "../less/TopNav.less" )

export default class TopNav extends React.Component {

	render() {

		let links = [
			//{ name: "Bundles", path: "bundles" },
			//{ name: "Skins", path: "skins" },
			{ name: "Heroes", path: "heroes" },
			//{ name: "In-App Purchases", path: "iaps" },
			//{ name: "Boosts", path: "boosts" },
			//{ name: "Actions", path: "actions" },
		];

		let links_html = links.map( ( link, index ) => {
			return (
				<a class="link" href={ "/" + link.path } key={ index }>{ link.name }</a>
			)
		});

		return (

			<nav id="top_menu">

				<div class="menu_left">
					<a class="link" href="/">VGSTATS</a>
				</div>

				<div class="menu_items">
					{ links_html }
				</div>

			</nav>
		)
	}
}