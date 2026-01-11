import React from 'react'
import {Mail} from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <div>I'm always open to discussing new projects, creative ideas or opportunities to be a part of your vision.</div>
      <a href="mailto:sanishakayastha60@gmail.com" target='_blank' rel='noopener noreferrer' className='linkToMail'><div className='gmailLink'><Mail size={20} color="#4a7c59" className='mail'/>sanishakayastha60@gmail.com</div></a>
      <div className='contactLink'>
        <button>LinkedIn</button>
        <button>GitHub</button>
        <button>Twitter</button>
      </div>
    </div>
  )
}

export default Contact