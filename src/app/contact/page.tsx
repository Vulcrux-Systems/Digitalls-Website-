export default function Contact() {
  return (
    <>
      <section className="overflow-hidden position-relative">
        <div className="theme-gradient banner-technology h-100" style={{ background: "url('/assets/images/bg-image-3.jpg') no-repeat center center", backgroundSize: "cover" }}>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  <h1 className="pb-2 fw-bolder">Contact</h1>
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-shape-image">
          <img className="img-fluid" src="/assets/images/background-shape.svg" alt="Bg images" />
        </div>
      </section>

      <section className="service-wrap">
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 mx-auto">
              <div className="heading-content text-center">
                <div className="heading-subtitle">GET IN TOUCH</div>
                <h2 className="heading-title">How To Find Us?</h2>
                <p>I have worls-class, flexible support via live chat, email and hone. I guarantee that you’ll be able to have any issue resolved within 24 hours.</p>
              </div>  
            </div>    
            <div className="row pt-4 pb-4">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                <div className="heading-content">
                  <h2 className="heading-title fs-4 pb-2">Get a free quote now</h2>
                </div>
                <form>
                  <div className="form-floating mb-2">
                      <input type="text" className="form-control" id="floatingName" placeholder="Name" />
                      <label htmlFor="floatingName">Name</label>
                    </div>
                    <div className="form-floating mb-2">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                      <input type="text" className="form-control" id="floatingPhone" placeholder="Phone" />
                      <label htmlFor="floatingPhone">Phone</label>
                    </div>
                    <div className="form-floating mb-2">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                    <label htmlFor="floatingTextarea2">Comments</label>
                  </div>
                  <div className="form-floating mb-2 mt-3">
                    <a className="btn-theme btn-large btn-transparent" href="#">
                    <span className="button-text">Send message</span>
                    <span className="button-icon"></span>
                  </a>
                  </div>
                </form>  
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="shadow rounded-2">
                  <div className="contact-card mb-1">
                    <div className="icon-box"><i className="bi bi-telephone"></i></div>
                      <div className="contact-text">
                        <h4>Phone</h4>
                        <p>1-800-552-8300</p>
                      </div>
                  </div>
                  <div className="contact-card mb-1">
                    <div className="icon-box"><i className="bi bi-envelope"></i></div>
                      <div className="contact-text">
                        <h4>Email</h4>
                        <p>info@example.com</p>
                      </div>
                  </div>
                  <div className="contact-card mb-1">
                    <div className="icon-box"><i className="bi bi-geo-alt"></i></div>
                      <div className="contact-text">
                        <h4>Address</h4>
                        <p>58 Howard Street #2 San Francisco, CA 94105</p>
                      </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>  
        </div>  
      </section>
      <div className="map-block">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}
