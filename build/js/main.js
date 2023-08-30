import {createArrayPosts} from './pictures.js'
import {renderPhotos} from './create-cart.js'
import './editor.js'
//import './effects.js'

const Data = createArrayPosts()
renderPhotos(Data)

