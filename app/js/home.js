import { $$ } from 'blingblingjs'
import { animation, typography, button } from '~/css'

$$('button').on('click touchend', e =>
  console.log('multiple listeners with blingblingjs!', e))