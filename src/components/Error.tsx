const Error = () => {
  return (
    <div className="container text-center d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="row">
        <div className="col">
          <h1 className="display-1 text-danger">404</h1>
          <h2 className="text-secondary">Page Not Found</h2>
          <p className="lead">The page you're looking for doesn't exist.</p>
          <a href="/" className="btn btn-primary mt-3">Go to Home</a>
        </div>
      </div>
    </div>
  );
}

export default Error;
