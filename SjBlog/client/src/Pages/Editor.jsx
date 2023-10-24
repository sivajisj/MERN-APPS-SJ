import React from 'react'
import ReactQuill from 'react-quill'
import {modules, formats} from '../components/Features'
import 'react-quill/dist/quill.snow.css'

const Editor = ({value,onChange}) => {
  return (
    <ReactQuill  theme={'snow'}
    value={value}  onChange={onChange}
     modules={modules}  formats={formats}/>
  )
}

export default Editor