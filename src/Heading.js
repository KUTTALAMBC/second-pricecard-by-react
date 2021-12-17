

export default function Heading(props) {
  return (
    
      <div class="col-lg-3 col-md-6">
        <div class="card text-center card-shadow on-hover border-0 mb-4">
          <div class="card-body font-14">
          <span class="badge badge-inverse p-2 position-absolute price-badge font-weight-normal">{props.data.pop}</span>
            <h5 class="mt-3 mb-1 font-weight-medium">{props.data.plan}</h5>
            <h6 class="subtitle font-weight-normal">{props.data.members}</h6>
            <div class="pricing my-3">
              <sup>$</sup>
              <span class="monthly display-5">{props.data.amountmonth}</span>
              
              <small class="monthly">/mo</small>
              
              <span class="d-block">
                Save <span class="font-weight-medium">${props.data.save}</span> a year
              </span>
            </div>
            <ul class="list-inline">
               {props.data.fed.map(obj =>{
                   return(
                    <li class="d-block py-2">{obj.a}</li>
                   )
               })}
            </ul>
            <div class="bottom-btn">
              <a
                class={props.data.color}
                href="#f1"
              >
                <span>Choose Plan</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    
  );
}
