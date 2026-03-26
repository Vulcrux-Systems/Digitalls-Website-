export default function Header() {
  return (
    <header className="header-transparent">
      <div className="container d-flex align-items-center justify-content-between">
        <nav className="navbar navbar-expand-lg navbar-dark w-100">
          <a className="navbar-brand logo" href="/"><img loading="lazy" src="/assets/images/logo.png" alt="Logo" /></a>
          <button className="navbar-toggler first-button border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <div className="animated-icon1"><span></span><span></span><span></span></div>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mx-lg-auto navmenu">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="/services">Services</a></li> 
              <li className="nav-item"><a className="nav-link" href="/portfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
            </ul>
            <div className="d-none d-lg-block">
              <a className="axil-menuToggle ax-hamburger-trigger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>              
          </div>
        </nav>
      </div> 

      <div className="offcanvas offcanvas-end side-nav" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="side-nav-inner">
          <div className="offcanvas-header">
            <button type="button" className="btn-close ms-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="side-nav-content">
              <form action="#">
                <div className="search-bar">
                  <input type="text" placeholder="Search..." />
                  <span className="search-icon">
                    <i className="bi bi-search"></i>
                  </span>
                </div>
              </form>
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="menu-links">
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/portfolio">Portfolio</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                  </div>
                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="info-title">Contact Information</div>
                  <p>58 Howard Street #2 San Francisco, CA 94105</p>
                  <div className="info-title">We're Available 24/ 7. Call Now.</div>

                  <div className="contact-item">
                    <i className="bi bi-telephone"></i>
                    <span>1-800-552-8300</span>
                  </div>

                  <div className="contact-item">
                    <i className="bi bi-envelope"></i>
                    <span>info@example.com</span>
                  </div>

                  <div className="info-title pt-3 pb-3">Find us here</div>

                  <div className="social-links-side">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>           
        </div>
      </div> 
    </header>
  )
}
