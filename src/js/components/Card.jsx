const Card = () => {

    return (
<div className="col-md-3">
  <div className="card text-center">
<img className="image-fluid" src="https://gnrgindustrial.com/images/blog/1.jpg" alt="" />
  <div className="card-body">
    <h5 className="card-title">Card Title</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
  <div className="card-footer text-body-secondary">
    <button className="btn btn-primary">Find out More!</button>
  </div>
</div>
</div>
    );
};

export default Card;