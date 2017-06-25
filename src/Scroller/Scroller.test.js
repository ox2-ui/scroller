/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Scroller from './Scroller';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <Scroller>
      <div>
        Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Nihil repellendus officiis saepe
        debitis, sapiente, quas vel veniam nesciunt. Autem
        ipsa incidunt minus, eligendi consectetur id est
        vel magni harum doloremque. Voluptatibus,
        perferendis, corrupti! Autem enim molestiae
        excepturi sequi fugiat, iste sit ab. Ipsum in
        quae, nihil maxime. Facilis ducimus dolorem
        exercitationem iusto ex reprehenderit praesentium
        rem, enim quo eum accusamus molestiae laudantium
        minus recusandae nam, deleniti quam voluptatibus.
        Repellat dolorum facilis, consequuntur sint
        inventore, asperiores minima architecto earum
        laborum nisi tenetur totam error, alias blanditiis
        qui quisquam aliquid aperiam consequatur suscipit
        harum velit sed at! Repudiandae aspernatur,
        exercitationem incidunt atque.
      </div>
    </Scroller>,
  );

  expect(wrapper).toMatchSnapshot();
});
