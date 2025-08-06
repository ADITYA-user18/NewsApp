import React, { Component } from 'react';
import NewsItem from './NewsItem';
import '../custom.css'
import Spinner from './Spinner';


export class News extends Component {
  articles = []

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    };
  }

 async componentDidMount() {
  let url = `https://newsdata.io/api/1/latest?apikey=pub_fa1d065a385f476d974196ab9cca6fec`
  try {
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();

   
    console.log("Full response:", parsedData);

    
    if (Array.isArray(parsedData.results)) {
      this.setState({ articles: parsedData.results });
      this.setState({loading:false})
      
    } else {
      this.setState({ articles: [] }); 
      console.error("API returned non-array for articles:", parsedData.results);
      this.setState({loading:false})
    }

  } catch (error) {
    console.error("Error fetching articles:", error);
    this.setState({ articles: [] }); 
  }
}



  render() {
    return (
      <div className="container ">
        <h1 className="mt-5 fw-bold fst-italic heading-hover text-center">Latest News - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row mt-1">
          {this.state.articles.slice(0,9).map((element) => (
            <div className="col-md-4 mt-5" key={element.article_id}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={element.description ? element.description.slice(0, 300) : ""}
                imageurl={element.image_url}
                newsurl={element.link}
                darkMode={this.props.darkMode}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News;
