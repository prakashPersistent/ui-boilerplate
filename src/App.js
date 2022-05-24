import './scss/_typography-section.scss';
import './scss/app.scss';
import SVGIcon from './svg/arrow-right.svg';
import ArrowDown from './svg/arrow-down.svg';
import PlusIcon from './svg/plus.svg';
import Dropdown from './Components/Dropdown';
import {data,disabled,accordionData,swatchesData, slides} from "./Constants/constants" 
import Accordion from './Components/Accordion';
import Swatches from './Components/Swatches';
import Carousel from './Components/Carousel';

function App() {
  return (

    <>
      <div className='typography-section'>
        <div className='container'>
          <div className='typography-box'>
            <h3 className='typography-head'>UI Toolkit - typography</h3>
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

          <div className='typography-box'>
            <h3 className='typography-head'>UI Toolkit - Elements</h3>
            <h3 className='typography-title'>Colour Palette</h3>
            <h3 className='typography-sub-title'>Primary Palette</h3>
            <div className='typography-wrap row'>
              <div className='grid-md-2'>
                <div className='bg-mink item-circle'></div>
                <code>&lt;div class="bg-mink"&gt;&lt;/div&gt;</code>
                <code>&lt;div class="text-mink"&gt;&lt;/div&gt;</code>
              </div>
              <div className='grid-md-2'>
                <div className='bg-tofu item-circle'></div>
                <code>&lt;div class="bg-tofu"&gt;&lt;/div&gt;</code>
                <code>&lt;div class="text-tofu"&gt;&lt;/div&gt;</code>
              </div>
              <div className='grid-md-2'>
                <div className='bg-almond item-circle'></div>
                <code>&lt;div class="bg-almond"&gt;&lt;/div&gt;</code>
                <code>&lt;div class="text-almond"&gt;&lt;/div&gt;</code>
              </div>
              <div className='grid-md-2'>
                <div className='bg-silk item-circle'></div>
                <code>&lt;div class="bg-silk"&gt;&lt;/div&gt;</code>
                <code>&lt;div class="text-silk"&gt;&lt;/div&gt;</code>
              </div>
              <div className='grid-md-2'>
                <div className='bg-oat item-circle'></div>
                <code>&lt;div class="bg-oat"&gt;&lt;/div&gt;</code>
                <code>&lt;div class="text-oat"&gt;&lt;/div&gt;</code>
              </div>
            </div>
            <h3 className='typography-sub-title mt-2'>Secondary Palette</h3>
            <div className='typography-wrap row'>
              <div className='grid-md-2'>
                <div className='bg-kelp item-circle'></div>
                <code>&lt;div class="bg-kelp"&gt;&lt;/div&gt;</code>
                <code>&lt;div class="text-kelp"&gt;&lt;/div&gt;</code>
              </div>
              <div className='grid-md-2'>
                <div className='bg-olive item-circle'></div>
                <code>&lt;div class="bg-olive"&gt;&lt;/div&gt;</code>
                <code>&lt;div class="text-olive"&gt;&lt;/div&gt;</code>
              </div>
              <div className='grid-md-2'>
                <div className='bg-barley item-circle'></div>
                <code>&lt;div class="bg-barley"&gt;&lt;/div&gt;</code>
                <code>&lt;div class="text-barley"&gt;&lt;/div&gt;</code>
              </div>
              <div className='grid-md-2'>
                <div className='bg-lilac item-circle'></div>
                <code>&lt;div class="bg-lilac"&gt;&lt;/div&gt;</code>
                <code>&lt;div class="text-lilac"&gt;&lt;/div&gt;</code>
              </div>
              <div className='grid-md-2'>
                <div className='bg-sage item-circle'></div>
                <code>&lt;div class="bg-sage"&gt;&lt;/div&gt;</code>
                <code>&lt;div class="text-sage"&gt;&lt;/div&gt;</code>
              </div>
            </div>
            <h3 className='typography-sub-title mt-2'>Monochrome</h3>
            <div className='typography-wrap row'>
              <div className='grid-md-2'>
                <div className='bg-green item-circle'></div>
                <code>&lt;div class="bg-green"&gt;&lt;/div&gt;</code>
                <code>&lt;div class="text-green"&gt;&lt;/div&gt;</code>
                <code>&lt;div class="input-success"&gt;&lt;/div&gt;</code>
              </div>
              <div className='grid-md-2'>
                <div className='bg-red item-circle'></div>
                <code>&lt;div class="bg-red"&gt;&lt;/div&gt;</code>
                <code>&lt;div class="text-red"&gt;&lt;/div&gt;</code>
                <code>&lt;div class="input-error"&gt;&lt;/div&gt;</code>
              </div>
              <div className='grid-md-2'></div>
              <div className='grid-md-2'></div>
              <div className='grid-md-2'></div>
            </div>
          </div>

          <div className='typography-box'>
            <h3 className='typography-title'>UI Elements</h3>
            <div className='typography-wrap row'>
              <div className='grid-md-3'>
                <h3 className='typography-sub-title'>Radio Buttons</h3>
                <div className='typography-control'>
                  <div className='typography-label'>Empty</div>
                  <div className='typography-area'>
                    <div className='custom-radio'>
                      <input type="radio" name="radio-name" id='custom-radio-1' />
                      <label for="custom-radio-1"></label>
                    </div>
                  </div>
                </div>
                <div className='typography-control'>
                  <div className='typography-label'>Selected</div>
                  <div className='typography-area'>
                    <div className='custom-radio'>
                      <input type="radio" name="radio-name" id='custom-radio-2' checked />
                      <label for="custom-radio-2"></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='grid-md-3'>
                <h3 className='typography-sub-title'>Form Fields</h3>
                <div className='typography-control'>
                  <div className='typography-label'>Empty</div>
                  <div className='typography-area'>
                    <input type="text" className='input-control' />
                  </div>
                </div>
                <div className='typography-control'>
                  <div className='typography-label'>Selected</div>
                  <div className='typography-area'>
                    <input type="text" className='input-control' />
                  </div>
                </div>
              </div>
              <div className='grid-md-3'>
                <h3 className='typography-sub-title'>Check box</h3>
                <div className='typography-control'>
                  <div className='typography-label'>Empty</div>
                  <div className='typography-area'>
                    <div className='custom-checkbox'>
                      <input type="checkbox" name="checkbox-name" id='custom-checkbox-1' />
                      <label for="custom-checkbox-1"></label>
                    </div>
                  </div>
                </div>
                <div className='typography-control'>
                  <div className='typography-label'>Checked</div>
                  <div className='typography-area'>
                    <div className='custom-checkbox'>
                      <input type="checkbox" name="radio-checkbox" id='custom-checkbox-2' checked />
                      <label for="custom-checkbox-2"></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='grid-md-3'>
                <h3 className='typography-sub-title'>Toggle</h3>
                <div className='typography-control'>
                  <div className='typography-label'>Left</div>
                  <div className='typography-area'>
                    <div className='custom-toggle'>
                      <input type="checkbox" name="toggle-name" id='custom-toggle-1' />
                      <label for="custom-toggle-1"></label>
                    </div>
                  </div>
                </div>
                <div className='typography-control'>
                  <div className='typography-label'>Right</div>
                  <div className='typography-area'>
                    <div className='custom-toggle'>
                      <input type="checkbox" name="radio-toggle" id='custom-toggle-2' />
                      <label for="custom-toggle-2"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='typography-box'>
            <h3 className='typography-title'>Table design</h3>
            <div className='typography-wrap row'>
              <div className='grid-md-6'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Alpha</th>
                      <th>Alpha 2</th>
                      <th>Numerical</th>
                      <th>US</th>
                      <th>UK</th>
                      <th>IT</th>
                      <th>FR</th>
                      <th>DE</th>
                      <th>AUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>XXXS</td>
                      <td>-</td>
                      <td>00</td>
                      <td>00</td>
                      <td>2</td>
                      <td>34</td>
                      <td>30</td>
                      <td>28</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>XXS</td>
                      <td>XXXS-XXS</td>
                      <td>0</td>
                      <td>0</td>
                      <td>4</td>
                      <td>36</td>
                      <td>32</td>
                      <td>30</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>XS</td>
                      <td>XXS-XS</td>
                      <td>00</td>
                      <td>2</td>
                      <td>4</td>
                      <td>38</td>
                      <td>34</td>
                      <td>32</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td className='text-left'>S</td>
                      <td>XS-S</td>
                      <td>1</td>
                      <td>4</td>
                      <td>8</td>
                      <td>40</td>
                      <td>36</td>
                      <td>34</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td className='text-right'>S-M</td>
                      <td>2</td>
                      <td>6</td>
                      <td>10</td>
                      <td>42</td>
                      <td>38</td>
                      <td>36</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td className='text-left'>L</td>
                      <td>M-L</td>
                      <td>2-3</td>
                      <td>8</td>
                      <td>12</td>
                      <td>44</td>
                      <td>40</td>
                      <td>38</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>XL</td>
                      <td className='text-right'>L-XL</td>
                      <td>3</td>
                      <td>10</td>
                      <td>14</td>
                      <td>46</td>
                      <td>42</td>
                      <td>40</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>XXL</td>
                      <td>XL-XXL</td>
                      <td>4</td>
                      <td>12</td>
                      <td>16</td>
                      <td>48</td>
                      <td>44</td>
                      <td>42</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>3X</td>
                      <td>2X-3X</td>
                      <td>5</td>
                      <td>14</td>
                      <td>18</td>
                      <td>50</td>
                      <td>46</td>
                      <td>44</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>4X</td>
                      <td>3X-4X</td>
                      <td>6</td>
                      <td>16</td>
                      <td>20</td>
                      <td>52</td>
                      <td>48</td>
                      <td>46</td>
                      <td>20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='grid-md-6'></div>
            </div>
          </div>
          <div className='typography-box'>
            <h3 className='typography-title'>Layer styles</h3>
            <div className='typography-wrap row'>
              <div className='grid-md-12'>
                <h3 className='typography-sub-title'>Shadows - for modals and text fields</h3>
                <div className='row'>
                  <div className='grid-md-3'>
                    <div className='shadow-1 item-square'></div>
                    <code>&lt;div class="shadow-1"&gt;&lt;/div&gt;</code>
                  </div>
                  <div className='grid-md-3'>
                    <div className='shadow-2 item-square'></div>
                    <code>&lt;div class="shadow-2"&gt;&lt;/div&gt;</code>
                  </div>
                  <div className='grid-md-3'>
                    <div className='shadow-3 item-square'></div>
                    <code>&lt;div class="shadow-3"&gt;&lt;/div&gt;</code>
                  </div>
                  <div className='grid-md-3'>
                    <div className='shadow-4 item-square'></div>
                    <code>&lt;div class="shadow-4"&gt;&lt;/div&gt;</code>
                  </div>
                </div>
              </div>
              <div className='grid-md-12 mt-2'>
                <h3 className='typography-sub-title'>Borders - for components and text fields</h3>
                <div className='row'>
                  <div className='grid-md-2'>
                    <div className='border item-square'></div>
                    <code>&lt;div class="border"&gt;&lt;/div&gt;</code>
                  </div>
                  <div className='grid-md-2'>
                    <div className='border-silk item-square'></div>
                    <code>&lt;div class="border-silk"&gt;&lt;/div&gt;</code>
                  </div>
                  <div className='grid-md-2'>
                    <div className='border-oat item-square'></div>
                    <code>&lt;div class="border-oat"&gt;&lt;/div&gt;</code>
                  </div>
                  <div className='grid-md-2'>
                    <div className='input-error item-square'></div>
                    <code>&lt;div class="input-error"&gt;&lt;/div&gt;</code>
                  </div>
                  <div className='grid-md-2'>
                    <div className='input-success item-square'></div>
                    <code>&lt;div class="input-success"&gt;&lt;/div&gt;</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='typography-box'>
            <h3 className='typography-title'>Buttons</h3>
            <div className='typography-wrap row'>
              <div className='grid-md-6'>
                <h3 className='typography-sub-title'>Primary CTA</h3>
                <button className='btn-primary'>Call to action</button><br></br>
                <code>&lt;button class="btn-primary"&gt;&lt;/button&gt;</code>
              </div>
              <div className='grid-md-6'>
                <h3 className='typography-sub-title'>Primary CTA Inverted</h3>
                <div className='typography-space bg-green'>
                  <button className='btn-primary-inverted'>Call to action</button><br></br>
                </div>
                <code>&lt;button class="btn-primary-inverted"&gt;&lt;/button&gt;</code>
              </div>
            </div>
            <div className='typography-wrap row mt-2'>
              <div className='grid-md-6'>
                <h3 className='typography-sub-title'>secondary CTA</h3>
                <button className='btn-secondary'>Call to action <img src={SVGIcon}></img> </button><br></br>
                <code>&lt;button class="btn-secondary"&gt;&lt;/button&gt;</code>
              </div>
              <div className='grid-md-6'>
                <h3 className='typography-sub-title'>secondary CTA Inverted</h3>
                <div className='typography-space bg-green'>
                  <button className='btn-secondary-inverted'>Call to action <img src={SVGIcon}></img> </button><br></br>
                </div>
                <code>&lt;button class="btn-secondary-inverted"&gt;&lt;/button&gt;</code>
              </div>
            </div>
          </div>

          <div className='typography-box'>
            <h3 className='typography-head'>Components</h3>
            <h3 className='typography-title'>Dropdown</h3>
            <Dropdown ArrowDown={ArrowDown} data={data || []} disabled={disabled || []}/>
            <br/>
            <Dropdown ArrowDown={ArrowDown} data={data || []} disabled={disabled || []} isDropup={true}/>
          </div>

          <div className='typography-box'>
            <h3 className='typography-title'>Accordion</h3>
            <Accordion PlusIcon={PlusIcon} data={accordionData}/> 
          </div>

          <div className='typography-box'>
            <h3 className='typography-title'>Swatches</h3>
            <Swatches data={swatchesData}/> 
          </div>

          <div className='typography-box'>
            <h3 className='typography-title' >Carousel</h3>
            <Carousel slidesPerView={3} slides={slides} title="Carousel title here"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
