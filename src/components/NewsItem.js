import React, { Component } from 'react';
import '../custom.css'

export class NewsItem extends Component {
  render() {
    const { title, description, imageurl, newsurl, darkMode } = this.props;

    return (
      <div>
        <div
          className={`card news-card ${darkMode ? 'bg-black text-white' : 'bg-white text-dark'}card-common  ${darkMode ? 'card-dark' : 'card-light'}`}
          style={{
            width: '18rem',
            height: '450px',
            border: darkMode ? '4px solid #333' : '4px solid #ccc',
            overflow: 'hidden'
          }}
        >

          <img
            src={!imageurl ? 'image.png' : imageurl}
            className="card-img-top"
            alt="news"
            style={{ height: '180px', objectFit: 'cover' }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title" style={{ fontSize: '1rem' }}>
              {title ? title.slice(0, 60) : ''}...
            </h5>
            <p
              className="card-text flex-grow-1"
              style={{ fontSize: '0.9rem', overflow: 'hidden' }}
            >
              {description ? description.slice(0, 120) : ''}...
            </p>
            <a
              href={newsurl}
              className="btn btn-sm btn-primary mt-auto"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
