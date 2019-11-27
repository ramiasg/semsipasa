import React, { Component } from 'react'
import cols1 from '../img/cols1.jpg'
import cols2 from '../img/cols2.jpg'
import cols3 from '../img/cols3.jpg'
import cols4 from '../img/cols4.jpg'
import cols5 from '../img/cols5.jpg'
import cols6 from '../img/cols6.jpg'
import cols7 from '../img/cols7.jpg'
import cols8 from '../img/cols8.jpg'
import cols9 from '../img/cols9.jpg'

export default class Product extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="my-5 fr fcc">
          <h1 className="text-dark rem35"><span className="red">Ş</span><span className="orange">e</span><span className="yellow">m</span><span className="green">s</span><span className="blue">i</span><span className="red">p</span><span className="orange">a</span><span className="yellow">ş</span><span className="green">a</span> منتجات</h1>
          <div class="exp">
            <p className="text-right">
              تقدم شركتنا أفضل وأجود أنواع ألبسة الأطفال بأسعار منافسة 
            </p>
          </div>
        </div>
        <div className="row">
          <div className="card prod col-md-4 m-0 p-0 cur">
              <img src={cols1} class="card-img-top image-prod h250p" alt="..." />
              <div class="caption">
                <div class="blur"></div>
                <div class="caption-text">
                  <h1>Şemsipaşa</h1>
                  <p>لألبسة الأطفال</p>
                </div>
              </div>
          </div>

          <div className="card prod col-md-4 m-0 p-0 cur">
              <img src={cols2} class="card-img-top image-prod h250p" alt="..." />
              <div class="caption">
                <div class="blur"></div>
                <div class="caption-text">
                  <h1>Şemsipaşa</h1>
                  <p>لألبسة الأطفال</p>
                </div>
              </div>
          </div>

          <div className="card prod col-md-4 m-0 p-0 cur">
              <img src={cols3} class="card-img-top image-prod h250p" alt="..." />
              <div class="caption">
                <div class="blur"></div>
                <div class="caption-text">
                  <h1>Şemsipaşa</h1>
                  <p>لألبسة الأطفال</p>
                </div>
              </div>
          </div>

          <div className="card prod col-md-4 m-0 p-0 cur">
              <img src={cols4} class="card-img-top image-prod h250p" alt="..." />
              <div class="caption">
                <div class="blur"></div>
                <div class="caption-text">
                  <h1>Şemsipaşa</h1>
                  <p>لألبسة الأطفال</p>
                </div>
              </div>
          </div>

          <div className="card prod col-md-4 m-0 p-0 cur">
              <img src={cols5} class="card-img-top image-prod h250p" alt="..." />
              <div class="caption">
                <div class="blur"></div>
                <div class="caption-text">
                  <h1>Şemsipaşa</h1>
                  <p>لألبسة الأطفال</p>
                </div>
              </div>
          </div>

          <div className="card prod col-md-4 m-0 p-0 cur">
              <img src={cols6} class="card-img-top image-prod h250p" alt="..." />
              <div class="caption">
                <div class="blur"></div>
                <div class="caption-text">
                  <h1>Şemsipaşa</h1>
                  <p>لألبسة الأطفال</p>
                </div>
              </div>
          </div>

          <div className="card prod col-md-4 m-0 p-0 cur">
              <img src={cols7} class="card-img-top image-prod h250p" alt="..." />
              <div class="caption">
                <div class="blur"></div>
                <div class="caption-text">
                  <h1>Şemsipaşa</h1>
                  <p>لألبسة الأطفال</p>
                </div>
              </div>
          </div>

          <div className="card prod col-md-4 m-0 p-0 cur">
              <img src={cols8} class="card-img-top image-prod h250p" alt="..." />
              <div class="caption">
                <div class="blur"></div>
                <div class="caption-text">
                  <h1>Şemsipaşa</h1>
                  <p>لألبسة الأطفال</p>
                </div>
              </div>
          </div>

          <div className="card prod col-md-4 m-0 p-0 cur">
              <img src={cols9} class="card-img-top image-prod h250p" alt="..." />
              <div class="caption">
                <div class="blur"></div>
                <div class="caption-text">
                  <h1>Şemsipaşa</h1>
                  <p>لألبسة الأطفال</p>
                </div>
              </div>
          </div>
        
        </div>
      </div>
    )
  }
}
