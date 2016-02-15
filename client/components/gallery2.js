/* global $ */
var React = require('react');
import ImageLoader from 'react-imageloader';

var g = [{'_id':'56bf62de862cc1b20f37dca5','__v':0,'created':'2016-02-13T17:07:42.382Z','user':{'userId':'3399907588','userName':'MAF27Test','twitterName':'MAF Test'},'pict':{'title':'Chipper','url':'http://images.northrup.org/picture/xl/chipmunk/picture-of-a-baby-chipmunk.jpg'}},{'_id':'56bf78eda7927afb10abc514','__v':0,'created':'2016-02-13T18:41:49.377Z','user':{'userId':'3399907588','userName':'MAF27Test','twitterName':'MAF Test'},'pict':{'title':'Singfrosch','url':'http://thumb1.shutterstock.com/display_pic_with_logo/1256209/195025850/stock-vector-frog-plays-the-violin-vector-illustration-eps-195025850.jpg'}},{'_id':'56bf7969a7927afb10abc515','__v':0,'created':'2016-02-13T18:43:53.498Z','user':{'userId':'3399907588','userName':'MAF27Test','twitterName':'MAF Test'},'pict':{'title':'Hase','url':'http://media05.myheimat.de/2010/03/16/979745_web.jpg?1268756366'}},{'_id':'56bf99d0faa32ff7113ab332','__v':0,'created':'2016-02-13T21:02:08.513Z','user':{'userId':'3399907588','userName':'MAF27Test','twitterName':'MAF Test'},'pict':{'title':'Quark','url':'https://media.allyouneedfresh.de/productpictures/ea/large/21228/12240/1/Exquisa-Quark-Creme-Natur-02-Fett-500-g.jpg'}},{'_id':'56bf9c5cfaa32ff7113ab333','__v':0,'created':'2016-02-13T21:13:00.697Z','user':{'userId':'3399907588','userName':'MAF27Test','twitterName':'MAF Test'},'pict':{'title':'Throwaway','url':'https://upload.wikimedia.org/wikipedia/commons/7/7b/Skimmed_milk_quark_on_spoon.jpg'}},{'_id':'56bf9c98faa32ff7113ab334','__v':0,'created':'2016-02-13T21:14:00.751Z','user':{'userId':'3399907588','userName':'MAF27Test','twitterName':'MAF Test'},'pict':{'title':'Nochwas','url':'http://4.bp.blogspot.com/-TbF1zIXUeg8/T4UH-qzDr8I/AAAAAAAAEQc/-WbFkseFuFQ/s1600/Quark-ferengi-9330446-581-740.jpg'}},{'_id':'56bf9cc9faa32ff7113ab335','__v':0,'created':'2016-02-13T21:14:49.837Z','user':{'userId':'3399907588','userName':'MAF27Test','twitterName':'MAF Test'},'pict':{'title':'Spacer','url':'http://image.architonic.com/img_pro2-1/119/3101/1-6-quark-30-8e-wood-photo-credit-lavatori-b.jpg'}},{'_id':'56c0797ec95bb7be18b59b9d','__v':0,'created':'2016-02-14T12:56:30.955Z','user':{'userId':'3399907588','userName':'MAF27Test','twitterName':'MAF Test'},'pict':{'title':'Rumbl','url':'quargel'}}];

var Gallery2 = React.createClass({
	componentWillMount() {

	},
	render: function() {
		return (
			<div className='gallery'>

				{[...g].map((x, i) =>
					<figure key={i}>
							<ImageLoader src={x.pict.url}>
								<img src='images/placeholder.png'/>
							</ImageLoader>
						<figcaption>{x.pict.title}</figcaption>
				</figure>)}

			</div >
    );
	}
});

module.exports = Gallery2;
