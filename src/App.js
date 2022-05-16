import './scss/_typography-section.scss';
import './scss/app.scss';

function App() {
  return (

    <>
      <div className='typography-section'>
        <div className='container'>
          <div className='typography-box'>
            <h3 className='typography-title'>Headers</h3>
            <div className='typography-wrap row'>
              <div className='grid-md-6'>
                <h1 className='heading heading-light'>H1 HEADER IVYMODE LIGHT</h1>
                <code>&lt;h1 class="heading heading-light"&gt;&lt;/h1&gt;</code>
              </div>
              <div className='grid-md-6'>
                <h1 className='heading'>H1 HEADER IVYMODE REGULAR</h1>
                <code>&lt;h1 class="heading"&gt;&lt;/h1&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <h2 className='heading heading-light'>H2 HEADER IVYMODE LIGHT</h2>
                <code>&lt;h2 class="heading heading-light"&gt;&lt;/h2&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <h2 className='heading'>H2 HEADER IVYMODE REGULAR</h2>
                <code>&lt;h2 class="heading"&gt;&lt;/h2&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <h3 className='heading heading-light'>H3 HEADER IVYMODE LIGHT</h3>
                <code>&lt;h3 class="heading heading-light"&gt;&lt;/h3&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <h3 className='heading'>H3 HEADER IVYMODE REGULAR</h3>
                <code>&lt;h3 class="heading"&gt;&lt;/h3&gt;</code>
              </div>
            </div>
          </div>

          <div className='typography-box'>
            <h3 className='typography-title'>Sub-Headers</h3>
            <div className='typography-wrap row'>
              <div className='grid-md-6'>
                <h3 className='italic'>H3 Sub-header Italic</h3>
                <code>&lt;h3 class="italic"&gt;&lt;/h3&gt;</code>
              </div>
              <div className='grid-md-6'>
                <h3 className='light'>H3  Sub-header Light</h3>
                <code>&lt;h3 class="light"&gt;&lt;/h3&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <h4 className='italic'>H4 Sub-header Italic</h4>
                <code>&lt;h4 class="italic"&gt;&lt;/h4&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <h4 className='light'>H4 Sub-header Light</h4>
                <code>&lt;h4 class="light"&gt;&lt;/h4&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <h5 className='italic'>H5 Sub-header Italic</h5>
                <code>&lt;h5 class="italic"&gt;&lt;/h5&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <h5 className='light'>H5 Sub-header Light</h5>
                <code>&lt;h5 class="light"&gt;&lt;/h5&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <h6 className='italic'>H6 Sub-header Italic</h6>
                <code>&lt;h6 class="italic"&gt;&lt;/h6&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <h6 className='light'>H6 Sub-header Light</h6>
                <code>&lt;h6 class="light"&gt;&lt;/h6&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <h6 className='italic bold'>H6 Sub-header Italic Mobile</h6>
                <code>&lt;h6 class="italic bold"&gt;&lt;/h6&gt;</code>
              </div>
            </div>
          </div>

          <div className='typography-box'>
            <h3 className='typography-title'>Body</h3>
            <div className='typography-wrap row'>
              <div className='grid-md-6'>
                <p className='text-xx-lg'>XX-Large Body</p>
                <code>&lt;p class="text-xx-lg"&gt;&lt;/p&gt;</code>
              </div>
              <div className='grid-md-6'>
                <p className='text-xx-lg light'>XX-Large Body Light</p>
                <code>&lt;p class="text-xx-lg light"&gt;&lt;/p&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <p className='text-x-lg'>X-Large Body</p>
                <code>&lt;p class="text-xx-lg"&gt;&lt;/p&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <p className='text-x-lg light'>X-Large Body Light</p>
                <code>&lt;p class="text-xx-lg light"&gt;&lt;/p&gt;</code>
              </div>
              <div className='grid-md-4 mt-2'>
                <p className='text-lg'>Large Body</p>
                <code>&lt;p class="text-lg"&gt;&lt;/p&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <p className='text-lg light'>Large Body Light</p>
                <code>&lt;p class="text-xx-lg light"&gt;&lt;/p&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <p className='text-lg italic'>Large Body Italic</p>
                <code>&lt;p class="text-xx-lg italic"&gt;&lt;/p&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <p className='text-lg light italic'>Large Body Light Italic</p>
                <code>&lt;p class="text-xx-lg light italic"&gt;&lt;/p&gt;</code>
              </div>
              <div className='grid-md-4 mt-2'>
                <p className='text-md'>Medium Body</p>
                <code>&lt;p class="text-md"&gt;&lt;/p&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <p className='text-md light'>Medium Body Light</p>
                <code>&lt;p class="text-md light"&gt;&lt;/p&gt;</code>
              </div>
              <div className='grid-md-4 mt-2'>
                <p className='text-sm'>Small Body</p>
                <code>&lt;p class="text-sm"&gt;&lt;/p&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <p className='text-sm italic'>Small Italic Body</p>
                <code>&lt;p class="text-sm italic"&gt;&lt;/p&gt;</code>
              </div>
              <div className='grid-md-4 mt-2'>
                <p className='text-x-sm'>X-Small Body</p>
                <code>&lt;p class="text-x-sm"&gt;&lt;/p&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <p className='text-x-sm light'>X-Small Body Light</p>
                <code>&lt;p class="text-x-sm light"&gt;&lt;/p&gt;</code>
              </div>
              <div className='grid-md-4 mt-2'>
                <p className='text-xx-sm'>XX-Small Body</p>
                <code>&lt;p class="text-xx-sm"&gt;&lt;/p&gt;</code>
              </div>
              <div className='grid-md-6 mt-2'>
                <p className='text-xx-sm light'>XX-Small Body Light</p>
                <code>&lt;p class="text-xx-sm light"&gt;&lt;/p&gt;</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
