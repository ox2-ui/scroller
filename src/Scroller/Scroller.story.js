import React from 'react';
import { storiesOf } from '@storybook/react';
import Scroller from './Scroller';

const style = {
  container: {
    height: '100px',
    position: 'relative',
    backgroundColor: '#e3e3e3',
  },
};

storiesOf('Scroller', module)
  .add('short', () =>
    <div style={style.container}>
      <Scroller className="color:backdrop padding:7 ">
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
      </Scroller>
    </div>,
  )
  .add('long', () =>
    <div style={style.container}>
      <Scroller className="color:backdrop padding:7">
        <div>
          {' '}Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Voluptatem nobis quia corporis
          iste rerum odio laboriosam, animi ad saepe
          praesentium nisi, eius itaque impedit, quos error
          modi doloribus, quam at accusamus repellendus
          officiis sint illo molestias deleniti! Libero,
          asperiores quos esse quia, ab eligendi beatae
          quaerat porro dignissimos aliquam obcaecati quae
          cupiditate accusantium explicabo soluta velit
          minus. Qui earum distinctio corporis? Blanditiis
          placeat ab vero esse perferendis cumque veniam
          architecto nobis, dolor quis! Alias deleniti
          adipisci, cupiditate illum doloribus quo aut
          libero voluptatem quisquam vitae facere veritatis
          illo velit pariatur error iste quasi ad dolores
          repellat itaque iure. Eius fuga repudiandae
          maiores voluptas aliquid, expedita, voluptates
          laudantium quidem officia inventore quasi magni
          delectus aut sed cum! Ullam minima, odit natus
          repellendus architecto omnis, non pariatur quo
          aliquam in, quas beatae. Laudantium assumenda, ea
          debitis. Quisquam ab natus porro soluta, repellat
          autem laboriosam necessitatibus fugiat, aperiam
          esse quos adipisci officiis alias vitae odit
          dignissimos. Rem et voluptatum labore,
          consequuntur minima officiis ut adipisci commodi
          fuga, quibusdam deleniti repellendus magnam. Esse
          explicabo excepturi voluptates qui ab laborum
          provident fuga ipsum dicta deserunt libero,
          eveniet eius officia praesentium perspiciatis
          veritatis soluta natus vitae corrupti, aperiam
          dolores illo? Iusto asperiores quaerat impedit
          ipsam id!
        </div>
      </Scroller>
    </div>,
  );
