import {createArrayPosts} from './pictures.js'
import {renderPhotos} from './create-cart.js'
import './editor.js'

const Data = createArrayPosts()
renderPhotos(Data)

