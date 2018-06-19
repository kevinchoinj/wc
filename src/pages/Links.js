import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from '../actions/pages';
import classNames from 'classnames';

class Links extends React.Component {
  componentDidMount() {
		this.props.pagesActions.toggleTriangle(true);
		this.props.pagesActions.setPage('links');
  }
  render(){
		const {
			currentPage
		} = this.props;

		const titleName = classNames({
      'links_title': true,
      'links_title--display': currentPage === 'links',
		});
		const containerName = classNames({
      'links_container': true,
      'links_container--display': currentPage === 'links',
		});

    const linkValues = [
      {title: 'Clips Store', link: 'https://www.clips4sale.com/studio/84041/ashley-wildcat-productions'},
			{title: 'Twitter', link: 'https://twitter.com/ItsAshleyWC'},
			{title: 'Facebook', link: 'https://www.facebook.com/ashley.wildcat.14'},
			{title: 'Amazon Wishlist', link: 'http://www.spoilthewildcat.com'},
			{title: 'Payment', link: 'http://Cash.me/$ashleywildcat'},
			{title: 'Paypal', link: 'http://paypal.me/ashleywildcat'},
			{title: 'VIP Subscription', link: 'https://ashley.knockoutcats.com/subscribe/'},
			{title: 'Fitness Coach', link: 'http://ashleywildcat.isagenix.com/?sc_lang=en-US'},
			{title: 'I love tributes and my PayPal email is ashleywildcat@outlook.com', link: 'http://paypal.me/ashleywildcat'},
    ]
    return(
			<div>
				<div className={titleName}>
					Links
				</div>
      	<div className={containerName}>
					{linkValues.map((value, index)=>(
						<div key={index} className="links_row">
							<div className="links_line"/>
							<a
								className="links_link"
								href={value.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								{value.title}
							</a>
						</div>
					))}
				</div>
			</div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    currentPage: state.pages.currentPage,
  }),
  (dispatch) => ({pagesActions: bindActionCreators(pagesActions, dispatch)}),
)(Links);
