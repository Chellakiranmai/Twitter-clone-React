import React from 'react'

export default function Rightbar() {
  return (
    <div>
      <div className="tweet">
          <img className="tweet__author-logo" src="image 5.jpeg" />
          <div className="tweet__main">
            <div className="tweet__header">
              <div className="tweet__author-name">
                try
              </div>
              <div className="tweet__author-slug">
                @tyr
              </div>
              <div className="tweet__publish-time">
                38m
              </div>
            </div>
            <div className="tweet__content">
              Thank you
            </div>
          </div>
        </div>
      
      <div className="layout__right-sidebar-container">
        <div className="layout__right-sidebar">
          <div className="trends-for-you">
            <div className="trends-for-you__block">
              <div className="trends-for-you__heading">
                Trends for you
              </div>
            </div>
            <div className="trends-for-you__block">
              <div className="trends-for-you__meta-information">
                Trending in Germany
              </div>
              <div className="trends-for-you__trend-name">
                #iPhone12
              </div>
              <div className="trends-for-you__meta-information">
                155k Tweets
              </div>
            </div>
            <div className="trends-for-you__block">
              <div className="trends-for-you__meta-information">
                Trending in Germany
              </div>
              <div className="trends-for-you__trend-name">
                #AmazonPrimeDay
              </div>
            </div>
            <div className="trends-for-you__block">
              <div className="trends-for-you__meta-information">
                Trending - Trending
              </div>
              <div className="trends-for-you__trend-name">
                #autos
              </div>
              <div className="trends-for-you__meta-information">
                2,800 Tweets
              </div>
            </div>
          </div>
          <div className="who-to-follow">
            <div className="who-to-follow__block">
              <div className="who-to-follow__heading">
                Who to follow
              </div>
            </div>
            <div className="who-to-follow__block">
              <img
                className="who-to-follow__author-logo"
                src="image 6.jpeg"
              />
              <div className="who-to-follow__content">
                <div>
                  <div className="who-to-follow__author-name">
                    abc(& abc)
                  </div>
                  <div className="who-to-follow__author-slug">
                    @abc
                  </div>
                </div>
                <div className="who-to-follow__button">
                  Follow
                </div>
              </div>
            </div>
            <div className="who-to-follow__block">
              <img
                className="who-to-follow__author-logo"
                src="image 5.jpeg"
              />
              <div className="who-to-follow__content">
                <div>
                  <div className="who-to-follow__author-name">
                    cde
                  </div>
                  <div className="who-to-follow__author-slug">
                    @cde
                  </div>
                </div>
                <div className="who-to-follow__button">
                  Follow
                </div>
              </div>
            </div>

            <div className="who-to-follow__block">
              <img
                className="who-to-follow__author-logo"
                src="image 4.jpeg"
              />
              <div className="who-to-follow__content">
                <div>
                  <div className="who-to-follow__author-name">
                    fgh
                  </div>
                  <div className="who-to-follow__author-slug">
                    @fgh
                  </div>
                </div>
                <div className="who-to-follow__button">
                  Follow
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  )
}
