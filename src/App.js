import './scss/app.scss';

function App() {
  return (
    
    <>
      <div className='container'>
        <h1>H1- Hello world</h1>
        <h2>H2 - Hello world</h2>
        <p>P tag</p>
        <button className='button primary-button'>Primary button</button>
        <br />
        <br />
        <button className='button secondary-button'>Primary button</button>
        <br/><br/>
        <a href='#'>Link</a>
        <div class="field">        
        <input type="email" className="field-input primary-input"  placeholder="Email" />
        <label>
          Email
        </label>
      </div>

        <div class="product-items quantity-wrapper quantity-wrapper-js">
  <label class="form-label">
    Quantity
  </label>
  <div class="quantity-box">
    <button class="quantity-button-js quantity-button no-js-hidden" name="minus" type="button">

  
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-minus" fill="none" viewBox="0 0 10 2">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor">
    </path></svg>

  </button>
    <input className="quantity-input quantity-input-js" type="number" name="quantity" min="1" value="1" />
    <button className="quantity-button-js quantity-button no-js-hidden" name="plus" type="button">

  
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-plus" fill="none" viewBox="0 0 10 10">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor">
    </path></svg>

  </button>
  </div>
</div>
      </div>
    </>
  );
}

export default App;
