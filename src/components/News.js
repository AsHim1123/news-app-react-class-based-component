import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  updateNews = async () => {
    this.props.setProgress(10);
    this.setState({ loading: true });
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=0cfb6ea5c0dd4165a90ebbd76a6fa7b7&page=${this.state.page}&pageSize=${this.props.pageSize}`
    ).then((res) => res.json());
    this.props.setProgress(50);
    this.setState({
      articles: data.articles,
      page: this.state.page,
      loading: false,
    });
    console.log(data);
    this.props.setProgress(100);
    document.title = `News App - ${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    }`;
  };
  async componentDidMount() {
    this.updateNews();
  }
  handlePrev = async () => {
    await this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handleNext = async () => {
    await this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">
          Top Headlines -{" "}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}
        </h2>
        {this.state.loading && <Loading />}

        <div className="row ">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.handlePrev}
            className="btn btn-primary"
          >
            &larr; Previous
          </button>
          <button
            disabled={
              !this.state.page + 1 >
              this.state.totalResults / this.props.pageSize
            }
            type="button"
            onClick={this.handleNext}
            className="btn btn-primary"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
