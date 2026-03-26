export default function Blog() {
  return (
    <>
      <section className="overflow-hidden position-relative">
        <div className="theme-gradient banner-technology h-100" style={{ background: "url('/assets/images/bg-image-3.jpg') no-repeat center center", backgroundSize: "cover" }}>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  <h1 className="pb-2 fw-bolder">Blog</h1>
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Blog</li>
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
          <div className="row pt-3">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 mb-3">
              <div className="case-study">
                <div className="thumbnail mb-3">
                  <a href="#">
                    <img src="/assets/images/blog-list-01.jpg" alt="" /></a>
                </div>
                <div>
                  <p className="category mb-0">ios, design</p>
                  <h4><a href="#">Online platform and website design</a></h4>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 mb-3">
              <div className="case-study">
                <div className="thumbnail mb-3">
                  <a href="#">
                    <img src="/assets/images/blog-list-01.jpg" alt="" /></a>
                </div>
                <div>
                  <p className="category mb-0">ios, design</p>
                  <h4><a href="#">Online platform and website design</a></h4>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 mb-3">
              <div className="case-study">
                <div className="thumbnail mb-3">
                  <a href="#">
                    <img src="/assets/images/blog-list-01.jpg" alt="" /></a>
                </div>
                <div>
                  <p className="category mb-0">ios, design</p>
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
