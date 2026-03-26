export default function Portfolio() {
  return (
    <>
      <section className="overflow-hidden position-relative">
        <div className="theme-gradient banner-technology h-100" style={{ background: "url('/assets/images/bg-image-3.jpg') no-repeat center center", backgroundSize: "cover" }}>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  <h1 className="pb-2 fw-bolder">Portfolio</h1>
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
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
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12">
              <div className="heading-content">
                <div className="heading-subtitle">case study</div>
                <h2 className="heading-title">Selected projects</h2>
              </div>  
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
              <div className="case-study">
                <div className="thumbnail">
                  <a href="#">
                    <img src="/assets/images/case-stydy-06.jpg" alt="" /></a>
                </div>
                <div className="content">
                  <p className="category">ios, design</p>
                  <h4><a href="#">Online platform and website design</a></h4>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
              <div className="case-study">
                <div className="thumbnail">
                  <a href="#">
                    <img src="/assets/images/case-stydy-06.jpg" alt="" /></a>
                </div>
                <div className="content">
                  <p className="category">ios, design</p>
                  <h4><a href="#">Online platform and website design</a></h4>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
              <div className="case-study">
                <div className="thumbnail">
                  <a href="#">
                    <img src="/assets/images/case-stydy-06.jpg" alt="" /></a>
                </div>
                <div className="content">
                  <p className="category">ios, design</p>
                  <h4><a href="#">Online platform and website design</a></h4>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
              <div className="case-study">
                <div className="thumbnail">
                  <a href="#">
                    <img src="/assets/images/case-stydy-06.jpg" alt="" /></a>
                </div>
                <div className="content">
                  <p className="category">ios, design</p>
                  <h4><a href="#">Online platform and website design</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </section>
    </>
  )
}
