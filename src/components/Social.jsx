import React from 'react'
import { GITHUB_URL, LINKEDIN_URL, X_URL } from '../constants'

const SocialShare = [
  { iconName: 'fa fa-linkedin', link: LINKEDIN_URL },
  { iconName: 'fa fa-github', link: GITHUB_URL },
  { iconName: 'fa fa-twitter', link: X_URL },
]

const Social = () => {
  return (
    <ul className='social list-unstyled pt-1 mb-5'>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target='_blank' rel='noreferrer'>
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social
